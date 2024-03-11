import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { GridRowModes } from "@mui/x-data-grid";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowEditStopReasons } from "@mui/x-data-grid";
import { fetchAmbassadorData } from "./store/ambassadorDataSlice";

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

  const [rowData, setRowData] = useState(USERS);
  const [rows, setRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [selectionModel, setSelectionModel] = useState([]);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [showExportButton, setShowExportButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedAmbassadorId, setSelectedAmbassadorId] = useState(null);

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
  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

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

  // Меню действий на странице
  const renderActions = ({ id }) => {
    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    if (isInEditMode) {
      return [
        <GridActionsCellItem
          icon={<SaveIcon />}
          label="Save"
          sx={{
            color: "#1d6bf3",
          }}
          onClick={handleSaveClick(id)}
        />,
        <GridActionsCellItem
          sx={{
            color: "#1d6bf3",
          }}
          icon={<CancelIcon />}
          label="Cancel"
          className="textPrimary"
          onClick={handleCancelClick(id)}
          color="inherit"
        />,
      ];
    }

    return [
      <GridActionsCellItem
        sx={{
          border: "1px solid #1d6bf3",
          color: "#1d6bf3",
          borderRadius: "4px",
        }}
        icon={<EditOutlinedIcon />}
        label="Edit"
        className="textPrimary"
        onClick={handleEditClick(id)}
        color="inherit"
      />,
    ];
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
                id={selectedAmbassadorId}
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
                id={selectedAmbassadorId}
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
                id={selectedAmbassadorId}
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
                id={selectedAmbassadorId}
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
