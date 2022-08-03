import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    position: relative;
`;

export const Left = styled.div`
     .msk {
        position: absolute;
        width: 208px;
        height: 208px;
        background-position: 0 -1285px;
        top: -4px;
        left: -4px;
    }
`; 

export const Right = styled.div`
    margin-left: 30px;
    
    .hand {
        margin: 0 0 12px;
        /* 控制这个标签内部排列的顺序 */
        display: flex;
        /* 定位图标 */
        .icon-playlist {
            /* 显示 */
            display: inline-block;
            width: 54px;
            height: 24px;
            background-position: 0 -243px;
        }
        /* 标题 */
        .title {
            margin-left: 10px;
            line-height: 24px;
            font-size: 20px;
            font-weight: normal;
        }
    }

    .user {

        .avatar-img {
            margin-right: 10px;
        }

        .avatar-name {
            color: #0c73c2;
        }
        /* 星星 */
        .icon-star {
            width: 12px;
            height: 13px;
            /* 显示 */
            display: inline-block;
            /* 定位 */
            background-position: -65px -840px;
            /* 微调 */
            margin: 9px 0 -3px 3px;
        }

        /* 日期 */
        .create-time {
            margin-left: 15px;
            color: #999;
        }
    }

    /* 播放烂 */
    .song-operation-bar {
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .tags-title {
        margin-right: 10px;
    }

    .album {
        /* display: flex;
        .album-trs {
            background-color: purple;
            display: inline-block;
        } */
        /* 描述 */
        .album-short {
            overflow: hidden;
            -webkit-line-clamp: 4;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
        }

        .album-detaile {
            /* display: inline-block; */
        }
    }
    

    /* 字体切换 */
    .toger {
        margin-top: 5px;
        .toger-a {
            display: flex;
            justify-content: flex-end;
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