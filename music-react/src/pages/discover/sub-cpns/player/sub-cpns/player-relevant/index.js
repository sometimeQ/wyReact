import React, { memo, useEffect } from 'react';
import ThemeHeaderSmall from "@/components/theme-header-small";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getSongDetailAction } from "../../store/actionCreators";
// import { addSongtoListAction } from "@/pages/player/store/actionCreators";
import { PlayerRelevantWrapper } from './style';



/**
 * 相似歌单
 */
const PlayerRelevant = memo(() => {
    // 获取数据
    const dispatch =  useDispatch();
    const { simiSongs } = useSelector((state) => ({
        simiSongs: state.getIn(["player", "simiSongs"])
    }), shallowEqual);
    

    return (
        <PlayerRelevantWrapper>
            <ThemeHeaderSmall title='相似歌单'></ThemeHeaderSmall>
            <div className=''>
                {
                    simiSongs.map((item, index) => {
                        return (
                            <div className='simi-list' key={index}>
                                {/* 左边的信息 */}
                                <div className='left'>
                                    {/* 相似歌曲名 */}
                                    <div className='song-info'>
                                        <a className='text-nowrap' href={`#/discover/song?id=${item.id}`}>{item.name}</a>
                                    </div>
                                    {/* 相似歌曲 歌手 */}
                                    <div className='artist-list'>
                                        {
                                            item.artists.map((iten, indey) => {
                                                return (
                                                    <span className='artist-info' key={iten.name} title={iten.name}>
                                                        <a>{iten.name}</a>
                                                        {/* 增加中间的分割符号 */}
                                                        {
                                                            indey < item.artists.length - 1 && <span>/</span>
                                                        }
                                                    </span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                                {/* 右边的信息 */}
                                <div className='right'>
                                    {/* 播放按钮 */}
                                    <a className='play sprite_icon3' title='播放' 
                                        onClick={() => dispatch(getSongDetailAction(item.id))}>
                                    </a>
                                    {/* 添加按钮 */}
                                    <a className='add-list sprite_icon3' title='添加到播放列表'
                                        onClick={() => dispatch(getSongDetailAction(item.id))}>
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </PlayerRelevantWrapper>
    )
})

export default PlayerRelevant