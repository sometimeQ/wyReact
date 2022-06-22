import styled from "styled-components";


export const OperationBarWrapper = styled.div`
    display: flex;
    align-items: center;

    .play {
        /* 里面内容布局 */
        display: flex;
        align-items: center;
        margin-left: -3px;
        
        .play-icon {
            display: inline-block;
            height: 31px;
            line-height: 31px;
            background-position: right -428px;
            padding: 0 7px 0 8px;

            /* 定位播放文字图片 */
            .play {
                background-position: 0 -387px;
                background-color: orange;
                display: flex;
                align-items: center;
                /* 播放图片定位 */
                i {
                    display: inline-block;
                    width: 20px;
                    height: 18px;
                    margin: -2px 2px 0 5px;
                    background-position: 0 -1622px;
                }

                .title {
                    width: 33px;
                    font-size: 13px;
                    color: #fff;
                }
            }
        }

        /* + 号 */
        .add-icon {
            width: 31px;
            height: 31px;
            display: inline-block;
            /* 定位背景图片 */
            background-position: 0 -1588px;
            margin-left: -7px;
            padding-right: 5px;
        }
    }

    /* 收藏 */
    .item {
        margin-left: 5px;
        display: flex;
        align-items: center;
        height: 31px;
        /* margin-right: 6px; */
        padding-right: 5px;
        /* 定位背景图片框的 */
        background-position: right -1020px;
        /* 定位背景 */
        .icon {
            /* 显示 */
            display: inline-block;
            height: 31px;
            line-height: 31px;
            /* 用来撑满盒子 */
            padding: 0 4px 0 28px;
            text-align: center;
            font-family: simsun;
        }

        /* 收藏图片定位 */
        .favor-icon {
            background-position: 0 -977px;
            margin-left: 2px;
        }

        /* 分享图片定位 */
        .share-icon {
            background-position: 0 -1225px;
            margin-left: 2px;
        }

        /* 下载 */
        .download-icon {
            background-position: 0 -2761px;
            margin-left: 2px;
        }

        /* 评论图片定位 */
        .comment-icon {
            background-position: 0 -1465px;
            margin-left: 2px;
        }
    }
`;