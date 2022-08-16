
import {
    getSongDetail,
    getLyric,
    getSimiSongs,
    getSongComments,
    getSimiPlaylist,
} from "@/network/player";
import * as actionTypes from "./constants";
// 解析歌词
import { parseLyric, getRandomNumber } from "@/utils/parse-lyric";


/**
 * 
 * @param {获取歌曲详细信息} playList 
 * @returns 
 */
const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList,
});

/**
 * 
 * @param {播放模式} playMode 
 * @returns 
 */
export const changePlayModeAction = (playMode) => ({
    type: actionTypes.CHANGE_PLAYMODE,
    playMode,
});

/**
 * 
 * @param {增加歌曲到播放列表} currentSongIndex 
 * @returns 
 */
const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex,
});

/**
 * 
 * @param {改变歌曲播放模式} currentSong 
 * @returns 
 */
const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong,
});

/**
 * 
 * @param {获取歌曲的歌词} lyricList 
 * @returns 
 */
const changeLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRICE_LIST,
    lyricList,
});

/**
 * 
 * @param {获取该歌曲的热门评论} hotComment 
 * @returns 
 */
export const changeHotCommentAction = (hotComment) => ({
    type: actionTypes.CHANGE_HOTCOMMENT,
    hotComment,
});

/**
 * 获取该歌曲的所有评论
 * @param {*} comment 
 * @returns 
 */
export const changeCommentAction = (comment) => ({
    type: actionTypes.CHANGE_COMMENT,
    comment,
});

/**
 * 获取相似歌单
 * @param {*} simiPlaylist 
 * @returns 
 */
export const changeSimiPlaylistAction = (simiPlaylist) => ({
    type: actionTypes.CHANGE_SIMI_PLAY_LIST,
    simiPlaylist,
});

/**
 * 获取歌曲的相似歌曲
 * @param {*} simiSongs 
 * @returns 
 */
export const changeSimiSongsAction = (simiSongs) => ({
    type: actionTypes.CHANGE_SIMISONGS,
    simiSongs,
});

// 改变当前歌词索引
export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index,
});





/**
 * 
 * @param {歌曲id} ids 
 * @returns 
 */
export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {
        // 根据id查找playList中是否存在该歌曲
        const playList = getState().getIn(["player", "playList"]);

        console.log('康康呢 ');
        console.log(playList);

        // const playList = playLists || {};
        let songIndex = -1;
        if (playList.length > 0) {
            console.log('数组有值了');
            songIndex = playList.findIndex((song) => song.id === ids);
        }

        let song = null;
        // 是否是否找到歌曲
        if (songIndex !== -1) {
            // 找到歌曲
            dispatch(changeCurrentSongIndexAction(songIndex));
            song = playList[songIndex];
            dispatch(changePlayListAction(song));
            dispatch(getLyricActon(song.id));
        } else {
            // 没有找到歌曲

            // 请求歌曲数据
            getSongDetail(ids).then((res) => {
                const song = res.data.songs && res.data.songs[0];

                if (!song) return;
                // 将最新请求的歌曲增加到播放列表中
                const newPlayList = [...playList];
                newPlayList.push(song);

                // 更新Redux中的数据
                dispatch(changePlayListAction(newPlayList));
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
                dispatch(changeCurrentSongAction(song));

                // 请求该歌曲的歌词
                if (!song) return;
                dispatch(getLyricActon(song.id));
            });
        }
    };
};

/**
 * 
 * @param {请求该歌曲id} id 
 * @returns 
 */
export const getLyricActon = (id) => {
    return (dispatch) => {
        getLyric(id).then((res) => {
            const lyric = res.data.lrc.lyric;
            const lyricList = parseLyric(lyric);
            // 保存歌词数组 
            dispatch(changeLyricListAction(lyricList));
        });
    };
};

/**
 * 获取该歌曲的热门评论 
 * @param {*} id 
 * @param {*} limit 
 * @param {*} offset 
 * @returns 
 */
export const getHotCommentAction = (id, limit, offset) => {
    return (dispatch) => {
        getSongComments(id, limit, offset).then((res) => {
            dispatch(changeHotCommentAction(res.data));
        });
    };
};

/**
 * 获取该歌曲的所有评论
 * @param {*} id 
 * @param {*} limit 
 * @param {*} offset 
 * @returns 
 */
export const getCommentAction = (id, limit, offset) => {
    return (dispatch) => {
        getSongComments(id, limit, offset).then((res) => {
            dispatch(changeCommentAction(res.data));
        });
    };
};

/**
 * 获取相似歌单
 * @param {*} id 
 * @returns 
 */
export const getSimiPlaylistAction = (id) => {
    return (dispatch) => {
        getSimiPlaylist(id).then((res) => {
            dispatch(changeSimiPlaylistAction(res.data));
        });
    };
};

/**
 * 获取歌曲的相似歌曲
 * @param {*} id 
 * @returns 
 */
export const getSimiSongsAction = (id) => {
    return (dispatch) => {
        getSimiSongs(id).then((res) => {
            dispatch(changeSimiSongsAction(res.data.songs));
        });
    };
};

/**
 * 改变歌曲播放模式
 */ 
export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        // 获取state
        const playList = getState().getIn(["player", "playList"]);
        const playMode = getState().getIn(["player", "playMode"]);
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

        switch (playMode) {
            case 1:
                // 随机播放
                let randomIndex = getRandomNumber(playList.length);
                while (randomIndex === currentSongIndex) {
                    randomIndex = getRandomNumber(playList.length);
                }
                currentSongIndex = randomIndex;
                break;
            default:
                // 顺序播放
                currentSongIndex += tag;
                if (currentSongIndex >= playList.length) currentSongIndex = 0;
                if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
                break;
        }
        const currentSong = playList[currentSongIndex];
        dispatch(changeCurrentSongAction(currentSong));
        dispatch(changeCurrentSongIndexAction(currentSongIndex));

        // 请求该歌曲的歌词
        dispatch(getLyricActon(currentSong.id));
    };
};