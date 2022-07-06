// 引入样式
import styled from "styled-components";

// 包裹器
export const HeaderWrapper = styled.div`
    height: 75px;
    font-size: 14px;
    color: #fff;
    background-color: #242424;
    
    /* 内容 */
    .content {
        height: 70px;
        /* flex布局 */
        display: flex;
        justify-content: space-between;
        /* background-color: blue; */
    }

    /* 底部分割线 */
    .divider {
        height: 5px;
        background-color: #C20C0C;
    }
`;

// 左边
export const HeaderLeft  = styled.div`
    display: flex;
    /* 图标 */
    .logo {
        /* 显示 */
        display: block;
        width: 176px;
        height: 69px;
        /* 定位 */
        background-position: 0 0;
        text-indent: -9999px;
    }

    .select-list {
        display: flex;
        /* 文字居中 */
        line-height: 70px; 
        justify-content: space-around;
        .select-item {
            position: relative;
            /* NavLink 路由里面自带的a标签 */
            a {
                /* 要显示就block */
                display: block; 
                padding: 0 20px;
                line-height: 70px;
                color: #ccc;
                &:hover {
                    background: #000;
                    color: orange;
                    text-decoration: none;
                }
                /* 点击的状态, 等价于下面注释的 &:伪元素 */
                &.active {
                    color: red;
                    background: #000;
                    text-decoration: none;
                }

                /* a.active { */
                     /* background: #000;
                        text-decoration: none;
                        color: red;
                } */
                /* 底部激活的图标采用子绝父相 */
                &.active .icon {
                    position: absolute;
                    display: inline-block;
                    width: 12px;
                    height: 7px;
                    /* 居中 */
                    left: 50%;
                    bottom: 1px;
                    transform: translate(-50%, 0);
                    /* 定位精灵图 */
                    background-position: -226px 0;
                }
            }

            :last-of-type a {
                /* 追加伪元素 */
                position: relative;
                ::after {
                    position: absolute;
                    top: 20px;
                    right: -15px;
                    content: '';
                    width: 28px;
                    height: 19px;
                    background-image: url(${require("@/assets/img/sprite_01.png")});
                    background-position: -190px 0;
                }
            }

        }
    }
`;

// 右边
export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 13px;
    width: 30%;

    /* 输入框 */
    .search-wrapper {
        position: relative;
        /* 输入框 */
        .search {
            width: 158px;
            height: 32px;
            /* 圆角 */
            border-radius: 2rem;
            font-size: 12px;
        }

        /* 下拉框 */
        .down-slider {
            /* 定位下拉框 */
            position: absolute;
            top: 36px;
            left: 0;
            right: 0;
            width: 237px;
            z-index: 999;
            border: 1px solid #bebebe;
            border-radius: 4px;
            background-color:  #fff;
            box-shadow: 0 4px 7px #555;
            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

            /* 搜索下拉框头部 */
            .search-header {
                height: 35px;
                .header-title  {
                    display: inline-block;
                    padding-top: 10px;
                    padding-left: 10px;
                    color: #000;
                }
            }

            /* 内容 */
            .content {
                height: 100%;
                display: flex;
                border: 1px solid rgb(183, 183, 187);

                .left {
                    width: 65px;
                    padding-top: 10px;
                    border-bottom: none;
                    /* 单曲 */
                    .song {
                        color: #ccc;
                        /* margin-left: 20px; */
                        text-align: center;
                        margin-left: 5px;
                    }
                }

                /* 主体 */
                .main { 
                    height: 100%;
                    border-left: 1px solid #ccc;
                    font-size: 16px;
                    .item {
                        margin: 10px 10px;
                        color: #000;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        width: 168px;
                        height: 35px;
                        line-height: 35px;
                        cursor: pointer;
                        /* text-indent: 8px; */
                    }
                }
            }
        }
    }
    

    .button-center {
        /* width: 90px; */
        height: 32px;
        text-align: center;
        border-radius: 2rem;
        border: 1px solid #4f4f4f;
        color: #ccc;
    }

    .button-login {
       color: #ccc;
    }
`;
