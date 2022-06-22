import React, { memo } from 'react';
import { getSizeImage } from "@/utils/format-utils";
import { Wrapper } from './style';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const TopRanking = memo((props) => {
    // 传递够来的数据
    const { info, link } = props;
    const { tracks = [] } = info;

    // hooks
    // const dispath = useDispatch();

    // 其他
    const playMusic = (id) => {
        // dispath();
        console.log(id);
    }

    return (
        <Wrapper>
            {/* 头部信息 */}
            <div className="header">
                <div>
                    <img className='image' src={getSizeImage(info.coverImgUrl, 80)} alt="" />
                    <a href={link} className="image_cover"></a>
                </div>
                {/* 右边信息 */}
                <div className="info">
                    <a href={link}>
                        <h3 className="name" title={info.name}>{info.name}</h3>
                    </a>
                    <div>
                        <button className="btn play sprite_02"></button>
                        <button className="btn favor sprite_02"></button>
                    </div>
                </div>
            </div>
            {/* 中间的列表 */}
            <div className='list'>
                {
                    // 只显示前十个
                    tracks.slice(0, 10).map((item, index) => {
                        return (
                            <div className='list-item' key={item.id}>
                                {/* 序号 */}
                                <div className='rank'>{index + 1}</div>
                                <div className='info'>
                                    {/* 名字 */}
                                    <a href={'/song?id=' + item.id} className='name'>{item.name}</a>
                                    {/* 播放、添加、收藏 */}
                                    <div className='operate'>
                                        {/* 播放 */}
                                        <button className='btn sprite_02 play'
                                            onClick={(e) => playMusic(item.id)}></button>
                                        {/* 添加 */}
                                        <button className='btn sprite_icon2 addto'></button>
                                        {/* 收藏 */}
                                        <button className='btn sprite_02 favor'></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {/* 底部加载 */}
            <div className='footer'>
                {/* 路由跳转 */}
                <Link to={link}>查看全部&gt;</Link>
            </div>

        </Wrapper>
    )
})

export default TopRanking