import styled from "styled-components";


export const ArtistListWrapper =  styled.div`

    /* 定位图标公用的放外面 */
    .icon-user {
        display: inline-block;
        width: 17px;
        height: 18px;
        background-position: 0 -740px;
        /* 对其方式 */
        vertical-align: middle;
        margin-left: 2px;
    }

    .letter-list {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        /* 微调 */
        margin-left: -3px;

        .letter-item {
            width: 21px;
            line-height: 24px;
            text-align: center;
            font-size: 14px;
            color: #333;
        }

        /* 热门其他、宽度 */
        & :last-child,
        & :first-child {
            width: 45px;
        }
    }

    .artists-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        /* 图片、信息 */
        .cover {
            width: 130px;
            height: 154px;
            margin-top: 30px;

            /* 图片 */
            .image {
                /* 让遮罩显示 */
                position: relative;
                .msk {
                    display: inline-block;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    left: 0;
                    top: 0;
                    background-position: 0 -680px;
                }
            }

            /* 信息 */
            .info {
                display: flex;
                justify-content: space-between;
                margin-top: 8px;
            }
        }
    }

    /* 底部名字列表 */
    .artists-title-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px dotted #999;

        .list-item {
            width: 130px;
            height: 30px;
        }
    }
`;