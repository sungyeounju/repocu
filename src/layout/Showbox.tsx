import React from "react";
import { styled } from "styled-components";

import icCam from "../assets/ico/ic_cam_44.png";
import parretn01 from "../assets/ico/pattern01.png";
import imgFilm01 from "../assets/image/img_film01.png";
import imgFilm02 from "../assets/image/img_film02.png";

function Showbox() {
  return (
    <>
      <Wrapper>
        <ImgFilm style={{ transform: `rotate(-8deg)` }}>
          <Img style={{ backgroundImage: `url(${imgFilm01})` }}></Img>
        </ImgFilm>
        <Boxitem>
          <TxtDesc>
            인생은 모두가 함께하는 여행이다.
            <br />
            매일매일 사는 동안 우리가 할 수 있는 건<br />
            최선을 다해 이 멋진 여행을 만끽하는 것이다.
          </TxtDesc>
          <TxtDesc>- 영화 &lt;어바웃타임 &gt; 중 -</TxtDesc>
          <TxtDesc className="txt-color">
            새로운 여행의 출발선에 서있는
            <br />
            저희를 축복해 주시면 감사하겠습니다.
          </TxtDesc>
        </Boxitem>
        <ImgFilm className="img-film2" style={{ transform: `rotate(10deg)` }}>
          <Img style={{ backgroundImage: `url(${imgFilm02})` }}></Img>
        </ImgFilm>
      </Wrapper>
    </>
  );
}
export default Showbox;

const Wrapper = styled.div`
  position: relative;
  background-color: #000;
  &:after {
    position: relative;
    top: 98px;
    display: block;
    width: 578px;
    height: 115px;
    background: url(${parretn01}) 0/100% no-repeat;
    content: "";
  }
`;
const ImgFilm = styled.div`
  &.img-film2 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -57px;
    z-index: 1;
  }
`;
const Img = styled.span`
  display: block;
  width: 697px;
  height: 161px;
  background-size: 100%;
`;
const Boxitem = styled.div`
  position: relative;
  margin: 90px auto;
  &:before {
    display: block;
    width: 44px;
    height: 30px;
    margin: 30px auto;
    background: url(${icCam}) 0/100% no-repeat;
    content: "";
  }
`;
const TxtDesc = styled.span`
  display: block;
  color: #fff;
  font-size: 13px;
  line-height: 28px;
  + span {
    margin-top: 20px;
  }
  &.txt-color {
    margin-top: 40px;
    color: #e6e09b;
  }
`;
