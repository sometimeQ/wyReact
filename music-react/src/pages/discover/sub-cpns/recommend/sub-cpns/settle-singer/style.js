import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
    padding: 10px 20px;

    .apply-for {
        margin-top: 12px;
        a {
            color: #333;
            text-decoration: none;
            text-align: center;
            border: 1px solid #c3c3c3;
            border-radius: 4px;
            height: 31px;
            line-height: 31px;
            display: block;
            background-color:  #fafafa;
            font-weight: 700;
        }
    }
`;

export const SingerInfoWrapper = styled.div`
    .item {
        display: flex;
        height: 56px;
        margin-top: 14px;
        background-color: #fafafa;
        text-decoration: none;

        :hover {
            background-color: #f4f4f4;
        }

        img {
            width: 56px;
            height: 56px;
        }

        .info {
            margin: 8px 0 0 10px;
            .title {
                color: #333;
                font-size: 13px;
                font-weight: 700;
            }

            .name {
                margin-top: 7px;
            }
        }
    }
`;