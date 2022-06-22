import React, { memo, useState } from 'react';

import { 
  SongHeaderWrapper,
  SongHeaderLeft
 } from './style';

const SongHeader = memo(() => {
  // hooks
  const [showCategory, setShowCategory] = useState();
  
  // 其他

  return (
    <SongHeaderWrapper>
        <SongHeaderLeft>
            <h1></h1>
            <button onClick={(e) => setShowCategory(!showCategory)}></button>
        </SongHeaderLeft>
    </SongHeaderWrapper>
    
  )
})

export default SongHeader