import { useState } from "react";
import * as S from "./styled";
import Title from "../Title";
import { Link } from "react-router";
import data from "../../../assets/data/sketch/jhjh0525.json";

function Account() {
  const [currenttab, setTab] = useState(0);
  const accountItem = data.account;
  const createList = (type) => {
    const main = data.master[type];
    const fater = data.master[`${type}Father`];
    const mother = data.master[`${type}Mother`];
    return [
      {
        tag: type === "groom" ? "신랑" : "신부",
        name: main,
        accountVal: accountItem?.[type]?.account ?? "",
        kakopayVal: accountItem?.[type]?.kakaopay ?? "",
      },
      fater && {
        tag: "혼주",
        name: fater,
        accountVal: accountItem?.[`${type}Father`]?.account ?? "",
        kakopayVal: accountItem?.[`${type}Father`]?.kakaopay ?? "",
      },
      mother && {
        tag: "혼주",
        name: mother,
        accountVal: accountItem?.[`${type}Mother`]?.account ?? "",
        kakopayVal: accountItem?.[`${type}Mother`]?.kakaopay ?? "",
      },
    ].filter(Boolean);
  };
  const groomList = createList("groom");
  const brideList = createList("bride");
  const tabList = [
    { title: "신랑측", content: groomList },
    { title: "신부측", content: brideList },
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
                  <span className="txt-tag">{person?.tag}</span>
                  <span className="txt-name">{person?.name}</span>
                </div>
                <div className="right-item">
                  {person?.kakopayVal && (
                    <Link
                      to={person?.kakopayVal}
                      className="btn-item btn-kakaopay"
                    >
                      카카오페이
                    </Link>
                  )}
                  {person?.accountVal && (
                    <button
                      className="btn-item btn-acconut"
                      value={person?.accountVal}
                      onClick={() => {
                        copyClipboard(person?.accountVal, () => {
                          alert(person?.accountVal + "\n복사 되었습니다 💌");
                        });
                      }}
                    >
                      계좌복사
                    </button>
                  )}
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
