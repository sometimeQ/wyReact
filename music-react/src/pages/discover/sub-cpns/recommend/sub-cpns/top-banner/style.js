import styled from "styled-components";

export const BannerWrapper = styled.div`
    /* 接收传递过来的背景图片 */
    background: url(${(props) => props.backgroundImage + "?imageView&blur=40x20"}) center;

    .banner {
        /* 定位左右控制的按钮 */
        position: relative; 
        display: flex;
        height: 285px;
    }
`;

export const BannerLeft = styled.div`
    width: 730px;
    .image {
        height: 285px;
    }
`;

export const BannerRight = styled.a.attrs({
    href: 'https://music.163.com/#/download',
    target: '_blank'
})`
    position: relative;
    width: 254px;
    height: 285px;
    background: url(${require("@/assets/img/download.png")});

    .title {
        position: absolute;
        top: 250px;
        left: 0px;
        right: 0px;
        text-align: center;
    }
`;

// 左右控制上一个下一个图
export const BannerControl = styled.div`
    /* 子绝父相定位左右控制的按钮位置 */
    position: absolute;
    left: 0px;
    right: 0px;
    top: 50%;
    transform: translateY(-50%);

    .btn {
        position: absolute;
        width: 37px;
        height: 63px;
        background-image: url(${require("@/assets/img/banner_sprite.png")});
        background-color: transparent;
        cursor: pointer;
    }

    /* 定位图片位置 */
    .left {
        left: -68px;
        background-position: 0 -360px;
    }

    .right {
        right: -68px;
        background-position: 0 -508px;
    }
`;