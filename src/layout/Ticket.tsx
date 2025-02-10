import TitTicket from "../assets/ico/tit_ticket.png";
import Ticket01 from "../assets/ico/ticket1.png";
import Ticket02 from "../assets/image/ticket2.png";
import { keyframes, styled } from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function Ticket() {
  const date = "2025. 3. 9 Sun.";
  const time = "11:20 am";
  const place = "서울 영등포구 은행로 30";
  const place2 = "더파티움 여의도 B1F 그랜드컨벤션홀";

  useEffect(() => {
    AOS.init();
  }, []);

  const [click, setClick] = useState(false);
  const handleFlip = () => {
    setClick((prev) => !prev);
  };
  return (
    <>
      <Wrapper data-aos="fade-up" data-aos-duration="1500">
        <img
          src={TitTicket}
          alt=""
          width={195}
          style={{ marginTop: "130px" }}
        />
        <BoxTicket
          className={click ? "fliped" : "box-ticket"}
          onClick={handleFlip}
        >
          <TicketBox data-aos="flip-left" data-aos-duration="1500">
            <InnerTicket>
              <span className="txt-date">{date}</span>
              <span className="txt-time">{time}</span>
              <span className="txt-place">{place}</span>
              <span className="txt-place txt-place2">{place2}</span>
            </InnerTicket>
          </TicketBox>
          <TicketImg></TicketImg>
        </BoxTicket>
      </Wrapper>
    </>
  );
}
export default Ticket;

const flipAni = keyframes`
  0%, 100%{transform: perspective(800px) rotateY(0deg);}
  50%{transform: perspective(800px) rotateY(-15deg);}
`;
const Wrapper = styled.div`
  &.aos-animate {
    .box-ticket {
      animation: ${flipAni} 1.5s 3s;
    }
  }
`;
const BoxTicket = styled.div`
  position: relative;
  width: 285px;
  height: 540px;
  margin: 0 auto;
  transition: 0.7s ease-out;
  transform: perspective(800px) rotateY(0deg);
  transform-style: preserve-3d;
  &.fliped {
    transform: perspective(800px) rotateY(180deg);
  }
  @media (max-width: 321px) {
    zoom: 0.85;
  }
`;
const TicketImg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 285px;
  height: 540px;
  background: url(${Ticket02}) 0/100% no-repeat;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
const TicketBox = styled.div`
  position: relative;
  width: 285px;
  height: 540px;
  margin: 20px auto 0;
  background: url(${Ticket01}) 0/100% no-repeat;
  backface-visibility: hidden;
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
