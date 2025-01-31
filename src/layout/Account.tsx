import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Title from "../component/Title";
import btnAccount from "../assets/ico/btn_account.png";
import btnKakaopay from "../assets/ico/btn_kakaopay.png";

function Account() {
  const [currenttab, setTab] = useState(0);
  const groomList = [
    { tag: "신랑", name: "장동우", value1: "123", value2: "334" },
    { tag: "혼주", name: "장진원", value1: "444", value2: "555" },
    { tag: "혼주", name: "윤혜연", value1: "222", value2: "999" },
  ];
  const brideList = [
    { tag: "신부", name: "김서정", value1: "123", value2: "334" },
    { tag: "혼주", name: "김종화", value1: "444", value2: "555" },
    { tag: "혼주", name: "김정화", value1: "222", value2: "999" },
  ];
  const tabList = [
    { title: "신랑측", content: groomList },
    { title: "신부측", content: brideList },
  ];
  const tabHandle = (index) => {
    setTab(index);
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
                <button className="btn-item btn-acconut" value={person.value1}>
                  계좌복사
                </button>
                <button className="btn-item btn-kakaopay" value={person.value2}>
                  카카오페이
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
    font-weight: 600;
  }
  .left-item {
    width: 157px;
    text-align: left;
    padding-left: 10px;
  }
  .right-item {
    width: 157px;
  }
  .btn-item {
    width: 65px;
    height: 30px;
    background-size: 100%;
    font-size: 0;
    &.btn-acconut {
      background-image: url(${btnAccount});
    }
    &.btn-kakaopay {
      margin-left: 6px;
      background-image: url(${btnKakaopay});
    }
  }
`;
