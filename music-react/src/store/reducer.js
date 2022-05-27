import { combineReducers } from "redux-immutable";


// 发现
import { reducer as recomendReducer } from '@/pages/discover/sub-cpns/recommend/store';

const cReducer = combineReducers({
    recommend: recomendReducer
});


export default cReducer;

