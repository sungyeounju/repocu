import React from "react";
import styled from "styled-components";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Photo from "./Photos";
import "./styles.css";
import Slide01 from "../../assets/ico/slide01.png";
import Slide02 from "../../assets/ico/slide02.png";
import Slide03 from "../../assets/ico/slide03.png";

function PhotoGallery() {
  return (
    <>
      <Wrapper>
        <Gallery>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {Photo.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <Item
                    cropped
                    original={image.source}
                    thumbnail={image.source}
                    width={image.width}
                    height={image.height}
                  >
                    {({ ref, open }) => (
                      <Thumb
                        style={{ backgroundImage: `url(${image.source})` }}
                        onClick={open}
                        ref={ref as React.Ref<HTMLImageElement>}
                      >
                        <span className="screen-out">{image.alt}</span>
                      </Thumb>
                    )}
                  </Item>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Gallery>
      </Wrapper>
    </>
  );
}
export default PhotoGallery;

const Wrapper = styled.div`
  .swiper-slide {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 314px;
    background-size: 100%;
    &:nth-child(3n + 1) {
      background-image: url(${Slide01});
    }
    &:nth-child(3n + 2) {
      background-image: url(${Slide02});
    }
    &:nth-child(3n) {
      background-image: url(${Slide03});
    }
  }
`;
const Thumb = styled.span`
  overflow: hidden;
  display: block;
  width: 210px;
  height: 280px;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
`;
