import { Map } from "immutable";
import * as actionTypes from './actionType';


// 定义数据
const defaultState = Map({
    searchSongList: [], // 搜索的数据
    focusState: false   // 输入框的状态
})

// 函数
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_SEARCH_SONG_LIST:
            return state.set('searchSongList', action.songList)
        case actionTypes.CHANGE_FOCUS_STATE:
            return state.set('focusState', action.state)
        default:
            return state
    }
}
