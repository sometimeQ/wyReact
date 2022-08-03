import React, { memo, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import { 
  SongHeaderWrapper,
  SongHeaderLeft
 } from './style';

const SongHeader = memo((props) => {
  // hooks
  const { currentCategory } = useSelector((state) => ({
    // .getIn(['songlist', 'currentCategory']); ["songList", "currentCategory"]
    // 记住有时候是单引号
    currentCategory: state.getIn(['songlist', 'currentCategory'])
  }), shallowEqual);
  
  // console.log(currentCategory);

  // 其他

  return (
    <SongHeaderWrapper>
            <div className='left'>
            <h3 className='title'>{currentCategory}</h3>
                <button
                  className='select-classify sprite_button'
                  onClick={(e) => props.menuClick()}>
                  <span className='sprite_button'>选择分类
                      {/* 三角标小图标 */}
                      <i className="icon-select sprite_icon2"></i>
                  </span>
                </button>
            </div>
            <div className='right' >
                <button className='sprite_button2'>热门</button>
            </div>
    </SongHeaderWrapper>
    
  )
})

export default SongHeader