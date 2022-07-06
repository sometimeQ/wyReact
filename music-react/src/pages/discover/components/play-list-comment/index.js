import React, { memo, useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getAlbumCommentAction } from '@/pages/discover/sub-cpns/album/store/actionCreators';
import SongsComment from '@/components/songs-comment';
import LWPageInation from '@/components/page-ination';

import { PlayListCommentWrapper } from './style';


const PlayListComment = memo((props) => {
    // 接收传递过来的
    const { albumComment, playListId } = props;
    // 页数
    const PAGE_SIZE = 20;

    // 当前评论页
    const [currentPage, setCurrentPage] = useState(1);
    const [inputValue, setInputValue] = useState('')

    // hook
    const dispatch = useDispatch();

    // 最新评论列表数据
    const comments = albumComment.comments || [];
    // 精彩评论列表数据
    const hotComments = albumComment.hotComments || [];
    // 总数
    const total = albumComment.total || 0;

    // 分页按钮点击事件
    function onPageChange(page, pageSize) {
        setCurrentPage(page);
        if (playListId === undefined) return;
        dispatch(getAlbumCommentAction(playListId, pageSize, (page - 1) * pageSize));
    }

    // emoji表情
    const onEmojiChange = () => {

    }

    // @对方人
    const onAtChange = () => {

    }

    // 字数
    const onChange = (e) => {
        console.log('Change:', e.target.value);
        setInputValue(e.target.value);
    };


    return (
        <PlayListCommentWrapper>
            {/* 头部 */}
            <div className='comment-title'>
                <h3>评论</h3>
                <span className='comment-count'>共{total}条评论</span>
            </div>
            {/* 评论输入框 */}
            <div className='comment-input'>
                <img className='user-icon' src={require("@/assets/img/default_avatar.jpg")} alt=''></img>
                <div className='input'>
                    {/* 文本框 */}
                    {/* <textarea 
                        className='textarea' 
                        id="comment"
                        placeholder='评论' 
                        maxLength={140} 
                        value={inputValue}
                        onChange={onChange}
                        onFocus={onFocusChange}
                        disabled={true} /> */}
                    <Input.TextArea 
                         className='textarea'
                         placeholder='评论' 
                         value={inputValue}
                         maxLength={140} 
                         onChange={onChange} />
                    {/* 文本输入框底部的信息 */}
                    <div className='info'>
                        {/* 左边两个按钮 */}
                        <div className='left'>
                            <i className='expression sprite_icon2' onClick={onEmojiChange}></i>
                            <i className='at sprite_icon2' onClick={onAtChange}></i>
                        </div>
                        {/* 右边字数和评论按钮 */}
                        <div className='right'>
                            <h5 className='place'>{140 - inputValue.length || 140}</h5>
                            <button className='sumit sprite_button2'>评论</button>
                        </div>
                    </div>
                    {/* 左边的箭头符号 */}
                    <div className="corr u-arr">
                        <em className="arrline">◆</em>
                        <span className="arrclr">◆</span>
                    </div>
                </div>
            </div>
            {/* 精彩评论 */}
            <div className='hot-comment-title'>
                {/* 标题 */}
                {
                    hotComments.length > 0 && < h3 >精彩评论</h3>   
                }
                {
                    hotComments.map((item, index) => {
                        return (
                            <SongsComment
                                key={item.commentId}
                                item={item}
                            >
                            </SongsComment>
                        )
                    })
                }
            </div>
            {/* 最新评论 */}
            <div className='hot-comment-title'>
                 <h3>最新评论({total})</h3>
                 { 
                    // 回复框
                    comments.map((item, index) => {
                        return (
                            <SongsComment 
                                key={item.commentId}
                                item={item}
                                >
                            </SongsComment>
                        )
                    })
                 }
            </div>
            {/* 页码分页 */}
            <div className='page-view'>
                <LWPageInation
                    current={currentPage}
                    pageSize={PAGE_SIZE}
                    total={total}
                    onChange={onPageChange}
                >
                </LWPageInation>
            </div>
        </PlayListCommentWrapper>
    )
})

export default PlayListComment