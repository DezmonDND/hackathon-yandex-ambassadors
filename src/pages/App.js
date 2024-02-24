import * as React from "react";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Main></Main>
      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
