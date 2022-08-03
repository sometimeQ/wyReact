import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import PageInation from '@/components/page-ination';
import SongsCover from "@/components/songs-cover";
import { SongsListWrapper } from './style';


const SongsList = memo((props) => {
  // 获取父组件传入的数据
  const { onPageChange, current } = props;

  // 获取数据
  const { categorySongs } = useSelector((state) => ({
    categorySongs: state.getIn(['songlist', 'categorySongs'])
  }), shallowEqual);

 
  // console.log('categorySongs  ' + JSON.stringify(categorySongs));

  if (JSON.stringify(categorySongs) == '{}') {
    return;
  }

  const playlists = categorySongs.data.playlists || [];
  const total = categorySongs.data.total || 0;

  return (
    <SongsListWrapper>
      <div className='play-list'>
          {
          playlists.map((item, index) => {
              return(
                <SongsCover item={item} key={index}></SongsCover>
              )
            })
          }
        </div>
        {/* 底部页码 PageInation ]\PageInation */}
      <div className='page-view'>
        <PageInation
          current={current}
          pageSize={35}
          total={total}
          onChange={onPageChange}>
        </PageInation>
      </div>
    </SongsListWrapper>
  )
})

export default SongsList