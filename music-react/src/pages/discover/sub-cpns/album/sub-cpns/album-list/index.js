import React, { memo } from 'react';

import ThemeHeader from "@/components/theme-header-rcm";
import { getSizeImage } from "@/utils/format-utils";
import { AlbumListWrapper } from './style';



/**
 * 全部新碟
 */
const AlbumList = memo((props) => {
    // 接收父组件传递过来的数据
    const { albums } = props;
 
    // 整合导航栏数据、标题、跳转的url
    const links = [
        {
            title: "全部",
            url: "#/discover/album/?area=ALL",
        },
        {
            title: "华语",
            url: "#/discover/album/?area=ZH",
        },
        {
            title: "欧美",
            url: "#/discover/album/?area=EA",
        },
        {
            title: "韩国",
            url: "#/discover/album/?area=KR",
        },
        {
            title: "日本",
            url: "#/discover/album/?area=JP",
        },
    ];

    return (
        <AlbumListWrapper>
            <div  className='header'>
                <ThemeHeader title='全部新碟' links={links} ></ThemeHeader>
            </div>
            <div className='album-list'>
                {
                    albums && albums.splice(0, 35).map((item, index) => {
                        return (
                            <div className='album-item' key={index}>
                                {/* 图片 */}
                                <div className='image'>
                                    <img src={getSizeImage(item.picUrl, 130)} alt='' />
                                    {/* 背景 */}
                                    <a className='msk sprite_covor' href={`#/album?id=${item.id}`} title={item.name}></a>
                                    {/* 播放 */}
                                    <i className='icon-play sprite_icon'></i>
                                </div>
                                {/* 名字 */}
                                <p className='title'>
                                    <a className='text-nowrap' href={`#/album?id=${item.id}`} title={item.name}>{item.name}</a>
                                </p>
                                {/* 描述 */}
                                <p className='artists text-nowrap'>
                                    {
                                        item.artists.map((iten, indey) => {
                                            return (
                                                <span key={indey}>
                                                    <a href={`#/artist?id=${iten.id}`}>{iten.name}</a>
                                                    {
                                                        indey < item.artists.length - 1 && <span> / </span>
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </p>    
                            </div>
                        )
                    })
                }
            </div>
        </AlbumListWrapper>
    )
})

export default AlbumList