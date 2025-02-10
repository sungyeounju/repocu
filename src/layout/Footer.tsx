import { useEffect } from "react";
import { Link } from "react-router";
import { keyframes, styled } from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import parretn01 from "../assets/ico/pattern01.png";
import img_frame from "../assets/ico/img_ending_frame.png";
import logo from "../assets/ico/footer_logo.png";
import icoShare from "../assets/ico/ico_share.png";
import icoInsta from "../assets/ico/ico_instagram.png";
import icoConti from "../assets/ico/img_tobecontinued.png";

import img01 from "../assets/image/img_frame01.png";
import img02 from "../assets/image/img_frame02.png";
import img03 from "../assets/image/img_frame03.png";
import img05 from "../assets/image/img_frame05.png";

function Footer() {
  useEffect(() => {
    AOS.init();
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
  const copyClipboard = async (text: string, successMessage?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      if (successMessage) alert(successMessage);
      alert("주소가 복사되었습니다!");
    } catch (error) {
      // alert("error");
    }
  };
  const handleShare = () => {
    const shareUrl = "https://www.repocu.shop/Dwsj0309";
    if (navigator.share) {
      navigator
        .share({
          title: "동우 서정 청첩장",
          text: "동우 서정 결혼합니다",
          url: shareUrl,
        })
        .then(() => console.log("공유 성공"))
        .catch(() => copyClipboard(shareUrl));
    } else {
      copyClipboard(shareUrl);
    }
  };
  return (
    <>
      <Wrapper>
        <Video data-aos="fade">
          <InnerVideo>
            <ImgVideo
              className="thumb-img01"
              style={{ backgroundImage: `url(${img01})` }}
            ></ImgVideo>
            <ImgVideo
              className="thumb-img02"
              style={{ backgroundImage: `url(${img02})` }}
            ></ImgVideo>
            <ImgVideo
              className="thumb-img03"
              style={{ backgroundImage: `url(${img03})` }}
            ></ImgVideo>
            <ImgVideo
              className="thumb-img04"
              style={{ backgroundImage: `url(${img05})` }}
            ></ImgVideo>
            <IcoTxt className="ico-txt"></IcoTxt>
          </InnerVideo>
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
            <CastTit>SPECIAL</CastTit>
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
          <CastBox className="cast-box3">
            <img src={logo} alt="Copyright 2025 REPOCU" width="149" />
          </CastBox>
          <ShareSns>
            <ul className="list-sns">
              <li>
                <Link
                  to="https://www.instagram.com/repocu.love/"
                  className="link-sns link-insta screen-out"
                >
                  레포쿠 인스타그램
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleShare()}
                  className="link-sns link-share screen-out"
                >
                  공유하기
                </button>
              </li>
            </ul>
          </ShareSns>
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
const ImgVideoAni = keyframes`
  0%{top: -100%;}
  70%{top: 10%;}
  100%{top: 0;}
`;
const IcoRot = keyframes`
  0%{transform:scale(0) rotate(720deg);opacity:0;};
  20%{opacity:1;}
  100%{transform:scale(1) rotate(0);opacity:1;};
`;
const Video = styled.div`
  position: relative;
  width: 347px;
  height: 261px;
  margin: 0 auto;
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
  &.aos-animate {
    .thumb-img02 {
      animation: ${ImgVideoAni} 0.6s 1s linear forwards;
    }
    .thumb-img03 {
      animation: ${ImgVideoAni} 0.6s 2.5s linear forwards;
    }
    .thumb-img04 {
      animation: ${ImgVideoAni} 0.6s 4s linear forwards;
    }
    .ico-txt {
      animation: ${IcoRot} 1.5s 4.5s forwards;
    }
  }
  @media (max-width: 321px) {
    zoom: 0.8;
  }
`;
const InnerVideo = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 347px;
  height: 261px;
`;
const IcoTxt = styled.span`
  opacity: 0;
  position: relative;
  display: block;
  width: 141px;
  height: 75px;
  background: url(${icoConti}) 0/100% no-repeat;
`;
const ImgVideo = styled.span`
  position: absolute;
  display: block;
  width: 347px;
  height: 261px;
  left: 0;
  top: -100%;
  background-size: 100%;
  transition: 1s;
  &.thumb-img01 {
    top: 0;
  }
`;
const AniCast = keyframes`
  0%{transform: translateY(120%);opacity:0;}
  100%{transform: translateY(0);opacity:1;}
`;
const GroupCast = styled.div`
  &.aos-animate {
    .cast-box1 {
      animation: ${AniCast} 5s forwards;
    }
    .cast-box2 {
      animation: ${AniCast} 4s 2s forwards;
    }
    .cast-box3 {
      animation: ${AniCast} 4s 3s forwards;
    }
  }
`;
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
  &.cast-box3 {
    margin-top: 0;
    z-index: 2;
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
const ShareSns = styled.div`
  position: relative;
  z-index: 9;
  padding: 60px 0 100px;
  background: #080c0d;
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
