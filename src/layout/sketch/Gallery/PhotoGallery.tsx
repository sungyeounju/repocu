import React, { useEffect, useState } from "react";
import * as S from "./styled";
import Title from "../../../layout/sketch/Title";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import AOS from "aos";
import Photo from "./Photos";
import "photoswipe/style.css";
import "swiper/css";
import "aos/dist/aos.css";
import "./styles.css";

function PhotoGallery({ data }) {
  console.log(data.master.id);
  const getPhoto = Photo(data.master.id, data.gallery.number).sort(
    () => Math.random() - 0.5
  );
  const getPhotoReverse = Photo(data.master.id, data.gallery.number).sort(
    () => Math.random() - 0.5
  );
  useEffect(() => {
    // PhotoSwipe 모달 감지하여 IcoVideo 추가
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "childList") {
          const pswpElement = document.querySelector(".pswp--open");
          if (pswpElement && !pswpElement.querySelector(".ico-video")) {
            const icoVideo = document.createElement("div");
            icoVideo.className = "ico-video";
            pswpElement.appendChild(icoVideo);
          }
        }
      });
    });
    // body 요소 감지하여 변화 발생 시 실행
    const targetNode = document.body;
    observer.observe(targetNode, { childList: true, subtree: true });
    return () => observer.disconnect(); // 컴포넌트 언마운트 시 Observer 해제
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <S.Wrapper data-aos="fade-up">
        <Title title="Gallery" />
        <S.InnerGallery>
          <Gallery
            options={{
              zoom: false,
              showAnimationDuration: 0,
              hideAnimationDuration: 0,
            }}
          >
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={8}
              loop={true}
              speed={10000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="swiper-type1"
            >
              {getPhoto.map((image, index) => {
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
                        <span
                          className="thumb-img"
                          style={{ backgroundImage: `url(${image.source})` }}
                          onClick={open}
                          ref={ref as React.Ref<HTMLImageElement>}
                        >
                          <span className="screen-out">{image.alt}</span>
                        </span>
                      )}
                    </Item>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Gallery>
          <Gallery
            options={{
              zoom: false,
              showAnimationDuration: 0,
              hideAnimationDuration: 0,
            }}
          >
            <Swiper
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={8}
              loop={true}
              speed={10000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Autoplay]}
              className="swiper-type2"
            >
              {getPhotoReverse.map((image, index) => {
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
                        <span
                          className="thumb-img"
                          style={{ backgroundImage: `url(${image.source})` }}
                          onClick={open}
                          ref={ref as React.Ref<HTMLImageElement>}
                        >
                          <span className="screen-out">{image.alt}</span>
                        </span>
                      )}
                    </Item>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Gallery>
        </S.InnerGallery>
      </S.Wrapper>
    </>
  );
}
export default PhotoGallery;
