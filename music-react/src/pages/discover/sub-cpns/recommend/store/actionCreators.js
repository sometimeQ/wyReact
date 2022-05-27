// 网络接口
import { 
    getTopBanners, 
    getHotRecommends,
    getNewAlbum,
    getTopList
} from "@/network/recommend";
// 常量
import { 
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUM,
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING
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
    newAlbums: res.data.albums
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
            dispatch(changeNewAlbumAction(res));
        })
    }
}


/**
 * 榜单综合请求接口
 * 0: 飙升接口
 * 1: 新歌榜接口
 * 2: 原创接口
 */ 
export const getTopListAction = (idx) => {
    return (dispatch) => {
        // 调取网络接口
        getTopList(idx).then((res) => {
            console.log('新碟上架' + res);
            switch (idx) {
                case 0 :
                    dispatch(changeUpRankingAction(res));
                    break;
                case 2 :
                    dispatch(changeNewRankingAction(res));
                    break;
                case 3 :
                    dispatch(changeOriginRankingAction(res));
                    break;
                default:
                    break;
            }
        })
    }
}








