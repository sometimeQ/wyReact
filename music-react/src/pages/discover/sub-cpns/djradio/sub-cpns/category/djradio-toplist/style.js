import styled from "styled-components";



export const DjradioTopListWrapper = styled.div`
    margin-top: 40px;

    .header {
        height: 40px;
        border-bottom: 2px solid #c20c0c;
        display: flex;
        justify-content: space-between;

        h3 {
            font-size: 24px;
            font-weight: normal;
        }

        .sort {
            margin: 12px 0 0 0;

            .goup {
                color: #c20c0c;
            }

            .line {
                margin: 0 10px;
                color: #c7c7c7;
            }

            .newest {
                color: #666;
            }
        }
    }

    .djradio-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .djradio-item {
            display: flex;
            padding: 20px 0;
            width: 435px;
            height: 160px;
            border-bottom: 1px solid #e7e7e7;

            .info {
                margin-left: 20px;

                .title {
                    height: 64px;
                    line-height: 64px;
                    font-size: 18px;
                    font-weight: normal;

                    a {
                        color: #333;
                    }
                }

                /* 定位 Up */
                .icon-user {
                    width: 14px;
                    height: 15px;
                    background-position: -50px -300px;
                    display: inline-block;
                    vertical-align: middle;
                }

                .user-name {
                    margin-left: 5px;
                }

                .count {
                    margin-top: 5px;
                    color: #999;
                    span {
                        margin-right: 10px;
                    }
                }
            }
        }
    }

`;