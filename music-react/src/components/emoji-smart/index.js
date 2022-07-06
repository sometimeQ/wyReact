import React, { memo, useEffect, useRef } from 'react';
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';


function EmojiPicker(props) {
    const param = {
        showPreview: true,
        set: 'native',
        theme: 'light',
        emojiTooltip: false,
        searchPosition: 'none',
        locale: 'zh',
        previewPosition: 'none', // 输入框选中的时候
    }

    const ref = useRef();

    useEffect(() => {
        new Picker({ ...props, data, ref, ...param });
    }, []);

    return <div ref={ref} />;
}

export default EmojiPicker;