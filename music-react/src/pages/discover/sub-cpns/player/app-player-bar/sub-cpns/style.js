import styled from "styled-components";



// 包裹器
export const Wrapper = styled.div`
    /* position: absolute;
    left: -445%;
    bottom: 41px;
    width: 986px;
    height: 301px;
    background-color: rgba(42, 42, 42, 1); */

    /* 子绝父相 */
    position: absolute;
    width: 1000px;
    /* 资深宽度的一半 */
    margin-left: ${`-${1000 / 2}%`}; 
    height: 301px;
    bottom: 40px;
    /* background-color: rgba(42, 42, 42); */
    border-radius: 7px 7px 0 0;
`;


// 头部header
export const Header = styled.div`
    display: flex;
    height: 40px;
    background: url(${require('@/assets/img/playlist_bg.png')});
    background-position: 0 0;

    /* 左边标题 */
    .playlist-header-left {
        display: flex;
        align-items: center;
        justify-content: space-between;
        line-height: 39px;
        padding: 0 10px 0 15px;
        width: 553px;

        h3 {
            font-size: 14px;
            font-weight: bold;
            color: #e2e2e2;
        }

        .header-icon { 
            line-height: 33px;
            color: #ccc;
            
            span {
                margin-left: 5px;
            }
        }

        /* 分割线 */
        .line {
            margin: 0 5px 0 8px;
        }
    }

    /* 右边数据 */
    .playlist-header-right {
        display: flex;
        align-items: center;
        width: 432px;
        line-height: 40px;
        justify-content: space-around;

        p {
            width: 94%;
            text-align: center;
            font-weight: normal;
            color: #fff;
            font-size: 14px;
        }

        .close-window {
            width: 5%;
            cursor: pointer;
        }
    }
`;

// 内容
export const Content = styled.div`
    height: 260px;
    background: url(${require('@/assets/img/playlist_bg.png')});
    background-position: -1014px 0;
    background-repeat: repeat-y;
    display: flex;
    
    .main-playlist {
        width: 555px;
    }
`;