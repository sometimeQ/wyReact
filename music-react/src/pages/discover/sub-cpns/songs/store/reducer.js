import { Map } from "immutable";
import *  as actionType from './constants';

// 定义数据
const defaultState = Map({
    currentCategory: '全部',
    category: [],
    categorySongs: {}
});


// readucer数据
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionType.CHANGE_CATEGORY:
            // 赋值
            return state.set('category', action.category);
        case actionType.CHANGE_CURRENT_CATEGORY:
            // console.log(action.currentCategory);
            return state.set('currentCategory', action.currentCategory);
        case actionType.CHANGE_CATEGORY_SONGS:
            return state.set('categorySongs', action.categorySongs);

        default:
            return state;
    }
}
