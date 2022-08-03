
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage } from "@/utils/format-utils";

import { DjradioTopListWrapper } from './style';


/**
 * 电台排行榜
 */
const DjradioTopList = memo(() => {
    // 获取数据
    const { recommendHot } = useSelector((state) => ({
        recommendHot: state.getIn(['discoverDjradio', 'recommendHot']),
    }), shallowEqual);

    let djRadios = recommendHot.djRadios || [];

    // 点击事件
    const getCuurentPostions = () => {
        console.log(window.pageYOffset);
        window.scroll(0, 710);

        // 排序，切换数据 ...s
    }

    return (
        <DjradioTopListWrapper>
            {/* 头部标题v */}
            <div className='header'>
                <h3>电台排行榜</h3>
                <div className='sort' onClick={getCuurentPostions}>
                    <a className='goup'>上升最快</a>
                    <span className='line'>|</span>
                    <a className='newest'>最热电台</a>
                </div>
            </div>
            <div className='djradio-list'>
                {
                    djRadios && djRadios.map((item, index) => {
                        return (
                            <div className='djradio-item' key={item.id}>
                                {/* 图片 */}
                                <div className='image'>
                                    <a>
                                        <img src={getSizeImage(item.picUrl, 120)} />
                                    </a>
                                </div>
                                {/* info */}
                                <div className='info'>
                                    <h3 className='title'>
                                        <a href={`#/discover/playlist?id=${item.id}`}>{item.name}</a>
                                    </h3>
                                    {/* 中间行 */}
                                    {/* 占位图标 */}
                                    <i className='icon-user sprite_icon2'></i>
                                    <a className='user-name'>{item.dj.nickname} href={`#/discover/playlist?id=${item.id}`}</a>
                                    {/* 底部航 */}
                                    <p className='count'>
                                        <span>共{item.programCount}期</span>
                                        <span>订阅{item.subCount}次</span>
                                    </p>
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