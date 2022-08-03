import styled from "styled-components";


export const DjradioTopListWrapper = styled.div`
    width: 426px;
    margin-left: 40px;

    .program-list {
        border: 1px solid #e2e2e2;
    }

    .program-item {
        display: flex;
        height: 60px;
        width: 424px;
        align-items: center;


        /* 隔行变色 */ 
        &:nth-of-type(even) {
            background-color: #f7f7f7;
        }

        &:hover {
            background-color: #eeeeee;
            /* 显示播放图标 */
           & .image .icon-play {
                display: inline-block;
            }
        }

        .rank {
            width: 47px;
            text-align: center;
            .num {
                color: #999;
                font-size: 14px;
            }
        }

        /* 播放 */
        .image {
            position: relative;
            margin-right: 20px;
            width: 40px;
            height: 40px;
            .icon-play {
                display: none;
                width: 22px;
                height: 22px;
                background-position: 0 -85px;
                position: absolute;
                top: 35%;
                left: 25%;
            }
        }

        /* 标题 */
         .info {
            width: 190px;
            margin: 0px 10px 0 0px;

            .title {
                /* margin: 0px 10px 0 0px; */
                /* 强制显示一行文本 */
                white-space: nowrap;
                /* 超出部分隐藏 */
                overflow: hidden;
                /* 设置超出隐藏部分的文本 */
                text-overflow: ellipsis;
                font-size: 12px;
            }
            .title a {
                font-size: 12px;
            }

            .sub-title {
                /* 强制显示一行文本 */
                white-space: nowrap;
                /* 超出部分隐藏 */
                overflow: hidden;
                /* 设置超出隐藏部分的文本 */
                text-overflow: ellipsis;
                font-size: 12px;
            }
            .sub-title a {
                color: #999;
            }
         }
    }

    /* 进度条 */
    .progress {
        width: 100px;
        height: 8px;
        /* background-color: orange; */
    }

`;