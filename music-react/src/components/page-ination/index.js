// 引入第三方库
import React, { memo } from 'react';
import { Pagination } from 'antd';

/** 
 * 分页组件
 * @param {Number} current 当前页数
 * @param {Number} pageSize 每页条数
 * @param {Number} total 数据总数
 * @param {function(page, pageSize)} onChange 页码改变的回调，参数是改变后的页码及每页条数
 */
const LWPageInation = memo((props) => {
    const { current, pageSize, total, onChange } = props;

    /**
     * showSizeChanger: 是否展示 pageSize 切换器，当 total 大于 50 时默认为 true
     * current 当前页数
     * defaultCurrent 默认的当前页数
     * pageSize 每页条数
     * onChange 页码或 pageSize 改变的回调，参数是改变后的页码及每页条数
     * total 数据总数
     */
    return (
        <Pagination 
            showSizeChanger={false} 
            current={current}
            defaultCurrent={1}
            pageSize={pageSize}
            total={total}
            onChange={onChange}
        />
    )
})

export default LWPageInation