import styled from "styled-components";
import Cover from "./../layout/Cover";
import Invite from "./../layout/Invite";
import Showbox from "./../layout/Showbox";
import Cast from "./../layout/Cast";
import Ticket from "./../layout/Ticket";
import PhotoGallery from "./../layout/Gallery/PhotoGallery";
import Location from "./../layout/Location";
import Account from "./../layout/Account";
import Footer from "./../layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GuestBook from "./../layout/GuestBook";

function Dwsj0309() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Container>
        <Cover />
        <Invite />
        <div data-aos="fade" data-aos-duration="1500">
          <Showbox />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Cast />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Ticket />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <PhotoGallery />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Location />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500">
          <Account />
        </div>
        <GuestBook />
        <Footer />
      </Container>
    </>
  );
}
export default Dwsj0309;

const Container = styled.div`
  overflow: hidden;
  max-width: 500px;
  margin: 0 auto;
`;
