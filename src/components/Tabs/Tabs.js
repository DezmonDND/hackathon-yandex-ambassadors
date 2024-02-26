import { useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Promocodes from "../Tables/Promocodes";
import "./Tabs.css";
import Ambassadors from "../Tables/Ambassadors";
import Content from "../Tables/Content";
import SendMerch from "../Tables/SendMerch";
import Budget from "../Tables/Budget";
import Loyalti from "../Tables/Loyalti";
import FAQ from "../Tables/FAQ";
import BudgetPrice from "../Tables/BudgetPrice";

function Tabs() {
  const { pathname } = useLocation();
  const theme = createTheme({
    typography: {
      fontFamily: [
        'YS Text',
        'Arial',
        'sans-serif',
      ].join(','),
    },
  });

  return (
    <div className="tabs">
      <ThemeProvider theme={theme}>
        {pathname.includes("/promocodes") && <Promocodes></Promocodes>}
        {pathname.includes("/ambassadors") && <Ambassadors></Ambassadors>}
        {pathname.includes("/content") && <Content></Content>}
        {pathname.includes("/send-merch") && <SendMerch></SendMerch>}
        {pathname.includes("/budget/info") && <Budget></Budget>}
        {pathname.includes("/budget/price") && <BudgetPrice></BudgetPrice>}
        {pathname.includes("/loyalty-programm") && <Loyalti></Loyalti>}
        {pathname.includes("/faq") && <FAQ></FAQ>}
      </ThemeProvider>

    </div>
  );
}

export default Tabs;
