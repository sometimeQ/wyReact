// 暴露
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import cReducer from './reducer';


// 集成 Redux-Devtools
// console.log("当前环境：", process.env.NODE_ENV);
// https://github.com/reduxjs/redux-devtools/tree/main/extension#installation

let store;
if (process.env.NODE_ENV === 'development' && (window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__())) { // 开发环境且已安装 Redux-Devtools 插件
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;
    store = createStore(cReducer, composeEnhancers(applyMiddleware(thunk)));
} else { // 生产环境
      store = createStore(cReducer, applyMiddleware(thunk));
}


export default store;


/**
 * 总结下，需要在入口嵌套    <Provider store={ store }>，不然会报错
 * 
 * 
 */




