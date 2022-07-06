import { combineReducers } from "redux-immutable";


// 发现
import { reducer as recomendReducer } from '@/pages/discover/sub-cpns/recommend/store';
import { reducer as rankingReducer } from '@/pages/discover/sub-cpns/ranking/store';

// 歌单
import { reducer as albumReducer } from '@/pages/discover/sub-cpns/album/store';

import { reducer as themeHeaderReducer } from '@/components/app-header/store';

// 合并reducer.js
const cReducer = combineReducers({
    recommend: recomendReducer,
    ranking: rankingReducer,
    album: albumReducer,
    themeHeader: themeHeaderReducer
});


export default cReducer;

