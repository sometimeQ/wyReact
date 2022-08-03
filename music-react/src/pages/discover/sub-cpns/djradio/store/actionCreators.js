import { 
    getDjradioCateList,
    getDjradioProgramRecommend,
    getDjradioProgramTopList,
    getDjradioRecommendHot,
    getDjradioRecommendType,

} from '@/network/djradio';
import * as actionTypes from "./constants";


// 定义电台分类 action
// ({})：表示对象的 属性和方法，里面都用“，”分隔开来
// (){}：表示对象的 方法(函数)，里面都用“；”分隔开来
const changeDjradioCateListAction = (cateList) => ({
    type: actionTypes.CHANGE_DJRADIO_CATELIST,
    cateList
});

// 电台分类网络请求数据
export const getDjradioCateListAction = ()  => {
    return (dispath) => {
        getDjradioCateList().then((res) => {
            // console.log(res.data);
            dispath(changeDjradioCateListAction(res.data));
        })
    }
};

// 推荐节目
const changeDjradioProgramRecommendAction = (programRecommend) => ({
    type: actionTypes.CHANGE_DJRADIO_PROGRAM_RECOMMEND,
    programRecommend
});

export const getDjradioProgramRecommendAction = () => {
    return (dispath) => {
        getDjradioProgramRecommend().then((res) => {
            dispath(changeDjradioProgramRecommendAction(res.data));
        })
    }
}

// 节目排行榜
const changeDjradioProgramTopListAction = (programTopList) => ({
    type: actionTypes.CHANGE_DJRADIO_PROGRAM_TOPLIST,
    programTopList
})

export const getDjradioProgramTopListAction = () => {
    return (dispath) => {
        getDjradioProgramTopList().then((res) => {
            dispath(changeDjradioProgramTopListAction(res.data));
        })
    }
};

// 获取对应类型电台列表
const changeDjradioRecommendTypeAction = (recommendType) => ({
    type: actionTypes.CHANGE_DJRADIO_RECOMMEND_TYPE,
    recommendType
});

export const getDjradioRecommendTypeAction = () => {
    return (dispath) => {
        getDjradioRecommendType().then((res) => {
            dispath(changeDjradioRecommendTypeAction(res.data));
        });
    }
}

// 优秀新电台
const changeExcellentDjradioAction = (excellentDjradio) => ({
    type: actionTypes.CHANGE_DJRADIO_EXCELLENTDJRADIO,
    excellentDjradio,
});

export const getExcellentDjradioAction = (id) => {
    return (dispatch) => {
        getDjradioRecommendType(id).then((res) => {
            dispatch(changeExcellentDjradioAction(res.data));
        });
    };
};

// 电台排行榜
const changeDjradioRecommendHotAction = (recommendHot) => ({
    type: actionTypes.CHANGE_DJRADIO_RECOMMEND_HOT,
    recommendHot,
});

export const getDjradioRecommendHotAction = (cateId, limit, offset) => {
    return (dispatch) => {
        getDjradioRecommendHot(cateId, limit, offset).then((res) => {
            dispatch(changeDjradioRecommendHotAction(res.data));
        });
    };
};


