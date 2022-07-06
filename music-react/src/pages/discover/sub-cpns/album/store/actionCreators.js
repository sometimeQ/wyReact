import { 
    // getAlbum, 
    getAlbumComment,
    getHotComment 
} from '@/network/album';
import { type } from '@testing-library/user-event/dist/type';
import * as actionType from './constants';


// 定义专辑action
const changeAlbumAction = (album) => ({
    type: actionType.CHANGE_AlBUM,
    album: album
});

// 定义专辑评论的action
const changeAlbumCommentAction = (albumComment) => ({
    type: actionType.CHANGE_AlBUM_COMMENT,
    // 可以省略，这样就是简写 albumComment: albumComment
    albumComment
});

// 定义热门评论的action
const changeAlbumHotAction = (albumHotComment) => ({
    type: actionType.CHANGE_AlBUM_HOT_COMMENT,
    albumHotComment
});

// 
// export const getAlbumAction = (id) => {
//     return (dispatch) => {
//         getAlbum().then(res => {
//             // 发给action保存
//             dispatch(changeAlbumAction(res.data));
//         });
//     }
// }

export const getAlbumCommentAction = (id, limit, offset) => {
    return (dispatch) => {
        getAlbumComment(id, limit, offset).then(res => {
            // console.log('getAlbumCommentAction');
            // console.log(res.data);
            // console.log('getAlbumCommentAction');
            dispatch(changeAlbumCommentAction(res.data));
            
        })
    }
}

/*
export const getAlbumHotCommentAction = (id, type) => {
    return (dispatch) => {
        getHotComment(id, type).then(res => {
            console.log('getAlbumHotCommentAction');
            console.log(res.data);
            console.log('getAlbumHotCommentAction');
            dispatch(changeAlbumHotAction(res.data));
        })
    }
}
*/

