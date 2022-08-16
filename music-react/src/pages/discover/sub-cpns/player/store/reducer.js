import { Map } from "immutable";
import * as actionTypes from "./constants";


// 定义参数
const defaultState = Map({
    // 播放列表
    playList: [],
    // 当前播放索引
    currentSongIndex: 0,
    // 当前播放歌曲信息
    currentSong: {},

    /*
    播放模式：
        0: 循环
        1: 随机
        2: 单曲
    */
    playMode: 0,
    // 歌词
    lyricList: [],
    // 当前歌词索引
    currentLyricIndex: 0,
    // 相似歌曲
    simiSongs: [],
    // 相似歌单
    simiPlaylist: {},
    // 热门评论
    hotComment: {},
    // 评论
    comment: {},
});


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.currentSongIndex);
        case actionTypes.CHANGE_PLAYMODE:
            return state.set("playMode", action.playMode);
        case actionTypes.CHANGE_LYRICE_LIST:
            return state.set("lyricList", action.lyricList);
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index);
        case actionTypes.CHANGE_SIMISONGS:
            return state.set("simiSongs", action.simiSongs);
        case actionTypes.CHANGE_SIMI_PLAY_LIST:
            return state.set("simiPlaylist", action.simiPlaylist);
        case actionTypes.CHANGE_HOTCOMMENT:
            return state.set("hotComment", action.hotComment);
        case actionTypes.CHANGE_COMMENT:
            return state.set("comment", action.comment);
        default:
            return state;
    }
}