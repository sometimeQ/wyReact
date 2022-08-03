import styled from "styled-components";

export const RecommProgramsWrapper = styled.div`
    
    width: 426px;

    .program-list {
        /* margin-top: 20px; */
        border: 1px solid #e2e2e2;
        border-top: none;
    }

    .program-item {
        margin-left: 20px;
        padding-top: 10px;
        display: flex;
        width: 424px;
        height: 60px;

        .info {
            width: 254px;
            margin: 1px 0 0 15px;

            .imge {
                /* 定位播放图片 */
                position: relative;
                .icon-play {
                    width: 22px;
                    height: 22px;
                    background-position: 0 -85px;
                    position: absolute;
                    top: 20%;
                    left: 25%;
                    background-color: purple;
                    /* 显示 */
                    /* display: none; */
                }
            }

            .title {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 12px;
            }

            .sub-title a {
                color: #999;
            }
    }

    .tag {
        display: inline-block;
        margin: 20px 0 0 10px;
        padding: 0 6px;
        height: 16px;
        line-height: 16px;
        text-align: center;
        border: 1px solid #999;
        vertical-align: middle;
        color: #999;
    }
    }
`;