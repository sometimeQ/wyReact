import * as actionTypes from "./constants";
import { Map } from "immutable";

// 定义字典数据
const defaultState = Map({
    // 热门歌手
    topPrtists: {},
    // 歌手分类-列表
    aristClassifyList: {},
    // 歌手分类-索引
    aristClassifyArea: -1,
    // 歌手分类-类型索引
    aristClassifyType: -1,
});


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_PRTISTS:
            return state.set('topPrtists', action.topPrtists);
        case actionTypes.CHANGE_ARISTCLASSIFYLIST:
            return state.set('aristClassifyList', action.aristClassifyList);
        case actionTypes.CHANGE_CHANGE_ARISTCLASSIFY_AREA:
            return state.set('aristClassifyArea', action.aristClassifyArea);
        case actionTypes.CHANGE_CHANGE_ARISTCLASSIFY_TYPE:
            return state.set('aristClassifyType', action.aristClassifyType);
        default:
            return state;
    }
}