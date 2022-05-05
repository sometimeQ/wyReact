import React, { memo } from 'react';
import Router from "./router";

import { HashRouter } from 'react-router-dom';
import LWAppHeader from './components/app-header';
import LWAppFooter from './components/app-footer';


const App = memo(() => {
  return (
    <HashRouter>
      <LWAppHeader></LWAppHeader>
      <Router></Router>
      <LWAppFooter></LWAppFooter>
    </HashRouter>
  )
})

export default App


