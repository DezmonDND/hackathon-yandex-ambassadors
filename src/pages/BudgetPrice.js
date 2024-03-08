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
import { useEffect } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import BudgetTabs from "../components/BudgetTabs/BudgetTabs";
import { apiTables } from "../components/utils/apiTables";

export default function Promocodes({
  // rowData,
  rows,
  setRows,
  rowModesModel,
  setRowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  handleRowModesModelChange,
  handleRowEditStop,
  // processRowUpdate,
  renderActions,
  handleShowExportButton,
  handleHideButtons,
  showDeleteButton,
  handleShowDeleteButton,
}) {
  const BUDGET_PRICE_COLUMN = [
    {
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      field: "id",
      width: 40,
      sortable: false,
    },
    {
      field: "actions",
      type: "actions",
      cellClassName: "actions",
      headerName: "Действия",
      headerAlign: "center",
      editable: false,
      align: "center",
      width: 100,
      disableColumnMenu: true,
      renderCell: renderActions,
    },
    {
      headerName: "Мерч",
      headerAlign: "center",
      align: "center",
      field: "name",
      width: 792,
      sortable: false,
      editable: true,
    },
    {
      headerName: "Стоимость",
      headerAlign: "center",
      align: "center",
      field: "cost",
      width: 300,
      editable: true,
      sortable: false,
    },
  ];

  const handleAddNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        name: "",
        cost: "",
        isNew: true,
      },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  const processRowUpdate = (newRow) => {

    const updatedRow = { ...newRow, isNew: false };
    // apiTables.createBudgetPrice(updatedRow)
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  function deleteRows() {
    setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
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
    apiTables.getBudgetPrice().then((price) => {
      setRows(price);
    });
  }, [setRows]);

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
