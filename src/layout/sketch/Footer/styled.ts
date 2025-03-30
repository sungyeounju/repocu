import { keyframes, styled } from "styled-components";
import Logo from "../../../assets/img/sketch/footer_logo.png";
import icoInsta from "../../../assets/img/sketch/ico_instagram.png";
import icoShare from "../../../assets/img/sketch/ico_share.png";
export const Wrapper = styled.div`
  position: relative;
  padding-bottom: 74px;
`;
export const Outro = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 80px 0;
  background-size: cover;
  background-position: center bottom;
`;
export const TxtDate = styled.div`
  font-family: "modernmono";
  color: #fff;
`;
export const Itembox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;
export const Item = styled.strong`
  font-family: "KCC-Ahnchangho";
  color: #fff;
  + strong {
    color: #f49ae8;
  }
`;
export const AniImg = styled.div`
  position: relative;
  margin-top: 80px;
  height: 551px;
`;
const AniThumb = keyframes`
  0%,100%{opacity:0;}
  50%{opacity:1;}
`;
export const ImgThumb = styled.span`
  position: absolute;
  top: 0;
  left: calc(50% - 256px);
  display: block;
  width: 513px;
  height: 551px;
  background-size: cover;
  &.img-thumb02 {
    opacity: 0;
    animation: ${AniThumb} 3s steps(2) infinite;
  }
`;
export const FooterLogo = styled.span`
  display: block;
  width: 110px;
  height: 122px;
  margin: 75px auto 40px;
  background: url(${Logo}) 0/100% no-repeat;
`;
export const ShareSns = styled.div`
  position: relative;
  z-index: 9;
  .list-sns {
    display: flex;
    justify-content: center;
    height: 36px;
    li {
      width: 36px;
      height: 36px;
      margin: 0 9px;
    }
  }
  .link-sns {
    display: block;
    width: 36px;
    height: 36px;
    background-size: 100%;
    &.link-insta {
      background-image: url(${icoInsta});
    }
    &.link-share {
      background-image: url(${icoShare});
    }
  }
`;
