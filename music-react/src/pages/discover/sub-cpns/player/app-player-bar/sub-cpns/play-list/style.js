import styled from "styled-components";


export const Wrapper = styled.div`

    display: flex;
    /* align-items: center; */
    width: 100%;
    justify-content: space-between;
    height: 28px;
    margin-left: 15px;

    /* 按钮 */
    .btn {
        width: 13px;
        height: 15px;
        line-height: 15px;
        display: inline-block;
        text-align: center;
        margin-right: 8px;
    }
    

     /* 基数 */
    &:nth-child(2n - 1) {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .song-name {
        width: 250px;
        height: 28px;
        line-height: 28px;
        color: rgb(204, 204, 204);
        font-size: 12px;
        font-weight: normal;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-wrap: nowrap;

        &:hover {
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
        }
    }

    .control-and-singer {
        display: flex;
        /* width: 100%; */
        line-height: 28px;
        align-items: center;
        

        .oprate {
            display: none;
            .add-icon {
                background-position: 0 -700px;
                &:hover {
                    background-color: purple;
                }
            }

            .favor-icon {
                background-position: 0 -175px;
            }

            .share-icon {
                background-position: 0 -195px;
            }

            .download-icon {
                background-position: -81px -174px;
            }
        }

        /* 歌手 */
        span {
            width: 90px;
            line-height: 28px;
            color: rgb(204, 204, 204);
            font-size: 12px;
            font-weight: normal;
            text-align: left;
            overflow: hidden;
            text-overflow: ellipsis;
            flex-wrap: nowrap;
        }

        /* 时间 */
        .duration {
            margin-left: 8px;
            width: 30px;
        }

        .lian-jie {
            margin-left: 24px;
            .downloadx-icon {
                background-position: 0 -282px;
            }
        }
    }

    &:hover {
        .oprate {
            display: inline-block;
        }
    }
`;