import styled from "styled-components";


export const SongsCoverWrapper = styled.div`
    width: 140px;
    height: 188px;
    margin: 0px 10px 30px 0px;

    .cover-top {
        position: relative;
        & > img {
            width: 140px;
            height: 140px;
        }

        .msk {
            /* 定位图片半透明遮罩 */
            /* 覆盖一层a标签用于点击跳转 */
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0;
        }

        .cover {
            .info {
                /* 水平布局 */
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #ccc;
                padding: 0px 10px;
                /* 定位显示图片 */
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                /* 定位阴影图片的 */
                background-position: 0 -537px;
                height: 27px;
                
                /* 耳机图片 */
                .erji {
                    width: 14px;
                    height: 11px;
                    display: inline-block;
                    /* 定位耳机图片 */
                    background-position: 0 -24px;
                    margin-right: 5px;
                }
                /* 播放图标 */
                .play {
                    width: 16px;
                    height: 17px;
                    /* 显示 */
                    display: inline-block;
                    background-position: 0 0;
                }
            }
            margin-bottom: 8px;
        }

        /* 底部文字信息是否换行 */
        .cover-bottom {
            font-size: 14px;
            color: #000;
        }

        .cover-sourc {
            color: #666;
            margin-top: 5px;
        }
    }
`;