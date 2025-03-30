import styled from "styled-components";
import btnClose from "../../../assets/ico/btn_close_40.png";
import btnEdit from "../../../assets/img/sketch/btn_delete.png";
import heart from "../../../assets/img/sketch/heart.png";
import bgGuestBook from "../../../assets/img/sketch/bg_guestbook.png";
import bgPopup from "../../../assets/img/sketch/bg_guestbook_popup.png";

export const Wrapper = styled.div`
  margin-top: 150px;
  padding: 90px 0;
  background: url(${bgGuestBook}) 0 / cover no-repeat;
  .tit-g {
    color: #d685cb;
  }
`;
export const InnerBook = styled.div`
  margin-top: 60px;
  .swiper {
    padding-bottom: 50px;
  }
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    &-bullet {
      opacity: 1;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background-color: #666;
      &-active {
        width: 10px;
        height: 11px;
        border-radius: 0;
        background: url(${heart}) 0/100% no-repeat;
      }
    }
  }
  .swiper-slide {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    height: 414px;
    padding: 0 20px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .item-card {
    position: relative;
    height: 130px;
    width: 100%;
    padding: 20px 16px;
    border: 1px solid #333;
    border-radius: 4px;
    text-align: left;
    + .item-card {
      margin-top: 12px;
    }
  }
  .txt-cont {
    display: block;
    margin-top: 6px;
    font-size: 13px;
    color: #ccc;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .tit-name {
    display: flex;
    font-size: 13px;
    color: #d685cc;
    .txt-from {
      font-family: "modernmono";
    }
  }
  .txt-date {
    position: absolute;
    left: 16px;
    bottom: 16px;
    display: block;
    margin-top: 8px;
    font-size: 12px;
    font-weight: 500;
    font-family: "modernmono";
    color: #999;
  }
  .btn-del {
    position: absolute;
    right: 16px;
    top: 13px;
    width: 24px;
    height: 24px;
    background: url(${btnEdit}) 0/100% no-repeat;
  }
`;
export const Popup = styled.div`
  display: none;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 99;
  &.openModal {
    display: block;
  }
  &.open-password {
    display: block;
  }
`;
export const Dim = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.8;
`;
export const InnerForm = styled.div`
  overflow: hidden;
  position: absolute;
  left: calc(50% - 167px);
  top: calc(50% - 205px);
  z-index: 999;
  width: 335px;
  height: 410px;
  background: url(${bgPopup}) 0/100% no-repeat;
  border-radius: 6px;
  h2 {
    margin: 30px 0 40px;
  }
  &.inner-password {
    height: 310px;
    h2 {
      margin-bottom: 0;
    }
    .txt-password {
      display: block;
      margin: 10px 0 30px;
      font-size: 16px;
    }
  }
`;
export const BtnWrite = styled.button`
  width: calc(100% - 32px);
  height: 40px;
  margin-top: 40px;
  border-radius: 4px;
  font-size: 14px;
  background: #d685cb;
  color: #fff;
`;
export const BtnApply = styled.button`
  margin-top: 34px;
  height: 60px;
  width: 100%;
  color: #9e9a9a;
  font-size: 16px;
  background-color: #d7d7d7;
  &.active {
    background-color: #d685cb;
    color: #fff;
  }
`;
export const BtnDel = styled(BtnApply)`
  margin-top: 38px;
`;
export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  background: url(${btnClose}) 0/100% no-repeat;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormItem = styled.div`
  position: relative;
  width: 295px;
  input,
  textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #d7d7d7;
    border-radius: 2px;
    resize: none;
    font-size: 14px;
    box-sizing: border-box;
    background: transparent;
  }
  textarea {
    height: 88px;
  }
  + div {
    margin-top: 8px;
  }
  .txt-all {
    position: absolute;
    right: 12px;
    bottom: 15px;
    font-size: 11px;
    color: #9e9a9a;
    .txt-num {
      color: #191919;
    }
  }
`;
