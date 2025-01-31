import React from "react";
import { Wraaper } from "./component/Wrapper";
import Cover from "./layout/Cover";
import styled from "styled-components";
import PhotoGallery from "./layout/Gallery/PhotoGallery";
import PhotoGallery2 from "./layout/Gallery/PhotoGallery2";
import Ticket from "./layout/Ticket";
import Cast from "./layout/Cast";
import Account from "./layout/Account";
import GuestBook from "./layout/GuestBook";
import { firestore } from "./firebase-config.js";
function App() {
  console.log(firestore);
  return (
    <>
      <Container>
        <GuestBook />
        <PhotoGallery />
        <Account />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
`;
