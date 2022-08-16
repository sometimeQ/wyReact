import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getQueryParam } from "@/utils/format-utils";
import ArtistCategory from './sub-cpns/artist-category';
import ArtistList from './sub-cpns/artist-list';
import AristHot from './sub-cpns/artist-hot';
import { 
    getAristClassifyListAction, 
    getTopPrtistsAction
 } from "./store/actionCreators";

import { AristWrapper, Left, Right } from './style';



/**
 * 歌手
 */
const Arist = memo(() => {
    // 获取数据
    const [searchParams, setSearchParams] = useSearchParams();

    // 获取当前页url
    const location = useLocation();
    const { pathname, search } = location;

    // console.log(pathname);
    // console.log(search);

    // 解析
    let para = searchParams && getQueryParam(pathname + search);
    let id = para.id;

    console.log('over');
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
            <Left>
                <ArtistCategory></ArtistCategory>
            </Left>
            {/* 如果id有值，那就是代表顶部有默认的字母排序 */}
            <Right>
                {
                    id ? <ArtistList></ArtistList> : <AristHot></AristHot>
                    // <AristHot></AristHot>
                }   
            </Right>
        </AristWrapper>
    )
})
 
export default Arist