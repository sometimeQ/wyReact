import React, { memo, useState } from 'react';
import { getSizeImage, timestampFormat, getCount } from '@/utils/format-utils';

import { AlbumCommentWrapper } from './style';
import CustomInput from '../comment-input';



const SongsComment = memo((props) => {
    // 接收传递过来的数据 
    const { item, index, onReply, clear } = props;

    // console.log(item);
    // console.log('???????????????????');

    // redux
    // const [inputValue, setInputValue] = useState('');
    const [contentValue, setContentValue] = useState('');

    // 保存上一次点击的e
    const [prevIndex, setPrevIndex] = useState(0);

    // 内容回复里面的内容
    const beReplieds = item.beReplied || [];

    // 日期
    const date = new Date(item.time);
    const showDate = timestampFormat(parseInt(date / 1000));
    // formatDate(item.time, "MM月dd日 hh:mm");

    // 点赞数量
    const showLikedCount = getCount(item.likedCount);

    // const handlerClickOne = (v, btns) => {
    //     console.log('怎么没有返回值的呢' + ' ' + v.value);
    //     for (let i = 0; i < btns.length; i++) {
    //         // btns[i].style.backgroundColor = '';
    //         console.log(btns[i].style.backgroundColor = ' ' + 'kkkkkkk');
    //     }
    //     // this.style.backgroundColor = 'blue';
    // }

    // 回复按钮的点击事件
    const onReplys = (item, index) => {
        // console.log('onReplys 点击啦回复按钮' + ' ' + item.user.nickname + '  ' + index);

        // 清空文字
        

        onReply(item, index);
            
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
                                {/* 回复, 传递给父组件 */}
                                <a target='_' onClick={() => onReplys(item, index)}>回复</a>
                            </div>
                        </div>
                        {/* 内容 里面的回复 功能区域 */}
                        {
                            <button 
                                className={'content-reply'}
                                style={{ display: (item.checked ? 'inline-block' : 'none') }}
                                >
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
                                            clear={clear}
                                            aValue={contentValue}
                                            // value={inputValue}
                                            maxLength={140}
                                            // onChange={onChange}
                                             />
                                    </div>
                                </div>

                            </button>
                        }
                    </div>
                </div>
             </div>
           
        </AlbumCommentWrapper>
    )
})

export default SongsComment