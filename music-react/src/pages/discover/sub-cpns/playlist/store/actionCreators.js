import {
    CHANGE_PLAYLIST_DETAIL,
    CHANGE_PLAYLIST_COMMENT,
    CHANGE_RELATED_PLAYLIST,
    CHANGE_PLAYLIST_SUBCRIBERS
}  from './constants';
import {
    getAlbumComment,
    getPlayListDetail,
    getPlayListSubscribers,
    getRelatedPlayList,
} from '@/network/album';


// 定义action 歌单信息
const changePlayListDetailAction = (playListDetail) => ({
    type: CHANGE_PLAYLIST_DETAIL,
    playListDetail
})

// 歌单评论
const changePlayListCommentAction = (playListComment) => ({
    type: CHANGE_PLAYLIST_COMMENT,
    playListComment
});

// 相关歌单推荐
const changeRelatedPlayListAction = (relatedPlayList) => ({
    type: CHANGE_RELATED_PLAYLIST,
    relatedPlayList
});

// 相关歌单推荐
const changePlayListSubscribersAction = (playListSubscribers) => ({
    type: CHANGE_PLAYLIST_SUBCRIBERS,
    playListSubscribers,
});

// 歌单信息网络请求
export const getPlayListDetailAction = (id) => {
    return (dispatch) => {
        getPlayListDetail(id).then((res) => {
            // console.log('开始打印数据啦 ');
            // console.log(res);
            dispatch(changePlayListDetailAction(res.data));
        })
    }
}

// 歌单评论网络请求
export const getPlayListCommentAction = (id, limit, offset) => {
    return (dispatch) => {
        getAlbumComment(id, limit, offset).then((res) => {
            dispatch(changePlayListCommentAction(res.data));
        });
    }
}

// 相关歌单推荐网络请求
export const getRelatedPlayListAction = (id) => {
    return (dispatch) => {
        getRelatedPlayList(id).then(res => {
            dispatch(changeRelatedPlayListAction(res.data));
        })
    }
}

// 喜欢歌单的人网络请求
export const getPlayListSubscribersAction = (id) => {
    return (dispatch) => {
        getPlayListSubscribers(id).then(res => {
            dispatch(changePlayListSubscribersAction(res.data));
        })
    }
}