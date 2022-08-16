import styled from "styled-components";

export const Wrapper = styled.div`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 52px;
    background-position: 0 0;
    background-repeat: repeat;
    z-index: 1000000000000;

    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 47px;
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
    }
`;

// 播放按钮
export const Control = styled.div`
    .prev,
    .next {
        width: 28px;
        height: 28px;
    }

    .prev {
        background-position: 0 -130px;
            &:hover {
                background-position: -30px -130px;
            }
    }

    .next {
        background-position: -80px -130px;
            &:hover {
                background-position: -110px -130px;
            }
    }

    /* 播放 */
    .play {
        width: 36px;
        height: 36px;
        margin-top: 5px;
        margin-left: 5px;
        margin-right: 5px;
        background-position: 0 ${(props) => (props.isPlay ? "-165px" : "-204px")};

        & :hover {
            background-position: ${(props) => (props.isPlay ? "-40px" : "-40px")} ${(props) => (props.isPlay ? "-165px" : "-204px")};
        }
    }
`;

export const PlayInfo = styled.div`
    /* 定位图片 */
    position: relative;
    display: flex;
    width: 628px;

    .image {
        margin: 5px 15px 0 0;
    }

    /* 进度条上面的歌曲信息 */
    .info {
        display: flex; 
        /* 垂直显示 */
        flex-direction: column;
        width: 100%;

        .song {
            height: 28px;
            line-height: 28px;
            display: flex;
            /* 名字 */
            .song-name {
                max-width: 300px;
                color: #e8e8e8;
            }
            .singer-name {
                max-width: 220px;
                margin-left: 15px;
                color: #9b9b9b;
            }
        }
    }

    /* 进度条 */
    .progress {
        display: flex;
        align-items: center;
        margin-top: -4px;
        .slider {
            width: 490px;
            height: 9px;
            margin: 0;
            margin-right: 10px;
        }

        /* 时间 */
        .time {
            margin-top: 4px;
            text-align: center;
            height: 10px;
            line-height: 10px;
            .now-time {
                color: #a1a1a1;
            }
            
            .divider,
            .duration {
                color: #797979;
            }
        }
    }

`;

// 功能按钮、分享、添加、音量、循环、歌单列表按钮
export const Operator = styled.div`
    display: flex;
    align-items: center;
    /* 这个 是为了显示播放列表的 ，子绝父相 */
    position: relative;

    /* height: 36px; */

    /* 统一设置 底部导航条的大小 */
    .btn {
        width: 25px;
        height: 25px;
        margin: 8px 2px 0 0;
        text-align: center;
    }

    .left {
        width: 60px;
        /* .btn {
            width: 25px;
            height: 25px;
            margin: 8px 2px 0 0;
        } */

        /* 收藏按钮 */
        .favor {
            background-position: -88px -163px;
                  &:hover {
                        background-position: -88px -189px;
                    }
        }
        /* 分享按钮 */
        .share {
            background-position: -114px -163px;
            &:hover {
                    background-position: -114px -190px;
                }
        }
    }

    /* 音量控制 */
    .right {
        display: flex;
        width: 126px;
        /* 音量条竖着的线 */
        .volume {
            position: absolute;
            width: 36px;
            height: 113px;
            top: -110px;
            background-position: 0 -503px;

            /* 滑块 */
            .slider {
                position: relative;
                width: 4px;
                height: 93px;
                padding: 4px 0;
                top: 7px;

                /* 进度条背景 */
                .ant-slider-track {
                    background-color: #c70c0c;
                }
            }
        }

        /* 音量 */
        .icon-volume {
            margin-top: 7px;
            background-position: -2px -248px;

            &:hover {
                background-position: -31px -248px;
            }
        }

        /* 循环按钮 */
        .icon-loop {
            margin-top: 7px;
            /* 接收组件传递过来的值 */
            background-position: ${(props) => {
                switch (props.playMode) {
                    case 0: 
                        // 循环播放
                        return "-3px -344px";
                    case 1:
                        // 随机播放
                        return "-66px -248px";
                    case 2:
                        // 单曲播放
                        return "-66px -344px";
                    default:
                        // 默认循环播放
                        return "-3px -344px";
                }
            }};
        }

        /* 播放列表 */
        .icon-playlist {
            margin-top: 7px;
            width: 59px;
            background-position: -42px -68px;
            padding-left: 21px;
            line-height: 23px;
            color: #666;

            &:hover {
                background-position: -42px -98px;
            }
        }
    }
`;

export const RightFixWrapper = styled.div`
    .fileds {
        position: fixed;
        width: 100px;
        height: 40px;
        right: 0;
        bottom: 20px;
        z-index: 9999999999 !important;
        
        /* 锁住 */
        .icon-lock {
            width: 100%;
            height: 60px;
            opacity: 0.1px;
            background-position: 30px -386px;
        }
    }
`;