import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu, GridRowModes } from "@mui/x-data-grid";
import {
  ClearButton,
  CheckboxSelectionButton,
  MinusButton,
  PlusButton,
  CloseIconButton,
} from "../components/Buttons/Buttons";
import { BUDGET_PRICE_COLUMN } from "../mocks/users-data";
import { useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import BudgetTabs from "../components/BudgetTabs/BudgetTabs";

export default function Promocodes({ rowData }) {
  const [rows, setRows] = useState(rowData);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [showButtons1, setShowButtons1] = useState(false);
  const [showButtons2, setShowButtons2] = useState(false);

  const handleClick1 = () => {
    setShowButtons1(true);
    setShowButtons2(false);
  }
  
  const handleClick2 = () => {
    setShowButtons1(false);
    setShowButtons2(true);
  }

  const handleAddNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        userMerchName: "",
        userMerchPrice: "",
        isNew: true,
      },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));

    // Сохранение строки
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };


  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };
  
  function showCheckboxes() {
    setCheckboxSelection(!checkboxSelection);
  }

  function resetRows() {
    setSelectionModel([]);
  }

  function deleteRows() {
    setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
  }

  function MenuButtons() {
    return (
      <>
        {!checkboxSelection ? (
          <CheckboxSelectionButton
            onClick={showCheckboxes}
          ></CheckboxSelectionButton>
        ) : (
          <CloseIconButton onClick={showCheckboxes}></CloseIconButton>
        )}
        {!checkboxSelection && (
          <PlusButton onClick={handleAddNewRow}></PlusButton>
        )}
        {!showButtons2 && <MinusButton onClick={handleClick2}></MinusButton>}
        {checkboxSelection && <ClearButton onClick={resetRows}> </ClearButton>}
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
        <Toolbar checkboxSelection={checkboxSelection}>
          <MenuButtons></MenuButtons>
        </Toolbar>
      </>
    );
  }

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
          columns={BUDGET_PRICE_COLUMN}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
            },
            ".MuiDataGrid-editInputCell": {
              padding: '7px 0',
              margin: '0 3px',
              backgroundColor: '#E8F2FF',
              border: '1px solid #E0E0E0',
              borderRadius:' 4px',
            }
          }}
          rowModesModel={rowModesModel}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={selectionModel}
          processRowUpdate={processRowUpdate}
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
