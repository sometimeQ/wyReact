
import * as actionTypes from './constants';

import { Map } from 'immutable';


// 声明定义的数据结构
const defaultState = Map({
    // 电台分类
    cateList: {},
    // 推荐节目
    programRecommend: {},
    // 节目排行榜
    programTopList: {},
    //对应类型电台列表
    recommendType: {},
    // 优秀新电台
    excellentDjradio: {},
    // 电台排行榜
    recommendHot: {},
});


// 如果不需要用 Map 
// return {
//         ...state,
//     productList: action.payload.rows
//         }
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_DJRADIO_CATELIST:
            return state.set("cateList", action.cateList);
        case actionTypes.CHANGE_DJRADIO_PROGRAM_RECOMMEND:
            return state.set("programRecommend", action.programRecommend);
        case actionTypes.CHANGE_DJRADIO_PROGRAM_TOPLIST:
            return state.set("programTopList", action.programTopList);
        case actionTypes.CHANGE_DJRADIO_RECOMMEND_TYPE:
            return state.set("recommendType", action.recommendType);
        case actionTypes.CHANGE_DJRADIO_EXCELLENTDJRADIO:
            return state.set("excellentDjradio", action.excellentDjradio);
        case actionTypes.CHANGE_DJRADIO_RECOMMEND_HOT:
            return state.set("recommendHot", action.recommendHot);
        default:
            return state;
    }
};