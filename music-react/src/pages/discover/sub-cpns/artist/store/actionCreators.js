import { getAristClassifyList, getTopPrtists } from "@/network/arist";
import * as actionTypes from "./constants";

// 热门歌手
const changeTopPrtistsAction = (topPrtists) => ({
    type: actionTypes.CHANGE_TOP_PRTISTS,
    topPrtists,
});

export const getTopPrtistsAction = (limit, offset) => {
    return (dispatch) => {
        getTopPrtists(limit, offset).then((res) => {
            dispatch(changeTopPrtistsAction(res.data));
        });
    };
};

// 歌手分类列表
const changeAristClassifyListAction = (aristClassifyList) => ({
    type: actionTypes.CHANGE_ARISTCLASSIFYLIST,
    aristClassifyList,
});

export const getAristClassifyListAction = (area, type, initial, limit, offset) => {
    return (dispatch) => {
        getAristClassifyList(area, type, initial, limit, offset).then((res) => {
            return dispatch(changeAristClassifyListAction(res.data));
        });
    };
};



// 歌手分类-类型
const changeAristClassifyAreaAction = (aristClassifyArea) => ({
    type: actionTypes.CHANGE_CHANGE_ARISTCLASSIFY_AREA,
    aristClassifyArea,
});

export const getAristClassifyAreaAction = (aristClassifyArea) => {
    return (dispatch) => {
        return dispatch(changeAristClassifyAreaAction(aristClassifyArea));
    };
};

// 歌手分类-类型
const changeAristClassifyTypeAction = (aristClassifyType) => ({
    type: actionTypes.CHANGE_CHANGE_ARISTCLASSIFY_TYPE,
    aristClassifyType,
});

export const getAristClassifyTypeAction = (aristClassifyType) => {
    return (dispatch) => {
        return dispatch(changeAristClassifyTypeAction(aristClassifyType));
    };
};
