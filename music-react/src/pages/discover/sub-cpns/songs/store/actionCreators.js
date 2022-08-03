// 常量
import {
    PER_PAGE_NUMBER,
    CHANGE_CATEGORY,
    CHANGE_CURRENT_CATEGORY,
    CHANGE_CATEGORY_SONGS
} from './constants';
import {
    getSongCategory,
    getSongCategoryList
} from '@/network/recommend';
import { handleSongsCategory } from '@/utils/handle-data';

// 定义action
export const changeCurrentCategoryAction = (name) => ({
    type: CHANGE_CURRENT_CATEGORY,
    currentCategory: name
})

// 歌单分类
export const changeCategoryAction = (res) => ({
    type: CHANGE_CATEGORY,
    category: res
})

// 歌单信息
export const changeSongListAction = (res) => ({
    type: CHANGE_CATEGORY_SONGS,
    categorySongs: res
})


// 获取歌单信息 接口请求数据
export const getSongList = (page) => {
    return (dispath, getState) => {
        // 1.获取currentCategory
        const name = getState().getIn(['songlist', 'currentCategory']);
        console.log('获取currentCategory  ' + name);
        // 2.获取数据
        getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
            // console.log('name' + ' ' + name);
            // console.log('获取歌单信息' + '  ' + JSON.stringify(res));
            dispath(changeSongListAction(res));
        })
    }
}

// 获取分类信息
export const getCategory = () => {
    return (dispatch) => {
        getSongCategory().then(res => {
            // console.log('获取分类信息' + '  ' + JSON.stringify(res.data));
            // 整合数据
            const categoryData = handleSongsCategory(res.data);
            
            dispatch(changeCategoryAction(categoryData));
            console.log(categoryData);
        })
    }
}



