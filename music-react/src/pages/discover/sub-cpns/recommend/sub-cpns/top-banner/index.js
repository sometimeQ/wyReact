import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';
import { getTopBannersAction } from '../../store/actionCreators';
import { Carousel } from "antd";
import { getSizeImage } from '@/utils/format-utils';


const TopBanner = memo(() => {
    // 保存轮播图的索引拿到背景图片
    const [currentIndex,  setCurrentIndex] = useState(0);

    // 组件和redux关联，获取数据和操作
    // 共享状态,从Redux的store中提取数据（state）
    // 返回一个对象，然后是对象的解构
    const { topBanners } = useSelector((state) => ({
        // 根路径下store 合并的reducer，--》 对应的reducer.js里面的set的值
        topBanners: state.getIn(['recommend', 'topBanners']),
    }), shallowEqual); // shallowEqual 优化，

    // 发送异步网络请求，结合使用
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannersAction());
    }, [dispatch]); // 要求传入的


    // beforeChange, 把一个函数作为一个参数传递一个组件里面，一定要应用useCallback,做一个缓存，做一个记忆
    const beforeChange = useCallback((from, to) => {
        // 定时器
        setTimeout(() => {
            setCurrentIndex(to);
        }, 0);

        console.log(from);
        console.log('------------');
        console.log(to);

    }, []); // [] ,依赖是否观察


    // 其他逻辑,高斯模糊
    const backgroundImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl;
    // 获取dom元素
    const bannerRef = useRef(null);

    return (
        // 参数传递到 style样式里面
        <BannerWrapper backgroundImage={backgroundImage}>
            <div className='banner wrap-v2'>
                {/* 左侧轮播图 */}
                <BannerLeft>
                    {/* 引入anted 组件 */}
                    <Carousel ref={bannerRef} autoplay="true" effect='fade' beforeChange={beforeChange}>
                      {
                          topBanners.map((item, index) => {
                              const url = item.url || ` / song ? id =${item.encodeId}`;
                              return(
                                  <div key={item.imageUrl}>
                                      <a href={url} target={item.url ? '_blank' : ''} rel="noreferrer">
                                          <img className='image'
                                               src={getSizeImage(item.imageUrl, 730)}
                                               alt={item.typeTitle}
                                          />
                                      </a>
                                  </div>
                              )
                          })
                      }
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <p className='title'>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
                </BannerRight>
                <BannerControl>
                    <div>
                        {/* anted 自带的方法prev */}
                        <button className='btn left' onClick={(e) => { bannerRef.current.prev() }}></button>
                        <button className='btn right' onClick={(e) => { bannerRef.current.next() }}></button>
                    </div>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TopBanner