import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu, GridRowModes } from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  MinusButton,
  PlusButton,
  CloseIconButton,
  DeleteButton,
} from "../components/Buttons/Buttons";
import { useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import BudgetTabs from "../components/BudgetTabs/BudgetTabs";
import { apiTables } from "../utils/apiTables";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowEditStopReasons } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { BUDGET_PRICE_ROWS } from "../mocks/rows";
import { BUDGET_PRICE_COLUMN } from "../mocks/columns";
import {
  handleCancelClick,
  handleEditClick,
  handleSaveClick,
} from "../utils/rowEditFunctions";

export default function Promocodes({
  rowModesModel,
  setRowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  handleShowExportButton,
  handleHideButtons,
  showDeleteButton,
  handleShowDeleteButton,
}) {
  // const [rows, setRows] = useState([]);
  const [rows, setRows] = useState(BUDGET_PRICE_ROWS);
  const [category, setCategory] = useState(null);

  function handleAddNewRow() {
    const id = randomId();

    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        name: "",
        cost: "",
        category: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  }

  // Работа со строками
  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  function processRowUpdate(newRow) {
    if (newRow.isNew === true) {
      apiTables
        .addNewRowBudgetPrice(newRow)
        .then((res) => {
          const updatedRow = { ...newRow, id: res.id, isNew: false };
          setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
          setCategory(JSON.stringify(res.category));
        })
        .catch((err) => console.log(err));
    } else if (newRow.isNew !== true) {
      const id = newRow.id;
      apiTables
        .editRowBudgetPrice(id, newRow)
        .then((res) => {
          setCategory(JSON.stringify(res.category));
          console.log(res);
        })
        .catch((err) => console.log(err));
    }

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  }

  function deleteRows() {
    const ids = rows
      .filter((r) => selectionModel.includes(r.id))
      .map(({ id }) => id);

    ids.forEach((id) => {
      apiTables
        .deleteRowBudgetPrice(id)
        .then((res) => {
          console.log(res);
          setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
        })
        .catch((e) => console.log(`Error! ${e}`));
    });
  }

  const handleDeleteClick = (id) => () => {
    apiTables
      .deleteRowBudgetPrice(id)
      .then((res) => {
        console.log(res);
        setRows(rows.filter((row) => row.id !== id));
      })
      .catch((e) => console.log(`Error! ${e}`));
  };

  // Меню действий на странице
  function renderActions({ id }) {
    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    if (isInEditMode) {
      return [
        <GridActionsCellItem
          key={1}
          icon={<SaveIcon />}
          label="Save"
          sx={{
            color: "#1d6bf3",
          }}
          onClick={handleSaveClick(id, rowModesModel, setRowModesModel)}
        />,
        <GridActionsCellItem
          key={2}
          sx={{
            color: "#1d6bf3",
            borderRadius: "4px",
          }}
          icon={<DeleteIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleDeleteClick(id)}
          color="inherit"
        />,
        <GridActionsCellItem
          key={3}
          sx={{
            color: "#1d6bf3",
          }}
          icon={<CancelIcon />}
          label="Cancel"
          className="textPrimary"
          onClick={handleCancelClick(
            id,
            rows,
            setRows,
            rowModesModel,
            setRowModesModel
          )}
          color="inherit"
        />,
      ];
    }

    return [
      <GridActionsCellItem
        key={4}
        sx={{
          color: "#1d6bf3",
          borderRadius: "4px",
        }}
        icon={<EditOutlinedIcon />}
        label="Edit"
        className="textPrimary"
        onClick={handleEditClick(id, rowModesModel, setRowModesModel)}
        color="inherit"
      />,
    ];
  }

  function MenuButtons() {
    return (
      <>
        {!checkboxSelection ? (
          <CheckboxSelectionButton
            onClick={handleShowExportButton}
          ></CheckboxSelectionButton>
        ) : (
          <CloseIconButton onClick={handleHideButtons}></CloseIconButton>
        )}
        {!checkboxSelection && (
          <MinusButton onClick={handleShowDeleteButton}></MinusButton>
        )}
        {!checkboxSelection && (
          <PlusButton onClick={handleAddNewRow}></PlusButton>
        )}
        {showDeleteButton && <DeleteButton onClick={deleteRows}></DeleteButton>}
      </>
    );
  }

  function CustomColumnMenu(props) {
    return (
      <GridColumnMenu
        {...props}
        slots={{
          columnMenuColumnsItem: null,
        }}
      />
    );
  }

  function CustomToolbar() {
    return (
      <>
        <Toolbar
          showExportButton={showExportButton}
          checkboxSelection={checkboxSelection}
        >
          <MenuButtons></MenuButtons>
        </Toolbar>
      </>
    );
  }

  useEffect(() => {
    apiTables
      .getBudgetPrice()
      .then((price) => {
        setRows(price);
      })
      .catch((e) => console.log(`Error! ${e}`));
  }, []);

  return (
    <Layout>
      <BudgetTabs></BudgetTabs>
      <Box sx={{ height: "calc(100% - 56px)", width: "100%" }}>
        <DataGrid
          style={{ borderStyle: "hidden" }}
          hideFooter={true}
          slots={{
            columnMenu: CustomColumnMenu,
            toolbar: CustomToolbar,
            baseCheckbox: newBaseCheckbox,
          }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          localeText={{
            toolbarExport: "Экспортировать",
          }}
          rows={rows}
          columns={BUDGET_PRICE_COLUMN(renderActions, category)}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
            },
            ".MuiDataGrid-editInputCell": {
              padding: "7px 0",
              margin: "0 3px",
              backgroundColor: "#E8F2FF",
              border: "1px solid #E0E0E0",
              borderRadius: " 4px",
            },
          }}
          rowModesModel={rowModesModel}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={selectionModel}
          processRowUpdate={processRowUpdate}
          onRowEditStop={handleRowEditStop}
          onRowModesModelChange={handleRowModesModelChange}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          disableRowSelectionOnClick
          disableColumnMenu
          editMode="row"
        />
      </Box>
    </Layout>
  );
}
