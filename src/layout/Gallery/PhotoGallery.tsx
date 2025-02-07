import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import Photo from "./Photos";
import "./styles.css";
import Slide01 from "../../assets/ico/slide01.png";
import Slide02 from "../../assets/ico/slide02.png";
import Slide03 from "../../assets/ico/slide03.png";
import Title from "../../component/Title";

function PhotoGallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="1500"></div>
      <Title title={"GALLERY"} />
      <Wrapper>
        <Gallery>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
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
          <TxtDesc>클릭 시 이미지를 크게 보실 수 있습니다.</TxtDesc>
        </Gallery>
      </Wrapper>
    </>
  );
}
export default PhotoGallery;

const Wrapper = styled.div`
  .swiper-wrapper {
    transition: 0.5s;
  }
  .swiper-slide {
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 314px;
    margin-top: 40px;
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
const TxtDesc = styled.span`
  display: block;
  margin-top: 30px;
  font-size: 14px;
  color: #baae9f;
`;
