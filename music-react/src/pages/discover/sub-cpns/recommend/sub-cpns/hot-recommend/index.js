import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ThemeHeader from '@/components/theme-header'
import { getHotRecommendAction } from '../../store/actionCreators';
import SongCover from '@/components/songs-cover';
import { HOT_RECOMMEND_LIMIT } from '@/common/contants';
import { 
  HotRecommendWrapper,
  HotRecommendSongsListWrapper
} from './style';

// 快捷键 rmc
const HotRecommend = memo(() => {

  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 传递参数
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  // 拿到数据
  const { hotRecommends } = useSelector((state) => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual);
  
  const title = '热门推荐';
  const titileArray = ['华语', '流行', '摇滚', '民谣', '电子'];
  const linkUrl = '#/discover/songs/';

  return (
      <HotRecommendWrapper>
          <div className='header'>
            <ThemeHeader
              title={title}
              keywords={titileArray}
              moreLink={linkUrl} />
          </div>
          {/* 歌曲列表 */}
          <HotRecommendSongsListWrapper>
                {/* 列表数据传递 */}
                {
                  hotRecommends.map((item, index) => {
                    return <SongCover key={item.id} item={item}></SongCover>
                  })
                }
          </HotRecommendSongsListWrapper>
      </HotRecommendWrapper>
  )
})

export default HotRecommend