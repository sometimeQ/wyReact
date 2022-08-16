import React, { memo, useEffect } from 'react';
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RecommendRandingWrapper } from './style';
import TopRanking from '@/components/top-ranking';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getRankingTypeList } from '../../store/actionCreators';


/**
 * 排行榜
 */
const RecommendRanding = memo(() => {
    // 网络请求数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRankingTypeList(19723756));
        dispatch(getRankingTypeList(3779629));
        dispatch(getRankingTypeList(2884035));
    }, [dispatch]);

    // 获取数据 \ getIn 里面取的数据，upRanking 是对应的store下面的reducer.js里面定义的存储的值
    const { newRanking, upRanking,  originRanking } = useSelector((state) => ({
        newRanking: state.getIn(['recommend', 'upRanking']),
        originRanking: state.getIn(['recommend', 'newRanking']),
        upRanking: state.getIn(['recommend', 'originRanking'])
    }), shallowEqual);

    const title = '榜单';
    const moreLink = '#/discover/ranking';
    const links = [
        `/discover/ranking/?id=19723756`,
        `/discover/ranking/?id=3779629`,
        `/discover/ranking/?id=2884035`,
    ];

    return (
        <RecommendRandingWrapper>
            {/* 标题栏 */}
            <ThemeHeaderRCM title={title} moreLink={moreLink}></ThemeHeaderRCM>
            <div className='topss'>
                {/* 飙升榜  'http://localhost:3002/#/discover/ranking?id=19723756' */} 
                <TopRanking info={newRanking} link={links[0]}></TopRanking>
                {/* 原创榜 */}
                <TopRanking info={upRanking} link={links[1]}></TopRanking>
                {/* 新歌榜 */}
                <TopRanking info={originRanking} link={links[2]}></TopRanking>
            </div>
        </RecommendRandingWrapper>
    )
})

export default RecommendRanding