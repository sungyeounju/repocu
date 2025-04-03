import { Link } from "react-router";
import * as S from "./styled";

function Footer({ data }) {
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
    const shareUrl = data.footer.shareUrl;
    if (navigator.share) {
      navigator
        .share({
          title: data.footer.title,
          text: data.footer.text,
          url: shareUrl,
        })
        .then(() => console.log("공유 성공"))
        .catch(() => copyClipboard(shareUrl));
    } else {
      copyClipboard(shareUrl);
    }
  };
  const BgFooter = `/images/sketch/${data.master.id}/bg_footer.png`;
  const AniImg01 = `/images/sketch/${data.master.id}/footer_img01.png`;
  const AniImg02 = `/images/sketch/${data.master.id}/footer_img02.png`;
  return (
    <>
      <S.Wrapper>
        <S.Outro
          style={{ backgroundImage: `url(${BgFooter})` }}
          data-aos="fade"
        >
          <S.TxtDate>
            {data.cover.date}
            <br />
            {data.cover.date2}
          </S.TxtDate>
          <S.Itembox>
            <S.Item>{data.master.brideEng}</S.Item>
            <S.Item>{data.master.groomEng}</S.Item>
          </S.Itembox>
        </S.Outro>
        <S.AniImg data-aos="fade">
          <S.ImgThumb
            style={{ backgroundImage: `url(${AniImg01})` }}
          ></S.ImgThumb>
          <S.ImgThumb
            className="img-thumb02"
            style={{ backgroundImage: `url(${AniImg02})` }}
          ></S.ImgThumb>
        </S.AniImg>
        <S.FooterLogo data-aos="fade">
          <span className="screen-out"></span>
        </S.FooterLogo>
        <S.ShareSns data-aos="fade">
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
        </S.ShareSns>
      </S.Wrapper>
    </>
  );
}
export default Footer;
