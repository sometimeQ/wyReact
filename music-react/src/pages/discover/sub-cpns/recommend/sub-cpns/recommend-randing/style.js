import styled from "styled-components";

export const RecommendRandingWrapper = styled.div`
    /* 太坑了，记住不能取一样的类名. top */
    .topss {
        /* 里面所有的都是 */
        margin: 30px 0;
        display: flex;
        /* 骨架屏 */
        background-image: url(${require('@/assets/img/recommend-top-bg.png')});
        height: 472px;
    }
`;