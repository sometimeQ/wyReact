import React, { memo, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { debounce } from "@/utils/format-utils";
import { headerLinks } from "@/common/local-data";
import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from 'antd';
import { getSearchSongListAction, changeFocusStateAction } from './store/actionCreator';
import { NavLink } from 'react-router-dom';
import { 
  HeaderLeft,
  HeaderRight,
  HeaderWrapper 
} from './style'



const LWAppHeader = memo(() => {
  // redux
  const [isRedirect, setIsRedirect] = useState(false);
  // status, 记录是否显示登录框
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  // 输入框的值
  const [value, setValue] = useState('');

  // hook
  const inputRef = useRef();
  const dispatch = useDispatch();
  const { searchSongList, focusState } = useSelector((state) => ({
      // 这里根目录recuder需要去合并
      searchSongList: state.getIn(['themeHeader', 'searchSongList']),
      focusState: state.getIn(['themeHeader', 'focusState']),
  }), shallowEqual);

  useEffect(() => {
    // 获取焦点
    if (focusState) {
        inputRef.current.focus();
    } else {
        // 失去焦点
        inputRef.current.blur();
    }
  }, [focusState]);

  // 函数逻辑
  const showSelectItem = (item, index) => {
    // console.log(item);
    if (index < 3) {
      return (
        // 路由跳转、必须在外层嵌套HashRouter activeclasssname='active'  默认为active
        <NavLink to={item.link} activeclasssname='active'>
          {item.title}
          {/* 选中的显示的小图标 */}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link}>{item.title}</a>
      )
    }
  }

  // 其他逻辑
  // 函数防抖进行优化
  // 不同之处在于 oninput 事件在元素值发生变化是立即触发， onchange 在元素失去焦点时触发
  const changeInput = debounce((target) => {
    // 过滤空格
    let value = target.value.trim();
    if (value.length <  1) {  
        dispatch(changeFocusStateAction(false));
        return 
    };

    // 显示下拉框
    dispatch(changeFocusStateAction(true));
    // 发送网络请求数据，搜索列表数据
    dispatch(getSearchSongListAction(value));
  }, 400)

  // 点击当前搜索出来的歌曲项目
  const onClickCurrentSong = (itemId, item) => {
      console.log('店家啦');
  }

  /* 样式格式化校验 */
  /* 
      @content 初始文字
      @keyword 高亮文字
      @color 需要转化的颜色
  */
   const handleHighlightedWords = (content, keyWord, color) => {
    //1.判断文本中是否包含,因为indexOf对大小写敏感所以都转化成大写
    const index = content
      .toLocaleUpperCase()
      .indexOf(keyWord.toLocaleUpperCase());
    //2.定义正则 全局匹配不区分大小写
    const Rex = new RegExp(keyWord, "gi");
    //3.判断并处理
    if (index !== -1) {
      return content.replace(Rex, (text) => {
        return `<font style="color:${color}">${text}</font>`;
      });
    } else {
      return content;
    }
  };



  // 返回的jsx
  return (
      <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className='select-list'>
            {
              headerLinks.map((item, index) => {
                // console.log(item.title)
                return (
                   <div key={item.title} className="select-item">
                      {/* 绑定一个函数用于展示数据 */}
                    {showSelectItem(item, index)}
                  </div>
                  )
                })
            }
           </div>
        </HeaderLeft>
        <HeaderRight>
          <div className="search-wrapper">
            <Input
              ref={inputRef}
              className='search'
              placeholder='音乐/视频/电台/用户'
              size='large'
              prefix={<SearchOutlined />}
              onChange={(e) => setIsRedirect(false) || setValue(e.target.value)}
              // 事件在用户输入时触发
              onInput={({ target }) => changeInput(target)}
            />
            {/* 搜索的下拉框展示数据 */}
            <div className='down-slider' style={{ display: focusState ? 'block' : 'none' }}>
              {/* 搜索标题栏 */}
              <div className='search-header'>
                <span className='header-title'>搜{value}相关用户&gt;</span>
              </div>
              {/* 搜索的内容 */}
              <div className='content'>
                <div className='left'>
                  <span className='song'>单曲</span>
                </div>
                <span className='main'>
                  {
                    searchSongList && searchSongList.map((item, index) => {
                      return (
                        <div className={'item '} key={item.id} onClick={() => onClickCurrentSong(item.id, item)}>
                          <span>{item.name}</span>-{item.artists[0].name}
                        </div>
                      );
                    })
                  }
                </span>
              </div>
            </div>
          </div>
          <Button className='button-center' type='ghost'>
              创作者中心
          </Button>
          <Button className='button-login' 
            type='text'
            onClick={(e) => {
              setShowLoginDialog(!showLoginDialog);
            }}
            >
              登陆
          </Button>
        </HeaderRight>
        {/* 登录框 */}

      </div>
        {/* 底部的分割线 */}
      <div className='divider'></div>
      </HeaderWrapper>
  )
})

export default LWAppHeader