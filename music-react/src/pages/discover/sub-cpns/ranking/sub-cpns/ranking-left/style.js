

import styled from "styled-components";

export const LeftRankingWrapper = styled.div`
  padding: 25px 0;
  .header {
    font-family: simsun;
    color: #000;
    font-size: 14px;
    padding: 12px 0px 12px 12px;
  }

  .item {
    height: 62px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    /* 鼠标放上去显示小手指 */
    cursor: pointer;

    &:hover {
      background-color: #e6e6e6;
    }

    /* 图片 */
    img {
      width: 40px;
      height: 40px;
    }

    /* 右边的东西 */
    .info {
      margin-left: 10px;

      .name {
        color:  #000;
      }

      .update {
        margin-top: 5px;
        font-size: 10px;
        color: #999;
      }
    }
  }
`;