import React, { memo } from 'react';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { PlayerDownWrapper } from './style';

const PlayerDown = memo(() => {
    // 


    return (
        <PlayerDownWrapper>
            <div className='header'>
                <ThemeHeaderSmall title="网易云音乐多端下载" />
            </div>
            <div className='btn-list'>
                <a className='btn_iphone sprite_down' href={'https://itunes.apple.com/cn/app/id590338362'}></a>
                <a className='btn_pc sprite_down' href={'https://music.163.com/api/pc/download/latest'}></a>
                <a className='btn_android sprite_down' href={'https://music.163.com/api/android/download/latest2'}></a>
            </div>
            <p className='text'>同步歌单，随时畅听320k好音乐</p>
        </PlayerDownWrapper>
    )
    })

export default PlayerDown