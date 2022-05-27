import React, { memo } from 'react';
import { AlbumCoverWrapper } from './style';
import { getSizeImage } from '@/utils/format-utils';


/**
 * 新碟上架组件
 */
const AlbumCover = memo((props) => {
    console.log('接收的新碟上架组件信息begin');
    console.log(props);
    console.log('接收的新碟上架组件信息over');

    // 解构数据
    const { title, info, size = 130, width = 153, bacgroundpositon = "-845px", link = '' } = props;

    return (
        // 传递到style.js里面的样式数据
        <AlbumCoverWrapper size={size} width={width} bacgroundpositon={bacgroundpositon} title={title}>
            <div className='album-image'>
                <img src={getSizeImage(info.picUrl, size)} alt={info.name}></img>
                <a href={link} className='img_cover cover'>{''}</a>
            </div>
            <div className='album-info'>
                <p className='name'>{info.name}</p>
                <p className='artist'>{info.artist.name}</p>
            </div>
        </AlbumCoverWrapper>
    )
})

export default AlbumCover