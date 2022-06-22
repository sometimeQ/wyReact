import styled from "styled-components";


export const ThemeHeaderSongWrapper = styled.div`
    margin: 0 40px;
    background-color: white;
    .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 5px;
        border-bottom: 2px solid #c20c0c;

        /* 左边 */
        .left {
            display: flex;
            align-items: flex-end;
            /* 标题 */
            .title {
                font-size: 20px;
                font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            }
            /* xx首歌 */
            .count {
                margin-bottom: 5px;
                margin-left: 20px;
                position: relative;
                top: 3px;
            }
        }

        /* 右边 */
        .right {
            .count {
                color: #c20c0c;
            }
        }
    }
`;