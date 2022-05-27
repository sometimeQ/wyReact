import React, { memo, useEffect } from 'react';
import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { RecommendRandingWrapper } from './style';
import TopRanking from '@/components/top-ranking';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';


const RecommendRanding = memo(() => {
    // 网络请求数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopListAction(0));
        dispatch(getTopListAction(2));
        dispatch(getTopListAction(3));
    }, [dispatch]);

    // 获取数据 \ getIn 里面取的数据，upRanking 是对应的store下面的reducer.js里面定义的存储的值
    const { newRanking, upRanking,  originRanking } = useSelector((state) => ({
        newRanking: state.getIn(['recommend', 'upRanking']),
        originRanking: state.getIn(['recommend', 'newRanking']),
        upRanking: state.getIn(['recommend', 'originRanking'])
    }), shallowEqual);

    const title = '榜单';
    const moreLink = '';
    const link = [
        '',
        '',
        '',
        ''
    ];

    console.log('----====================');
    console.log(newRanking);

    return (
        <RecommendRandingWrapper>
            {/* 标题栏 */}
            <ThemeHeaderRCM title={title} moreLink={moreLink}></ThemeHeaderRCM>
            <div className='top'>
                <TopRanking info={newRanking}></TopRanking>
            </div>
        </RecommendRandingWrapper>
    )
})

export default RecommendRanding