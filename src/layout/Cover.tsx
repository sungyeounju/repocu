import { styled } from "styled-components";

import bgCover from "../assets/ico/bg_cover.png";
import titCover from "../assets/ico/tit_cover.png";
import icCalendar from "../assets/ico/ic_calendar_14.png";
import icPlcae from "../assets/ico/ic_place_14.png";
import txtBride from "../assets/ico/txt_bride.png";
import txtGroom from "../assets/ico/txt_groom.png";
import imgCover from "../assets/image/img_cover.png";
import { useState } from "react";
function Cover() {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Wrapper>
        {!isLoaded && (
          <Inner style={{ backgroundImage: `url(${imgCover})` }}>
            <Titimg src={titCover} />
            <Itembox>
              <Item>
                <img src={txtBride} alt="신부" width="27" />
                <strong className="tit-name">SEOJEONG</strong>
              </Item>
              <Item>
                <img src={txtGroom} alt="신랑" width="27" />
                <strong className="tit-name">DONGWOO</strong>
              </Item>
            </Itembox>
            <Footer>
              <span className="ico-date ico">날짜</span>
              <span className="txt-date">2025. 3. 9 11:20am</span>
              <span className="ico-place ico">장소</span>
              <span className="txt-place">더파티움 여의도 그랜드컨벤션홀</span>
            </Footer>
          </Inner>
        )}
      </Wrapper>
    </>
  );
}
export default Cover;
const Wrapper = styled.div``;
const Inner = styled.div`
  position: relative;
  height: 100vh;
  background-size: cover;
  background-position: center;
  &:before {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${bgCover}) center top/100% no-repeat;
    content: "";
  }
  &:after {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(0, #080c0d 30%, transparent);
    content: "";
  }
`;
const Titimg = styled.img`
  width: 233px;
  margin-top: 90px;
`;
const Itembox = styled.div`
  position: absolute;
  left: 0;
  bottom: 140px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 50px;
  z-index: 10;
  color: #fff;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .tit-name {
    display: block;
    margin-top: 2px;
    font-size: 12px;
    font-family: "Montserrat", serif;
  }
`;
const Footer = styled.div`
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  span {
    display: inline-block;
    padding-left: 4px;
    color: #fff;
    font-size: 12px;
  }
  .ico {
    display: inline-block;
    width: 14px;
    height: 14px;
    font-size: 0;
  }
  .ico-place {
    margin-left: 8px;
    background: url(${icPlcae}) center 0/100% no-repeat;
  }
  .ico-date {
    background: url(${icCalendar}) center 0/100% no-repeat;
  }
`;
