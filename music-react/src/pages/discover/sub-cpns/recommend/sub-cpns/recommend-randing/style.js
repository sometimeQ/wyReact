import styled from "styled-components";

export const RecommendRandingWrapper = styled.div`
    .top {
        /* 里面所有的都是 */
        margin: 30px 0;
        display: flex;
        width: 689px;
        height: 472px;
        /* 骨架屏 */
        background-image: url(${require('@/assets/img/recommend-top-bg.png')});
    }
`;