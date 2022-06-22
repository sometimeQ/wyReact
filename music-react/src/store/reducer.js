import { combineReducers } from "redux-immutable";


// 发现
import { reducer as recomendReducer } from '@/pages/discover/sub-cpns/recommend/store';
import { reducer as rankingReducer } from '@/pages/discover/sub-cpns/ranking/store';

// 合并reducer.js
const cReducer = combineReducers({
    recommend: recomendReducer,
    ranking: rankingReducer
});


export default cReducer;

