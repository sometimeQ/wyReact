// 配置路由
import React from "react"; 
import { useRoutes, Navigate } from 'react-router-dom';

// 懒加载路由，节约性能
const LWDiscover = React.lazy(() => import("@/pages/discover"));
const LWRecommend = React.lazy(() => import("@/pages/discover/sub-cpns/recommend"));
const HYRanking = React.lazy(() => import("@/pages/discover/sub-cpns/ranking"));
const LWSongs = React.lazy(() => import('@/pages/discover/sub-cpns/songs'));


// 歌单详情列表
const LWPlayList = React.lazy(() => import('@/pages/discover/sub-cpns/playlist'));
const LWDJRadio = React.lazy(() => import('@/pages/discover/sub-cpns/djradio/sub-cpns/djradio'));
const LWDJRadio_Category = React.lazy(() => import('@/pages/discover/sub-cpns/djradio/sub-cpns/category'));

// 歌曲详情
const LWPlayer = React.lazy(() => import("@/pages/discover/sub-cpns/player"));

// 歌手
const LWArist = React.lazy(() => import('@/pages/discover/sub-cpns/artist'));
// 新碟上架
const LWAlbum = React.lazy(() => import('@/pages/discover/sub-cpns/album'));

const LWFriend = React.lazy(_ => import("@/pages/friend"));
const LWMine = React.lazy(_ => import("@/pages/mine"));

// 定义路由
const routes = [
    {
        path: '/',
        expect: true, // 精准定位
        element: <Navigate to='/discover'></Navigate>
        // render: () => {
        //     <Navigate to='/discover'></Navigate>
        // }
    },
    {
        path: '/discover',
        element: <LWDiscover />,
        // 子路由
        children: [
            {
                path: '/discover',
                expect: true,
                element: <Navigate to='/discover/recommend'></Navigate>
            },
            {
                path: '/discover/recommend', // 推荐
                element: <LWRecommend />
            },
            {
                path: '/discover/ranking', // 排行榜
                element: <HYRanking />
            },
            {
                path: '/discover/songs', // 歌单
                element: <LWSongs />
            },
            {
                path: "/discover/playlist", // 歌单详情
                element: <LWPlayList />
            },
            {
                path: "/discover/djradio", // 文件夹名字保持一致
                element: <LWDJRadio />
            },
            {
                path: "/discover/djradio/category", // 电台分类进入
                element: <LWDJRadio_Category />
            },
            {
                path: "/discover/artist/*", // 歌手、加*号是模糊匹配
                element: <LWArist />
            },
            {
                path: '/discover/album/*',
                element: <LWAlbum /> // 新碟上架
            },
            {
                path: '/discover/song', // 歌曲
                // expect: true,
                element: <LWPlayer />
            }
        ]
    },
    // {
    //     path: '/song/*', // 歌曲
    //     element: <LWPlayer />
    // },
    {
        path: '/friend',
        element: <LWFriend />,
    },
    {
        path: '/mine',
        element: <LWMine />,
    }
];

// 遍历
const wrappeRoutes = (routes) => {
    // 返回一个key:value的新数组
    return routes.map((item) => {
        // 数组的话继续遍历
        if (item.children) {
            item.children = wrappeRoutes(item.children);
        }
        // 取元素、加载中
        item.element = (
            <React.Suspense 
                fallback={<div>正在加载中...</div>}>
                {item.element}
            </React.Suspense>
        );
        return item;
    })
};

// 使用V6 useRoutes钩子函数
const Router = () => {
    const router = useRoutes(wrappeRoutes(routes))
    return router
};

export default Router;