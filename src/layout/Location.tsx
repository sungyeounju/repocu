import React from "react";
import { Link, useParams } from "react-router";
import { styled } from "styled-components";
import Title from "../component/Title";
import MapApi from "./Map/MapApi";

import IcoCopy from "../assets/ico/ic_copy_16.png";

function Location() {
  const textlink = "서울 영등포구 은행로 30 B1층";
  let latTxt = 37.52817734076299;
  let longTxt = 126.92281277080815;
  const copyClipboard = async (text: string, successAction?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      successAction && successAction();
    } catch (error) {
      alert("error");
    }
  };

  return (
    <>
      <Title title={"LOCATION"} />
      <Wrpper>
        <CopyTxt
          onClick={() =>
            copyClipboard(textlink, () => {
              alert("주소 복사 완료");
            })
          }
        >
          더파티움 여의도 그랜드컨벤션홀
          <br />
          서울 영등포구 은행로 30 B1층
          <span className="img-copy" />
          <span></span>
        </CopyTxt>
        <MapBox>
          <MapApi latitude={latTxt} longitude={longTxt} />
        </MapBox>
        <ListBtn>
          <li>
            <Link to="https://naver.me/5PV4xVbp">네이버 지도</Link>
          </li>
          <li>
            <Link to="https://kko.kakao.com/pr_N9lVNAe">카카오 지도</Link>
          </li>
          <li>
            <Link to="https://tmap.life/8387508d">T MAP</Link>
          </li>
        </ListBtn>
        <WayBox>
          <dl>
            <dt>지하철</dt>
            <dd>
              9호선 국회의사당 3번출구 (도보 5분)
              <br />5 · 9호선 여의도역 3번출구 (도보 15분)
            </dd>
          </dl>
          <dl>
            <dt>자가용</dt>
            <dd>중소기업중앙회관 지하주차장</dd>
          </dl>
          <dl>
            <dt>셔틀버스</dt>
            <dd>
              여의나루역 1번 출구에서 더파티움
              <br />
              여의도 무료셔틀을 이용하세요.
              <br />
              (15분 간격 운행)
            </dd>
          </dl>
        </WayBox>
      </Wrpper>
    </>
  );
}
export default Location;

const Wrpper = styled.div`
  padding: 0 16px;
`;
const CopyTxt = styled.span`
  display: block;
  margin-top: 30px;
  .img-copy {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin: 3px;
    background: url(${IcoCopy}) 0/100% no-repeat;
  }
`;
const MapBox = styled.div`
  height: 190px;
  margin-top: 40px;
  border: 1px solid #fff;
`;
const ListBtn = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  border: 1px solid #baae9f;
  border-radius: 50px;
  li {
    width: 114px;
    a {
      display: block;
      line-height: 44px;
      font-size: 12px;
      font-weight: 500;
    }
    &:nth-child(2) {
      position: relative;
      &:before {
        display: inline-block;
        position: absolute;
        top: 10px;
        left: 0;
        width: 1px;
        height: 24px;
        background: #baae9f;
        content: "";
      }
      &:after {
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 0;
        width: 1px;
        height: 24px;
        background: #baae9f;
        content: "";
      }
    }
  }
`;
const WayBox = styled.div`
  margin-top: 20px;
  text-align: left;
  font-size: 13px;
  dl {
    display: flex;
    padding: 20px 14px;
    + dl {
      border-top: 1px dashed #baae9f;
    }
    dt {
      flex-shrink: 0;
      width: 100px;
      font-weight: 500;
    }
  }
`;
