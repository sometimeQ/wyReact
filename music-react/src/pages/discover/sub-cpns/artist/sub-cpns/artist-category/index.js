import React, { memo } from 'react';
import { artistCategories } from "@/common/local-data";
import { 
    getAristClassifyAreaAction, 
    getAristClassifyTypeAction 
} from "../../store/actionCreators";
import { ArtistCategoryWrapper } from './style';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';



const ArtistCategory = memo(() => {

    // // 获取当前页url
    // const location =  useLocation();
    // console.log(location);

    // 获取本地数据 artistCategories 
    const navigate = useNavigate();

    // redux
    const dispatch = useDispatch();

    // 点击事件
    const btnClick = (event, area, type, url) => {
        // 阻止默认事件
        event.preventDefault();

        // 请求
        dispatch(getAristClassifyAreaAction(area));
        dispatch(getAristClassifyTypeAction(type));

        // 跳转本页面url
        navigate(url);
    }


    return (
        <ArtistCategoryWrapper>
            {
                artistCategories.map((item, index) => {
                    return (
                        <div className='category-item' key={item.area}>
                            {/* 标题 */}
                            <h2 className='title'>{item.title}</h2>
                            {/*  */}
                            <ul>
                                {
                                    item.artists.map((iten, indey) => {
                                        return (
                                            <li className='artist-list' key={indey}>
                                                <i className="icon-subger sprite_singer"></i>
                                                {/* 副标题 */}
                                                <a className='title-sub' 
                                                href={iten.url}
                                                    onClick={(e) => btnClick(e, item.area, iten.type, iten.url)}>
                                                    {iten.name}
                                                </a>
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    );
                })
            }
        </ArtistCategoryWrapper>
    )
})

export default ArtistCategory