import React, { memo, useEffect } from 'react';
import PlayListInfo from './sub-cpns/playlist-info';
import PlayListLike from './sub-cpns/playlist-like';
import PlayerDown from '@/components/player-down';
import PlayListComment from '../../components/play-list-comment'
import PlayListSongs from './sub-cpns/playlist-list';
import { getQueryParam } from "@/utils/format-utils";

import {
    getPlayListCommentAction,
    getPlayListDetailAction,
    getPlayListSubscribersAction,
    getRelatedPlayListAction,
} from "./store/actionCreators";
import { 
    PlayListLeftWrapper, 
    PlayListRightWrapper,
    PlayListWrapper
 } from './style';
import { useLocation, useSearchParams } from 'react-router-dom';
import { shallowEqual, useDispatch } from 'react-redux';
import PlayListHot from './sub-cpns/playlist-hot';

/***
 * 歌单详情列表
 */
const PlayList = memo((props) => {
    console.log('什么情况');
    // 接收其他点击事件传递过来的参数
    const [searchParams, setSearchParams] = useSearchParams();

    // 解析
    const { pathname, search } = useLocation();
    // console.log(lo);
    let param = searchParams && getQueryParam(pathname + search);
    console.log(param.id);
    
    const dispach = useDispatch();
    useEffect(() => {
        if (param.id) {
            // 歌单信息
            dispach(getPlayListDetailAction(param.id));
            // 歌单评论
            dispach(getPlayListCommentAction(param.id));
            // 相关推荐
            dispach(getRelatedPlayListAction(param.id));
            // 喜欢这个歌单的人
            dispach(getPlayListSubscribersAction(param.id));
        }

    }, [dispach, param.id]);

    
    
    return (
        <PlayListWrapper>
            <PlayListLeftWrapper>
                {/* 左边数据 */}
                <PlayListInfo /> 
                {/* 歌曲列表 */}-p
                <PlayListSongs />
                {/* 底部评论框 */}
                <PlayListComment 
                    albumComment={{}}
                    playListId={''} />
                
            </PlayListLeftWrapper>
            {/*右边数据 */}
            <PlayListRightWrapper>
                {/* 喜欢这个歌单的人 */}
                <PlayListLike />
                {/* 热门歌单 */}
                <PlayListHot />
                {/* 底部下载 */}
                <PlayerDown />
            </PlayListRightWrapper>

        </PlayListWrapper>
        
    )
})

export default PlayList