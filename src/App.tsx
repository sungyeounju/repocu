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
import { Route, Routes } from "react-router";
import Dwsj0309 from "./pages/Dwsj0309";
import Home from "./pages/main/Home";
function App() {
  console.log(firestore);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Dwsj0309" element={<Dwsj0309 />}></Route>
      </Routes>
    </>
  );
}

export default App;

const Container = styled.div`
  overflow: hidden;
`;
