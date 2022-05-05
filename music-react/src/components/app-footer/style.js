import styled from 'styled-components';

// 包裹器
export const FooterWrapper = styled.div`
    height: 172px;
    font-size: 12px;
    background-color: #f2f2f2;
    color: #666;
    border-top: 1px solid #d3d3d3;
    /* background-color: orange; */

    .content {
        display: flex;
        justify-content: space-between;
        width: 980px;
        align-items: center;
        margin: 0 auto;
        /* background-color: red; */
    }
`;


// 底部左边
export const FooterLeft = styled.div`
    padding-top: 15px;
    line-height: 24px;
    .link {
        a {
            color: #999;
        }

        .line {
            color: #999;
            margin: 0 10px;
        }
    }

    .copyright{
        span {
            margin-right: 15px;
        }
    }

    .info {
       span {
           margin-right: 10px;
       } 
       
       a {
            margin-right: 10px;
       } 
    }
`;


// 底部右边
export const FooterRight = styled.div`
    padding-left: 10px;

    .links {
        display: flex;
        justify-content: space-around;
        width: 420px;

        .item {
            background: url(${require("@/assets/img/sprite_footer_01.png")}) no-repeat;
            display: inline-block;
            width: 50px;
            height: 45px;
            background-size: 104px 545px;
        }

        & :nth-child(1) .item {
            background-position: -60px -451px;
        }

        & :nth-child(2) .item {
            background-position: -60px -100px;
        }

        & :nth-child(3) .item {
            background-position: 0 0;
        }

        & :nth-child(4) .item {
            background-position: -60px -50px;
        }

        & :nth-child(5) .item {
            background-position: 0 -100px;
        }

        .title {
            background: url(${require("@/assets/img/sprite_footer_02.png")}) no-repeat;
            display: inline-block;
            text-align: center;
            background-size: 170px 153px;
            width: 52px;
            height: 20px;
        }

        & :nth-child(1) .title {
            width: 72px;
            background-position: -1px -119px;
            transform: translateX(-10%);
            
        }
        & :nth-child(2) .title {
            background-position: -5px -100px;
        }
        & :nth-child(3) .title {
            /* background-position: 0px,0px; */
        }
        & :nth-child(4) .title {
            background-position: -15px -60px;
            transform: translateX(20%);
        }
        & :nth-child(5) .title {
             background-position: -5px -80px;
        }
    }
`;