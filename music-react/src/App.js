import React, { memo, Suspense } from 'react';
import Router from "./router";
import { Provider } from 'react-redux';
import store from "./store";
import { HashRouter } from 'react-router-dom';
import LWAppHeader from './components/app-header';
import LWAppFooter from './components/app-footer';
import AppPlayerBar from "@/pages/discover/sub-cpns/player/app-player-bar";
import AppLoading from './components/app-loading';
import { renderRoutes } from 'react-router-config';



const App = memo(() => {
  return (
    <Provider store={ store }>
      <HashRouter>
          <LWAppHeader></LWAppHeader>
          {/* 路由占位 */}
          {/* <Suspense fallback={AppLoading}>{renderRoutes(Router)}</Suspense> */}
          <Router></Router>
          <LWAppFooter></LWAppFooter>
          {/* 播放器 */}
          <AppPlayerBar></AppPlayerBar>
      </HashRouter>
 
    </Provider>
  )
})

export default App


