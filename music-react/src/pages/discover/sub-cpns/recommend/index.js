import React, { memo } from "react";
import TopBanner from "./sub-cpns/top-banner";
import HotRecommend from './sub-cpns/hot-recommend';
import NewAlbum from './sub-cpns/new-album';
import RecommendRanding from './sub-cpns/recommend-randing';
import UserLogin from "./sub-cpns/user-login";
import SettleSinger from "./sub-cpns/settle-singer";
import HotRadio from "./sub-cpns/hot-radio";
import { RecommendLeft, RecommendRight, RecommendWrapper, Content } from './style';


 
// 首页推荐
const Recommend = memo(() => {
  return (
    <RecommendWrapper>
        <TopBanner/>
        {/* 包裹左右两边的 */}
      <Content className="wrap-v2">
            <RecommendLeft>
                {/* 热门推荐 */}
                <HotRecommend/>
                {/* 新碟上家 */}
                <NewAlbum/>
                {/* 榜单 */}
                <RecommendRanding/>
            </RecommendLeft>
            <RecommendRight>
                {/* 入驻歌手 */}
                <UserLogin />
                {/* 入驻歌手 */}
                <SettleSinger />
                {/* 热门主播 */}
                <HotRadio />
            </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

export default Recommend