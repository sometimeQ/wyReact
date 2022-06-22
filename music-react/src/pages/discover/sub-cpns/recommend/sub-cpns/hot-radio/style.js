import styled from "styled-components";

export const HotRadioWrapper = styled.div`
    padding: 10px 20px;

    .radio-list {
        margin-top: 20px;
        width: 210px;
        .item {
            display: flex;
            margin-bottom: 10px;
            width: 210px;
            a{
                text-decoration: none;
                img {
                    width: 40px;
                    height: 40px;
                }
            }

            .info {
                margin-left: 8px;
                line-height: 21px;
                overflow: hidden;
                .name {
                    color: #000;
                }

                .position {
                   color: #666;
                   /* 强制显示一行文字 */
                   white-space: nowrap;
                   /* 隐藏 */
                   overflow: hidden;
                   /* 省略号 */
                   text-overflow: ellipsis;
                   color: orange;
                }
            }
        }
    }
`;