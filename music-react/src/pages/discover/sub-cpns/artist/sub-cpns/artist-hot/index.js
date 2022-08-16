import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage } from "@/utils/format-utils";
import ThemeHeader from "@/components/theme-header-rcm";

import { AristHotWrapper } from './style';


const AristHot = memo(() => {
    // 获取数据
    const { topPrtists } = useSelector((state) => ({
      topPrtists: state.getIn(['arist', 'topPrtists'])
    }), shallowEqual);

    let artists = topPrtists && topPrtists.artists || [];
    // console.log(artists);
    // console.log('什么');

    return (
      <AristHotWrapper>
        <ThemeHeader title="热门歌手"></ThemeHeader>
         {/* 取前10 */}
        <div className='artists-list'>
          {
            artists.splice(0, 10).map((item, index) => {
              return (
                <div className='cover' key={item.id}>
                  {/* 图片 */}
                   <div className='image'>
                      <img src={getSizeImage(item.img1v1Url, 130)} alt='' />
                      {/* 遮罩 */}
                      <a className='msk sprite_covor'>
                      </a>
                    </div>
                    {/* 其他信息 */}
                    <div className='info'>
                        {/* 信息 */}
                        <a>{item.name}</a>
                        {/* 展位图 */}
                        <a>
                            <i className='icon-user sprite_icon2'></i>
                        </a>
                    </div>
                </div>
              )
            })
          }
         </div>
        {/* 热门歌手底部名字list */}
        <div className='artists-little-list'>
          {
            artists.map((itny, indey) => {
              return (
                <div className='list-item' key={indey}>
                    <a>
                      {itny.name}
                    </a>
                    <a>
                      <i className='icon-user sprite_icon2'></i>
                    </a>
                </div>
              )
            })
          }
        </div>
      </AristHotWrapper>
    )
})

export default AristHot