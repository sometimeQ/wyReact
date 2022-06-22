// 配置路由
import React from "react"; 
import { useRoutes, Navigate } from 'react-router-dom';

// 懒加载路由，节约性能
const LWDiscover = React.lazy(() => import("@/pages/discover"));
const LWRecommend = React.lazy(() => import("@/pages/discover/sub-cpns/recommend"));
const HYRanking = React.lazy(() => import("@/pages/discover/sub-cpns/ranking"));
const LWSongs = React.lazy(() => import('@/pages/discover/sub-cpns/songs'));

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
                // render: () => {
                //     <Navigate to='/discover/recommend'></Navigate>
                // }
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
            }
        ]
    },
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