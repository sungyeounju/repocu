import React from "react";
import { Wraaper } from "./component/Wrapper";
import styled from "styled-components";
import Cover from "./layout/Cover";
import PhotoGallery from "./layout/Gallery/PhotoGallery";
import PhotoGallery2 from "./layout/Gallery/PhotoGallery2";
import Ticket from "./layout/Ticket";
import Location from "./layout/Location";
import Cast from "./layout/Cast";
import Account from "./layout/Account";
import GuestBook from "./layout/GuestBook";
import { firestore } from "./firebase-config.js";
import Showbox from "./layout/Showbox";
import Footer from "./layout/Footer";
import Invite from "./layout/Invite";
function App() {
  console.log(firestore);
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

export default App;

const Container = styled.div`
  overflow: hidden;
`;
