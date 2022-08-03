import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { getSizeImage } from '@/utils/format-utils';
import { RecommProgramsWrapper } from './style';

const RecommPrograms = memo(() => {
    // 获取数据
    const { programRecommend } = useSelector((state) => ({
        programRecommend: state.getIn(['discoverDjradio', 'programRecommend']),
    }), shallowEqual);

    const programs = programRecommend.programs || [];
    const moreLink = "#/discover/djradio/recommend";

    return (
        <RecommProgramsWrapper>
            <ThemeHeaderRCM title='推荐节目' moreLink={moreLink}></ThemeHeaderRCM>
            <div className='program-list'>
                {
                    programs.map((item, index) => {
                        return (
                            <div className='program-item' key={index}>
                                <div>
                                    <a className='imge' title='播放'>
                                        <img src={getSizeImage(item.coverUrl, 40)}/>
                                        <i className='icon-play sprite_icon'></i>
                                    </a>
                                </div>
                                <div className='info'>
                                    <h3 className='title'>
                                        <a href={`/program?id=${item.id}`}>{item.name}</a>
                                    </h3>
                                    <p className='sub-title'>
                                        <a title={item.radio.name} href={`#/djradio?id=${item.radio.id}`}>{item.radio.name}</a>
                                    </p>
                                </div>
                                {/* 最右边的 */}
                                <a className='tag' href={`/discover/djradio/category?id=${item.radio.categoryId}`}>
                                    {item.radio.category}
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </RecommProgramsWrapper>
    )
})

export default RecommPrograms