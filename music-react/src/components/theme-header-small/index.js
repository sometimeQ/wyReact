import React, { memo } from 'react';
import { ThemeHeaderSmallWrapper } from './style';

const ThemeHeaderSmall = memo((props) => {
    // 接收传递过来的数据
    const { title, href } = props;

    return (
        <ThemeHeaderSmallWrapper>
                <h3>{title}</h3>
                {
                    href !== undefined && <a href={href}>查看更多 &gt;</a>
                }
        </ThemeHeaderSmallWrapper>
    )
})

export default ThemeHeaderSmall