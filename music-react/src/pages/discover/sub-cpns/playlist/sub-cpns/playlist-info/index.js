import React, { memo, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { formatDate, getSizeImage } from "@/utils/format-utils";
import SongOperationBar from '@/components/song-operation-bar';
import SongTag from '@/components/song-tag';

import { Left, Right, Wrapper } from './style';


const PlayListInfo = memo(() => {
  const [showMoreText, setShowMoreText] =  useState(false);

  // 获取数据
  const { playListDetail } = useSelector((state) => ({
    playListDetail: state.getIn(['playlist', 'playListDetail'])
  }), shallowEqual);

  // useEffect((state) => {
  //   console.log('showMoreText');
  // }, [showMoreText])

  // 整合数据
  const playlist = playListDetail.playlist || {};
  const creator = playlist.creator || {};
  const tags = playlist.tags || [];
  
  // 日期
  const createTime = formatDate(new Date(playlist.createTime), 'yyyy-MM-dd');
  // 介绍
  const showDescription = '介绍: ' + playlist.description || '';
  
  const showMoreClick = () => {
    console.log('店家啦展开');
    setShowMoreText(!showMoreText);
  }

  return (
    <Wrapper>
      <Left>
        <img src={getSizeImage(playlist.coverImgUrl, 200)} alt=""></img>
        <span className='msk sprite_covor'></span>
      </Left>
      <Right>
          <div className='hand'>
            <i className='icon-playlist sprite_icon2'></i>
            <h2 className='title'>{playlist.name}</h2>
          </div>
          {/* 用户信息 */}
          <div className='user'>
            {/* 图 */}
            <a className='avatar-img'>
              <img src={getSizeImage(creator.avatarUrl, 40)} alt=""></img>
            </a>
            {/* 图标 */}
            <a className='avatar-name' href={`#/user/home?id=${creator.userId}`}>{creator.nickname}</a>
            <i className='icon-star sprite_icon2'></i>
            {/* 日期 */}
            <span className='create-time'>{createTime} 创建</span>
          </div>
          {/* 播放控制栏 */}
          <div className='song-operation-bar'>
            <SongOperationBar
              // className='song-operation-bar'
              favorTitle={`${playlist.subscribedCount}`}
              shareTitle={`${playlist.shareCount}`}
              downloadTitle='下载'
              commentTitle={`${playlist.commentCount}`}
            />
          </div>
          {/* 标签 */}
          <div className='tags'>
            <span className='tags-title'>标签:</span>
            {
              tags.map((item, index) => {
                return (
                  <SongTag key={index} title={item} href={'#/discover/playlist/?cat=${item}&order=hot`'}></SongTag>
                )
              })
            }
          </div>
        <div className='album'>
            {/* <i className='album-trs'>介绍: </i> */}
          {/* <b>介绍: </b> */}
              {
                !showMoreText && <p className='album-short'>
                  {
                     showDescription.split("\n").reduce((preValue, item) => {
                      return (
                        <span>
                          {preValue}
                          {item}
                          <br></br>
                        </span>
                      )
                    }, "")
                  }
                </p>
              }
              {
                showMoreText && <span className='album-detaile'>
                  {
                    showDescription.split("\n").reduce((preValue, item) => {
                      return (
                        <span>
                          {preValue}
                          {item}
                          <br></br>
                        </span>
                      )
                    }, "")
                  }
                </span> 
              }
          </div>
        <div className='toger' onClick={() => showMoreClick()}>
            <span className='toger-a' >{showMoreText == true ? '收起' : '展开'}
            <i className={showMoreText ? "ud-icnd sprite_icon2" : "u-icn sprite_icon2"}></i>
            </span>
          </div>
      </Right>
    </Wrapper>
  )
})

export default PlayListInfo