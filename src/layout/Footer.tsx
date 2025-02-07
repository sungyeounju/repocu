import { keyframes, styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import parretn01 from "../assets/ico/pattern01.png";
import img_frame from "../assets/ico/img_ending_frame.png";
import logo from "../assets/ico/footer_logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const Casting = [
    {
      castEn: "GROOM",
      nameEn: "JANG DONGWOO",
      castKo: "신랑",
      nameKo: "장동우",
    },
    {
      castEn: "BRIDE",
      nameEn: "KIM SEOJEONG",
      castKo: "신부",
      nameKo: "김서정",
    },
    {
      castEn: "GROOM'S FATHER",
      nameEn: "JANG JINWON",
      castKo: "신랑 아버지",
      nameKo: "장진원",
    },
    {
      castEn: "GROOM'S MOTHER",
      nameEn: "YOON HYEYEON",
      castKo: "신랑 어머니",
      nameKo: "윤혜원",
    },
    {
      castEn: "BRIDE'S FATHER",
      nameEn: "KIM JONGHWA",
      castKo: "신부 아버지",
      nameKo: "김종화",
    },
    {
      castEn: "BRIDE'S MOTHER",
      nameEn: "KIM JEONGHWA",
      castKo: "신부 어머니",
      nameKo: "김정화",
    },
  ];
  const Casting2 = [
    {
      castEn: "GROOM'S PUPPY",
      nameEn: "DALKONG",
      castKo: "신랑 강아지",
      nameKo: "달콩이",
    },
    {
      castEn: "BRIDE'S PUPPY",
      nameEn: "KEVIN",
      castKo: "신부 강아지",
      nameKo: "케빈",
    },
  ];
  const imageFiles = [
    require("../assets/image/img_frame01.png"),
    require("../assets/image/img_frame02.png"),
    require("../assets/image/img_frame03.png"),
    require("../assets/image/img_frame04.png"),
    require("../assets/image/img_frame05.png"),
  ];
  return (
    <>
      <Wrapper>
        <Video>
          <Swiper
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, "-20%", -1],
              },
              next: {
                translate: [0, "100%", 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper3"
          >
            {imageFiles.map((imgSrc, idx) => {
              return (
                <SwiperSlide
                  key={idx}
                  style={{
                    backgroundImage: `url(${imgSrc})`,
                  }}
                ></SwiperSlide>
              );
            })}
          </Swiper>
        </Video>
        <GroupCast data-aos="fade-up">
          <CastBox className="cast-box1">
            <CastTit>CAST</CastTit>
            {Casting.map((item, idx) => {
              return (
                <BoxItem key={idx}>
                  <InnerCast>
                    <Cast className="en">{item.castEn}</Cast>
                    <Cast>{item.castKo}</Cast>
                  </InnerCast>
                  <InnerName>
                    <Name className="en">{item.nameEn}</Name>
                    <Name>{item.nameKo}</Name>
                  </InnerName>
                </BoxItem>
              );
            })}
          </CastBox>
          <CastBox className="cast-box2">
            <CastTit>CAST</CastTit>
            {Casting2.map((item, idx) => {
              return (
                <BoxItem key={idx}>
                  <InnerCast>
                    <Cast className="en">{item.castEn}</Cast>
                    <Cast>{item.castKo}</Cast>
                  </InnerCast>
                  <InnerName>
                    <Name className="en">{item.nameEn}</Name>
                    <Name>{item.nameKo}</Name>
                  </InnerName>
                </BoxItem>
              );
            })}
          </CastBox>
          <LogoBox data-aos="fade">
            <Logo src={logo} width="149"></Logo>
          </LogoBox>
        </GroupCast>
      </Wrapper>
    </>
  );
}
export default Footer;
const Wrapper = styled.div`
  position: relative;
  margin-top: 130px;
  padding: 60px 0 0;
  background: #080c0d;
  &:before {
    position: relative;
    top: -100px;
    display: block;
    width: 100%;
    height: 115px;
    background: url(${parretn01}) 0/578px repeat-x;
    content: "";
    transform: rotate(180deg);
  }
`;
const Video = styled.div`
  position: relative;
  width: 347px;
  height: 261px;
  margin: 0 auto;
  .swiper {
  }
  .swiper-slide {
    width: 347px;
    height: 261px;
    background-size: cover;
  }
  &:before {
    display: inline-block;
    position: absolute;
    left: -15px;
    top: -15px;
    width: 375px;
    height: 301px;
    background: url(${img_frame}) 0/100% no-repeat;
    content: "";
    z-index: 10;
  }
`;
const AniCast = keyframes`
  0%{transform: translateY(120%);opacity:0;}
  100%{transform: translateY(0);opacity:1;}
`;
const GroupCast = styled.div`
  &.aos-animate {
    .cast-box1 {
      animation: ${AniCast} 3s linear forwards;
    }
    .cast-box2 {
      animation: ${AniCast} 2s 2s linear forwards;
    }
  }
`;
const LogoBox = styled.div`
  position: relative;
  padding-bottom: 140px;
  z-index: 2;
  width: 100%;
  background: #080c0d;
`;
const Logo = styled.img``;
const CastBox = styled.div`
  position: relative;
  margin-top: 100px;
  background: #080c0d;
  transform: translateY(120%);
  opacity: 0;
  &.cast-box1 {
    z-index: 0;
  }
  &.cast-box2 {
    margin-top: 130px;
    padding-bottom: 130px;
    z-index: 1;
  }
`;
const CastTit = styled.strong`
  display: block;
  margin-bottom: 40px;
  font-size: 14px;
  font-family: "Montserrat", serif;
  font-weight: 600;
  color: #fff;
`;
const BoxItem = styled.div`
  display: flex;
  justify-content: center;
  font-size: 11px;
  + div {
    margin-top: 16px;
  }
  .en {
    font-family: "Montserrat", serif;
  }
`;
const InnerCast = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  margin-right: 15px;
  text-align: right;
`;
const InnerName = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  text-align: left;
`;
const Cast = styled.span`
  color: #9a9a9a;
`;
const Name = styled.span`
  color: #fff;
  &.en {
    font-weight: 500;
  }
`;
