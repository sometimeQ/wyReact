import React, { memo } from 'react';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import { Progress } from 'antd';
import { DjradioTopListWrapper } from './style';




const DjradioTopList = memo(() => {
    // 取值
    const { programTopList } = useSelector((state) => ({
        programTopList: state.getIn(['discoverDjradio', 'programTopList'])
    }), shallowEqual);

    // 
    let toplist = programTopList.toplist || [];
    let moreLink = "#/discover/djradio/rank";

    return (
        <DjradioTopListWrapper>
            <ThemeHeaderRCM title='节目排行榜' moreLink={moreLink}></ThemeHeaderRCM>
            {/* 列表 */}
            <div className='program-list'>
                {
                    toplist.splice(0, 10).map((item, index) => {
                        console.log(item.program);
                        return (
                            // 大的全部包裹
                            <div className='program-item' key={index}>
                                {/* 图标 */}
                                <div className='rank'>
                                    <span className='num'>{index + 1}</span>
                                </div>
                                {/* 图片 */}
                                <a className='image'>
                                    <img src={getSizeImage(item.program.coverUrl, 40)} />
                                    {/* 播放图标 */}
                                    <i className='icon-play sprite_icon'></i>
                                </a>
                                {/* info信息 */}
                                <div className="info">
                                    <h3 className="title">
                                        <a title={item.program.name} href={`/program?id=${item.program.id}`}>
                                            {item.program.name}
                                        </a>
                                    </h3>
                                    <p className="sub-title">
                                        <a title={item.program.radio.name}>
                                            {item.program.radio.name}
                                        </a>
                                    </p>
                                </div>
                                {/* 进度条 */}
                                <div className='progress'>
                                    <Progress 
                                        className='progress'
                                        percent={40}
                                        showInfo={false}
                                        size={'small'}
                                        strokeColor={"#C7C7C7"}
                                     />
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </DjradioTopListWrapper>
    )
})

export default DjradioTopList