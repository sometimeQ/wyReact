import styled from "styled-components";


export const PlayerDownWrapper = styled.div`
    .header {
        margin-top: 40px;
    }

    .btn-list {
        margin-top: 20px;
        margin-bottom: 10px;

        /* 鼎维尔图片 */
        .btn_iphone {
            margin-left: 10px;
            /* 显示 */
            display: inline-block;
            width: 31px;
            height: 48px;
            background-position: -6px -392px;
            &:hover {
                background-position: -6px -472px;
            }
        }

        .btn_pc {
            display: inline-block;
            width: 61px;
            height: 48px;
            background-position: -72px -472px;
            margin: 0 26px 0 30px;
            &:hover {
                background-position: 72px -472px;
            }
        }

        .btn_android {
            display: inline-block;
            width: 30px;
            height: 48px;
            background-position: -163px -392px;
            &:hover {
                background-position: -163px -472px;
            }
        }
    }

    .text {
        color: #999;
    }
     
`;