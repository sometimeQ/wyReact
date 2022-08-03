import { Map } from "immutable";
import * as actionTypes from './constants';

// 定义数据
const defaultState = Map({
    playListDetail: {},
    // 歌单评论
    playListComment: {},
    // 热门歌单
    relatedPlayList: {},
    // 歌单收藏者
    playListSubscribers: {},
});

// reducer
function reducer(state = defaultState, action) {
    // 传过来的是什么就是什么
    switch (action.type) {
        case actionTypes.CHANGE_PLAYLIST_DETAIL:
            return state.set('playListDetail', action.playListDetail);
        case actionTypes.CHANGE_PLAYLIST_COMMENT:
            return state.set('playListComment', action.playListComment);
        case actionTypes.CHANGE_RELATED_PLAYLIST:
            return state.set('relatedPlayList', action.relatedPlayList);
        case actionTypes.CHANGE_PLAYLIST_SUBCRIBERS:
            return state.set('playListSubscribers', action.playListSubscribers);

        default:
            return state;
    }
}

export default reducer;