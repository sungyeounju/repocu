import styled, { keyframes } from "styled-components";
import ImgHeart from "../../../assets/img/sketch/img_invite_heart.png";
import ImgLetter from "../../../assets/img/sketch/img_invite_letter.png";
import Sticker1 from "../../../assets/img/sketch/img_sticker1.png";
import Sticker2 from "../../../assets/img/sketch/img_sticker2.png";
import Sticker3 from "../../../assets/img/sketch/img_sticker3.png";
import Sticker4 from "../../../assets/img/sketch/img_sticker4.png";
import Sticker5 from "../../../assets/img/sketch/img_sticker5.png";
const thumbAni01 = keyframes`
  0%{left: -180px;transform:rotate(-13deg)}
  30%{left: -120px;transform:rotate(10deg)}
  60%{left: -70px;transform:rotate(0)}
  100%{left: -36px;transform: rotate(7deg);}
`;
const thumbAni02 = keyframes`
  0%{right: -180px;transform:rotate(-30deg)}
  30%{right: -120px;transform:rotate(-10deg)}
  60%{right: -70px;transform:rotate(0)}
  100%{right: -33px;transform: rotate(-7deg);}
`;
const StickerAni = keyframes`
  0%{opacity:0}
  100%{opacity:1}
`;

export const Wrapper = styled.div`
  margin-top: 100px;
  &.aos-animate {
    .thumb-img1 {
      animation: ${thumbAni01} 3s steps(2) forwards;
    }
    .thumb-img2 {
      animation: ${thumbAni02} 3s steps(2) forwards;
    }
    .sticker01 {
      animation: ${StickerAni} 0.5s 3s steps(1) forwards;
    }
    .sticker02 {
      animation: ${StickerAni} 0.5s 3.5s steps(1) forwards;
    }
    .sticker03 {
      animation: ${StickerAni} 0.5s 4s steps(1) forwards;
    }
    .sticker04 {
      animation: ${StickerAni} 0.5s 4.5s steps(1) forwards;
    }
    .sticker05 {
      animation: ${StickerAni} 0.5s 5s steps(1) forwards;
    }
  }
`;
export const BoxAlbum = styled.div`
  position: relative;
  height: 380px;
  margin-top: 40px;
`;
export const Thumb = styled.span`
  position: relative;
  display: block;
  width: 245px;
  height: 245px;
  background-size: cover;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${ImgHeart}) 0/100%;
    content: "";
  }
  &.thumb-img {
    position: absolute;
  }
  &.thumb-img1 {
    left: -36px;
    top: 25px;
    transform: rotate(7deg);
    -webkit-transform: rotate(7deg);
    z-index: 1;
  }
  &.thumb-img2 {
    right: -33px;
    top: 106px;
    transform: rotate(-7deg);
    -webkit-transform: rotate(-7deg);
  }
`;
export const Sticker = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  [class*="sticker"] {
    opacity: 0;
    position: absolute;
    display: block;
    width: 40px;
    height: 40px;
    z-index: 1;
    background-size: cover;
    &.sticker01 {
      top: -9px;
      left: 17px;
      width: 60px;
      height: 60px;
      background-image: url(${Sticker1});
    }
    &.sticker02 {
      left: 63px;
      bottom: 82px;
      width: 45px;
      height: 45px;
      background-image: url(${Sticker2});
    }
    &.sticker03 {
      left: 138px;
      bottom: 120px;
      background-image: url(${Sticker3});
    }
    &.sticker04 {
      right: 130px;
      bottom: 45px;
      background-image: url(${Sticker4});
    }
    &.sticker05 {
      right: 50px;
      bottom: 5px;
      background-image: url(${Sticker5});
    }
  }
`;
export const Boxitem = styled.div`
  position: relative;
  height: 445px;
`;
export const InnerText = styled.div`
  position: absolute;
  left: calc(50% - 209px);
  top: 53px;
  width: 418px;
  height: 445px;
  background: url(${ImgLetter}) 0/100% no-repeat;
`;
export const TxtDesc = styled.span`
  display: block;
  white-space: break-spaces;
  font-family: "KCC-Ahnchangho";
  line-height: 42px;
  padding-top: 25px;
  color: #535353;
`;
export const BoxInvite = styled.div`
  padding-top: 50px;
`;
export const TxtInvite = styled.span`
  white-space: break-spaces;
  font-size: 15px;
`;
export const GroupName = styled.div`
  margin-top: 27px;
`;
export const InnerName = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  + div {
    margin-top: 10px;
  }
`;
export const TxInfo = styled.span`
  display: block;
  width: 145px;
  text-align: left;
  color: #777;
`;
export const TxtName = styled.span``;
