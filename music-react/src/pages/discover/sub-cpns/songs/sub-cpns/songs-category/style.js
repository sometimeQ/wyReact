import styled from "styled-components";


export const SongsCategoryWrapper = styled.div`
    /* 悬浮定位在最上面 */
    position: absolute;
    width: 700px;
    margin-top: 10px;
    margin-left: -30px;
    padding: 10px 10px;
    background-color: #fefefe;
    box-shadow: 0 0 10px 2px #d3d3d3;
    z-index: 111 !important;

    /* 小三角符号 */
    .arrow {
        position: absolute;
        top: -11px;
        left: 132px;
        width: 32px;
        height: 11px;
        background-position: -48px 0;
    }

    .all {
        height: 37px;
        padding-left: 26px;
        border-bottom: 1px solid #e6e6e6;
        font-weight: normal;
        /* 内部文字 */
        .link {
            width: 75px;
            height: 26px;
            text-align: center;
            line-height: 26px;
            /* 背景边框定位 */
            background-position: 0 -64px;
        }
    }

    /* 语种 */
    .category {
        padding-left: 25px;
        dl {
            /* flex： 将对象作为弹性伸缩盒显示 */
            display: flex;
            /* align-items用于设置侧轴上的子元素排列方式 */
            align-items: flex-start;

             /* 左侧图标分别设置 */
            &.item1 {
                i {
                    background-position: 0 -60px;
                }
            }

            &.item2 {
                i {
                    background-position: 0 -88px;
                }
            }

            &.item3 {
                i {
                    background-position: 0 -117px;
                }
            }

            &.item4 {
                i {
                    background-position: 0 -141px;
                }
                
                dd {
                    padding-bottom: 25px;
                }
            }
        }

        dt {
            /* inline-flex：将对象作为内联块级弹性伸缩盒显示 */
            /* 它会根据子元素所有的div大小自适应宽度和高度 */
            display: inline-flex;
            align-items: center;
            padding: 15px 0 10px;
            width: 70px;
            text-align: center;
            /* 左侧图标 */
            i {
                display: inline-block;
                width: 24px;
                height: 24px;
                background-position: -20px -735px;
                margin-right: 8px;
            }
        }

        /* 右边排列的小数据 */
        dd {
            display: flex;
            flex-wrap: wrap;
            flex: 1;
            /* align-items: flex-start; */
            border-left: 1px solid #e2e2e2;
            padding-top: 18px;
            padding-left: 15px;
            .item {
                margin-bottom: 8px;
            }
            a {
                color: #333;
            }
            /* 分割线 */
            .divider {
                margin: 0 12px;
                color: #e2e2e2;
            }
        }
    }
`;