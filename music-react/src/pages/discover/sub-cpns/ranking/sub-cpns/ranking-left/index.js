import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import classNames from "classnames";
// import { useSearchParams } from 'react-router-dom';
import { getSizeImage } from "@/utils/format-utils";
import {
    changeCurrentIndex,
    getRightRankingList
} from '../../store/actionCreators';
import { LeftRankingWrapper } from './style';

const LeftRanking = memo(() => {
    // 接收其他界面跳转传递过来的数据,url
    // const [search] = useSearchParams();
    // const defaultPlaylistId = search.get('id');

    // console.log('华丽的分割线');
    // console.log(defaultPlaylistId);
    // console.log('================');

    // redux、节约性能
    const state = useSelector(state => ({
        // 取出数据, 
        topList: state.getIn(['ranking', 'topList']),
        // 记录左边点击的索引,然后改变点击那行的状态
        currentIndex: state.getIn(['ranking', 'currentIndex'])
    }), shallowEqual);

    // 取出记录点击的索引
    const currentIndex = state.currentIndex;

    // hooks, 请求数据
    const dispatch = useDispatch();
    useEffect(() => {
        // 取出当前的id
        const id = (state.topList[currentIndex] && state.topList[currentIndex].id);
        if (!id) return;
        // if (defaultPlaylistId !== undefined) {
        //     dispatch(getRightRankingList(defaultPlaylistId));
        // } else {
            dispatch(getRightRankingList(id));
        // }
    }, [dispatch, currentIndex, state])

    // 其他逻辑
    const hanldeItemClick = (index) => {
        console.log(index);
        // 记录点击的索引值,顺便请求右边显示的接口信息
        dispatch(changeCurrentIndex(index));
        // 请求右边的数据,拿到当然索引的id
        const id = state.topList[currentIndex].id;
        dispatch(getRightRankingList(id));

    }

    return (
        <LeftRankingWrapper>
            {
                state.topList.map((item, index) => {
                    let header;
                    if (index === 0 || index === 4) {
                        // 显示标题信息
                        header = <div className='header'>{index === 0 ? '云音乐特色榜' : '全球媒体榜'}</div>
                    }

                    return (
                        <div key={item.id}>
                            {/* 标题 */}
                            {header}
                            {/* 默认选中第一个 */}
                            <div className={classNames('item', {'active' : index === currentIndex})}
                                onClick={(e) => hanldeItemClick(index)}>
                                <img src={getSizeImage(item.coverImgUrl, 40)} alt=''></img>
                                <div className='info'>
                                    <div className='name'>{item.name}</div>
                                    <div className='update'>{item.updateFrequency}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </LeftRankingWrapper>
    )
})

export default LeftRanking