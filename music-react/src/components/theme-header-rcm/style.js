import styled from "styled-components";


export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    height: 35px;
    width: auto;
    line-height: 35px;
    /* 定位图片 */
    background-position: -225px -156px;
    padding: 0 10px 4px 34px;
    border-bottom: 2px solid #c10d0c;

    .left {
        display: flex;

        .title {
            font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
            font-size: 20px;
            color: #333;
            margin-right: 20px;
        }

        .keywords {
            display: flex;
            .item {
                margin-right: 15px;
                .line {
                    margin-left: 15px;
                    color: #ccc;
                }
            }
        }
    }

    .right {
        .icon {
            background-position: 0 -237px;
            width: 12px;
            height: 12px;
            display: inline-block;
            margin-left: 4px;
        }
    }
`;