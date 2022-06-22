import React, { memo } from 'react';
import { UserLoginWrapper } from './style';


const UserLogin = memo(() => {
  return (
      <UserLoginWrapper className='sprite_02'>
            <div>
              <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
              <a href='/login' className='sprite_02'>用回登陆</a>
            </div>
      </UserLoginWrapper>
  )
})

export default UserLogin