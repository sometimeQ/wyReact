import React, { memo } from 'react';
import Router from "./router";
import { Provider } from 'react-redux';
import store from "./store";
import { HashRouter } from 'react-router-dom';
import LWAppHeader from './components/app-header';
import LWAppFooter from './components/app-footer';



const App = memo(() => {
  return (
    <Provider store={ store }>
      <HashRouter>
        <LWAppHeader></LWAppHeader>
        <Router></Router>
        <LWAppFooter></LWAppFooter>
      </HashRouter>
    </Provider>
  )
})

export default App


