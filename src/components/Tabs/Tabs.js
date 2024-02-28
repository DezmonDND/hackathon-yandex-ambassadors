import "./Tabs.css";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { USERS } from "../utils/constants";
import {
  sortArray,
  sortByArzamas,
  sortByBackpack,
  sortByCoffee,
  sortByCurator,
  sortByDate,
  sortByFeedback,
  sortByHabr,
  sortByHudi,
  sortByHudiSize,
  sortByIndex,
  sortByMerch,
  sortByName,
  sortByPlus,
  sortBySendMerch,
  sortByShopper,
  sortBySocksSize,
  sortBySticker,
  sortByTelegram,
} from "../utils/sortingFunctions";
import Promocodes from "../Tables/Promocodes";
import Ambassadors from "../Tables/Ambassadors";
import Content from "../Tables/Content";
import SendMerch from "../Tables/SendMerch";
import Budget from "../Tables/Budget";
import BudgetPrice from "../Tables/BudgetPrice";
import Loyalti from "../Tables/Loyalti";
import FAQ from "../Tables/FAQ";

function Tabs() {
  const { pathname } = useLocation();
  const [rowData, setRowData] = useState(USERS);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [selected, setSelected] = useState([]);

  const handleCheckboxClick = (row) => {
    const selectedIndex = selected.indexOf(row.userId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.userId);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rowData.map((n) => n.userId);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleSortRequest = () => {
    setRowData(sortArray(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByName = () => {
    setRowData(sortByName(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestBySendMerch = () => {
    setRowData(sortBySendMerch(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByTelegram = () => {
    setRowData(sortByTelegram(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByFeedback = () => {
    setRowData(sortByFeedback(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByHabr = () => {
    setRowData(sortByHabr(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByDate = () => {
    setRowData(sortByDate(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByCurator = () => {
    setRowData(sortByCurator(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByMerch = () => {
    setRowData(sortByMerch(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByHudiSize = () => {
    setRowData(sortByHudiSize(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestBySocksSize = () => {
    setRowData(sortBySocksSize(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByIndex = () => {
    setRowData(sortByIndex(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByHudi = () => {
    setRowData(sortByHudi(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByCoffee = () => {
    setRowData(sortByCoffee(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestBySticker = () => {
    setRowData(sortBySticker(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByPlus = () => {
    setRowData(sortByPlus(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByArzamas = () => {
    setRowData(sortByArzamas(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByShopper = () => {
    setRowData(sortByShopper(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  const handleSortRequestByBackpack = () => {
    setRowData(sortByBackpack(USERS, orderDirection));
    setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
  };

  return (
    <div className="tabs">
      {pathname.includes("/promocodes") && (
        <Promocodes
          rowData={rowData}
        ></Promocodes>
      )}
      {pathname.includes("/ambassadors") && (
        <Ambassadors
          rowData={rowData}
          selected={selected}
          orderDirection={orderDirection}
          handleSortRequest={handleSortRequest}
          handleCheckboxClick={handleCheckboxClick}
          handleSelectAllClick={handleSelectAllClick}
          handleSortRequestByName={handleSortRequestByName}
          handleSortRequestByDate={handleSortRequestByDate}
        ></Ambassadors>
      )}
      {pathname.includes("/content") && (
        <Content
          rowData={rowData}
          selected={selected}
          orderDirection={orderDirection}
          handleSortRequest={handleSortRequest}
          handleCheckboxClick={handleCheckboxClick}
          handleSelectAllClick={handleSelectAllClick}
          handleSortRequestBySendMerch={handleSortRequestBySendMerch}
          handleSortRequestByTelegram={handleSortRequestByTelegram}
          handleSortRequestByFeedback={handleSortRequestByFeedback}
          handleSortRequestByName={handleSortRequestByName}
          handleSortRequestByHabr={handleSortRequestByHabr}
        ></Content>
      )}
      {pathname.includes("/send-merch") && (
        <SendMerch
          rowData={rowData}
          selected={selected}
          orderDirection={orderDirection}
          handleSortRequest={handleSortRequest}
          handleCheckboxClick={handleCheckboxClick}
          handleSelectAllClick={handleSelectAllClick}
          handleSortRequestByCurator={handleSortRequestByCurator}
          handleSortRequestByMerch={handleSortRequestByMerch}
          handleSortRequestByHudiSize={handleSortRequestByHudiSize}
          handleSortRequestBySocksSize={handleSortRequestBySocksSize}
          handleSortRequestByName={handleSortRequestByName}
          handleSortRequestByIndex={handleSortRequestByIndex}
        ></SendMerch>
      )}
      {pathname.includes("/budget/info") && (
        <Budget
          rowData={rowData}
          selected={selected}
          orderDirection={orderDirection}
          handleSortRequest={handleSortRequest}
          handleCheckboxClick={handleCheckboxClick}
          handleSelectAllClick={handleSelectAllClick}
        ></Budget>
      )}
      {pathname.includes("/budget/price") && (
        <BudgetPrice
          rowData={rowData}
          selected={selected}
          orderDirection={orderDirection}
          handleSortRequest={handleSortRequest}
          handleCheckboxClick={handleCheckboxClick}
          handleSelectAllClick={handleSelectAllClick}
        ></BudgetPrice>
      )}
      {pathname.includes("/loyalty-programm") && (
        <Loyalti
          rowData={rowData}
          selected={selected}
          orderDirection={orderDirection}
          handleSortRequest={handleSortRequest}
          handleCheckboxClick={handleCheckboxClick}
          handleSelectAllClick={handleSelectAllClick}
          handleSortRequestByName={handleSortRequestByName}
          handleSortRequestByHudi={handleSortRequestByHudi}
          handleSortRequestByCoffee={handleSortRequestByCoffee}
          handleSortRequestBySticker={handleSortRequestBySticker}
          handleSortRequestByPlus={handleSortRequestByPlus}
          handleSortRequestByArzamas={handleSortRequestByArzamas}
          handleSortRequestByShopper={handleSortRequestByShopper}
          handleSortRequestByBackpack={handleSortRequestByBackpack}
        ></Loyalti>
      )}
      {pathname.includes("/faq") && <FAQ></FAQ>}
    </div>
  );
}

export default Tabs;
