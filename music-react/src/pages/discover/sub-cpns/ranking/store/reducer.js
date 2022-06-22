//
import { Map } from "immutable";
// 引入常量
import *as actionTypes from './constants';


// 定义默认state 数据
const defaultState = Map({
    topList: [],
    playList: {},
    currentIndex: 0
});

// 暴露action
export default (state = defaultState, action) => {
    switch(action.type) {
        case actionTypes.CHANGE_TOP_LIST:
            // 腐殖是上面defaultState里面的定义的变量
            // 这里的action是 actionCreators.js 里面的定义的 changeTopListAction 里面定义的key
            return state.set('topList', action.topList);
        case actionTypes.CHANGE_CURRENT_INDEX:
            return state.set('currentIndex', action.currentIndex);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set('playList', action.playList);

        default:
            return state;
    }
}

