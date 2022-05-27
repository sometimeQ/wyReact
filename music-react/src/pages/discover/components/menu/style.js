import styled from "styled-components";

// 顶部的菜单栏
export const LWMenuWrapper = styled.div`
    display: flex;
    font-style: normal;
    /* font-weight: bold; */
    .item {
        a {
            height: 20px;
            /* 显示才能居中 */
            display: inline-block; 
            text-decoration: none;
            line-height: 20px;
            padding: 0 13px;
            color: #fff;
            margin: 7px 17px 0 0;

            /* a标签默认激活 */
            &:hover, &.active { 
                background-color: #9b0909;
                border-radius: 20px;
            }
        }
    }

`;