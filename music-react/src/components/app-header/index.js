import React, { memo, useState } from 'react'

import { headerLinks } from "@/common/local-data";

import { SearchOutlined } from "@ant-design/icons";
import { Input, Button } from 'antd';

import { NavLink } from 'react-router-dom';
import { 
  HeaderLeft,
  HeaderRight,
  HeaderWrapper 
} from './style'


const LWAppHeader = memo(() => {

  // 函数逻辑
  const showSelectItem = (item, index) => {
    console.log(item);
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

  // status, 记录是否显示登录框
  const [showLoginDialog, setShowLoginDialog] = useState(false)

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
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
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