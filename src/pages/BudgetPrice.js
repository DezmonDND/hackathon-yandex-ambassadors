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
import { apiTables } from "../components/utils/apiTables";

export default function Promocodes({
  // rowData,
  // rows,
  // setRows,
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
  const [rows, setRows] = useState([]);

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
      width: 692,
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
    {
      headerName: "Категория",
      headerAlign: "center",
      align: "center",
      field: "category",
      width: 100,
      sortable: false,
      editable: true,
      valueGetter: (params) => params.row.category.id,
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
        category: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  const processRowUpdate = (newRow) => {
    apiTables
      .addNewRowBudgetPrice(newRow)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

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
          getRowId={(row) => row.id}
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
