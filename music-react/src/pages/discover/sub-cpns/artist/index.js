import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getQueryParam } from "@/utils/format-utils";
import { 
    getAristClassifyListAction, 
    getTopPrtistsAction
 } from "./store/actionCreators";

import { AristWrapper } from './style';


/**
 * 歌手
 */
const Arist = memo(() => {
    // 获取数据
    const [searchParams, setSearchParams] = useSearchParams();
    
    // 解析
    let para = searchParams && getQueryParam(searchParams);
    let id = para.id;

    console.log(id);

    // 获取数据
    const { aristClassifyArea, aristClassifyType } = useSelector((state) => ({
        aristClassifyArea: state.getIn(['arist', 'aristClassifyArea']),
        aristClassifyType: state.getIn(['arist', 'aristClassifyType']),
    }), shallowEqual);

    // redux
    const dispatch = useDispatch();
    useEffect((state) => {
        if (id) {
            // 歌手分类列表
            dispatch(getAristClassifyListAction(aristClassifyArea, aristClassifyType, "", 100));
        } else {
            // 热门歌手
            dispatch(getTopPrtistsAction(100));
        }
    }, [dispatch, aristClassifyType, aristClassifyArea]);


    return (
        <AristWrapper>
            Arist
        </AristWrapper>
    )
})

export default Arist