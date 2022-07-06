import { Map } from "immutable";
import * as actionType from './constants';

// 包装下
const defaultState = Map({
    // 专辑信息
    album: {},
    // 专辑评论
    albumComment: {},
    // 热门评论
    albumHotComment: {}
});

export default function reducer (state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_AlBUM:
            return state.set('album', action.album);
        case actionType.CHANGE_AlBUM_COMMENT:
            return state.set('albumComment', action.albumComment);
        case actionType.CHANGE_AlBUM_HOT_COMMENT:
            return state.set('albumHotComment', action.albumHotComment);
        default:
            return state;
    }
}