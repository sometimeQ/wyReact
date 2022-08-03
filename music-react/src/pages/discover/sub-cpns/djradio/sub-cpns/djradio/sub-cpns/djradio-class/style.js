import styled from "styled-components";


export const DjradioClassWrapper = styled.div`
    .class-list {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 20px;

        .class-item {
            width: 435px;
            height: 140px;
            display: flex;
            margin-bottom: 20px;

            /* 分割线 */
            &:nth-child(-n + 2 ) {
                border-bottom: 1px solid #e7e7e7;
            }
            
            .image {
                width: 120px;
                height: 120px;
            }

            .info {
                align-items: center;
                margin-left: 20px;

                .title {
                    margin: 16px 0 20px 0;
                    /* background-color: purple; */
                    font-size: 18px;
                    color: #333;
                    font-weight: bold;
                }

                .sub-title {
                    color: #999;
                }
            }
        }
    }

`;