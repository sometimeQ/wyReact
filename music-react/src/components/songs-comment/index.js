import React, { memo, useState } from 'react';
import { getSizeImage, timestampFormat, getCount } from '@/utils/format-utils';

import { AlbumCommentWrapper } from './style';
import CustomInput from '../comment-input';

const SongsComment = memo((props) => {
    // 接收传递过来的数据 
    const { item } = props;

    // redux
    // const [inputValue, setInputValue] = useState('');
    const [contentValue, setContentValue] = useState('');
    const [hasDisplay, setHasDisplay] = useState(false);

    // 内容回复里面的内容
    const beReplieds = item.beReplied || [];

    // 日期
    const date = new Date(item.time);
    const showDate = timestampFormat(parseInt(date / 1000));
    // formatDate(item.time, "MM月dd日 hh:mm");

    // 点赞数量
    const showLikedCount = getCount(item.likedCount);

    const onReply = (item) => {
        // console.log('xxxxxxxxxxxxxxxxxxxx ' + item.user.nickname);
        setContentValue(item.user.nickname + ':');
        setHasDisplay(!hasDisplay);
    }

    function onClickLike(item) {
        // console.log('点赞啦呀  ~~~~~~~ ' + item.user.userId);
    }

    // // emoji表情
    // const onEmojiChange = () => {

    // }

    // // @对方人
    // const onAtChange = () => {

    // }

    // 字数
    // const onChange = (e) => {
    //     console.log('Change:', e.target.value);
    //     // setInterval(() => {
    //         setInputValue(e.target.value);
    //     // }, 2000);
       
    // };

    return (
        <AlbumCommentWrapper>
             {/* 头部 */}
             <div className='info'>
                {/* 左边 */}
                <div className='user-view'>
                    {/* 头像 */}
                    <a className='icon' href={`/user/home?id=${item.user.userId}`}>
                        <img src={getSizeImage(item.user.avatarUrl, 50)} alt=''/>
                    </a>
                    {/* 内部评论内容 */}
                    <div className='user-right'>
                        <span className='user-name'>{item.user.nickname} ：</span>
                        <span>{item.content}</span>
                        {
                            beReplieds.length > 0 && <div className='f-brk'>
                                <span className='darr'>
                                    <i className='bd'>◆</i>
                                    <i className='bg'>◆</i>
                                </span>
                                {/* 里面的回复内容 */}
                                {
                                    beReplieds.map((item, index) => {
                                        // console.log(item.user.nickname);
                                        return (
                                            <div key={index}>
                                                <a className='user-name' href='/' >{item.user.nickname} ： </a>
                                                <span>{item.content}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        }
                        {/* 底部日期、点赞、回复功能按钮 */}
                        <div className='btm'>
                            <div className='date'>
                                {/* 日期 */}
                                <span>{showDate}</span>
                            </div>
                            <div className='like'>
                                {/* 点赞图标 */}
                                <a href='#!' onClick={() => onClickLike(item)}>
                                    <i className='zan sprite_icon3'></i>
                                    {
                                        showLikedCount > 0 && <span className='count'>({showLikedCount})</span>
                                    }
                                </a>
                                {/* 分割线 */}
                                <span className='step'>|</span>
                                {/* 回复 */}
                                <a href='#!' target='_' onClick={() => onReply(item)}>回复</a>
                            </div>
                        </div>
                        {/* 内容 里面的回复 功能区域 */}
                        {
                            hasDisplay && <div className='content-reply'>
                                <div className='f-brka'>
                                    <div>
                                        <span className='darra'>
                                            <i className='bda'>◆</i>
                                            <i className='bga'>◆</i>
                                        </span>
                                    </div>
                                    <div className='reply'>
                                        <CustomInput
                                            placeholder=''
                                            aValue={contentValue}
                                            // value={inputValue}
                                            maxLength={140}
                                            // onChange={onChange}
                                             />
                                    </div>
                                </div>

                            </div>
                        }
                    </div>
                </div>
             </div>
           
        </AlbumCommentWrapper>
    )
})

export default SongsComment