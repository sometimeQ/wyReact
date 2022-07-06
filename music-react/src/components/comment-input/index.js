
import React, { memo, useEffect, useState } from 'react';
import { Input } from 'antd';
import EmojiPicker from '../emoji-smart';
import { CustomInputWrapper } from './style';

// 全局保存
let tempTextAreaData = '';
let cache = {
    lastIndex: 0,
    offset: 0
};

const CustomInput = memo((props) => {
    // 接收数据
    const { aValue, maxLength } = props;
    
    let atListArray = [
        '选择最近@的人或直接输入',
        '云音乐小秘书',
        '网易CEO丁磊',
        '社区小助手',
        '网易云音乐'
    ];

    // redux
    const [inputValue, setInputValue] = useState('');
    const [displayEmoji, setDisplayEmoji] = useState(false);
    const [displayAt, setDisplayAt] = useState(false);
    const [atList, setAtList] = useState(atListArray);
    const [keyWord, setKeyWord] = useState(false);
    const [dynamic, setDynamic] = useState();

    // 记录是否显示状态
    useEffect(() => {
        
    }, [inputValue])


    // hooks
    /*
    const ref = useRef()

    const param = {
        showPreview: true,
        set: 'native',
        theme: 'light',
        emojiTooltip: false,
        searchPosition : 'none',
        locale: 'zh',
        previewPosition: 'none', // 输入框选中的时候,
    }
 
    useEffect(() => {
        new Picker({ ...param, data, ref })
        let header = ref.current;

        // header.onClick = (emoji) => {
        console.log(header);
        let dom = header && document.getElementsByClassName('em-emoji-picker');
        console.log(dom);
        dom && dom.onEmojiSelect((emoji) => {
            console.log(emoji.native);
        })

    }, [displayEmoji, ref]);
    */

    const onChange = (e) => {
        console.log('Change:', e.target.value);

        setInputValue(e.target.value);
        
        // 保存输入框初始值
        tempTextAreaData = e.target.value;
        // @标签处理
        if (e.target.value.includes('@')) {
            // 取最后一个位置的
            // let newStr = tempTextAreaData.substring(tempTextAreaData.indexOf('@') + 1, tempTextAreaData.length);
            let tempStr = tempTextAreaData.substr(tempTextAreaData.length - 1, tempTextAreaData.length);
            // console.log('mmmmm' + '   ' + tempTextAreaData.substr(tempTextAreaData.length - 1, 1));

            // console.log('newStr' + '  ' + newStr);

            setKeyWord(tempStr);
            setDisplayEmoji(false);
            setDisplayAt(true);

            // 过滤掉str,除掉value=4的一项，最终得到一个新的数组
            let newAtList = atListArray.filter(item => {
                if (item.includes(tempStr)) return item
            })

            // 重新渲染
            setAtList(newAtList);
        }

        let cupText = textSize("11px", "Arial", e.target.value);
        setDynamic(cupText);
    };

    // 其他
    const onEmojiChange = () => {
        setDisplayEmoji(!displayEmoji);
    }

    const searchEmoji = (emoji) => {
        console.log(emoji.native);
        // 拿到dom
        let dom = document.getElementById('textarea');
        // 插入到文本输入框里面
        insertAtCursor(dom, emoji.native);
    }

    // @
    const onAtChange = () => {
        setDisplayEmoji(false);
        setDisplayAt(true);

        let dom = document.getElementById('textarea');
        // 插入到文本输入框里面
        insertAtCursor(dom, '@');
    }

    const onAtMessage = (item) => {
        // console.log('点击啦At信息' + ' ' + item);
        // 拼接
        // tempTextAreaData += item;

        // 赋值
        // setInputValue(tempTextAreaData);
        setDisplayAt(false);

        let dom = document.getElementById('textarea');
        // 插入到文本输入框里面
        insertAtCursor(dom, item);


        // // 计算字符串
        // let cupText = textSize("11px", "Arial", tempTextAreaData);
        // setDynamic(cupText);

    }

    // 评论功能
    const submit = () => {
        console.log('点击啦评论');
        setDisplayEmoji(false);
        setDisplayAt(false);

        // todo
    }

    /**
     * 计算文字的宽度与高度
     * @param {*} fontSize 
     * @param {*} fontFamily 
     * @param {*} text 
     * @returns 
     */
    function textSize(fontSize, fontFamily, text) {
        let div = document.getElementById("textarea");
        let w = div.clientWidth;    // 返回元素的总宽度

        let paddingValue = 20;

        let span = document.createElement("span");
        let result = {};
        result.width = span.offsetWidth;
        result.height = span.offsetHeight;
        // 样式
        span.style.visibility = "hidden";
        span.style.fontSize = fontSize;
        span.style.fontFamily = fontFamily;
        span.style.display = "inline-block";
        span.style.whiteSpace = "pre-wrap";
        span.style.wordWrap = "break-word";
        span.style.maxLength = "140";

        document.body.appendChild(span);
        if (typeof span.textContent != "undefined") {
            span.textContent = text;
        } else {
            span.innerText = text;
        }

        //  at列表的内边距
        let atViewLeft = 10;
        // @与空格的边距
        let textRightLeft = 12;

        if (span.offsetWidth >= (w - paddingValue)) {
            result.width = parseFloat(window.getComputedStyle(span).width) - (w - paddingValue) + textRightLeft + atViewLeft;
        } else {
            result.width = parseFloat(window.getComputedStyle(span).width) - result.width + textRightLeft + atViewLeft;
        }
        result.height = parseFloat(window.getComputedStyle(span).height) - result.height;

        return result;
    }

    const insertAtCursor = (myField, emojiValue) => {
        // 代表了当前激活选中区，即高亮文本块，和/或文档中用户可执行某些操作的其它元素
        if (document.selection) {
            console.log('开始选择高亮');
            // 激活光标

        } else if (myField.selectionStart || myField.selectionStart === '0') { // 光标处插入文字的代码
            console.log('开始插入');
            // MOZILLA/NETSCAPE support
            const startPos = myField.selectionStart;
            const endPos = myField.selectionEnd;

            // 文字的:0 ~末尾 xxx1
            const beforeValue = myField.value.substring(0, startPos);
            // 输入框文字的结尾 0 
            const afterValue = myField.value.substring(endPos, myField.value.length);
            tempTextAreaData = beforeValue + emojiValue + afterValue;
  
            setInputValue(tempTextAreaData);
            myField.selectionStart = startPos + emojiValue.length;
            myField.selectionEnd = startPos + emojiValue.length;
            myField.focus();

            console.log('打印光标的结束位置');
            console.log(myField.selectionEnd);

        } else {
            console.log('elese ...');
            tempTextAreaData += emojiValue;
            setInputValue(tempTextAreaData);
            myField.focus();
        }

        // 计算当前字符串所在的位置
        let cupText = textSize("11px", "Arial", tempTextAreaData);
        setDynamic(cupText);
    }

    // 输入框模糊搜索
    /**
     * 传入两个参数
     * @param str 目标字符串（需要被筛选的字符串）
     * @param keyword 筛选条件（筛选需要高亮的字符串）
     * @returns 返回处理后字符串
     */
        const highLight = (str, keyword) => {
            return str.replace(new RegExp(keyword, 'gi'), (match) => {
                return `<font color="#f30">${match}</font>`
            }
        )
    }

    return (
        <CustomInputWrapper>
            <div className='a-input'>
                {/* 太坑了，默认值defaultValue 与 value只能二选一 */}
                 {
                 <Input.TextArea
                    id='textarea'
                    className='a-textarea'
                    placeholder={aValue}
                    // defaultValue={aValue}
                    value={inputValue}
                    bordered={false}
                    maxLength={maxLength}
                    onChange={onChange} /> 
                }

                {/* 底部@ emoji 评论按钮 字数 */}
                <div className='info'>
                    {/* 左边两个按钮 */}
                    <div className='left'>
                        {/* {onClick = { onEmojiChange } } */}
                        <i className='expression sprite_icon2'onClick={() => onEmojiChange()} ></i>
                        {/* onClick={onAtChange} */}
                        <i className='at sprite_icon2' onClick={() => onAtChange()} ></i>
                        {/* emoji */}
                        <div className='emoji-container'>
                            {
                                displayEmoji && <EmojiPicker   onEmojiSelect={(emoji) => searchEmoji(emoji)} />
                            }
                        </div>
                        {/* @弹框选择器 */}
                        {/* <div className='pop-at'> */}
                            {
                            displayAt  && inputValue.includes('@') && <div className="u-atlist" style={{ position: 'absolute', top: dynamic.height, left: dynamic.width }}>
                                    {
                                        atList.map((item, index) => {
                                            return (
                                                <div className="at-list" id='at-data' key={index}>
                                                    <a
                                                        dangerouslySetInnerHTML={{
                                                            __html: highLight(item, keyWord)
                                                        }} onClick={() => onAtMessage(item)} />
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            }
                        {/* </div> */}
                         
                    </div>
                    {/* 右边字数和评论按钮 */}
                    <div className='right'>
                        <h5 className='place'>{140 - inputValue.length || 140}</h5>
                        <button className='sumit sprite_button2' onClick={submit}>评论</button>
                    </div>
                </div>
            </div>
        </CustomInputWrapper>
    )
    })

export default CustomInput