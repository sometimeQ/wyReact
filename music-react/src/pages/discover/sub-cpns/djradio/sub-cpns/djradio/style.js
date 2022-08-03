import styled from "styled-components";


export const DjradioWrapper = styled.div`
    .ant-carousel .slick-dots-bottom {
        bottom: 0px;
    }   

    .ant-carousel .slick-dots li {
        position: relative;
        display: inline-block;
        flex: 0 1 auto;
        box-sizing: content-box;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        margin: 0 2px;
        margin-right: 5px;
        margin-left: 25px;
        background-color: #333;
        padding: 0;
        text-align: center;
        text-indent: -999px;
        vertical-align: top;
        transition: all 0.5s;
    }

    .ant-carousel .slick-dots li button {
        display: block;
        width: 5px;
        height: 5px;
        padding: 0;
        color: transparent;
        font-size: 0;
        background: orange;
        border: 0;
        border-radius: 2.5px;
        outline: none;
        cursor: pointer;
        background-color: #333;
        opacity: 0.3;
        transition: all 0.5s;
    }

    .ant-carousel .slick-dots li.slick-active button {
        background: red;
        opacity: 1;
    }

    width: 980px;
    margin: 0 auto;
    background-color: #fff;
    /* border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3; */
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    padding: 40px;


    .top-list {
        margin-top: 30px;
        display: flex;
    }
    
    .rdimore {
        margin-top: 30px;
    }
`;