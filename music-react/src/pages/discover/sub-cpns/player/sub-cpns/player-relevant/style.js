import styled from "styled-components";


export const PlayerRelevantWrapper = styled.div`

    .simi-list { 
        display: flex;
        justify-content: space-between;
        margin-top: 10px;

        .left {
            width: 156px;
            .song-info {
                a {
                    /* display: inline-block; */
                    color: #333;
                    width: 100%;
                }
            }

            /* 歌手 /  */
            .artist-list {
                .artist-info {
                    a {
                        color: #999;
                        font-size: 10px;
                    }
                }
            }
        }

        .right {
            /* 调整y 坐标 */
            transform: translateY(20%);
            .play {
                display: inline-block;
                width: 10px;
                height: 11px;
                background-position: -69px -455px;
            }

            .add-list {
                display: inline-block;
                width: 10px;
                height: 11px;
                margin-left: 20px;
                background-position: -87px -454px;
            }
        }
    }


`; 