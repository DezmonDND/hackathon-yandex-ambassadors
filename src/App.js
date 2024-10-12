/*eslint-disable*/ 
import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
import { fetchAmbassadorData } from "./store/ambassadorDataSlice";
import ProtectedRouteElement from "./components/ProtectedRoute/ProtectedRoute";
import AppContext from "./context/AppContext";
import { HISTORY_ROWS, USERS } from "./mocks/rows";

const theme = createTheme({
  typography: {
    fontFamily: ["YS Text", "Arial", "sans-serif"].join(","),
  },
});

function App() {
  const dispatch = useDispatch();
  const ambassadorData = useSelector((state) => state.ambassadorData.data);

  useEffect(() => {
    dispatch(fetchAmbassadorData());
  }, [dispatch]);

  const [rows, setRows] = useState(USERS);
  const [rowModesModel, setRowModesModel] = useState({});
  const [selectionModel, setSelectionModel] = useState([]);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [showExportButton, setShowExportButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedAmbassadorId, setSelectedAmbassadorId] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Попап при клике на ФИО
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleClick = (id) => {
    setIsPopupOpen(true);
    setSelectedAmbassadorId(id);
  };

  function handleEscapeClick(evt) {
    if (evt.key === "Escape") {
      closePopup();
    }
  }
  useEffect(() => {
    // Проверяем localStorage при загрузке компонента App
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(storedIsLoggedIn);
  }, [isLoggedIn]);

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
  // const handleRowModesModelChange = (newRowModesModel) => {
  //   setRowModesModel(newRowModesModel);
  // };

  // const handleRowEditStop = (params, event) => {
  //   if (params.reason === GridRowEditStopReasons.rowFocusOut) {
  //     event.defaultMuiPrevented = true;
  //   }
  // };

  // const processRowUpdate = (newRow) => {
  //   const updatedRow = { ...newRow, isNew: false };
  //   setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
  //   return updatedRow;
  // };

  return (
    <>
      <AppContext.Provider value={{ setIsLoggedIn }}>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate to="/promocodes" replace />} />
            <Route
              path="/signin"
              element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
            />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/promocodes"
              element={
                <ProtectedRouteElement
                  element={Promocodes}
                  loggedIn={isLoggedIn}
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
                <ProtectedRouteElement
                  element={Ambassadors}
                  loggedIn={isLoggedIn}
                  isOpen={isPopupOpen}
                  onClose={closePopup}
                  onClick={handleClick}
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
                <ProtectedRouteElement
                  element={Content}
                  loggedIn={isLoggedIn}
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
                <ProtectedRouteElement
                  element={SendMerch}
                  loggedIn={isLoggedIn}
                  rowModesModel={rowModesModel}
                  setRowModesModel={setRowModesModel}
                  checkboxSelection={checkboxSelection}
                  selectionModel={selectionModel}
                  setSelectionModel={setSelectionModel}
                  showExportButton={showExportButton}
                  // handleRowModesModelChange={handleRowModesModelChange}
                  // processRowUpdate={processRowUpdate}
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
                <ProtectedRouteElement
                  element={Budget}
                  loggedIn={isLoggedIn}
                  rowModesModel={rowModesModel}
                  selectionModel={selectionModel}
                  setSelectionModel={setSelectionModel}
                  // handleRowModesModelChange={handleRowModesModelChange}
                  // handleRowEditStop={handleRowEditStop}
                  // processRowUpdate={processRowUpdate}
                />
              }
            />
            <Route
              path="/budget-price"
              element={
                <ProtectedRouteElement
                  element={BudgetPrice}
                  loggedIn={isLoggedIn}
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
              path="/budget-info"
              element={
                <ProtectedRouteElement element={Budget} loggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/loyalty-programm"
              element={
                <ProtectedRouteElement
                  element={Loyalti}
                  loggedIn={isLoggedIn}
                  rowModesModel={rowModesModel}
                  checkboxSelection={checkboxSelection}
                  selectionModel={selectionModel}
                  setSelectionModel={setSelectionModel}
                  showExportButton={showExportButton}
                  // handleRowModesModelChange={handleRowModesModelChange}
                  // handleRowEditStop={handleRowEditStop}
                  // processRowUpdate={processRowUpdate}
                  handleShowExportButton={handleShowExportButton}
                  handleHideButtons={handleHideButtons}
                />
              }
            />
            <Route
              path="/faq"
              element={
                <ProtectedRouteElement element={FAQ} loggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/faq/add-faq"
              element={
                <ProtectedRouteElement element={AddFAQ} loggedIn={isLoggedIn} />
              }
            />
            <Route
              path="/faq/edit-faq"
              element={
                <ProtectedRouteElement
                  element={EditFAQ}
                  loggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/history"
              element={
                <ProtectedRouteElement
                  element={History}
                  loggedIn={isLoggedIn}
                />
              }
            />
            <Route
              path="/notices"
              element={
                <ProtectedRouteElement
                  element={Notices}
                  loggedIn={isLoggedIn}
                  rowData={HISTORY_ROWS}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </AppContext.Provider>
    </>
  );
}

export default App;
