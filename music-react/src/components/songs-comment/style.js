import styled from "styled-components";

export const AlbumCommentWrapper = styled.div`
    border-bottom: 1px dotted #ccc;
    padding: 15px 0;
    flex: 1;

    .info {
        display: flex;
        justify-content: space-between;
        /* 左边的内容 */
        .user-view {
            display: flex;
            width: 100%;
            /* 头像 */
            img {
                width: 50px;
                height: 50px;
                border-radius: 5px;
            }
            /* 评论内容 */
            .user-right { 
                margin-left: 15px;
                width: 100%;
                /* 昵称 */
                .user-name {
                    color: #0c73c2;
                }

                /* 内部回复内容匡等 */
                .f-brk {
                    padding: 8px 19px;
                    margin-top: 10px;
                    line-height: 20px;
                    background: #f4f4f4;
                    border: 1px solid #dedede;
                    position: relative;
                    /* 小角标 */
                    .darr {
                        position: absolute;
                        top: -7px;
                        left: 20px;
                        font-size: 12px;
                        line-height: 14px;
                        background-color: purple;
                        /* 定位i标签 */
                        i {
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                        .bd {
                            color: #dedede;
                        }

                        .bg {
                            top: 1px;
                            color: #f4f4f4;
                        }
                    }
                }
            }
        }
        
        /* 日期、点赞、回复 */
        .btm {
            margin-top: 15px;
            display: flex;
            justify-content: space-between;
            /* 日期 */
            .like {
                width: 90px;
                /* background-color: orange; */
                display: flex;
                justify-content: flex-end;
                
                /* 点赞图标 */
                a {
                    text-align: center;
                }
                .zan {
                    display: inline-block;
                    width: 15px;
                    height: 14px;
                    background-position: -150px 0;
                    /* background-color: purple; */
                    margin-right: 10px;
                    margin-top: 0px;
                }
                /* 数量 */
                .count {
                    margin-right: 10px;
                }
                /* 分割线 */
                .step {
                    margin-right: 10px;
                }
            }
        }

        /* 底部回复的内容框等功能 */
        .content-reply {
            display: none;
            width: 100%;
            height: 100px;
            margin-top: 15px;
            /* 子绝父相 */
            position: relative;
            /* 框 */
            .f-brka {
                height: 100%;
                line-height: 100%;
                padding: 15px;
                background: rgb(248, 248, 248);
                border: 1px solid #dedede;
                border-radius: 2px;
                /* 小角标 */
                .darra {
                    /* 定位小角标框上面的 */
                    position: absolute;
                    top: -7px;
                    right: 20px;
                    font-size: 12px;
                    line-height: 100%;

                    /* i标签定位 */
                    i {
                        position: absolute;
                        top: 0;
                        left: 0;
                    }

                    .bda {
                        color: rgb(217, 217, 217);
                    }

                    .bga {
                        top: 1px;
                        color: rgb(248, 248, 248);
                    }
                }

                /* 内容恢复框 */
                .reply {
                    /* background-color: red; */
                    width: 100%;
                    height: 100%;
                }
            }
        }

       
    }
`;