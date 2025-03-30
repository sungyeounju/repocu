import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import data from "./../assets/data/sketch/jhjh0525.json";
import Cover from "./../layout/sketch/Cover/Cover";
import Account from "./../layout/sketch/Account/Account2";
import Location from "./../layout/sketch/Location/Location";
import Invite from "./../layout/sketch/Invite/Invite";
import Calendar from "./../layout/sketch/Calendar/Calendar";
import Gallery from "./../layout/sketch/Gallery/PhotoGallery";
import GuestBook from "./../layout/sketch/GuestBook/GuestBook";
import bgPattern from "./../assets/img/sketch/pattern_noise.png";
import Footer from "./../layout/sketch/Footer/Footer";
function Jhjh0525() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Container>
        <Cover data={data} />
        <Invite data={data} />
        <Calendar data={data} />
        <Gallery data={data} />
        <Location data={data} />
        <Account />
        <GuestBook />
        <Footer data={data} />
      </Container>
    </>
  );
}
export default Jhjh0525;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff0f5;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background: url(${bgPattern}) 48px/48px repeat;
    // content: "";
  }
`;
