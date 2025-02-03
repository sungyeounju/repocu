import { keyframes, styled } from "styled-components";

import bgShowbox from "../assets/ico/bg_showbox.png";
import titImg from "../assets/ico/img_showing.png";
import imgPoster from "../assets/image/img_poster.png";

function Showbox() {
  return (
    <>
      <Wrapper>
        <TitBox></TitBox>
        <ShowImg style={{ backgroundImage: `url(${imgPoster})` }}></ShowImg>
      </Wrapper>
    </>
  );
}
export default Showbox;
const Wrapper = styled.div`
  position: relative;
  width: 375px;
  height: 517px;
  margin: 150px auto 0;
  background: url(${bgShowbox}) center 0/100% no-repeat;
`;
const ShowLight = keyframes`
  0%,40% {
    opacity: 0;
  }
  20%,50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;
const TitBox = styled.strong`
  position: absolute;
  top: 0;
  left: 0;
  width: 375px;
  height: 125px;
  background: url(${titImg}) center 0/100% no-repeat;
  animation: ${ShowLight} 1.5s infinite linear alternate;
`;
const ShowImg = styled.span`
  position: absolute;
  top: 135px;
  left: calc(50% - 111px);
  display: block;
  width: 223px;
  height: 295px;
  background-size: cover;
  background-position: center;
`;
