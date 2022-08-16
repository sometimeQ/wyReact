import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ThemeHeader from "@/components/theme-header-rcm";
import { getSizeImage } from "@/utils/format-utils";
import { ArtistListWrapper } from './style';


const ArtistList = memo(() => {

    // 获取数据
    const { aristClassifyList } = useSelector((state) => ({
        aristClassifyList: state.getIn(['arist', 'aristClassifyList'])
    }), shallowEqual);

    let artists = aristClassifyList.artists || [];

     // 字母排序
    let letterList = [];
    for (let i = 0; i < 26; i++) {
        letterList.push(String.fromCharCode(65 + i));
    }



    return (
      <ArtistListWrapper>
        <ThemeHeader title="热门歌手"></ThemeHeader>
        {/* 字母排序导航 */}
        <div className='letter-list'>
            <a className='letter-item'>热门</a>
            {
              letterList.map((item, index) => {
                return (
                    <a className='letter-item' key={index}>{item}</a>
                )
              })
            }
            <a className='letter-item'>其他</a>
        </div>

        {/* 列表数据 */}
        <div className='artists-list'>
            {
                artists.splice(0, 10).map((item, index) => {
                    return (
                        <div className='cover' key={index}>
                            {/* 图片 */}
                            <div className='image'>
                                <img src={getSizeImage(item.img1v1Url, 130)} alt='' />
                                {/* 白色的遮罩 */}
                                <a className='msk sprite_covor'></a>
                            </div>
                            <div className='info'>
                                <a>{item.name}</a>
                                <a href={`/user/home?id=${item.accountId}`} title={`${item.name}的个人主页`}>
                                    <i className='icon-user sprite_icon2'></i>
                                </a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        {/* 名字列表数据 */}
        <div className='artists-title-list'>
            {
                artists.map((item, index) => {
                    return (
                        <div className='list-item' key={index}>
                            <a href={`/artist?id=${item.id}`} title={`${item.name}的音乐`}>{item.name}</a>
                            <a href={`/user/home?id=${item.accountId}`} title={`${item.name}的个人主页`}>
                                <i className='icon-user sprite_icon2'></i>
                            </a>
                        </div>
                    )
                })
            }
        </div>
      </ArtistListWrapper>
    )
})

export default ArtistList