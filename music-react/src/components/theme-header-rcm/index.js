// 快捷键 rmc
import React, { memo } from 'react';
import { HeaderWrapper } from './style';



const ThemeHeaderRCM = memo((props) => {
    // 结构 keywords如果没有值默认为空， 接收父组件传递过来的数据
    const { title, links = [], moreLink } = props;

    console.log('什么情况');
    console.log(links);
    
    return (
        <HeaderWrapper className='sprite_02'>
            <div className='left'>
                <h3 className='title'>{title}</h3>
                {
                    links.length > 0 &&  <div className='keywords'>
                        {
                            links.map((item, index) => {
                                const showLine = index === links.length - 1;
                                return (
                                    <div className='item' key={index}>
                                        {/* 路由本地跳转  songs 这里自己处理吧 */}
                                        <a href={`#/discover/album/?cat=${item.url}`}>{item.title}</a>
                                        <span className='line'>{showLine ? '' : '|'}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
            <div className='right'>
                <a href={moreLink}>更多</a>
                <i className='sprite_02 icon'></i>
            </div>
        </HeaderWrapper>
    )
})

export default ThemeHeaderRCM