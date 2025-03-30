import styled from "styled-components";
import Stamp from "../../../assets/img/sketch/img_gallery_txt.png";
export const Wrapper = styled.div`
  margin-top: 150px;
  .swiper-wrapper {
    transition-timing-function: linear;
    -webkit-transition-timing-function: linear;
  }
  .swiper-slide {
    overflow: hidden;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 228px;
    height: 223px;
    background-size: 100%;
    filter: grayscale(1);
    -webkit-filter: grayscale(1);
    border: 1px solid #000;
  }
  .thumb-img {
    overflow: hidden;
    display: block;
    width: 228px;
    height: 223px;
    background-size: cover;
    background-position: center;
  }
  .swiper-type2 {
    margin-top: 12px;
    .swiper-slide {
      width: 140px;
      height: 140px;
    }
    .thumb-img {
      width: 140px;
      height: 140px;
    }
  }
`;
export const InnerGallery = styled.div`
  position: relative;
  padding: 50px 0 110px;
  &:after {
    position: absolute;
    right: 10px;
    bottom: 0;
    display: inline-block;
    width: 172px;
    height: 76px;
    background: url(${Stamp}) 0/100%;
    content: "";
  }
`;
