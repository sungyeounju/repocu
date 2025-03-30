import styled, { keyframes } from "styled-components";
import Cover from "../../../assets/img/sketch/img_cal_bg.png";
import Pattern01 from "../../../assets/img/sketch/img_cal_pattern01.png";
import Pattern02 from "../../../assets/img/sketch/img_cal_pattern02.png";
import MonthTape from "../../../assets/img/sketch/img_cal_month.png";
import Heart from "../../../assets/img/sketch/img_cal_heart.png";
export const Wrapper = styled.div`
  position: relative;
  height: 600px;
  margin-top: 150px;
  padding-top: 70px;
  background-image: url(${Cover});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &:before {
    display: block;
    position: absolute;
    top: -21px;
    left: 0;
    width: 100%;
    height: 40px;
    background: url(${Pattern01}) 0/100% no-repeat;
    content: "";
  }
  &:after {
    display: block;
    position: absolute;
    bottom: -21px;
    left: 0;
    width: 100%;
    height: 40px;
    background: url(${Pattern02}) 0/100% no-repeat;
    content: "";
  }
`;
export const Month = styled.strong`
  display: block;
  width: 146px;
  height: 32px;
  margin: 54px auto 0;
  font-size: 24px;
  line-height: 28px;
  font-family: "modernmono";
  background: url(${MonthTape}) 0/100% no-repeat;
`;
const HeartAni = keyframes`
  0%,100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;
export const InnerDate = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 194px;
  margin: 32px -5px 0;
  li {
    display: flex;
    flex-direction: column;
    width: 33.3%;
    border: 1px solid #000;
    color: #af809d;
    &.active {
      position: relative;
      border-right: 0;
      border-left: 0;
      color: #000;
      &:before {
        position: absolute;
        left: calc(50% - 78px);
        top: 33px;
        display: block;
        width: 157px;
        height: 161px;
        background: url(${Heart}) 0/100% no-repeat;
        content: "";
        animation: ${HeartAni} 1.5s infinite;
      }
    }
  }
  .txt-date {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 37px;
    font-size: 18px;
    font-family: "modernmono";
    border-bottom: 1px solid #000;
  }
  .txt-day {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 154px;
    font-size: 72px;
    font-family: "modernmono";
  }
`;
export const TxtDesc = styled.span`
  display: block;
  margin-top: 40px;
  font-size: 15px;
`;
