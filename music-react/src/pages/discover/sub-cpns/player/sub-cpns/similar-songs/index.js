import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ThemeHeaderSmall from "@/components/theme-header-small";
import { getSizeImage } from "@/utils/format-utils";

import { PlayerSongsWrapper } from './style';

const PlayerSongs = memo(() => {
    // 获取数据
    const { simiPlaylist } = useSelector((state) => ({
        simiPlaylist: state.getIn(["player", "simiPlaylist"])
    }), shallowEqual);

    console.log('啦啦啦');
    console.log(simiPlaylist);

    // 数据
    const playlists = simiPlaylist && simiPlaylist.playlists || [];

    return (
        <PlayerSongsWrapper>
            {/* 头部 */}
            <ThemeHeaderSmall title='包含这首歌的歌单'></ThemeHeaderSmall>
            <div className='playlist-list'>
                {
                    playlists.map((item, index) => {
                        return (
                            <div className='playlist-item' key={index}>
                                {/* 图片 */}
                                <div className='image'>
                                    <a href={`#/discover/playlist?id=${item.id}`} title={item.name}>
                                        <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.creator.nickname} />
                                    </a>
                                </div>
                                {/* 右边的信息 */}
                                <div className='info'>
                                    <h2 className='title'>
                                        <a className="text-nowrap" href={`#/discover/playlist?id=${item.id}`} title={item.name}>
                                            {item.name}
                                        </a>
                                    </h2>
                                    <p className='auchor'>
                                        <span className='by'>by </span>
                                        <a className='nickname' href={`/user/home?id=${item.creator.userId}`}>{item.creator.nickname}</a>
                                    </p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </PlayerSongsWrapper>
    )
})

export default PlayerSongs