import React from "react";
import { useRef, useState } from "react";
import styled from "styled-components";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

import Photo from "./Photos";
import useInterval from "../../hooks/useInterval";

function PhotoGallery() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [slideInterval, setSlideInterval] = useState(6000);
  const slideRef = useRef<HTMLDivElement>(null);

  const BG_NUM = Photo.length; //슬라이드갯수
  const beforeSlide = Photo[BG_NUM - 1];
  const afterSlide = Photo[0];

  let slideArr = [beforeSlide, ...Photo, afterSlide];
  const SLIDE_NUM = slideArr.length;

  useInterval(() => setSlideIndex((prev) => prev + 1), slideInterval);

  const InfiniteSlideHandler = (flytoIndex: number) => {
    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setSlideIndex(flytoIndex);
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = "all 500ms ease-in-out";
        }
      }, 100);
    }, 500);
  };
  if (slideIndex === SLIDE_NUM - 1) {
    InfiniteSlideHandler(1);
  }
  if (slideIndex === 0) {
    InfiniteSlideHandler(BG_NUM);
  }
  const intervalHandler = () => {
    if (slideIndex === SLIDE_NUM - 1) {
      setSlideIndex(500);
    } else {
      setSlideIndex(6000);
    }
  };
  const slideHandler = (direction: number) => {
    setSlideIndex((prev) => prev + direction);
  };

  const stopAutoSlide = () => {
    setSlideInterval(10000000);
  };

  return (
    <>
      <SlideWrapper
        ref={slideRef}
        style={{
          width: `${210 * SLIDE_NUM}px`,
          transition: "all 500ms ease-in-out",
          transform: `translateX(${
            -1 * ((210 / slideArr.length) * slideIndex)
          }%)`,
        }}
      >
        <Gallery>
          {slideArr.map((image, index) => {
            return (
              <Slide>
                <Item
                  key={index}
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
              </Slide>
            );
          })}
        </Gallery>
      </SlideWrapper>
    </>
  );
}
export default PhotoGallery;

const SlideWrapper = styled.div`
  display: flex;
`;
const Slide = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 220px;
  height: 314px;
  background: black;
`;
const Thumb = styled.span`
  display: block;
  width: 210px;
  height: 280px;
  background-size: cover;
  background-position: center;
`;
