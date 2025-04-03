import * as S from "./styled";
import { useState } from "react";
function Cover({ data }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const ImgCover = `/images/sketch/${data.master.id}/img_cover.png`;
  return (
    <>
      <S.Wrapper>
        {!isLoaded && (
          <S.Inner style={{ backgroundImage: `url(${ImgCover})` }}>
            <S.Itembox>
              <S.Item>{data.master.brideEng}</S.Item>
              <S.Item>{data.master.groomEng}</S.Item>
            </S.Itembox>
            <S.Footer data-aos="fade-up">
              <strong className="tit-cover"></strong>
              <span className="txt-date">
                {data.cover.date}
                <br />
                {data.cover.date2}
              </span>
            </S.Footer>
          </S.Inner>
        )}
      </S.Wrapper>
    </>
  );
}
export default Cover;
