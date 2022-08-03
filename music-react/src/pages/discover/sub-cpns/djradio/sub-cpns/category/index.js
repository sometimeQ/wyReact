import React, { memo, useEffect } from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import {
    getDjradioCateListAction,
    getDjradioRecommendHotAction,
    getExcellentDjradioAction,
} from "../../store/actionCreators";
import { getQueryParam } from "@/utils/format-utils";
import { DjradioCategoryWrapper } from './style';
import DjradioCate from '@/components/djradio-cate';
import ExcellentDjradio from '../category/excellent-djradio';
import DjradioTopList from './djradio-toplist';
import PageInation from "@/components/page-ination";
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const DjradioCategory = memo((props) => {
    const PAGE_SIZE = 30;

    const [searchParams, setSearchParams] = useSearchParams();
    // console.log('开始解析啦');
    // console.log(searchParams);

    let params = getQueryParam(searchParams);
    let id = params.id || '2';
    const offset = params && params.offset || 0;

    // 当前页数
    let currentPage = offset / PAGE_SIZE + 1;

    const navigate = useNavigate();

    const dispatch = useDispatch();
    useEffect(() => {
        // 电台分类
        dispatch(getDjradioCateListAction());
        // 优秀新电台
        dispatch(getExcellentDjradioAction(id));
        // 电台排行榜
        dispatch(getDjradioRecommendHotAction(id, PAGE_SIZE, offset));
    }, [id, offset, dispatch]);

    // 获取数据
    const { recommendHot } = useSelector((state) => ({
        recommendHot: state.getIn(['discoverDjradio', 'recommendHot']),
    }), shallowEqual);

    // 分页按钮事件
    function onPageChange(page, pageSize) {
        // console.log(page, pageSize);
        // 跳转传值
        navigate(`/discover/djradio/category?id=${id}&offset=${(page - 1) * pageSize}`);

        // 滚动到顶部, 每次清楚定时器，在添加
        clearInterval(window.timer);

        // 添加定时器
        window.timer = setInterval(() => {
            let step = (0 - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            if (window.pageYOffset ===  0) {
                // 清楚定时器
                clearInterval(window.timer);
            }

            // 开始滚动动画
            window.scroll(0, window.pageYOffset + step);

        }, 10);
    }

    return (
        <DjradioCategoryWrapper>
            {/* 顶部轮播图 */}
            <DjradioCate></DjradioCate>
            {/* 优秀电台 */}
            <ExcellentDjradio></ExcellentDjradio>
            {/* 电台排行榜 */}
            <DjradioTopList />
            {/* 分页按钮 */}
            <div className='page'>
                {
                    recommendHot.djRadios && <PageInation
                        current={currentPage}
                        pageSize={PAGE_SIZE}
                        total={recommendHot.count}
                        onChange={onPageChange}
                    />
                }
            </div>
        </DjradioCategoryWrapper>
    )
})

export default DjradioCategory