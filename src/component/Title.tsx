import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import TitleIco from "../assets/ico/ic_title.png";

function Title({ title }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Titleg data-aos="fade-up" data-aos-duration="1500" data-aos-offset="50">
        {title}
      </Titleg>
    </>
  );
}
export default Title;
const Titleg = styled.h2`
  margin-top: 130px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 600;
  font-family: "Montserrat", serif;
  &:before {
    display: block;
    width: 40px;
    height: 22px;
    margin: 0 auto 8px;
    background: url(${TitleIco}) 0/100% no-repeat;
    content: "";
  }
`;
