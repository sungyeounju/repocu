import Title from "../component/Title";
import { styled } from "styled-components";

function Cast() {
  const castArray = [
    { desc: "장진원 · 윤혜연 의 아들", name: "장동우", eng: "JANG DONGWOO" },
    { desc: "김종화 · 김정화 의 딸", name: "김서정", eng: "KIM SEOJEONG" },
  ];
  return (
    <>
      <Title title={"CAST"} />
      {castArray.map((item, idx) => (
        <Itembox key={idx}>
          <TxtDesc>{item.desc}</TxtDesc>
          <TitName>{item.name}</TitName>
          <NameEng>{item.eng}</NameEng>
        </Itembox>
      ))}
    </>
  );
}
export default Cast;

const Itembox = styled.div`
  margin-top: 60px;
`;
const TxtDesc = styled.span`
  display: block;
  font-size: 14px;
  line-height: 28px;
  font-weight: 300;
`;
const TitName = styled.strong`
  display: block;
  margin-top: 12px;
  font-size: 26px;
  font-weight: 400;
`;
const NameEng = styled.span`
  display: block;
  margin-top: 6px;
  font-weight: 700;
  font-family: "Montserrat", serif;
  color: #baae9f;
`;
