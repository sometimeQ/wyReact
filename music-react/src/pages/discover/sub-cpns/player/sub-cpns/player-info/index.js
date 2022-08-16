import React, { memo, useState } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { getSizeImage } from '@/utils/format-utils';
import SongOperationBar from '@/components/song-operation-bar';
import { Wrapper } from './style';



/**
 * 歌曲信息
 */
const PlayerInfomation = memo(() => {

    const [showMoreText, setShowMoreText] = useState(false);

    // 获取数据
    const { currentSong, lyricList } = useSelector((state) => ({
        currentSong: state.getIn(["player", "currentSong"]),
        lyricList: state.getIn(["player", "lyricList"])
    }), shallowEqual);

    // 歌曲图片
    const picUrl = (currentSong.al && currentSong.al.picUrl) || '未知歌曲';
    // 歌手名字
    const singName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
    // 所属专辑
    const alName = (currentSong.al && currentSong.al.name) || '未知专辑';

    const showMoreClick = () => {
        // console.log('店家啦展开');
        setShowMoreText(!showMoreText);
    }

    return (
        <Wrapper>
            {/* 左侧图片 */}
            <div className='image'>
                <div className='image-box'>
                    <img src={getSizeImage(picUrl, 130)} alt='' />
                    <span className='cover sprite_covor'></span>
                </div>
                {/* 连接 */}
                <div className='createPlayer'>
                    <i className='icon-music sprite_icon2'></i>
                    <a href={`https://music.163.com/#/outchain/2/${currentSong.id}`}>生成外链播放器</a>
                </div>
            </div>
            {/* 右侧信息 */}
            <div className='dnt'>
                <div className='title'>
                    {/* 图标 */}
                    <i className='icon-type sprite_icon2'></i>
                    <h2>{currentSong.name}</h2>
                    <p className='des'>歌手：<span>{singName}</span></p>
                    <p className='des'>专辑：<span>{alName}</span></p>
                </div>
                {/* 按钮组 */}
                <SongOperationBar
                    favorTitle="收藏"
                    shareTitle="分享"
                    downloadTitle="下载"
                    commentTitle="(167366)"
                ></SongOperationBar>
                {/* 歌词 */}
                <div className='lyricList'>
                    {
                        !showMoreText && <div className='lyricList-short'>
                            {
                                lyricList.map((item, index) => {
                                    if (item.content !== "") {
                                        return (
                                            <p key={index}>{item.content}</p>
                                        )
                                    } else {
                                        return (
                                            <br key={index}></br>
                                        )
                                    }
                                })
                            }
                        </div>
                    }
                    {
                        showMoreText && lyricList.map((item, index) => {
                            if (item.content !== "") {
                                return (
                                    <p key={index}>{item.content}</p>
                                )
                            } else {
                                return (
                                    <br key={index}></br>
                                )
                            }
                        })
                    }
                </div>
                {/* 展开、收起 */}
                <div className='toger' onClick={() => showMoreClick()}>
                    <span className='toger-a' >{showMoreText == true ? '收起' : '展开'}
                        <i className={showMoreText ? "ud-icnd sprite_icon2" : "u-icn sprite_icon2"}></i>
                    </span>
                </div>
            </div>
        </Wrapper>  

        
    )
})

export default PlayerInfomation