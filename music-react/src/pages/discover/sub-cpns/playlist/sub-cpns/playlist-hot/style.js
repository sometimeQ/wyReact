import styled from "styled-components";


export const PlayListHotWrapper = styled.div`
    
    .list {
        margin-top: 20px;
        display: flex;
        margin-bottom: 15px;
        width: 200px;

        /* 右边信息 */
        .info {
            margin-left: 10px;
            line-height: 24px;
            .title {
                /* 限制换行 */
                width: 140px;
                white-space: nowrap;
                 /* 超出部分隐藏 */
                overflow: hidden;
                /* 显示.... */
                text-overflow: ellipsis;
                a {
                    color: #000;
                }
            }
        }

        .author-info {
            .by {
                color: #999;
            }

            .author {
                margin-left: 5px;
                a {
                    color: #666;
                }
            }
        }
    }
`;