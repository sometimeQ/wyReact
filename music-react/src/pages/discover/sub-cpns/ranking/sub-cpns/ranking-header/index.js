
import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import SongOperationBar from '@/components/song-operation-bar';
import { 
  getSizeImage,
  formatMonthDay
} from "@/utils/format-utils";
import { RankingHeaderWrapper } from './style';

const RankingHeader = memo(() => {
  // 接收传递的参数

  // redux
  const state = useSelector((state) => ({
      // 取值
    playList: state.getIn(['ranking', 'playList']),
  }));

  // console.log('???????????????');
  // console.log(state.playList);
  // console.log('XXXXXXXXXXXXXXXXX');

  return (
    <RankingHeaderWrapper>
        <div className='header'>
          {/* 左侧信息 */}
          <div className='image'>
            <img src={getSizeImage(state.playList.coverImgUrl, 150)} alt='' />
            <span className='msk sprite_covor'></span>
           </div>
          {/* 右侧信息 */}
          <div className='info'>
            {/* 右侧上面标题 */}
            <div className='title'>{state.playList.name}</div>
            {/* 右侧下面更新时间信息 */}
            <div className='update-time'>
              <i className='clock sprite_icon2'></i>
              <span className=''>最近更新: {formatMonthDay(state.playList.updateTime)}</span>
            <div className="update-f">（{`${state.playList.updateFrequency}更新`}）</div>
            </div>
            {/* 右侧底部 */}
            <SongOperationBar 
                favorTitle={`${state.playList.subscribedCount}`} 
                shareTitle={`${state.playList.shareCount}`}
                downloadTitle='下载'
                commentTitle={`${state.playList.commentCount}`}>
            </SongOperationBar>
          </div>
        </div>
    </RankingHeaderWrapper>
  )
})

export default RankingHeader