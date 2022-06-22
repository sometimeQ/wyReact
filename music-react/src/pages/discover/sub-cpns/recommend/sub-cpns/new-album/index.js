import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover';
import { getNewAlbumAction } from "../../store/actionCreators";
import { NEW_ALBUM_PER_PAGE } from '@/common/contants';


import {
    NewAlbumWrapper
} from './style';
import { Carousel } from 'antd';

const NewAlbum = memo(() => {
    //  网络请求
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction());
    }, [dispatch]);

    // 拿到redux里面的数据进行结构
    const { newAlbums } = useSelector((state) => ({
        newAlbums: state.getIn(['recommend', 'newAlbums']),
    }), shallowEqual);

    // 拿到dom元素进行操作
    const pageRef = useRef();

    // 其他逻辑
    const title = '新碟上架';
    const moreLink = '';
    // 走马灯轮播图展示两页
    const carouselArray = [0, 1];
    
    console.log(newAlbums);
    console.log("wan比");
    
    return (
        <NewAlbumWrapper>
            {/* 标题栏 */}
            <ThemeHeaderRCM title={title} moreLink={moreLink}></ThemeHeaderRCM>
            {/* 底部的songs数据 */}
            <div className='content'>
                {/* 左边的控制选项上一页 */}
                <button className='arrow arrow-left sprite_02' onClick={(e) => { pageRef.current.prev() }}></button>
                <div className='album'>
                    {/* 中间的横着的列表数据，引入anted */}
                    <Carousel ref={pageRef}>
                        {
                            // [0, 1] -> item *5 到 (item + 1) * 5; 0~5; 5~10;
                            carouselArray.map((item) => {
                                return (
                                    <div className='page' key={item}>
                                        {/* 里面的歌曲组件 */}
                                         {
                                            newAlbums.slice(item * NEW_ALBUM_PER_PAGE, (item + 1) * NEW_ALBUM_PER_PAGE).map(
                                                (iten, indey) => {
                                                    return (
                                                        <AlbumCover 
                                                        key={iten.id}
                                                        info={iten}
                                                        title={iten.name}
                                                        size={100}
                                                        width={118}
                                                        bacgroundpositon={-570+'px'}
                                                        // 跳转的link
                                                        >
                                                            {iten.name}
                                                        </AlbumCover>
                                                    )
                                                }
                                            )
                                         }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                {/* 右边的控制选项下一页 */}
                <button className='arrow arrow-right sprite_02' onClick={(e) => { pageRef.current.next()  }}></button>
            </div>
        </NewAlbumWrapper>
    )
})

export default NewAlbum