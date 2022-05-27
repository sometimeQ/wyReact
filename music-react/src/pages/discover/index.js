import React, { memo } from "react";
import { Outlet } from "react-router-dom";

import LWMenu from "./components/menu"

import { DiscoverWrapper } from "./style";

const LWDiscover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        {/* 顶部的菜单栏 */}
        <LWMenu></LWMenu>
      </div>
      {/* 路由嵌套 */}
      <Outlet></Outlet>
    </DiscoverWrapper>
  )
})

export default LWDiscover