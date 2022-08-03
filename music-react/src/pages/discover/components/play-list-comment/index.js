import React, { memo, useEffect, useRef, useState } from 'react';
// import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { getAlbumCommentAction } from '@/pages/discover/sub-cpns/album/store/actionCreators';
import SongsComment from '@/components/songs-comment';
import CustomInput from '@/components/comment-input';
import LWPageInation from '@/components/page-ination';
import classNames from 'classnames';

import { PlayListCommentWrapper } from './style';
// import { set } from 'koa/lib/response';



let lastIndex = '0';

const PlayListComment = memo((props) => {
    // 接收传递过来的
    const { albumComment, playListId } = props;

    // 最新评论列表数据
    const comments = albumComment.comments || [];

    // 精彩评论列表数据
    const hotComments = albumComment.hotComments || [];

    let aArray = [
        { name: '这是1111', checked: false, },
        { name: '这是2222', checked: false, },
        { name: '这是3333', checked: false, },
        { name: '这是4444', checked: false, }
    ];

    // 页数
    const PAGE_SIZE = 20;

    // 当前评论页
    const [currentPage, setCurrentPage] = useState(1);
    const [inputValue, setInputValue] = useState('')
    const [testList, setTestList] = useState(aArray);
    const [ok, setOk] = useState(-1);
    const [clear, setClear] = useState();

    // 整合最新评论列表数据
    const [newComment, setNewComment] = useState(null);

    // 整合经常评论数据列表
    const [newHotComments, setNewHotComments] = useState(hotComments);

    // console.log('吃席 ' + ' ' + JSON.stringify(newComment));

    // hook
    const dispatch = useDispatch();

    const inputRe = useRef();
    
    
    useEffect((state) => {
        if (comments.length > 0) {
            setNewComment(comments);
            console.log('useEffect');
        }
 
    }, [newComment, clear]); // 监听newComment

    // 总数
    const total = albumComment.total || 0;

    // 分页按钮点击事件
    function onPageChange(page, pageSize) {
        // 保存点击的索引
        setCurrentPage(page);

        // 切换调取数据
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
        console.log('onChange:', e.target.value);
        setInputValue(e.target.value);
    };

    const itemClick = (item, index) => {
        let list = [...testList]; // 复制数组，免得变化了没有重新渲染
        list.forEach(item => {
            item.checked = false;
        })

        list[index].checked = true;
        setTestList(list);
    }

    // 2
    const itemClick2 = (item, index) => {
        if (ok !== undefined) {
            console.log('xxxxx1 ' + index);
            setOk(index);
        }
    }

    function onReply(item, index) {
        // 操作属猪
        const tempLists = [...newComment];
        tempLists.forEach((item) => {
            if (item.checked == false) return;
            item.checked = false;
            // item.clear = false;
            // console.log('<<<<<<<<<<<<<<<<<');
        });

        if (lastIndex === index) {
            console.log('?????????????????');
            tempLists[index].checked = !true;
            // tempLists[index].clear = !true;
            // 清空文字
            setClear(true);
            // 重置
            lastIndex = -1;
        } else {
            // 当前点击的显示,其他的的隐藏
            console.log('设置style 显示'  + '  ' + lastIndex + ' ' + index);
            tempLists[index].checked = !tempLists[index].checked;
            // tempLists[index].clear = !tempLists[index].clear;
            lastIndex = index;

            // 清空文字
            setClear(false);
        }

        setNewComment(tempLists);
        // console.log('点击啦回复按钮' + '  ' + JSON.stringify(newComment) + ' lastIndex =>  ' + lastIndex);
    }

    return (
        
        <PlayListCommentWrapper>

            {/* 测试一下 */}
            {/* <div className="test-data-list">
                {
                    testList.map((item, index) => {
                        console.log('testList ==>', testList);
                        return (
                            < div className={['item', item.checked ? 'item-active' : ''].join(' ')}
                                style={{ color: (item.checked ? 'red' : 'purple')}}
                                key={index}
                                onClick={() => itemClick(item, index)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div> */}


            <div className="test" style={{display: 'none'}}>
                {
                    testList.map((item, index) => {
                        // console.log('testList 2222 ==>', testList);
                        return (
                            // ['item', item.checked ? 'item-active' : ''].join(' ')
                            < div className={ok === index ? "tableSelected" : "asadsa1"}
                                style={{ color: (ok === index ? 'red' : 'purple'), display: (ok === index ? 'none' : 'inline') }}
                                key={index}
                                onClick={() => itemClick2(item, index)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>



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
                    {/* <Input.TextArea 
                         className='textarea'
                         placeholder='评论' 
                         value={inputValue}
                         maxLength={140} 
                         onChange={onChange} /> */}

                         {/* 输入框组件 */}
                    <CustomInput
                        idx={'mainInput'}
                        aValue={'评论'}
                        cWidth={65+'px'}
                        maxLength={140}
                        clear={clear}
                    />

                    {/* 文本输入框底部的信息 */}
                    <div className='info' style={{display: 'none'}}>
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
            {
                newHotComments.length > 0 && <div className='hot-comment-title'>
                    {/* 标题 */}
                    {
                     < h3 >精彩评论</h3>
                    }
                    {
                        newHotComments.map((item, index) => {
                            return (
                                <SongsComment

                                    key={item.commentId}
                                    item={item}
                                    index={index}
                                    onReply={onReply}
                                >
                                </SongsComment>
                            )
                        })
                    }
                </div>
            }
            
            {/* 最新评论 */}
            {
                comments.length > 0 && <div className='hot-comment-title'>
                    <h3>最新评论({total})</h3>
                    {
                        // 回复框
                        comments && comments.map((item, index) => {
                            return (
                                <SongsComment
                                    clear={clear}
                                    key={item.commentId}
                                    item={item}
                                    index={index}
                                    onReply={onReply}
                                >
                                </SongsComment>
                            )
                        })
                    }
                </div>
            }
            
            {/* 页码分页 */}
            {
                comments.length > 0 && <div className='page-view'>
                    <LWPageInation
                        current={currentPage}
                        pageSize={PAGE_SIZE}
                        total={total}
                        onChange={onPageChange}
                    >
                    </LWPageInation>
                </div>
            }

        </PlayListCommentWrapper>
    )
})

export default PlayListComment