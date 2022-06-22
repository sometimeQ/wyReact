import React, { memo } from 'react';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { hotRadios } from '@/common/local-data';
import { getSizeImage } from '@/utils/format-utils';
import { HotRadioWrapper } from './style';

const HotRadio = memo(() => {
  return (
      <HotRadioWrapper>
          <ThemeHeaderSmall title='热门主播' />
          <div className='radio-list'>
             {
                hotRadios.map((item, index) => {
                    return(
                        <div className='item' key={item.picUrl}>
                            <a href={item.url}>
                                <img src={getSizeImage(item.picUrl, 40)} alt='' />
                            </a>
                            <div className='info'>
                                <a className='name'>{item.name}</a>
                                <p className='position'>{item.position}</p>
                            </div>
                        </div>
                    )
                })
             }
           </div>
      </HotRadioWrapper>
  )
})

export default HotRadio