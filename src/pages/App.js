import * as React from "react";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import { Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'YS Text',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Main></Main>
      <Routes>
        <Route path="/signin" element={<Login />} />
      </Routes>
    </ThemeProvider>
    </>
  );
}

export default App;
