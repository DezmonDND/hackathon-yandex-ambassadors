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
        {!checkboxSelection && <MinusButton></MinusButton>}
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
          }}
          rowModesModel={rowModesModel}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          disableRowSelectionOnClick
          disableColumnMenu
        />
      </Box>
    </Layout>
  );
}
