import styled from "styled-components";
import Icotit from "../../assets/img/sketch/ico_tit.png";
function Title({ title }) {
  return (
    <>
      <Titleg className="tit-g">{title}</Titleg>
    </>
  );
}
export default Title;
const Titleg = styled.h2`
  font-size: 18px;
  line-height: 21px;
  font-family: "modernmono";
  &:before {
    display: block;
    width: 18px;
    height: 19px;
    margin: 0 auto 12px;
    content: "";
    background: url(${Icotit}) 0/100%;
  }
`;
