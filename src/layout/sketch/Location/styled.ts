import styled from "styled-components";
import IcoCopy from "../../../assets/ico/ic_copy_16.png";
import IcoArrow from "../../../assets/img/sketch/ic_arrow_20.png";
import IcoTmap from "../../../assets/img/sketch/ic_tmap.png";
import IcoKakaomap from "../../../assets/img/sketch/ic_kakaomap.png";
import IcoNavermap from "../../../assets/img/sketch/ic_navermap.png";

export const Wrpper = styled.div`
  margin-top: 150px;
  padding: 0 20px;
`;
export const CopyTxt = styled.span`
  display: block;
  margin-top: 30px;
  font-size: 15px;
  .img-copy {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin: 3px;
    background: url(${IcoCopy}) 0/100% no-repeat;
  }
`;
export const MapBox = styled.div`
  overflow: hidden;
  height: 190px;
  margin-top: 40px;
  border: 1px solid #fff;
`;
export const ListBtn = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #d7d7d7;
  border-radius: 4px;
  background-color: #fff;
  li {
    position: relative;
    width: 114px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    &:before {
      display: block;
      width: 16px;
      height: 16px;
      content: "";
      background-size: cover;
    }
    &.link-navermap {
      &:before {
        background-image: url(${IcoNavermap});
      }
    }
    &.link-kakaomap {
      &:before {
        background-image: url(${IcoKakaomap});
      }
    }
    &.link-tmap {
      &:before {
        background-image: url(${IcoTmap});
      }
    }
    a {
      display: block;
      line-height: 44px;
      font-size: 12px;
      font-weight: 500;
    }
    &:nth-child(2) {
      a {
        &:before {
          display: inline-block;
          position: absolute;
          top: 15px;
          left: 0;
          width: 1px;
          height: 12px;
          background: #d7d7d7;
          content: "";
        }
        &:after {
          display: inline-block;
          position: absolute;
          top: 15px;
          right: 0;
          width: 1px;
          height: 12px;
          background: #d7d7d7;
          content: "";
        }
      }
    }
  }
`;
export const WayBox = styled.div`
  margin-top: 20px;
  text-align: left;
  font-size: 13px;
`;
export const ItemLoca = styled.div`
  &.active {
    .inner-cont {
      display: block;
    }
    .tit-loca {
      &:after {
        transform: rotate(180deg);
        -webkit-transform: rotate(180deg);
      }
    }
  }
  .tit-loca {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    line-height: 58px;
    color: #111;
    font-weight: 500;
    &:after {
      display: block;
      width: 20px;
      height: 20px;
      content: "";
      background: url(${IcoArrow}) 0/100% no-repeat;
      transition: 0.5s;
      -webkit-transition: 0.5s;
    }
  }
  .inner-cont {
    display: none;
    padding: 0 10px;
  }
  .cont-loca {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #333;
    + .cont-loca {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px dashed #999;
    }
    .tit-info {
      font-size: 14px;
      font-weight: 500;
    }
    .txt-info {
      font-size: 13px;
      white-space: pre-line;
    }
  }
`;
