import React, { memo, useEffect, useState } from 'react';
import SongHeader from './sub-cpns/songs-header';
import SongsCategory from './sub-cpns/songs-category';
import SongsList from './sub-cpns/songs-list';
import { useLocation, useSearchParams } from 'react-router-dom';
import {
  changeCurrentCategoryAction,
  getSongList,
  getCategory
} from './store/actionCreators';
import {
  getQueryParam
} from  '@/utils/format-utils';
import { LWSongsWrapper } from './style';
import { useDispatch } from 'react-redux';


/**
 * 歌单
 */
const LWSongs = memo((props) => {

  // https://blog.csdn.net/qq_36946446/article/details/122617502
  // search 传递参数
  // const [searchParams, setSearchParams] = useSearchParams();

  // 获取跳转传递过来的数据, 路由传参
  const location = useLocation();
  const { pathname, search } = location;

  let param = getQueryParam(pathname + search);

  // console.log(param);

  // 是否显示分类
  const [isShow, setIsShow] = useState();
  // 分类
  const [cat, setCat] = useState(param.cat || '全部');
  // 分页
  const [nowPage, setNowPage] = useState(param.page || 1);

  // redux
  const dispatch = useDispatch();
  useEffect(() => {
    // 请求分类
    dispatch(changeCurrentCategoryAction(cat));
    // 请求分类列表数据
    dispatch(getCategory());
    // 请求歌单数据
    dispatch(getSongList(nowPage));
  }, [cat, dispatch, nowPage]);


  // 点击的右边子item点击事件
  function selectCategory(name) {
    console.log(name);
    setIsShow(!isShow);
    // 改变左上角header 显示问题
    dispatch(changeCurrentCategoryAction(name));
    // 获取歌单数据列表
    dispatch(getSongList(0));
    // 设置当前点击的cat
    setCat(name);
    // 设置当前的页数
    setNowPage(1);
    // 跳转到对应的

  }

  // 点击底部改变的页码点击事件
  function onPageChange(page, pageSize) {
    clearInterval(window.timer);
    // 加个定时器滚动动画
    window.timer = setInterval(function () {
      let step = (0 - window.pageYOffset) / 10;
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      if (window.pageYOffset === 0) {
        clearInterval(window.timer);
      }
      window.scroll(0, window.pageYOffset + step);
    }, 10);

    // 保存点击的索引
    setNowPage(page);
    // 跳转
    // props.history.push(`/discover/playlist?cat=${cat}&page=${page}`);
  }

  return (
    <LWSongsWrapper>
        {/* 头部标题信息 */}
        <SongHeader menuClick={(e) => setIsShow(!isShow)} />
        {/* 分类列表 */}
        {
        isShow && <SongsCategory selectCategory={selectCategory} />}
        {/* 歌单列表数据 */}
      <SongsList onPageChange={onPageChange} current={nowPage} />
    </LWSongsWrapper>
  )
})

export default LWSongs