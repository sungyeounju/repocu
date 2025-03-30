import { Link, useParams } from "react-router";
import * as S from "./styled";
import Title from "../Title";
import MapApi from "../../Map/MapApi";
import { useState } from "react";

function Location({ data }) {
  const location = data.location;
  const textlink = location.address;
  let latTxt = location.lat;
  let longTxt = location.long;
  const copyClipboard = async (text: string, successAction?: () => void) => {
    try {
      await navigator.clipboard.writeText(text);
      successAction && successAction();
    } catch (error) {
      alert("error");
    }
  };
  const [tab, setTab] = useState<number | null>(null);
  const handleTap = (idx: number) => {
    setTab(tab === idx ? null : idx);
  };
  return (
    <>
      <S.Wrpper data-aos="fade-up">
        <Title title={"Location"} />
        <S.CopyTxt
          onClick={() =>
            copyClipboard(textlink, () => {
              alert(textlink + "\n주소 복사 완료!");
            })
          }
        >
          {location.address}
          <br />
          {location.hall}
          <span className="img-copy" />
        </S.CopyTxt>
        <S.MapBox>
          <MapApi latitude={latTxt} longitude={longTxt} />
        </S.MapBox>
        <S.ListBtn>
          <li className="link-navermap">
            <Link to={location.mapapi.naver}>네이버 지도</Link>
          </li>
          <li className="link-kakaomap">
            <Link to={location.mapapi.kakao}>카카오 지도</Link>
          </li>
          <li className="link-tmap">
            <Link to={location.mapapi.tmap}>T MAP</Link>
          </li>
        </S.ListBtn>
        <S.WayBox>
          {location.cont.map((item, idx) => (
            <S.ItemLoca key={idx} className={tab === idx ? "active" : ""}>
              <strong className="tit-loca" onClick={() => handleTap(idx)}>
                {item.title}
              </strong>
              <div className="inner-cont">
                {item.info.map((infoItem, idx) => (
                  <div className="cont-loca" key={idx}>
                    <span className="tit-info">{infoItem.tit}</span>
                    <span className="txt-info">{infoItem.cont}</span>
                  </div>
                ))}
              </div>
            </S.ItemLoca>
          ))}
        </S.WayBox>
      </S.Wrpper>
    </>
  );
}
export default Location;
