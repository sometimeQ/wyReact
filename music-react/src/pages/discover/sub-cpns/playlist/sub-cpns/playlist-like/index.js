import React, { memo } from 'react';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage } from "@/utils/format-utils";
import { PlayListLikeWrapper } from './style';


const PlayListLike = memo(() => {
    // 获取数据
    const { playListSubscribers } = useSelector((state) => ({
        playListSubscribers: state.getIn(['playlist', 'playListSubscribers'])
    }), shallowEqual);

    const subscribers = playListSubscribers.subscribers || [];

    return (
        <PlayListLikeWrapper>
            <div className='header'>
                <ThemeHeaderSmall title='喜欢这个歌单的人'></ThemeHeaderSmall>
            </div>
            <div className='like-list'>
             {
                    subscribers.map((item, index) => {
                        return (
                            <div className='like-item' key={index}>
                                <a href={`#/user/home?id=${item.userId}`}>
                                    <img src={getSizeImage(item.avatarUrl, 40)} alt={item.nickname} />
                                </a>
                            </div>
                        )
                    })
             }
            </div>
        </PlayListLikeWrapper>
    )
})

export default PlayListLike