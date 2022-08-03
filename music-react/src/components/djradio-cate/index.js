import React, { memo, useRef } from 'react';
import { Carousel } from 'antd';
import { DjradioCateWrapper, CateItemWrapper } from './style';
import { shallowEqual, useSelector } from 'react-redux';
import { getQueryParam } from "@/utils/format-utils";
import { useSearchParams } from 'react-router-dom';


/**
 * 顶部的主播电台分类、点击跳转进来的页面
 */
const DjradioCate = memo((props) => {
    // 获取其他界面跳转的数据
    const [searchParams, setSearchParams] = useSearchParams();

    let params = getQueryParam(searchParams);

    console.log(params);

    // 获取数据
    const { cateList } = useSelector(
        (state) => ({
            cateList: state.getIn(["discoverDjradio", "cateList"]),
        }), shallowEqual);

    const categories = cateList.categories || [];
    const PAGE_SIZE = 18; // 一页显示多少个



    // console.log(categories);

    // let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    // let myBest = fruits.slice(-3, -1); // 开始位置，结束位置
    // console.log(myBest); ['Lemon', 'Apple']
    // split, 返回一个新数组,

    // 拿到ref dom元素
    const carouselRef = useRef();

    return (
        <DjradioCateWrapper> 
            {/* 左边的箭头 */}
            <i className='icon-prev radio_slide' onClick={() => carouselRef.current.prev()}></i>
            {/* 中间的轮播图 */}
            <div className='cate-list'>
                <Carousel ref={carouselRef} effect="fade" autoplay={searchParams.lenth > 0 ? true  : false} dots={true}>
                    {
                        // 总共2页码 以此类推 3 4 页码
                        [1, 2].map((item, index) => {
                            return (
                                <div className='page' key={index}>
                                    {
                                        // 两个参数，开始，结束位置，截取
                                        /**
                                         * item = 1 ==> 1 - 1 * 18; 得到 0
                                         * 18 * 1 = 18
                                         * 范围就是 0 ~ 18 ,以此类推
                                         */
                                        categories.slice((item - 1) * PAGE_SIZE, PAGE_SIZE * item).map((iten, indey) => {
                                            return (
                                                // 传值到style.js 里面
                                                <CateItemWrapper cateIcon={iten.picWebUrl} key={indey}>
                                                    <a className='cate-link' href={`#/discover/djradio/category?id=${iten.id}`}>
                                                        <i className='icon'></i>
                                                        <p className='title'>{iten.name}</p>
                                                    </a>
                                                </CateItemWrapper>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            {/* 右边的箭头 */}
            <i className='icon-next radio_slide' onClick={() => carouselRef.current.next()}></i>
        </DjradioCateWrapper>
    )
})

export default DjradioCate