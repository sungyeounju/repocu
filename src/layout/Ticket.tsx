import React from "react";

import TitTicket from "../assets/ico/tit_ticket.png";
import Ticket01 from "../assets/ico/ticket1.png";
import Ticket02 from "../assets/image/ticket2.png";
import { styled } from "styled-components";

function Ticket() {
  const date = "2025. 3. 9 Sat.";
  const time = "11:20 am";
  const place = "그랜드 컨벤션";
  const place2 = "서울 영등포구 은행로 30 B1층";
  return (
    <>
      <img src={TitTicket} alt="" width={195} style={{ marginTop: "130px" }} />
      <TicketBox>
        <InnerTicket>
          <span className="txt-date">{date}</span>
          <span className="txt-time">{time}</span>
          <span className="txt-place">{place}</span>
          <span className="txt-place txt-place2">{place2}</span>
        </InnerTicket>
      </TicketBox>
    </>
  );
}
export default Ticket;

const TicketBox = styled.div`
  position: relative;
  width: 285px;
  height: 540px;
  margin: 20px auto 0;
  background: url(${Ticket01}) 0/100% no-repeat;
  span {
    position: absolute;
  }
  .txt-date {
    left: 48px;
    top: 70px;
    font-family: "Montserrat", serif;
    font-size: 18px;
    font-weight: 400;
  }
  .txt-time {
    left: 48px;
    top: 98px;
    font-family: "Montserrat", serif;
    font-size: 18px;
    font-weight: 400;
  }
  .txt-place {
    bottom: 105px;
    left: 48px;
    font-size: 14px;
  }
  .txt-place2 {
    bottom: 85px;
  }
`;
const InnerTicket = styled.div``;
