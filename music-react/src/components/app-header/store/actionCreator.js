import { getSearchSongData } from '@/network/recommend';
import * as actionTypes from './actionType';

// 搜索歌曲action
const changeSearchSongListAction = (songList) => ({
    type: actionTypes.CHANGE_SEARCH_SONG_LIST,
    songList: songList
})

// 改变焦点状态action
export const changeFocusStateAction = (state) => ({
    type: actionTypes.CHANGE_FOCUS_STATE,
    state
})

// 网络请求
export const getSearchSongListAction = (searchStr) => {
    return (dispatch) => {
        getSearchSongData(searchStr).then((res) => {
            console.log('????????? x');
            console.log(res.data.result);
            const songList = res.data && res.data.result.songs
            dispatch(changeSearchSongListAction(songList));
        })
    }
}