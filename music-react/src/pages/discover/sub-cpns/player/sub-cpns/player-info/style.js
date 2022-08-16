import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;

    .image {
        width: 206px;
        .image-box {
            /* 调整图片的 */
            position: relative;
            display: flex;
            justify-content: center;
            width: 198px;
            height: 198px;
            align-items: center;

            /* 背景圆圈定位 */
            .cover {
                position: absolute;
                width: 206px;
                height: 205px;
                background-position: -140px -580px;
                top: -4px;
                left: -4px;
            }
        }

        /* 底部链接 */
        .createPlayer {
            margin: 20px 0 0 46px;
            /* 小图标 */
            .icon-music {
                display: inline-block;
                width: 16px;
                height: 16px;
                background-position: -34px -861px;
            }
            a {
                text-decoration: underline;
                color: #0c73c2;
                line-height: 16px;
            }
        }
    }

    /* 右边信息 */
    .dnt {
        width: 414px;

        .title {
            .icon-type {
                display: inline-block;
                width: 54px;
                height: 24px;
                background-position: 0 -463px;
            }

            /* 标题 */
            h2 {
                display: inline-block;
                margin-left: 10px;
                font-size: 24px;
                margin-right: 7px;
            }

            .des {
                color: #999;
                margin: 10px 0;
                span {
                    color: #0c73c2;
                }
            }
        }
    }

    /* 歌词信息 */
    .lyricList {
        margin-top: 13px;
        line-height: 23px;

        .lyricList-short {
            overflow: hidden;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }
    }

     /* 字体切换 */
    .toger {
        margin-top: 5px;
        .toger-a {
            display: flex;
            justify-content: flex-end;
            color: #0c73c2;
            .u-icn {
                text-align: center;
                width: 14px;
                height: 17px;
                display: inline-block;
                background-position: left -680px;
                /* background-color: purple; */
            }

            .ud-icnd {
                text-align: center;
                width: 14px;
                height: 17px;
                display: inline-block;
                background-position: left -715px;
                /* background-color: purple; */
            }
        }
    }
`;