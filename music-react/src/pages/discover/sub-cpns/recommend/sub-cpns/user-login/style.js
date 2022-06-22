import styled from "styled-components";

export const UserLoginWrapper = styled.div`
    height: 126px;
    padding: 16px 22px;
    /* 背景色 */
    background-position: 0 0;

    div {
         /* 里面的元素居中 */
         display: flex;
         /*  */
         flex-direction: column;
         align-items: center;

        p {
            line-height: 25px;
         }

        a {
            /* 居中 */
            margin-top: 10px;
            display: inline-block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            align-items: center;
            color: #fff;
            /* 定位图片 */
            background-position: 0 -195px;
            text-shadow: 0 1px 0 #8a060b;
            text-decoration: none;

            :hover {
                /* 改变颜色 */
                background-position: -110px -195px;
            }
        }
    }
    
`;