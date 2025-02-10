import React from "react";
import styled from "styled-components";

import { Route, Routes } from "react-router";
import Dwsj0309 from "./pages/Dwsj0309";
import Home from "./pages/main/Home";

function App() {
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
