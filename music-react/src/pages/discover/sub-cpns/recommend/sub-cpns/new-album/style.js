import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
    margin-top: 20px;
    .content {
        border: 1px solid #d3d3d3;
        background-color: #f5f5f5;
        height: 186px;
        margin: 20px 0px 37px;
        display: flex;
        align-items: center;

        /* 左右箭头 */
        .arrow {
            width: 25px;
            height: 25px;
            /* 鼠标放上去有一个小手指 */
            cursor: pointer; 
        }

        /* 定位图片 */
         .arrow-left {
            background-position: -260px -75px;
        }

        .arrow-right {
            background-position: -300px -75px;
        }

        .album {
            /* 只有设置了内部的宽度才有箭头到右边 */
            width: 640px;
            height: 150px;
            .page {
                /*  */
                display: flex !important; 
                align-items: center;
                justify-content: space-between;
            }
        }
    }
`;