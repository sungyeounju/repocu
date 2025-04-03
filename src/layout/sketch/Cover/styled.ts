import styled, { keyframes } from "styled-components";
import pattern_02 from "../../../assets/img/sketch/pattern_cover.png";
import title from "../../../assets/img/sketch/txt_cover.png";

export const Wrapper = styled.div`
  position: relative;
  height: 100vh;
`;
export const Inner = styled.div`
  height: 85%;
  background-size: cover;
  &:before {
    display: block;
    position: absolute;
    left: 0;
    bottom: 15%;
    width: 100%;
    height: 320px;
    background: url(${pattern_02}) repeat-x;
    content: "";
    z-index: 1;
  }
`;
export const Titimg = styled.img``;
export const Itembox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 72px 30px 0;
`;
export const Item = styled.strong`
  font-family: "KCC-Ahnchangho";
  color: #f49ae8;
`;
export const Footer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 10;
  .tit-cover {
    display: block;
    width: 285px;
    height: 169px;
    margin: 0 auto 50px;
    background: url(${title}) 0/100%;
  }
  .txt-date {
    font-family: "modernmono";
  }
`;
