import React, { memo } from 'react';
import { OperationBarWrapper } from './style';

const SongOperationBar = memo((props) => {
    // 接收参数
    const { favorTitle, shareTitle, downloadTitle, commentTitle } = props;

    // console.log('MMMMMMMMMMMMMMMMMMMMMMMMMM');

    return (
        <OperationBarWrapper>
            {/* 播放 */}
            <span className='play'>
                {/* 包裹住能跳转 */}
                <a href='/a' className='play-icon'>
                    <span className='play sprite_button'>
                      <i className='sprite_button'></i>
                      <span className='title'>播放</span>
                  </span>
                </a>
                {/* +号按钮 */}
                <a href='xxx' className='add-icon sprite_button'></a>
            </span>
            {/* 收藏 */}
            <a href='/aa' className='item sprite_button'>
                <i className='icon favor-icon sprite_button'>{favorTitle}</i>
            </a>
            {/* 分享 */}
            <a href='/aa' className='item sprite_button'>
                <i className='icon share-icon sprite_button'>{shareTitle}</i>
            </a>
            {/* 下载 */}
            <a href='/oop' className='item sprite_button'>
                <i className='icon download-icon sprite_button'>{downloadTitle}</i>
            </a>
            {/* 评论 */}
            <a href='/mxa' className='item sprite_button'>
                <i className='icon comment-icon sprite_button'>{commentTitle}</i>
            </a>
        </OperationBarWrapper>
    )
})

export default SongOperationBar