import styled from "styled-components";

export const SongHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    
    .left {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        font-weight: normal;
        .select-classify {
            /* 定位图片 */
            background-position: right -99px;
            display: inline-block;
            font-size: 12px;
            height: 31px;
            margin: 2px 0 0 12px;
            /* 文字对其 */
            vertical-align: top;
            span {
                display: inline-block;
                background-position: 0 -59px;
                color: #0c73c2;
                padding: 0 10px 0 15px;
                height: 100%;
                line-height: 31px;
                /* 三角标图标 */
                .icon-select {
                    width: 8px;
                    height: 5px;
                    background-position: -70px -543px;
                    /* 显示 */
                    display: inline-block;
                    margin-left: 5px;
                }
            }
        }
    }

    .right {
        button {
            display: inline-block;
            background-position: 0 0;
            border-radius: 3px;
            width: 46px;
            height: 29px;
            line-height: 29px;
            text-align: center;
            color: #fff;
        }
    }
    
`;
