import styled from "styled-components";
import Cover from "./../layout/Cover";
import Invite from "./../layout/Invite";
import Showbox from "./../layout/Showbox";
import Cast from "./../layout/Cast";
import Ticket from "./../layout/Ticket";
import PhotoGallery from "./../layout/Gallery/PhotoGallery";
import PhotoGallery2 from "./../layout/Gallery/PhotoGallery2";
import Location from "./../layout/Location";
import Account from "./../layout/Account";
import Footer from "./../layout/Footer";
function Dwsj0309() {
  return (
    <>
      <Container>
        <Cover />
        <Invite />
        <Showbox />
        <Cast />
        <Ticket />
        <PhotoGallery />
        <Location />
        <Account />
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
