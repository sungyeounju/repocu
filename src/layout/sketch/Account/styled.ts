import styled from "styled-components";
import btnAccount from "../../../assets/img/sketch/btn_account.png";
import btnKakaopay from "../../../assets/img/sketch/btn_kakaopay.png";
export const Wrapper = styled.div`
  margin-top: 150px;
`;
export const Desc = styled.span`
  display: block;
  margin-top: 30px;
  font-size: 14px;
`;
export const TabList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 54px;
  li {
    border-bottom: 2px solid #d7d7d7;
    color: #9e9a9a;
    &.active {
      border-color: #d685cb;
      color: #191919;
    }
  }
  @media (max-width: 321px) {
    zoom: 0.8;
  }
`;
export const BtnTab = styled.button`
  width: 157px;
  height: 40px;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 400;
`;
export const InnerPerson = styled.div`
  margin-top: 30px;
  @media (max-width: 321px) {
    zoom: 0.8;
  }
`;
export const PersonList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 314px;
  margin: 0 auto;
  + div {
    margin-top: 24px;
  }
  .txt-tag {
  }
  .txt-name {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  .left-item {
    width: 157px;
    text-align: left;
    padding-left: 10px;
  }
  .right-item {
    display: flex;
    justify-content: end;
    width: 157px;
  }
  .btn-item {
    width: 65px;
    height: 30px;
    background-size: 100%;
    font-size: 0;
    &.btn-acconut {
      margin-left: 6px;
      background-image: url(${btnAccount});
    }
    &.btn-kakaopay {
      width: 50px;
      background-image: url(${btnKakaopay});
    }
  }
`;
