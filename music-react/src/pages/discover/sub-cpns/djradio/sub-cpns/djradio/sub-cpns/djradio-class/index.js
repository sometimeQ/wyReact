import React, { memo, useEffect, useState } from 'react';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import { getDjradioRecommendType } from "@/network/djradio";
import { getSizeImage } from '@/utils/format-utils';
import { DjradioClassWrapper } from './style';


const DjradioClass = memo((props) => {
    // 接收
    const { title, id = '2' } = props;

    // 保存
    const [recommendData, setRecommendData] = useState();

    // 请求数据
    useEffect(() => {
        getDjradioRecommendType(id).then((res) => {
            // 保存
            setRecommendData(res.data);
        });
    }, [id])

    let djRadios = recommendData && recommendData.djRadios || [];

    let moreLink = `#/discover/djradio/category?id=${id}`;

    return (
        <DjradioClassWrapper>
            <ThemeHeaderRCM title={title} moreLink={moreLink}></ThemeHeaderRCM>
            <div className='class-list'>
                {
                    djRadios.splice(0, 4).map((item, index) => {
                        return (
                            <div className='class-item' key={index}>
                                <div className='image'>
                                    <a href={`#/djradio?id=${item.id}`}>
                                        <img src={getSizeImage(item.picUrl, 120)} alt='' />
                                    </a>
                                </div>
                                <div className='info'>
                                    <h3 className='title'>
                                        <a>{item.name}</a>
                                    </h3>
                                    <p className='sub-title'>{item.rcmdtext}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </DjradioClassWrapper>
    )
})

export default DjradioClass