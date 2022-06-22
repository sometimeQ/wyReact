import styled from "styled-components";

export const RankingHeaderWrapper = styled.div`
    background: #fff;
    padding: 40px;

    .header {
        display: flex;
        /* 图片 */
        .image {
            border: 2px solid #ccc;
            /* 为了能让斜着的白色背景显示出来，子绝父相 */
            position: relative;
            img {
                height: 150px;
                width: 150px;
            }

             /* 定位图片半透明遮罩 */
            .msk {
                /* 覆盖一层a标签用于点击跳转 */
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                background-position: -230px -380px;
            }
        }      
        .info {
            margin-left: 30px;
            /* 名字 */
            .title {
                color: #333;
                font-size: 20px;
                font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;;
            }
            /* 更新时间 */
            .update-time {
                display: flex;
                align-items: center;
                margin: 8px 0 30px;
                color: #666;
                /* 小图标 */
                .clock {
                    display: inline-block;
                    width: 13px;
                    height: 13px;
                    /* 定位图片显示 */
                    background-position: -18px -682px;
                    margin-right: 3px;
                    /* 微调图片 */
                    position: relative;
                    top: -2px;
                }

                /* 右边括号小问题 */
                .update-f {
                    color: #999;
                 }
            }
        }
    }
    
`;