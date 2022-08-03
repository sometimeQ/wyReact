import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { SongsCategoryWrapper } from './style';


/**
 * 歌单分类选项卡
 */
const SongsCategory = memo((props) => {
    const { selectCategory } = props;

    // 获取数据
    const { category } = useSelector((state) => ({
        category: state.getIn(['songlist', 'category'])
    }), shallowEqual);

    // console.log('category' + '  ' + JSON.stringify(category));


    return (
        <SongsCategoryWrapper>
            {/* 三角形小图标 */}
            <div className='arrow sprite_icon'></div>
            {/*  */}
            <div className='all'>
                <button className='link sprite_button2'>全部风格</button>
            </div>
            {/* 列表 */}
            <div className='category'>
                {
                     category.map((item, index) => {
                        return (
                            <dl key={item.name} className={"item" + index}>
                                {/* 标题 + 图标 */}
                                <dt>
                                    {/* 图标 */}
                                    <i className='icon sprite_icon2'></i>
                                    <span>{item.name}</span>
                                </dt>
                                {/* 右边数据 */}
                                <dd>
                                    {
                                        item.subs.map((sItem) => {
                                            return (
                                                <div className='item' key={sItem.name}>
                                                    {/* 父组件传入的函数 selectCategory */}
                                                    <a className='link'
                                                        onClick={(e) => selectCategory(sItem.name)}>{sItem.name}</a>
                                                    {/* 分割线 */}
                                                    <span className='divider'>|</span>
                                                </div>
                                            )
                                        })
                                    }
                                </dd>
                            </dl>
                        )
                    })
                }
            </div>
        </SongsCategoryWrapper>
    )
})

export default SongsCategory