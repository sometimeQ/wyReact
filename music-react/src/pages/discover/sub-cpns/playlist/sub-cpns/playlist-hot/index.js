// rmc
import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage } from '@/utils/format-utils';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { PlayListHotWrapper } from './style';



const PlayListHot = memo(() => {
    // 获取数据
    const { relatedPlayList } = useSelector((state) => ({
        relatedPlayList: state.getIn(['playlist', 'relatedPlayList'])
    }), shallowEqual);

    const playlists = relatedPlayList.playlists || [];

    return (
        <PlayListHotWrapper>
            <div className='header'>
                <ThemeHeaderSmall title='热门歌单'></ThemeHeaderSmall>
            </div>
            {
                playlists.map((item, index) => {
                    return (
                        <div className='list' key={index}>
                            {/* 左边图片 */}
                            <div className='image'>
                                <a href={`#/discover/playlist?id=${item.id}`}>
                                    {/* {getSizeImage} */}
                                    <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.name} />
                                </a>
                            </div>
                            {/* 右边信息 */}
                            <div className='info'>
                                <p className='title'>
                                    <a href={`#/discover/playlist?id=${item.id}`}>{item.name}</a>
                                </p>
                                <p className='author-info'>
                                    <span className='by'>by</span>
                                    <span className='author'>
                                        <a href={`#/user/home?id=${item.creator.userId}`}>{item.creator.nickname}</a>
                                    </span>
                                    {/* 小图标 */}
                                    <i className='icon-sta'></i>
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </PlayListHotWrapper>
    )
})

export default PlayListHot 