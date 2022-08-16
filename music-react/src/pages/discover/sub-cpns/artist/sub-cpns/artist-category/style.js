import styled from "styled-components";


export const ArtistCategoryWrapper = styled.div`

    .category-item {
        border-bottom: 1px solid #d3d3d3;
        margin: 5px 0 0;
        padding-top: 16px;
        padding-left: 16px;
        /* z-index: 1000000000000000000000 !important; */

        /* 标题 */
        .title {
            height: 25px;
            font-size: 16px;
            font-weight: bold;
        }

        /* 副标题、图片 */
        .artist-list {
            width: 160px;
            /* 撑开 */
            line-height: 29px;
            /* 图片 */
            .icon-subger {
                display: inline-block;
                width: 4px;
                height: 4px;
                /* 定位图片 */
                background-position: -13px -43px;
            }
            /* 图标图 */
            .title-sub {
                margin-left: 10px;
            }
        }
    }
`;