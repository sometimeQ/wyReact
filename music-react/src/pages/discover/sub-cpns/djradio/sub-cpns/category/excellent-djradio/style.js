import styled from "styled-components";


export const ExcellentDjradioWrapper = styled.div`
    margin-top: 30px;

    .header {
        height: 40px;
        border-bottom: 2px solid #c20c0c;
        h3 {
            font-weight: normal;
            font-size: 24px;
        }
    }

    .excellent-list {
        display: flex;
        justify-content: space-between;
        margin: 16px 0 0 0;

        .excellent-item {
            width: 150px;

            .title {
                line-height: 16px;
                margin: 13px 0 6px 0;
                font-size: 14px;
                font-weight: normal;

                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }

            .rcmdtext {
                color: #999;
            }
        }
    }
`;