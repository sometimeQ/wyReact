import React, { memo } from 'react';
import { Spin } from 'antd';
import { Wrapper } from './style';

const AppLoading = memo(() => {
    return (
        <Wrapper>
            <Spin className='load' tip="正在加载中···" size='large'></Spin>
        </Wrapper>
    )
})

export default AppLoading