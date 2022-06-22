// 网络请求接口
import { 
    getTopList,
    getRankingList
} from '@/network/ranking';
// 常量
import *as actionTypes from './constants';


// 定义action, 里面的属性是要传递到 reducer.js里面的值
const changeTopListAction = (res) => ({
    type: actionTypes.CHANGE_TOP_LIST,
    topList: res.data.list
})

// 记录左边数组点击的索引
export const changeCurrentIndex = (index) => ({
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex: index
})

// 右边列表的数据
const changePlayListAction = (res) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList: res.data.playlist
})

// 暴露给外界调用的接口、左边的数组list
export const getTops = (res) => {
    return dispath => {
        // 开始调取网络接口
        getTopList().then(res => {
            console.log(res);
            console.log('///////////////////');
            // 调用自定义的action
            dispath(changeTopListAction(res));
        })
    }
}

// 点击左边的某个item，右边的列表显示对应的数据
export const getRightRankingList = (id) => {
    return dispath => {
        // 调取网络请求接口
        getRankingList(id).then(res => {
            dispath(changePlayListAction(res))
        })
    }
}


