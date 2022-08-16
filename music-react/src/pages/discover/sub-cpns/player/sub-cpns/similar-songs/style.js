import styled from "styled-components";


export const PlayerSongsWrapper = styled.div`
    .playlist-list {

        .playlist-item {
            display: flex;
            align-items: center;
            width: 200px;
            margin-top: 15px;
            margin-bottom: 25px;

            /* UTP */
            .image {
                width: 50px;
                height: 50px;
            }

            /* 右边信息 */
            .info {
                margin-left: 10px;
                .title {
                    font-size: 14px;
                    a {
                        color: #000;
                        width: 140px;
                        display: inline-block;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }

                /* 底部描述 */
                .auchor {
                    color: #999;
                    a {
                        color: #666;
                        margin-left: 5px;
                    }
                }
            }
        }
    }
`;