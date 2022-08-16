import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { getSongDetailAction } from "./store";
import { 
  getCommentAction, 
  getHotCommentAction, 
  getSimiPlaylistAction, 
  getSimiSongsAction
 } from "./store/actionCreators";
import {
  getQueryParam
} from '@/utils/format-utils';
import PlayerDown from '@/components/player-down';
import PlayListComment from '../../components/play-list-comment'
import PlayerInfomation from './sub-cpns/player-info';
import PlayerSongs from './sub-cpns/similar-songs';
import PlayerRelevant from './sub-cpns/player-relevant';
import { Left, Right, Wrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';



/**
 * 歌曲页面 
 */
const Player = memo(() => {
  // 接收其他地方传递够来的参数
  const location = useLocation();
  const param = getQueryParam(location.pathname + location.search);
  console.log(param);

  // 请求数据
  const dispatch = useDispatch();
  useEffect((state) => {
      // 歌曲基本信息
      dispatch(getSongDetailAction(param.id));
      // 获取该歌曲的热门评论
      dispatch(getHotCommentAction(param.id));
      // 获取该歌曲的所有评论
      dispatch(getCommentAction(param.id));
      // 获取相似歌曲
      dispatch(getSimiSongsAction(param.id));
      // 获取相似歌单
      dispatch(getSimiPlaylistAction(param.id));

  }, [dispatch, param.id]);

  // 获取评论、可以 直接通过接口数据拿到,networ， 在set
  const { comment } = useSelector((state) => ({
    comment: state.getIn(["player", "comment"])
  }), shallowEqual);

  console.log('开始获取啦');
  console.log(comment);

  // 评论列表数据
  const comments = comment || [];
  // 该歌单id
  const playListId = param.id;


  return (
      <Wrapper>
          <div className='content wrap-v2'>
              {/* 左侧内容 */}
              <Left>  
                  {/* 歌曲信息 */}
                  <PlayerInfomation />
                  {/* 底部评论消息 */}
                  {/* 底部评论框 */}
                  <PlayListComment
                    albumComment={comments}
                    playListId={playListId} />
              </Left>
              {/* 右侧内容 */}
              <Right>
                  {/* 包含这首歌的歌单 */}
                  <PlayerSongs></PlayerSongs>
                  {/* 相似的歌单 */}
                  <PlayerRelevant></PlayerRelevant>
                  {/* 网易云音乐多端下载 */}
                  <PlayerDown></PlayerDown>
              </Right>
          </div>
      </Wrapper>
  )
})

export default Player