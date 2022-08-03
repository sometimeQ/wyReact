import styled from "styled-components";

export const SongTagWrapper = styled.div`
    /* 排成一列 */
    display: inline-block; 
    .tag {
        margin: 0 10px 3px 0;
        color: #333;
        text-align: center;
        /* 定位背景色 */
        .icon-end {
            width: 44px;
            height: 22px;
            line-height: 22px;
            font-style: normal;
            padding: 0 3px 0 10 px;
            display: inline-block;
            border-radius: 30px;
            border: 1px solid rgb(244, 244, 244, 1);
            background-color: rgba(244, 244, 244, 1);
            
        }
    }
`;