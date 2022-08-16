import styled from "styled-components";


export const AlbumHotWrapper = styled.div`
    .album-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        /* 里面的item */
        .album-item {
            width: 153px;
            height: 178px;
            margin: 25px 0;
            margin-right: 30px;
            position: relative;

            .image {

                /* 播放图标 */
                .icon-play {
                    display: none;
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    right: 30px;
                    bottom: 50px;
                    background-position: 0 -170px;
                }
                
                /* 鼠标放上去显示播放图标 */
                & :hover {
                    .icon-play {
                        display: inline-block;
                    }
                }
            }

            /* 背景遮罩 黑色的那个*/
            .msk {
                position: absolute;
                width: 153px;
                height: 130px;
                top: 0;
                left: 0;
                background-position: 0 -845px;
            }

            /* 标题 */
            .title {
                margin: 8px 0 3px 0;
                font-size: 14px;
                a {
                    display: inline-block;
                    color: #000;
                    width: 100%;
                }
            }

            /* 妙手 */
            .artists {
                color: #333;
                a {
                    display: inline-block;
                    max-width: 85%;
                    font-size: 12px;
                }
            }
        }
    }
`;