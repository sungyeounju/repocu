import React from "react";
import { useState } from "react";
import Title from "../component/Title";
import styled from "styled-components";

function Account() {
  const [tab, setTab] = useState(0);
  const tabList = [
    { title: "신랑측", content: "" },
    { title: "신부측", content: "" },
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
      <ul className="list-tab">
        <li className="tab-item">
          <button>신랑측</button>
        </li>
        <li className="tab-item">
          <button>신부측</button>
        </li>
      </ul>
      <div></div>
    </>
  );
}
export default Account;
const Desc = styled.span`
  display: block;
  margin-top: 30px;
`;
