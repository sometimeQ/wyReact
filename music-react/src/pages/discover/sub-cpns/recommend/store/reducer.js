import { Map } from 'immutable';
// 引入常量
import { 
    CHANGE_TOP_BANNERS,
    CHANGE_HOT_RECOMMEND,
    CHANGE_NEW_ALBUM,
    CHANGE_UP_RANKING,
    CHANGE_NEW_RANKING,
    CHANGE_ORIGIN_RANKING,
} from './constants';


// 定义默认的变量
const defaultState = Map({
    topBanners : [],
    hotRecommends: [],
    newAlbums: [],

    // 榜单
    upRanking: {},
    newRanking: {},
    originRanking: {}
});


// 函数
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            // action. changeTopBannerAction 这里定义的key; set xx 就是上面defaultState 定义的值
            return state.set('topBanners', action.topBanners); 
        case CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', action.hotRecommends);
        case CHANGE_NEW_ALBUM:
            return state.set('newAlbums', action.newAlbums);
        case CHANGE_UP_RANKING:
            return state.set('upRanking', action.upRanking);
        case CHANGE_NEW_RANKING:
            return state.set('newRanking', action.newRanking);
        case CHANGE_ORIGIN_RANKING:
            return state.set('originRanking', action.originRanking);
        
        default:
            return state;
    }
};

