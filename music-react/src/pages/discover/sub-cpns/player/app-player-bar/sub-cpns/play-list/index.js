import React, { memo } from 'react';
import { DownloadOutlined, DeleteOutlined, GithubOutlined, LikeOutlined } from '@ant-design/icons'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { formatDate, getPlayUrl } from '@/utils/format-utils.js'

import { Wrapper } from './style';

const PlayListItem = memo((props) => {
    // 接收父组件传递过来的数据
    const { songName, singer, duration, isActive, clickItem, songId, nextMusic } = props;

    // redux hook 
    const dispatch = useDispatch();
    const { playList } =  useSelector((state) => ({
        playList: state.getIn(["player", "playList"])
    }), shallowEqual);


    return (
        <Wrapper>
            <h3 className='song-name'>{songName}</h3>
            <div className='control-and-singer'>
                <div className='oprate'>
                    <i className='btn add-icon sprite_icon2'></i>
                    <i className='btn favor-icon sprite_table'></i>
                    <i className='btn share-icon sprite_table'></i>
                    <i className='btn download-icon sprite_table'></i>
                </div>
                <span>{singer}</span>
                {/* 时间 */}
                <div className='duration'>{formatDate(duration, 'mm:ss') }</div>
                {/* 连接？？ */}
                <div className='lian-jie'>
                    <i className='btn downloadx-icon sprite_table'></i>
                </div>
            </div>
       
        </Wrapper>
    )
})

export default PlayListItem