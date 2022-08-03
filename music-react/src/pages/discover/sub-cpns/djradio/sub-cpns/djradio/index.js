import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import RecommPrograms from './sub-cpns/recomm-programs';
import DjradioTopList from './sub-cpns/djradio-toplist';
import DjradioClass from './sub-cpns/djradio-class';
import { 
    getDjradioCateListAction,
    getDjradioProgramRecommendAction,
    getDjradioProgramTopListAction
} from '../../store/actionCreators';
import DjradioCate from '@/components/djradio-cate';
import { DjradioWrapper } from './style';

const Djradio = memo(() => {
  // 请求数据
  const dispatch = useDispatch();
  useEffect(() => {
    // 分类数据
    dispatch(getDjradioCateListAction());
    // 推荐节目
    dispatch(getDjradioProgramRecommendAction());
    // 节目排行榜
    dispatch(getDjradioProgramTopListAction());
  }, [dispatch]);

  return (
      <DjradioWrapper>
        <DjradioCate></DjradioCate>
        <div className='top-list'>
          {/* 推荐节目 */}
          <RecommPrograms />
          {/* 节目排行榜 */}
          <DjradioTopList />
        </div>
        {/* 音乐电台 */}
        <div className='rdimore'>
          <DjradioClass title='音乐故事·电台' id='2' />
          <DjradioClass title="美文读物·电台" id="6"></DjradioClass>
          <DjradioClass title="脱口秀·电台" id="5"></DjradioClass>
          <DjradioClass title="情感调频·电台" id="3"></DjradioClass>
          <DjradioClass title="创作|翻唱·电台" id="2001"></DjradioClass>
          <DjradioClass title="人文历史·电台" id="11"></DjradioClass>
        </div>
      </DjradioWrapper>
  )
})

export default Djradio