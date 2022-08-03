import React, { memo } from 'react';
import { SongTagWrapper } from './style';


const SongTag = memo((props) => {
    const { title, href } = props;

    return (
        <SongTagWrapper>
            <a className='tag sprite_button' href={href}>
                {/* 背景色 */}
                <i className='icon-end sprite_button'>{title}</i>
            </a>
        </SongTagWrapper>
    )
})

export default SongTag