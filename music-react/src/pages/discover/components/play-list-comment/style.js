import styled from "styled-components";

export const PlayListCommentWrapper = styled.div`
    padding: 40px;
    /* 评论、数量、下划线 */
    .comment-title {
        display: flex;
        height: 33px;
        border-bottom: 2px solid #c20c0c;
        /* 标题 */
        h3 {
            font-size: 20px;
            line-height: 28px;
        }
        /* 数量 */
        .comment-count {
            color: #666;
            margin: 7px 0 0px 20px;
        }
    }

    /* 输入框、@、字数、评论按钮 */
    .comment-input {
        display: flex;
        margin-top: 20px;
        width: 100%;
        /* background-color: purple; */
        /* 头像 */
        .user-icon {
            width: 50px;
            height: 50px;
        }
        .input {
            width: 100%;
            margin: 0 0 0 20px;
            position: relative;
            /* 输入框 */
            .textarea {
                width: 100%;
                height: 65px;
                border: 1px solid #999;
                padding-left: 10px;
                padding-top: 5px;
                background: #fff;
                border-radius: 2px;
                resize: none;
                -webkit-user-select: auto !important;
                -khtml-user-select: auto !important;
                -moz-user-select: auto !important;
                -ms-user-select: auto !important;
                -o-user-select: auto !important;
                user-select: auto !important;
            }
            /* 输入框底部按钮布局 */
            .info {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                /* 左边的两个按钮 */
                .left {
                    cursor: pointer;
                    .expression {
                        width: 18px;
                        height: 18px;
                        display: inline-block;
                        background-position: -40px -490px;
                        margin-right: 10px;
                    }
                    .at {
                        width: 18px;
                        height: 18px;
                        display: inline-block;
                        background-position: -60px -490px;
                    }
                }
                /* 右边的文字与按钮 */
                .right {
                    display: flex;
                    .place {
                        /* line-height: 18px; */
                        height: 25px;
                        line-height: 25px;
                        color: #999;
                        text-align: center;
                        /* background-color: purple; */
                        margin-right: 10px;
                    }
                    .sumit {
                        display: inline-block;
                        width: 46px;
                        height: 25px;
                        line-height: 25px;
                        text-align: center;
                        color: #fff;
                        background-position: -84px -64px;
                        :hover{
                            background-position: -84px -94px;
                        }
                    }
                }
            }
            /* 左边的箭头符号 */
            .corr {
                /* 定位左边的背景◆ */
                .arrline {
                    position: absolute;
                    top: 13px;
                    left: -7px;
                    color: #cdcdcd;
                 }
                 /* 定位上面的白色◆背景 */
                 .arrclr {
                    position: absolute;
                    top: 13px;
                    left: -5px;
                    margin: 0px 0 0px 1px;
                    overflow: hidden;
                    color: #ffff;
                }
            }
        }

    }

    /* 精彩评论 */
    .hot-comment-title {
        margin-top: 20px;
        /* background-color: red; */
        h3 {
            font-size: 12px;
            color: #333;
            height: 20px;
            font-weight: bold;
            border-bottom: 1px solid #cfcfcf;
        }
    }

    /* 最新评论 */
    .hot-comment-title {

    }

    /* 底部页码 */
    .page-view {
        margin-top: 20px;
    }
`;