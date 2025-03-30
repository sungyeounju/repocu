import * as S from "./styled";
import Title from "../Title";

function Invite({ data }) {
  const Thumb01 = `/images/sketch/${data.master.id}/invite_img1.png`;
  const Thumb02 = `/images/sketch/${data.master.id}/invite_img2.png`;
  return (
    <>
      <S.Wrapper data-aos="fade">
        <Title title="Invite" />
        <S.BoxAlbum>
          <S.Thumb
            className="thumb-img thumb-img1"
            style={{ backgroundImage: `url(${Thumb01})` }}
          ></S.Thumb>
          <S.Thumb
            className="thumb-img thumb-img2"
            style={{ backgroundImage: `url(${Thumb02})` }}
          ></S.Thumb>
          <S.Sticker>
            <span className="sticker01"></span>
            <span className="sticker02"></span>
            <span className="sticker03"></span>
            <span className="sticker04"></span>
            <span className="sticker05"></span>
          </S.Sticker>
        </S.BoxAlbum>
        <S.Boxitem data-aos="fade-up">
          <S.InnerText></S.InnerText>
        </S.Boxitem>
        <S.BoxInvite data-aos="fade-up">
          <S.TxtInvite>{data.info.text2}</S.TxtInvite>
          <S.GroupName>
            <S.InnerName>
              <S.TxInfo>{data.master.groomInfo}</S.TxInfo>
              <S.TxtName>{data.master.groom}</S.TxtName>
            </S.InnerName>
            <S.InnerName>
              <S.TxInfo>{data.master.brideInfo}</S.TxInfo>
              <S.TxtName>{data.master.bride}</S.TxtName>
            </S.InnerName>
          </S.GroupName>
        </S.BoxInvite>
      </S.Wrapper>
    </>
  );
}
export default Invite;
