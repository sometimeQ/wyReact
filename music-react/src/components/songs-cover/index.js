// 公用的歌曲列表组件
import React, { memo } from 'react';
import { 
  getSizeImage, 
  getCount 
} from '@/utils/format-utils';
import { SongsCoverWrapper } from './style';


/**
 * 歌单展示列表组件
 */
export default memo(function SongsCover(props) {
  // 接收传递过来的数据
  const { item } = props;

  const showBy = item.copywriter && item.creator && item.creator.nickname ? `by ${item.copywriter && item.creator && item.creator.nickname}` : '';

  return (
    <SongsCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(item.picUrl || item.coverImgUrl, 140)} alt={item.name}></img>
        {/* 跳转路由，传递参数，斜着的白色的图片 */}
        <a className="msk sprite_covor" href={`/playlist?id=${item.id}`} title={item.name}> </a>
        {/* 图片上面的遮罩阴影 */}
        <div className='cover'>
          <div className='info sprite_covor'>
            <span >
              <i className='sprite_icon erji'></i>
              {
                // 展示播放的数据量
                getCount(item.playCount)
              }
            </span>
            <i className='sprite_icon play'></i>
          </div>
         
        </div>
      </div>
      {/* 底部文字信息 */}
      <div className='cover-bottom text-nowrap'>
        {/* 点击跳转到详情页面 */}
        <a href={`playlist?id=${item.id}`} title={item.name}>{item.name}</a>
      </div>
      {/* 底部来源信息 by xxx */}
      <div className='cover-sourc text-nowrap'>
        <p>{showBy}</p>
      </div>
    </SongsCoverWrapper>
  )
  
});
