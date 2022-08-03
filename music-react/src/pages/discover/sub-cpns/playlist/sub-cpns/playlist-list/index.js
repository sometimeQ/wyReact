import React, { memo } from 'react';
import { PlayListSongsWrapper } from './style';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {
    getSizeImage,
    formatMinuteSecond
} from '@/utils/format-utils';

const PlayListSongs = memo(() => {
    // console.log('mmmmmmmmmmmmmmmmmm');
    // 取数据
    const { playListDetail } = useSelector((state) => ({
        playListDetail: state.getIn(['playlist', 'playListDetail']),
    }), shallowEqual);

    const dispatch = useDispatch();

    const playlist = playListDetail.playlist || {};
    
    const tracks = playlist.tracks || [];
    // console.log(tracks);

    return (
        <PlayListSongsWrapper>
            {/* 歌单信息 */}
            <div className="header-title">
                <h3>
                    歌单列表<span className="song-count">{tracks.length}首歌</span>
                </h3>
                <p className="play-count">
                    播放：<span className="count">{playlist.playCount}</span> 次
                </p>
            </div>

            {/* 列表底部表格 */}
            <div className='play-list'>
                <table>
                    {/* 表格头 */}
                    <thead>
                        <tr className='header'>
                            {/* th  是加粗显示 */}
                            <th className='ranking'></th>
                            <th className='title'>标题</th>
                            <th className='duration'>时长</th>
                            <th className='singer'>歌手</th>
                        </tr>
                    </thead>
                    {/* 表格身子 */}
                    <tbody>
                        {
                            tracks.map((item, index) => {
                                return (
                                    // tr 定义行 th表示头部 td表示单元格
                                    // tr不能单独存在，相当于table的属性标签，而th,td也应当放在tr中。<th>不光是粗体，还是居中的。
                                    <tr key={item.id}>
                                        {/* 左边单元格 */}
                                        <td>
                                            {/* 左边序号和箭头符号 数字 */}
                                            <div className='rank-num'>
                                                <span className='num'>{index + 1}</span>
                                                <span className='new sprite_icon2'></span>
                                            </div>
                                        </td>
                                        {/* 头像中间单元格  */}
                                        <td>
                                            <div className='song-name'>
                                                {/* 头像 */}
                                                {
                                                    index < 0 ? (<img src={getSizeImage(item.al.picUrl, 50)} alt='' />) : null
                                                }
                                                {/* 播放按钮 */}
                                                <span className='play sprite_table'></span>
                                                {/* 歌曲名字s */}
                                                <span className='name'>{item.name}</span>
                                            </div>
                                        </td>
                                        {/* 时长 */}
                                        <td>
                                            <div className='drt-item'>
                                                {/* <h3 className='drt'> */}
                                                <span className='dr'>{formatMinuteSecond(item.dt)}</span>
                                                {/* </h3> */}
                                                {/* 操作 */}
                                                <div className='oprate'>
                                                    <i className='btn add-icon sprite_icon2'></i>
                                                    <i className='btn favor-icon sprite_table'></i>
                                                    <i className='btn share-icon sprite_table'></i>
                                                    <i className='btn download-icon sprite_table'></i>
                                                </div>
                                            </div>
                                        </td>
                                        {/* 歌手 */}
                                        <td>{item.ar[0].name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </PlayListSongsWrapper>
    )
})

export default PlayListSongs