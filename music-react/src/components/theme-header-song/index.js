import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeHeaderSongWrapper } from './style';


const ThemeHeaderSong = memo(() => {
    // redux
    const state = useSelector((state) => ({
        playList: state.getIn(['ranking', 'playList'])
    }));

    return (
        <ThemeHeaderSongWrapper>
            <div className='info'>
                {/* 左边两个 */}
                <div className='left'>
                    <h3 className='title'>歌曲列表</h3>
                    <div className='count'>{state.playList.trackCount}首歌</div>
                </div>
                {/* 右边两个 */}
                <div className='right'>
                    <span>播放: </span>
                    <span className='count'>{state.playList.playCount}</span>
                    <span>次</span>
                </div>
            </div>
        </ThemeHeaderSongWrapper>  
    )
})

export default ThemeHeaderSong