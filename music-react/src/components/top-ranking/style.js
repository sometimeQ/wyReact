import styled from "styled-components";


export const Wrapper = styled.div`
    flex: 1;
    /* 顶部 */
   .header {
        height: 100px;
        display: flex;
        margin: 20px 0 0 20px;
        .image {
            width: 80px;
            height: 80px;
            img {
                width: 80px;
                height: 80px;
            }
        }

            .info {
                margin: 5px 0 0 10px;
                a {
                    font-size: 14px;
                    font-weight: 700;
                    color: #333;
                    text-decoration: none;
                }

                h3 {
                    font-size: 14px;
                }

                /* 按钮 */
                .btn {
                    width: 22px;
                    height: 22px;
                    /* 小手指 */
                    cursor: pointer;
                    margin: 8px 10px 0 0;
                    display: inline-block;
                    text-indent: -9999px;
                }

                /* 定位 */
                .play {
                    background-position: -267px -205px;
                    :hover{
                        color: red;
                    }
                }

                .favor {
                    background-position: -300px -205px;
                    :hover{
                        color: #000;
                    }
                }
         }
    }

    /* 中间 */
    .list {
        /* display: flex; */
        .list-item {
            position: relative;
            display: flex;
            align-items: center;
            height: 32px;
            /* 头三个显示红色 */
            :nth-child(-n + 3) .rank {
                color: #c10d0c;
            }

            /* 序号 */
            .rank {
                font-size: 16px;
                margin-left: 10px;
                text-align: center;
                width: 35px;
            }

            /* 右边信息 */
            .info {
                color: #000;
                width: 170px;
                height: 17px;
                line-height: 17px;
                display: flex;
                justify-content: space-between;
                /* background-color: orange; */

                /* 名字信息 */
                .name {
                    flex: 1;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }

                /* 鼠标放上去显示的信息 */
                .operate {
                    display: flex;
                    align-items: center;
                    /* 隐藏 */
                    display: none;
                    width: 82px;
                    /* background-color: purple; */

                    .btn {
                        width: 17px;
                        height: 17px;
                        /* 间隔 */
                        margin-left: 8px;
                        cursor: pointer;
                    }

                    .play {
                        /* 定位图片 */
                        background-position: -267px -268px;
                    }

                    .addto {
                        background-position: 0 -700px;
                        /* 定位调整 */
                        position: relative;
                        top: 2px;
                    }

                    .favor {
                        background-position: -297px -268px;
                    }
                }
            }
            :hover {
                .operate {
                    display: block;
                }
            }
        }
    }

    /* 尾部 */
    .footer {
        height: 32px;
        line-height: 32px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 30px;

        a{ 
            color: #000;
        }
    }
`;