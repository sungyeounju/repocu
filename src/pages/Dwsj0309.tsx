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
function Dwsj0309() {
  return (
    <>
      <Cover />
      <Invite />
      <Showbox />
      <Cast />
      <Ticket />
      <PhotoGallery />
      <Location />
      <Account />
      <Footer />
    </>
  );
}
export default Dwsj0309;

const Container = styled.div`
  overflow: hidden;
`;
