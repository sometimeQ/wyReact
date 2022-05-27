import styled from "styled-components";


export const AlbumCoverWrapper = styled.div`
    /* 接收外界传递过来的值 */
    width: ${(props) => props.width + 'px' || 184 + 'px'};

    .album-image {
        width: ${(props) => props.width + 'px'};
        height:${(props) => props.size + 'px'};
        margin-top: 15px;
        overflow: hidden;

        /* 白色三角形遮罩 */
        position: relative;

        img {
            width: ${(props) => props.size + 'px'};
            height: ${(props) => props.size + 'px'};
        }

        /* 白色遮罩 */
        .cover {
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            right: 0;
            background-position: 0 ${(props) => props.bacgroundpositon};
        }
    }

    .album-info {
        margin-top: 5px;
        /* 设置总的宽度 */
        font-size: 12px;
        width: ${(props) => props.size + 'px'};
        .name {
             color: #000;
             white-space: nowrap;
             text-overflow: ellipsis;
             overflow: hidden;
        }
        .artist {
            color: #666;
        }
    }

`;