import React, { memo, useEffect, useState } from 'react';
import AlbumHot from  './sub-cpns/album-hot';
import AlbumList from './sub-cpns/album-list';
import { getQueryParam } from "@/utils/format-utils";
import { getAlbumTop } from '@/network/album';

import LWPageInation from '@/components/page-ination';
import { AlbumWrapper } from './style';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

// #/discover/album

/**
 * 新碟上架
 */
const Album = memo(() => {
    // 每页数据量
    const PAGE_SIZE = 35;

    const searchParams =  useSearchParams();

    const navgate = useNavigate();

    // 接收跳转传入的参数
    const location = useLocation();
    const { pathname, search } = location;

    // 解析
    let param = searchParams && getQueryParam(pathname + search);
    let index = param.index || 1;
    const area = param.area || "ALL";

    // 总数据大小
    const [total, setTotal] = useState();

    // 数据
    const [albums, setAlbums] = useState();

    // 分页 
    const [currentIndex, setCurrentIndex] =  useState(1);
    

    // 请求数据
    useEffect((state) => {
        getAlbumTop(area, "new", PAGE_SIZE, index * PAGE_SIZE).then((res) => {
            // 赋值
            // console.log('啦啦啦');
            // console.log(res.data);
            // console.log('啦啦啦 over');
            
            setAlbums(res.data.monthData);
            setTotal(res.data.monthData.length);
            setCurrentIndex(index);
        })
    }, [index, area]);

    // 分页按钮点击事件
    function onPageChange(page, pageSize) {
        // 跳转到当前页面，携带参数, 分页才有效果
        navgate(`/discover/album/?area=${area}&index=${page}`)

        setCurrentIndex(page);

        // 移除定时器
        clearInterval(window.timer);
        
        window.timer = setInterval(() => {
            // 记录、向下取值、向上取值
            let step = (0 - window.pageYOffset) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            // 清楚
            if (window.pageYOffset === 0) {
                clearInterval(window.timer);
            }

            // 滚动
            window.scroll(0, window.pageYOffset + step);

        }, 10);
    }

    return (
        <AlbumWrapper>
            {/* 热门新碟 */}
            <AlbumHot></AlbumHot>
            {/* 全部新碟 */}
            <AlbumList albums={albums}></AlbumList>
            {/* 底部的分页 */}
            <LWPageInation 
                current={currentIndex}
                pageSize={PAGE_SIZE}
                total={total}
                onChange={onPageChange}
            ></LWPageInation>
        </AlbumWrapper>
    )
})

export default Album