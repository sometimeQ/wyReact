import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ThemeHeaderSmall from '@/components/theme-header-small';
import { getSizeImage } from '@/utils/format-utils';
import { getSettleSingers } from '../../store/actionCreators';
import { SettleSingerWrapper, SingerInfoWrapper } from './style';

const SettleSinger = memo(() => {
   // redux
   const dispath = useDispatch();   
   const state = useSelector((state) => ({
        // 取值
       settleSings : state.getIn(['recommend', 'settleSings'])
   }), shallowEqual);

   // hooks,发送网络请求数据
   useEffect(() => {
       dispath(getSettleSingers());
   }, [dispath]);

    // 引入其他header
    console.log(state.settleSings);
    console.log('??????????????????????????');
    return (
        <SettleSingerWrapper>
            {/* 头部 */}
            <ThemeHeaderSmall title='入驻歌手' href='/discover/artist/signed/' />
            {/* 布局 */}
            <div className='singer-list'>
                {
                    // 遍历
                    // state.settleSings.slice(0, 5)
                    state.settleSings !== undefined && state.settleSings.slice(0, 5).map((item, index) => {
                        return (
                            <SingerInfo
                                key={item.name}
                                url={item.url}
                                className='singer'
                                img={getSizeImage(item.img1v1Url, 62)}
                                author={item.alias.join("") || item.name}
                                text={item.name}
                            >
                            </SingerInfo>
                        )
                    })
                }
            </div>
            {/* 底部 */}
            <div className='apply-for'>
                <a href='https://music.163.com/st/musician#/' target='_blank'>申请成为网易音乐人</a>
            </div>
        </SettleSingerWrapper>
    )
})

export default SettleSinger

// 封装
const SingerInfo = memo((props) => {
    // 接收传递过来的参数
    const { url, img, author, text } = props;
    return (
        <SingerInfoWrapper>
            <a href={url} target='_' className='item'>
                <img src={img} alt='' />
                <div className='info'>
                    <div className='title'>{author}</div>
                    <div className='name'>{text}</div>
                </div>
            </a>
        </SingerInfoWrapper>
    )
})
