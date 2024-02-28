import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { USERS } from "../mocks/users-data";
import SideBar from "../components/SideBar/SideBar";
import Login from "../components/Login/Login";
import Promocodes from "../components/Tables/Promocodes";
import Ambassadors from "../components/Tables/Ambassadors";
import Content from "../components/Tables/Content";
import SendMerch from "../components/Tables/SendMerch";
import Budget from "../components/Tables/Budget";
import BudgetPrice from "../components/Tables/BudgetPrice";
import Loyalti from "../components/Tables/Loyalti";
import FAQ from "../components/Tables/FAQ";


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
  const [rowData, setRowData] = useState(USERS);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="promocodes" replace />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/promocodes" element={<Promocodes rowData={rowData} />} />
          <Route path="/ambassadors" element={<Ambassadors rowData={rowData} />} />
          {/* TODO: доделать ротеры как выше */}
          {/* <Route path="/content" element={<Content />} />
          <Route path="/send-merch" element={<SendMerch />} />
          <Route path="/budget/info" element={<Budget />} />
          <Route path="/budget/price" element={<BudgetPrice />} />
          <Route path="/loyalty-programm" element={<Loyalti />} /> */}
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
