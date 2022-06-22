import React, { memo } from 'react';
import SongHeader from './sub-cpns/songs-header';
import SongsList from './sub-cpns/songs-list';
import { LWSongsWrapper } from './style';

const LWSongs = memo(() => {
  return (
    <LWSongsWrapper>
       <SongHeader />
       <SongsList />
    </LWSongsWrapper>
  )
})

export default LWSongs