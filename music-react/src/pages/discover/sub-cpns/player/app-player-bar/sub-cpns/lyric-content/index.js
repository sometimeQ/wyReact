import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useSelector } from 'react-redux';


import { LyricContentWrapper } from './style';


const LyricContent = memo(() => {

    const ref = useRef();

    // redux hooks
    const { lyricList, currentLyricIndex } = useSelector((state) => ({
        lyricList: state.getIn(["player", "lyricList"]),
        currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }), shallowEqual);

    useEffect((state) => {
        if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
        ref.current.scrollTo(ref.current, (currentLyricIndex - 3) * 32, 300);
        
    }, [currentLyricIndex])

    // console.log('currentLyricIndex');
    // console.log(currentLyricIndex);
    // console.log(lyricList);

    return (
        <LyricContentWrapper ref={ref}>
            <div className='lyriclist-content'>
                {
                    lyricList && lyricList.map((item, index) => {
                        return (
                            <div className={'lyric-item ' + (currentLyricIndex === index ? 'active' : '')} key={index} >
                                {item.content}
                            </div>
                        )
                    })
                }
            </div>
        </LyricContentWrapper>
    )
})

export default LyricContent