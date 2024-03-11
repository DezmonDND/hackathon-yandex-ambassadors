import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { USERS, HISTORY } from "./mocks/users-data";
import Login from "./pages/Login/Login";
import Promocodes from "./pages/Promocodes";
import Ambassadors from "./pages/Ambassadors";
import Content from "./pages/Content";
import SendMerch from "./pages/SendMerch";
import Budget from "./pages/Budget";
import BudgetPrice from "./pages/BudgetPrice";
import Loyalti from "./pages/Loyalti";
import FAQ from "./pages/FAQ/FAQ";
import AddFAQ from "./pages/FAQ/AddFAQ";
import EditFAQ from "./pages/FAQ/EditFAQ";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import NotFound from "./pages/NotFound/NotFound";
import History from "./pages/History/History";
import Notices from "./pages/Notices/Notices";
import { GridRowEditStopReasons } from "@mui/x-data-grid";

const theme = createTheme({
  typography: {
    fontFamily: ["YS Text", "Arial", "sans-serif"].join(","),
  },
});
function App() {
  const [rowData, setRowData] = useState(USERS);
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [selectionModel, setSelectionModel] = useState([]);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [showExportButton, setShowExportButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Попап при клике на ФИО
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClick = () => {
    setIsPopupOpen(true);
  };

  function handleEscapeClick(evt) {
    if (evt.key === "Escape") {
      closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeClick);
    return () => {
      document.removeEventListener("keydown", handleEscapeClick);
    };
  });

  // Кнопки
  function showCheckboxes() {
    setCheckboxSelection(!checkboxSelection);
  }

  const handleShowExportButton = () => {
    setShowExportButton(true);
    showCheckboxes(true);
  };

  const handleHideButtons = () => {
    setShowDeleteButton(false);
    setShowExportButton(false);
    showCheckboxes(false);
  };

  const handleShowDeleteButton = () => {
    setShowDeleteButton(true);
    showCheckboxes(true);
  };

  // Работа со строками
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Navigate to="/promocodes" replace />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/promocodes"
            element={
              <Promocodes
                rowModesModel={rowModesModel}
                checkboxSelection={checkboxSelection}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                showExportButton={showExportButton}
                setRowModesModel={setRowModesModel}
                handleShowExportButton={handleShowExportButton}
                handleHideButtons={handleHideButtons}
                isOpen={isPopupOpen}
                onClose={closePopup}
                onClick={handleClick}
              />
            }
          />
          <Route
            path="/ambassadors"
            element={
              <Ambassadors
                isOpen={isPopupOpen}
                onClose={closePopup}
                onClick={handleClick}
                rows={rows}
                setRows={setRows}
                rowModesModel={rowModesModel}
                setRowModesModel={setRowModesModel}
                checkboxSelection={checkboxSelection}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                showExportButton={showExportButton}
                handleShowExportButton={handleShowExportButton}
                handleHideButtons={handleHideButtons}
                showDeleteButton={showDeleteButton}
                handleShowDeleteButton={handleShowDeleteButton}
              />
            }
          />
          <Route
            path="/content"
            element={
              <Content
                rowData={rowData}
                rowModesModel={rowModesModel}
                setRowModesModel={setRowModesModel}
                checkboxSelection={checkboxSelection}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                showExportButton={showExportButton}
                handleShowExportButton={handleShowExportButton}
                handleHideButtons={handleHideButtons}
                isOpen={isPopupOpen}
                onClose={closePopup}
                onClick={handleClick}
              />
            }
          />
          <Route
            path="/send-merch"
            element={
              <SendMerch
                rowModesModel={rowModesModel}
                setRowModesModel={setRowModesModel}
                checkboxSelection={checkboxSelection}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                showExportButton={showExportButton}
                handleRowModesModelChange={handleRowModesModelChange}
                processRowUpdate={processRowUpdate}
                handleShowExportButton={handleShowExportButton}
                handleHideButtons={handleHideButtons}
                showDeleteButton={showDeleteButton}
                handleShowDeleteButton={handleShowDeleteButton}
                isOpen={isPopupOpen}
                onClose={closePopup}
                onClick={handleClick}
              />
            }
          />
          <Route
            path="/budget"
            element={
              <Budget
                rowData={rowData}
                rowModesModel={rowModesModel}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                handleRowModesModelChange={handleRowModesModelChange}
                handleRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
              />
            }
          />
          <Route
            path="/budget-price"
            element={
              <BudgetPrice
                rowModesModel={rowModesModel}
                setRowModesModel={setRowModesModel}
                checkboxSelection={checkboxSelection}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                showExportButton={showExportButton}
                handleShowExportButton={handleShowExportButton}
                handleHideButtons={handleHideButtons}
                showDeleteButton={showDeleteButton}
                handleShowDeleteButton={handleShowDeleteButton}
              />
            }
          />
          <Route path="/budget-info" element={<Budget rowData={rowData} />} />
          <Route
            path="/loyalty-programm"
            element={
              <Loyalti
                rowData={rowData}
                rowModesModel={rowModesModel}
                checkboxSelection={checkboxSelection}
                selectionModel={selectionModel}
                setSelectionModel={setSelectionModel}
                showExportButton={showExportButton}
                handleRowModesModelChange={handleRowModesModelChange}
                handleRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
                handleShowExportButton={handleShowExportButton}
                handleHideButtons={handleHideButtons}
              />
            }
          />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/faq/add-faq" element={<AddFAQ />} />
          <Route path="/faq/edit-faq" element={<EditFAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History rowData={HISTORY} />} />
          <Route path="/notices" element={<Notices rowData={HISTORY} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
