// 快捷键 rmc
import React, { memo } from 'react';
import { HeaderWrapper } from './style';



const ThemeHeaderRCM = memo((props) => {
    // 结构 keywords如果没有值默认为空， 接收父组件传递过来的数据
    const { title, keywords = [], moreLink } = props;
    
    return (
        <HeaderWrapper className='sprite_02'>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                <div className='keywords'>
                    {
                        keywords.map((item, index) => {
                            const showLine = index === keywords.length - 1;
                            return (
                                <div className='item' key={item}>
                                    {/* 路由本地跳转 */}
                                    <a href={`/discover/playlist/?cat=${item}`}>{item}</a>
                                    <span className='line'>{showLine ? '' : '|'}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='right'>
                <a href={moreLink}>更多</a>
                <i className='sprite_02 icon'></i>
            </div>
        </HeaderWrapper>
    )
})

export default ThemeHeaderRCM