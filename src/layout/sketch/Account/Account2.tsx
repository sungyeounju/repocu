import { useState } from "react";
import * as S from "./styled";
import Title from "../Title";
import { Link } from "react-router";
import data from "../../../assets/data/sketch/jhjh0525.json";

function Account() {
  const [currenttab, setTab] = useState(0);
  const groomList = [
    {
      tag: "신랑",
      name: "조진희",
      value1: "신한은행 110-343-677847",
      value2: "신한은행 110-343-677847",
    },
    {
      tag: "신부",
      name: "이진희",
      value1: "국민은행 95628-0221-61",
      value2: "https://qr.kakaopay.com/Ej9Gb9dV3",
    },
  ];
  const brideList = [
    {
      tag: "신랑 부",
      name: "양용석",
      value1: "농협은행 356-0139-6294-43",
      value2: "",
    },
    {
      tag: "신랑 모",
      name: "이명희",
      value1: "농협은행 415050-52-051024",
      value2: "",
    },
    {
      tag: "신부 부",
      name: "이계영",
      value1: "농협은행 423070-52-037830",
      value2: "",
    },
    {
      tag: "신부 모",
      name: "박순례",
      value1: "농협은행 423070-51-036899",
      value2: "",
    },
  ];
  const tabList = [
    { title: "신랑 · 신부", content: groomList },
    { title: "혼주", content: brideList },
  ];
  const tabHandle = (index) => {
    setTab(index);
  };
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
      <S.Wrapper data-aos="fade-up">
        <Title title={"Giving your heart"} />
        <S.Desc>
          전해주시는 축하의 마음은 소중하게 간직하여
          <br />
          좋은 부부의 모습으로 보답하겠습니다.
        </S.Desc>
        <S.TabList>
          {tabList.map((el, index) => {
            return (
              <li
                key={index}
                className={currenttab === index ? "active" : "menu"}
              >
                <S.BtnTab onClick={() => tabHandle(index)}>{el.title}</S.BtnTab>
              </li>
            );
          })}
        </S.TabList>

        <S.InnerPerson>
          {tabList[currenttab].content.map((person, index) => {
            return (
              <S.PersonList key={index}>
                <div className="left-item">
                  <span className="txt-tag">{person.tag}</span>
                  <span className="txt-name">{person.name}</span>
                </div>
                <div className="right-item">
                  {person?.value2 && (
                    <Link to={person?.value2} className="btn-item btn-kakaopay">
                      카카오페이
                    </Link>
                  )}
                  <button
                    className="btn-item btn-acconut"
                    value={person.value1}
                    onClick={() => {
                      copyClipboard(person.value1, () => {
                        alert(person.value1 + "\n복사 되었습니다 💌");
                      });
                    }}
                  >
                    계좌복사
                  </button>
                </div>
              </S.PersonList>
            );
          })}
        </S.InnerPerson>
      </S.Wrapper>
    </>
  );
}
export default Account;
