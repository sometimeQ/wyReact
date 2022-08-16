import styled from "styled-components";


export const LyricContentWrapper = styled.div`
    position: relative;
    width: 423px;
    height: 100%;
    overflow-x: auto;
    padding: 12px 22px 7px;

    .lyriclist-content {
        position: absolute;
        top: 20px;
        left: 0;
        right: 0;

        .lyric-item {
            height: auto !important;
            line-height: 32px;
            color: #989898;

            /* 高亮 */
            &.active {
                color: #fff!important;
            }
        }
    }
`;