import styled from "styled-components";


export const SongsListWrapper = styled.div`
    margin-top: 30px;

    /* 控制歌单列表布局 */
    .play-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    /* 底部页码 */
    .page-view {
        margin-top: 20px;
    }
`;