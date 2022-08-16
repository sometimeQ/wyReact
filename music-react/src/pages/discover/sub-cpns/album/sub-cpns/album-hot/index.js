import React, { memo, useEffect } from 'react';
import ThemeHeader from "@/components/theme-header-rcm";
import { getNewAlbumAction } from '../../../recommend/store/actionCreators';
import { getSizeImage } from "@/utils/format-utils";
import { AlbumHotWrapper } from './style';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const AlbumHot = memo(() => {
    // 网络请求
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewAlbumAction());
    }, [dispatch]);


    // 获取数据
    const { newAlbums } = useSelector((state) => ({
        newAlbums: state.getIn(['recommend', 'newAlbums'])
    }), shallowEqual);
    
    // console.log('取出来数据啦');
    // console.log(newAlbums);
    // console.log('over');

    return (
        <AlbumHotWrapper>
            <ThemeHeader title='热门新碟'></ThemeHeader>
            <div className='album-list'>
                {
                    newAlbums.splice(0, 10).map((item, index) => {
                        return (
                            <div className='album-item' key={index}>
                                {/* 图片 */}
                                <div className='image'>
                                    <img src={getSizeImage(item.picUrl, 130)} alt='' />
                                    {/* 遮罩 */}
                                    <a className='msk sprite_covor'></a>
                                    {/* 播放标签 */}
                                    <i className='icon-play sprite_icon'></i>
                                </div>
                                {/* 标题 */}
                                <p className='title'>
                                    <a className='text-nowrap'>{item.name}</a>
                                </p>
                                {/* 描述 */}
                                <p className='artists text-nowrap'>
                                    {
                                        item.artists.map((iten, indey) => {
                                            return (
                                                <span key={indey}>
                                                    <a>{iten.name}</a>
                                                    {
                                                        indey < item.artists.length - 1 && <span>/</span>
                                                    }
                                                </span>
                                            )
                                        })
                                    }
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </AlbumHotWrapper>
    )
})

export default AlbumHot