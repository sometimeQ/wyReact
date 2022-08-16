import styled from "styled-components";


export const AlbumListWrapper = styled.div`
    .header {
        margin-top: 30px;
    }

    .album-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        /* item */
        .album-item {
            width: 153px;
            height: 178px;
            margin: 25px 0;
            margin-right: 30px;
            position: relative;

            .image {

                /* 遮罩 */
                .msk {
                    position: absolute;
                    width: 153px;
                    height: 130px;
                    background-position: 0 -845px;
                    top: 0;
                    left: 0;
                }

                & :hover {
                    .icon-play {
                        display: inline-block;
                    }
                }

                /* 播放图标 */
                .icon-play {
                    display: none;
                    position: absolute;
                    width: 28px;
                    height: 28px;
                    background-position: 0 -170px;
                    
                    right: 30px;
                    bottom: 50px;
                }
            }

            /* 标题 */
            .title {
                margin: 8px 0 3px;
                font-size: 14px;
                a {
                    width: 100%;
                    display: inline-block;
                    color: #000;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            /* 描述 */
            .artists {
                color: #3333;
                a {
                    display: inline-block;
                    max-width: 85%;
                    font-size: 12px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

            }
        }
    }
`;