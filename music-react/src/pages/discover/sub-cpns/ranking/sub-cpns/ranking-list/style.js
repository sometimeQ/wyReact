import styled from "styled-components";


export const RankingListWrapper = styled.div`
    .play-list {
        /* 边距设置 */
        padding: 0 40px;
        table {
            width: 100%;
            border: 1px solid #d9d9d9;

            /* 头 */
            thead {
                th {
                    height: 34px;
                    line-height: 34px;
                    /* 背景图片 */
                    background-image: url(${require("@/assets/img/sprite_table.png")});
                    color: #666;
                    border: 1px solid #ddd;
                    border-width: 0 0 1px 1px;
                    padding-left: 10px;
                    text-align: left;
                }

                .ranking {
                    width: 78px;
                    border-left: none;
                }

                .title {

                }

                /* 文字 */
                .duration {
                    width: 91px;
                }

                .singer {
                    width: 173px;
                }
            }

            /* 身体 */
            tbody {
                td {
                    padding: 6px 10px;
                }

                /* 设置单元格背景 双数see */
                tr:nth-child(2n) {
                    background-color: #fff;
                }

                tr::nth-child(2n + 1) {
                    background-color: f7f7f7;
                }

                /* 序列号 */
                .rank-num {
                    /* 序号 */
                    .num {
                        width: 25px;
                        height: 18px;
                        text-align: center;
                        color: #999;
                    }

                    /* 箭头图标 */
                    .new {
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        margin-left: 12px;
                        /* 定位显示 */
                        background-position: -67px -283px;
                        position: relative;
                        top: 4px;
                    }
                }

                /* 中间歌曲头像 */
                .song-name {
                    display: flex;
                    align-items: center;
                    
                    /* 图片 */
                    img {
                        width: 50px;
                        height: 50px;
                        margin-right: 10px;
                    }

                    /* 播放按钮▶️ */
                    .play {
                        display: inline-block;
                        width: 17px;
                        height: 17px;
                        background-position: 0 -103px;
                        margin-right: 10px;
                    }

                    /* 名字 */
                    .name {
                        margin-right: 10px;
                    }
                }

                .drt-item {
                    display: flex;
                    align-items: center;
                    width: 80px;
                    
                    .dr {
                        display: inline-block;
                    }

                    .oprate {
                        display: flex;
                        /* background-color: purple; */
                        display: none;

                        .btn {
                            width: 18px;
                            height: 16px;
                            display: inline-block;
                            cursor: pointer;
                        }

                        /* + 号 */
                        .add-icon {
                            /* 定位背景图片 */
                            background-position: 0 -700px;
                        }

                        /* 收藏图片定位 */
                        .favor-icon {
                            background-position: 0 -175px;
                            /* margin-left: 2px; */
                        }

                        /* 分享图片定位 */
                        .share-icon {
                            background-position: 0 -195px;
                            margin-left: 2px;
                        }

                        /* 下载 */
                        .download-icon {
                            background-position: -81px -174px;
                            margin-left: 2px;
                        }
                    }

                    &:hover {
                        .dr {
                            display: none;
                        }

                        .oprate {
                            display: inline-block;
                        }
                    }
                }
            }

        }
    }
`;