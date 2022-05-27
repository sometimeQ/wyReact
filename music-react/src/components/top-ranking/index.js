import React, { memo, useEffect } from 'react';
import { getSizeImage } from "@/utils/format-utils";
import { TopRankingWrapper } from './style';
import { useDispatch } from 'react-redux';

const TopRanking = memo((props) => {
    console.log('???????????????111111111111');
    console.log(props);
    console.log('??????????????????222222222');
    // 传递够来的数据
    const { info } = props;

    // 网络请求数据
    const dispatch = useDispatch();

    return (
        <TopRankingWrapper>
            {/* 头部信息 */}
            <div className='header'>
                <div className='left'>
                    <img src={getSizeImage(info.coverImgUrl, 80)} alt=''></img>
                </div>
                <div className='right'>

                </div>
            </div>
            {/* 中间的列表 */}
            <div className='list'>

            </div>
            {/* 底部加载 */}
            <div className='footer'>

            </div>

        </TopRankingWrapper>
    )
})

export default TopRanking