// 网络接口
import { 
    getTopBanners, 
    getHotRecommends,
    getNewAlbum,
    getTopList,
    getAllTopDetail,
    getArtistList
} from "@/network/recommend";

import {
    getRankingList
} from '@/network/ranking';

// 常量
import { 
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUM,
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING,
    CHANGE_ALL_LIST,
    CHANGE_SETTLE_SONGER
 } from "./constants";


// 接收数据、加一个括号是返回一个对象
const changeTopBannerAction = (res) => ({
    type: CHANGE_TOP_BANNERS,
    topBanners: res.data.banners,
});

// 热门推荐
const changeHotRecommendAction = (res) => ({
    type: CHANGE_HOT_RECOMMEND,
    hotRecommends: res.data.result,
});

// 新碟上架
const changeNewAlbumAction = (res) => ({
    type: CHANGE_NEW_ALBUM,
    newAlbums: res.data.monthData
});

// 飙升榜
const changeUpRankingAction = (res) => ({
    type: CHANGE_UP_RANKING,
    upRanking: res.data.playlist
});

// 新歌榜
const changeNewRankingAction = (res) => ({
    type: CHANGE_NEW_RANKING,
    newRanking: res.data.playlist
});

// 原创榜
const changeOriginRankingAction = (res) => ({
    type: CHANGE_ORIGIN_RANKING,
    originRanking: res.data.playlist
});

// 所有的榜单\自定义key
const changeAllRankingListAction = (res) => ({
    type: CHANGE_ALL_LIST,
    allRankingList: ''
});

const changeSettleSingsAction = (res) => ({
    type: CHANGE_SETTLE_SONGER,
    settleSings: res.data.artists

})



// 轮播图
export const getTopBannersAction = () => {
    return (dispatch) => {
        // 网络接口
        getTopBanners().then((res) => {
            console.log(res);
            dispatch(changeTopBannerAction(res));
        })
    }
}

// 热门推荐
export const getHotRecommendAction = (limit) => {
    return (dispatch) => {
        // 调取数据
        getHotRecommends(limit).then((res) => {
            console.log('热门推荐' + JSON.stringify(res));
            dispatch(changeHotRecommendAction(res));
        })
    }
}

// 新碟上架
export const getNewAlbumAction = (limit) => {
    return (dispatch) => {
        // 调取数据
        getNewAlbum(limit).then((res) => {
            console.log('新碟上架');
            console.log(res);
            console.log('mmmmmmmmmmmmmmmm');
            dispatch(changeNewAlbumAction(res));
        })
    }
}

// 所有的榜单
export const getAllRankingList = (limit) => {
    return (dispatch) => {
        // 调取数据
    }
}


/**
 * 榜单综合请求接口
 * 0: 飙升接口
 * 1: 新歌榜接口
 * 2: 原创接口
 */ 
export const getRankingTypeList = (idx) => {
    return (dispatch) => {
        // 调取网络请求接口
        getRankingList(idx).then(res => {
            console.log('1============== 1');
            console.log(res);
            console.log('2============== 2');
            switch (idx) {
                case 19723756:
                    dispatch(changeUpRankingAction(res));
                    break;
                case 3779629:
                    dispatch(changeNewRankingAction(res));
                    break;
                case 2884035:
                    dispatch(changeOriginRankingAction(res));
                    break;
                default:
                    break;
            }
        })
    }
}

// export const getTopListAction = (idx) => {
//     return (dispatch) => {
//         // 调取网络接口
//         getTopList(idx).then((res) => {
//             console.log('榜单接口');
//             console.log(res);
//             console.log('榜单完毕');
//             switch (idx) {
//                 case 0 :
//                     dispatch(changeUpRankingAction(res));
//                     break;
//                 case 2 :
//                     dispatch(changeNewRankingAction(res));
//                     break;
//                 case 3 :
//                     dispatch(changeOriginRankingAction(res));
//                     break;
//                 default:
//                     break;
//             }
//         })
//     }
// }

/**
 * 
 * 
 */
export const getSettleSingers = () => {
    return dispatch => {
        // 获取网络请求 type=1&area=96&initial=b
        getArtistList(1, 7, 'b').then(res => {
            // console.log(res);
            dispatch(changeSettleSingsAction(res));
        })
    }
}








