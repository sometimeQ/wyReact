import styled from "styled-components";

export const DjradioCateWrapper = styled.div`
    width: 933px;
    /* 方便定位两个上下图片 */
    position: relative;
    /* 往左边移动 */
    transform: translateX(-3%);

    /* 上 */
    .icon-prev {
        margin-top: -15px;
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 20px;
        height: 30px;
        background-position: 0 -30px;
        z-index: 10;
    }

    /* 下 */
    .icon-next {
        margin-top: -15px;
        position: absolute;
        top: 50%;
        right: -26px;
        /* 显示 */
        display: block;
        width: 20px;
        height: 30px;
        background-position: -30px -30px;
    }

    .page {
        display: flex;
        justify-content: space-between;
    } 
`;


export const CateItemWrapper = styled.div`
    width: 70px;
    height: 72px;
    display: inline-block;
    text-align: center;
    margin: 0 0 25px 33px;

    .cate-link {
        /* 小图标定位 */
        .icon {
            display: block;
            width: 48px;
            height: 48px;
            background: url(${(props) => props.cateIcon});
            background-position: 0 0;
            /* 小图标居中 */
            margin: 2px auto;
        }

        .title {
            color: #888;
            font-size: 12px;
        }
    }
`;