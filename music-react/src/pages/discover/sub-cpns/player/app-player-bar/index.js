import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSizeImage, formatDate } from "@/utils/format-utils";
import { CSSTransition } from 'react-transition-group';
import SliderPlayList from './sub-cpns';
import { Slider, message, Tooltip } from "antd";
import {
    changePlayModeAction,
    changeCurrentIndexAndSongAction,
    changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import { getPlaySong } from "@/network/player";
import { Wrapper, Control, PlayInfo, Operator, RightFixWrapper } from './style';
import { NavLink } from 'react-router-dom';




const AppPlayerBar = memo(() => {
    // 是否正在播放
    const [isPlaying, setIsPlaying] = useState(false);
    // 当前播放时间
    const [currentTime, setCurrentTime] = useState(0);
    // 当前进度
    const [progress, setProgress] = useState(0);
    // 音量条位置
    const [volumeProgress, setVolumeProgress] = useState(30);
    // 是否正在拖动进度条
    const [isChanging, setIsChanging] = useState(false);
    // 获取Audio DOM
    const audioRef = useRef();
    // 是否显示音量控制条bar
    const [isShowVolumeBar, setIsShowVolumeBar] = useState(false);
    // 是否正在显示播放列表
    const [isShowPlayList, setIsShowPlayList] = useState(false);

    const dispatch = useDispatch();

    // 获取数据
    const { currentSong, playMode, lyricList, currentLyricIndex, playList } = useSelector((state) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        playMode: state.getIn(["player", "playMode"]),
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
        playList: state.getIn(["player", "playList"])
    }), shallowEqual);

    // 设置音频src来源
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id);
        // 设置音量
        audioRef.current.volume = 0.3;
        // 播放
        // setIsPlaying(true);



        // 拿到播放结果回调
        // audioRef.current.play().then((res) => {
        //     console.log(res);
        //     // 播放
        //     setIsPlaying(true);
        // }).cath((error)  => {
        //     // 不播放
        //     setIsPlaying(false);
        // })
    }, [currentSong]);


    // 歌曲图片
    const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
    // 歌手名
    const singName = (currentSong.ar && currentSong.ar[0].name) || "";
    // 歌曲总时长
    const duration = currentSong.dt || 0;
    const showDuration = formatDate(new Date(duration), "mm:ss");
    // 当前播放时间（显示专用）
    const showCurrentTime = formatDate(new Date(currentTime), "mm:ss");

    // 事件: 播放按钮
    const playMusic = useCallback(() => {
        console.log('playMusic');
        console.log(audioRef.current);
        !isPlaying ? audioRef.current.play() : audioRef.current.pause();
        // 赋值
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    // 事件: 点击上一首、下一首
    const changeMusic = (tag) => {
        // dispatch(changeCurrentIndexAndSongAction(tag));
    };

    // 事件: 滑动滑块时触发
    const sliderChange = useCallback((value) => {
        // 进度最大值为100，需要设置当前歌曲的时间戳
        const currentTime = ((value / 100) * duration) / 1000;

        // console.log(currentTime);

        setIsChanging(true);
        // 设置当前播放的时间
        setCurrentTime(currentTime * 1000);
        //更改进度条的值
        setProgress(value);
    }, [duration]);

    // 事件: 手指抬起时触发
    const sliderAfterChange = useCallback((value) => {
        // 进度最大值为100，需要设置当前歌曲的毫秒
        console.log(value);
        const currentTime = ((value / 100) * duration)  / 1000;
        audioRef.current.currentTime = currentTime;

        // 设置当前播放时间的state,设置的是'毫秒',所以需要 * 1000
        setCurrentTime(currentTime * 1000);
        setIsChanging(false);

        // 是否正在播放
        if (!isPlaying) {
            playMusic();
        }

    }, [duration, isPlaying, playMusic]);

    // 音量按钮被点击
    const btnVolume = () => {
        setIsShowVolumeBar(!isShowVolumeBar);
        console.log('开始点击啦');
        console.log(isShowVolumeBar);
    }

    // 更改音量
    const changingVolume = (value) => {
        console.log('开始更改音量的大小啦');
        console.log(value);
        audioRef.current.volume = value / 100;
        setVolumeProgress(value);
    }

    // 点击播放模式按钮
    const changeMode = () => {
        let currentPlayMode = playMode + 1;
        if (currentPlayMode > 2) {
            currentPlayMode = 0;
        }
        // 播放模式的改变 、单曲、循环、随机
        dispatch(changePlayModeAction(currentPlayMode));
    }

    // audio事件: 播放时间发生更新
    const timeUpdate = (e) => {
        // 没有在滑动滑块时触发(默认】是没有滑动)
        const currentTime = e.target.currentTime;
        console.log('timeUpdate 2');
        // console.log(e);
        console.log(currentTime);
        console.log((currentTime * 1000) / duration);
        console.log('timeUpdate 1');

        // 判断当前进度条是否正在被拖动
        if (!isChanging) {
            // 39.814825 40.077383
            setCurrentTime(currentTime * 1000);
            // 设置当前的进度条 , anted进度条总 100
            setProgress(((currentTime * 1000) / duration) * 100);
        }

        // 改变歌词、时间显示等信息、获取当前的歌词
        let i = 0; // 用于获取歌词的索引
        // 遍历歌词数组
        console.log(lyricList);
        for (i; i < lyricList.length; i++) {
            const lyricElement = lyricList[i];
            // 证明播放时间
            if (lyricElement.time >= currentTime * 1000) {
                console.log('lyricElement.time');
                console.log(lyricElement.time);
                break;
            }
        }

        // 当前歌词索引
        // 对dispatch进行优化,如果index没有改变,就不进行dispatch
        if (currentLyricIndex !== i - 1) {
            console.log('currentLyricIndex begain');
            console.log(currentLyricIndex);
            console.log('currentLyricIndex end');
            dispatch(changeCurrentLyricIndexAction(i - 1));
            // 获取歌词内容
            let content = lyricList[i - 1] && lyricList[i - 1].content;
            // 弹框
            message.open({
                key: "lyric",
                content: content,
                duration: 0,
                className: "lyric",
            })
        }
    }

    // audio事件: 播放器播放完毕
    const handleMusicEnd = (e) => {
        console.log('handleMusicEnd   ==============' + e );
        // 当前音频播放完毕，判断当前的模式
        if (playMode === 2) {
            // 单曲循环
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        } else {
            // 改变播放的模式
            dispatch(changeCurrentIndexAndSongAction(1));
        }
    }

    // 改变播放列表是否显示
    const changePlayListShow = useCallback(() => {
        // 取反
        setIsShowPlayList(!isShowPlayList);
    }, [isShowPlayList]);

    // 播放音乐、改变播放图标
    const forcePlayMusic = () => {
        setIsPlaying(true + Math.random());
    };

    // 切换下一首歌曲,不播放音乐
    const nextMusic = (tag) => {
        // 需要需要派发action,所以具体逻辑在actionCreator中完成
        dispatch(changeCurrentIndexAndSongAction(tag));
        setIsPlaying(false);
    };

    return (
        <div>
            <Wrapper className='test sprite_playerbar'>
                <div className='content wrap-v2'>
                    {/* 播放按钮组 */}
                    <Control isPlay={isPlaying}>
                        <button className='sprite_playerbar prev' onClick={() => changeMusic(-1)}></button>
                        <button className='sprite_playerbar play' onClick={() => playMusic()}></button>
                        <button className='sprite_playerbar next' onClick={() => changeMusic(-1)}></button>
                    </Control>
                    {/* 中间播放信息、进度条 */}
                    <PlayInfo>
                        {/* 歌曲图片 */}
                        <div className='image'>
                            <NavLink exact to={`#/discover/song?id=${currentSong.id}`}>
                                <img src={getSizeImage(picUrl, 35)} alt="" />
                            </NavLink>
                        </div>
                        {/* 歌曲信息 */}
                        <div className='info'>
                            <div className='song'>
                                <span className='song-name'>{currentSong.name}</span>
                                <a href='#/' className='singer-name'>{singName}</a>
                            </div>
                            {/* 进度条  */}
                            <div className='progress'>
                                <Slider
                                    className='slider'
                                    defaultValue={0}
                                    tipFormatter={null}
                                    value={progress}
                                    onChange={(e) => sliderChange(e)}
                                    onAfterChange={(e) => sliderAfterChange(e)}>
                                </Slider>
                                {/* 时间 */}
                                <div className='time'>
                                    <span className='now-time'>{showCurrentTime}</span>
                                    <span className='divider'> / </span>
                                    <span className='duration'>{showDuration}</span>
                                </div>
                            </div>
                        </div>

                    </PlayInfo>
                    {/* 功能按钮 */}
                    <Operator playMode={playMode}>
                        {/* 收藏、分享、 */}
                        <div className='left'>
                            {/* 收藏按钮 */}
                            <button className='btn favor sprite_playerbar'></button>
                            {/* 分享按钮 */}
                            <button className='btn share sprite_playerbar'></button>
                        </div>
                        {/* 音量播放选项 */}
                        <div className='right sprite_playerbar'>
                            {/* 长的竖着的音量条 */}
                            {
                                isShowVolumeBar && <div
                                    className='volume sprite_playerbar'
                                    onMouseLeave={() => { setIsShowVolumeBar(false); }}>
                                    <div className='slider'>
                                        <Slider vertical defaultValue={100} 
                                                value={volumeProgress}
                                                tipFormatter={null}
                                                onChange={(e) => changingVolume(e)}></Slider>
                                    </div>
                                </div>
                            }
                            {/* 音量按钮 */}
                            <button className='sprite_playerbar btn icon-volume' onClick={(e) => btnVolume()} ></button>
                            {/* 循环按钮 */}
                            <button className='sprite_playerbar btn icon-loop' onClick={(e) => changeMode()}></button>
                            {/* 播放列表 */}
                            <button className='sprite_playerbar btn icon-playlist'
                                onClick={() => setIsShowPlayList(!isShowPlayList)}>
                                <Tooltip title={'播放列表'}>
                                    <span>{playList && playList.length}</span>
                                </Tooltip>
                                {/* 播放列表组件动画 */}
                                <CSSTransition classNames="playlist" in={isShowPlayList} timeout={3000} >
                                    <SliderPlayList
                                        isShowSlider={isShowPlayList}
                                        playlistCount={playList.length}
                                        closeWindow={changePlayListShow}
                                        playMusic={forcePlayMusic}
                                        changeSong={nextMusic}
                                        isPlaying={isPlaying}>
                                    </SliderPlayList>
                                </CSSTransition>
                            </button>
                        </div>
                    </Operator>
                </div>
                {/* 音频 */}
                <audio ref={audioRef} onTimeUpdate={(e) => timeUpdate(e)} onEnded={(e) => handleMusicEnd(e)}></audio>
            </Wrapper>
            {/* 固定 底部bar */}
            <RightFixWrapper>
                <div className='fileds sprite_playerbar'>
                    <button className='sprite_playerbar btn icon-lock'></button>
                </div>
            </RightFixWrapper>
        </div>
    )
})

export default AppPlayerBar