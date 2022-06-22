import React, { memo, useEffect } from 'react';

import { getTops } from './store/actionCreators';

import LeftRanking from './sub-cpns/ranking-left';
import RankingHeader from './sub-cpns/ranking-header';
import RankingList from './sub-cpns/ranking-list';
import {
  getRightRankingList
} from './store/actionCreators';
// import { getQueryParam } from "@/utils/format-utils";

// 样式包裹
import { RankingLeft, RankingRight, RankingWrapper } from './style';
import { useDispatch } from 'react-redux';

/**
 * 排行榜
 */
// 总的包裹住其他组件的
const Ranking = memo(() => {
  // redux
  const dispatch = useDispatch();

  // hooks, 数据请求
  useEffect(() => {
    dispatch(getTops());
    // // 默认选中第一个
    // dispatch(getRightRankingList(defaultPlaylistId));
  }, [dispatch]);

  return (
      // 居中
      <RankingWrapper className='wrap-v2'>
          <RankingLeft>
              {/* 左边的竖着的列表 */}
              <LeftRanking />
          </RankingLeft>
          <RankingRight>
              {/* 右边的列表头部 */}
              <RankingHeader />
              {/* 右边的底部列表 */}
              <RankingList />
          </RankingRight>
      </RankingWrapper>
  )
})

export default Ranking