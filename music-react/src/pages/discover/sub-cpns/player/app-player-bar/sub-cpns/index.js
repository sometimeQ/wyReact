import { CloseOutlined, ClearOutlined, HeartOutlined } from '@ant-design/icons';
import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSongDetailAction } from '../../store/actionCreators';
import PlayListItem from './play-list';
import LyricContent from './lyric-content';

import { Wrapper, Header, Content } from './style';


const SliderPlayList = memo((props) => {
    // 接收父组件传递过来的数据
    const { isShowSlider, playlistCount, closeWindow, playMusic, changeSong } = props;

    console.log(props);

    // redux hooks
    const dispatch = useDispatch();
    const { currentSong, playList, currentSongIndex } = useSelector((state) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        playList: state.getIn(["player", "playList"]),
        currentSongIndex: state.getIn(["player", "currentSongIndex"])
    }), shallowEqual);

    //
    const playListRef = useRef();
    // 歌曲列表拖拽初始化
    useEffect(() => {
        // 获取dom元素
        // const el = 
    }, []);

    // 点击item 播放音乐
    const clickItem = (index, item) => {
        // 请求该音乐相关
        dispatch(getSongDetailAction(item.id));
        // 开始播放
        playMusic();
    }

    return (
        <Wrapper className='sprite_playerbar wrapper'
            style={{ visibility: isShowSlider ? 'visible' : 'hidden' }}
            onClick={(e) => e.stopPropagation()}>
            {/* 顶部的header、包含左右两边 */}
            <Header>
                <div className='playlist-header-left'>
                    <h3>播放列表{playlistCount}</h3>
                    {/*  */}
                    <div>
                        <a className='header-icon'>
                            {/* 图标 */}
                            <HeartOutlined></HeartOutlined>
                            <span>收藏全部</span>
                        </a>
                        <span className='line'>|</span>
                        <a className='header-icon'>
                            <ClearOutlined></ClearOutlined>
                            <span>清除</span>
                        </a>
                    </div>
                </div>
                {/* 右边播放列表header */}
                <div className='playlist-header-right'>
                    <p>{currentSong.name}</p>
                    {/* 关闭按钮 */}
                    <div className='close-window' onClick={closeWindow}>
                        <CloseOutlined></CloseOutlined>
                    </div>
                </div>
            </Header>
            {/* 底部的内容 */}
            <Content>
                {/* 左边的内容 */}
                <div className='main-playlist'>
                    {
                        playList && playList.map((item, index) => {
                            return (
                                <PlayListItem
                                    key={item.id}
                                    isActive={
                                        (currentSongIndex ? currentSongIndex : 0) === index ? 'active' : ''
                                    }
                                    songName={item.name}
                                    singer={item.ar[0].name}
                                    duration={item.dt}
                                    clickItem={() => clickItem(index, item)}
                                    songId={item.id}
                                    nextMusic={() => changeSong(1)}>
                                </PlayListItem>
                            )
                        })
                    }
                </div>
                {/* 右边的歌词内容 */}
                <LyricContent></LyricContent>
            </Content>
        </Wrapper>
    )
})

export default SliderPlayList