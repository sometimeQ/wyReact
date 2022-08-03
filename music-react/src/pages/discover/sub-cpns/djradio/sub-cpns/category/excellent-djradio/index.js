import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { getSizeImage } from "@/utils/format-utils";
import { ExcellentDjradioWrapper } from './style';


const ExcellentDjradio = memo(() => {
    // 获取数据
    const { excellentDjradio } = useSelector((state) => ({
        excellentDjradio: state.getIn(['discoverDjradio',  'excellentDjradio']),
    }), shallowEqual);

    let djRadios = excellentDjradio.djRadios || [];

    return (
        <ExcellentDjradioWrapper>
            {/* 头部标题 */}
            <div className='header'>
                <h3>优秀电台</h3>
            </div>
            {/* 底部列表数据 */}
            <div className='excellent-list'>
                {
                    djRadios && djRadios.splice(0, 5).map((item, index) => {
                        return (
                            <div className='excellent-item' key={item.id}>
                                <a href={`#/djradio?id=${item.id}`}>
                                    <img src={getSizeImage(item.picUrl, 150)} alt="" />
                                </a>
                                <h3 className='title'>
                                    <a href={`#/djradio?id=${item.id}`}>{item.name}</a>
                                </h3>
                                <p className='rcmdtext'>{item.rcmdtext}</p>
                            </div>
                        )
                    })
                }
            </div>
        </ExcellentDjradioWrapper>
    )
})

export default ExcellentDjradio