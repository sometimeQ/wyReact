import React, { memo } from 'react'

import { dicoverMenu } from '@/common/local-data'

import { LWMenuWrapper } from './style'
import { NavLink } from 'react-router-dom';

const LWMenu = memo(() => {
  return (
    <LWMenuWrapper className='wrap-v2'>
        {
        dicoverMenu.map((item) => {
              return (
                <div className='item' key={item.link}>
                    <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
          })
        }
    </LWMenuWrapper>
  )
})

export default LWMenu