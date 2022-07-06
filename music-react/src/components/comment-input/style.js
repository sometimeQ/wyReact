import styled from "styled-components";


export const CustomInputWrapper =  styled.div`
    .a-input {
        width: 100%;
            /* margin: 0 0 0 20px; */
            position: relative;
            z-index: 99999998;
            /* 输入框 */
            .a-textarea {
                width: 100%;
                height: 30px;
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
                font-size: 11px;
                color: rgb(51, 51, 51);
                font-family: Arial, Helvetica, sans-serif;
                text-size-adjust: none;
            }
             /* 输入框底部按钮布局 */
            .info {
                display: flex;
                justify-content: space-between;
                margin-top: 10px;
                z-index: 99999999;
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
                    /* emoji表情库 */
                    .emoji-container {
                        margin-top: 10px;
                    }
                    /* @t列表 */
                    .u-atlist {
                        display: flex;
                        display: inline-block;
                        width: 220px;
                        /* border: 1px solid rgb(205, 205, 205); */
                        background-color: white;

                        /* 动态定位坐标 */
                        
                        p {
                            padding: 10px 10px;
                        }
                        
                        .at-list {
                            /* background-color: rgb(205, 205, 205); */
                            
                            display: flex;
	                        flex-direction: column;
                            justify-content: space-around;
                            a {
                                padding: 10px 10px;
                            }
                        }
                        
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
    }
`;