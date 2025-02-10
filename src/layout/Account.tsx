import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Title from "../component/Title";
import btnAccount from "../assets/ico/btn_account.png";
import btnKakaopay from "../assets/ico/btn_kakaopay.png";
import { Link } from "react-router";

function Account() {
  const [currenttab, setTab] = useState(0);
  const groomList = [
    {
      tag: "신랑",
      name: "장동우",
      value1: "새마을금고 9003-2660-4225-6",
      value2: "https://qr.kakaopay.com/FSbnKYmFG",
    },
    {
      tag: "혼주",
      name: "장진원",
      value1: "국민 003-21-0628-690",
    },
    {
      tag: "혼주",
      name: "윤혜연",
      value1: "우리은행 842-116586-02-001",
    },
  ];
  const brideList = [
    {
      tag: "신부",
      name: "김서정",
      value1: "신한은행 110-353-555274",
      value2: "https://qr.kakaopay.com/Ej71AocN9",
    },
    {
      tag: "혼주",
      name: "김종화",
      value1: "농협 401142 5226 2331",
    },
    {
      tag: "혼주",
      name: "김정화",
      value1: "농협 401142 5226 2331",
    },
  ];
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
      <Title title={"Account"} />
      <Desc>
        전해주시는 축하의 마음은 소중하게 간직하여
        <br />
        좋은 부부의 모습으로 보답하겠습니다.
      </Desc>
      <TabList>
        {tabList.map((el, index) => {
          return (
            <li
              key={index}
              className={currenttab === index ? "active" : "menu"}
            >
              <BtnTab onClick={() => tabHandle(index)}>{el.title}</BtnTab>
            </li>
          );
        })}
      </TabList>

      <InnerPerson>
        {tabList[currenttab].content.map((person, index) => {
          return (
            <PersonList key={index}>
              <div className="left-item">
                <span className="txt-tag">{person.tag}</span>
                <span className="txt-name">{person.name}</span>
              </div>
              <div className="right-item">
                {person.value2 && (
                  <Link to={person.value2} className="btn-item btn-kakaopay">
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
            </PersonList>
          );
        })}
      </InnerPerson>
    </>
  );
}
export default Account;
const Desc = styled.span`
  display: block;
  margin-top: 30px;
  font-size: 14px;
`;
const TabList = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 54px;
  li {
    border-bottom: 2px solid #d6cec8;
    color: #9e9a9a;
    &.active {
      border-color: #baae9f;
      color: #191919;
    }
  }
  @media (max-width: 321px) {
    zoom: 0.8;
  }
`;
const BtnTab = styled.button`
  width: 157px;
  height: 40px;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 400;
`;
const InnerPerson = styled.div`
  margin-top: 30px;
  @media (max-width: 321px) {
    zoom: 0.8;
  }
`;
const PersonList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 314px;
  margin: 0 auto;
  + div {
    margin-top: 24px;
  }
  .txt-tag {
  }
  .txt-name {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
  .left-item {
    width: 157px;
    text-align: left;
    padding-left: 10px;
  }
  .right-item {
    display: flex;
    justify-content: end;
    width: 157px;
  }
  .btn-item {
    width: 65px;
    height: 30px;
    background-size: 100%;
    font-size: 0;
    &.btn-acconut {
      margin-left: 6px;
      background-image: url(${btnAccount});
    }
    &.btn-kakaopay {
      width: 50px;
      background-image: url(${btnKakaopay});
    }
  }
`;
