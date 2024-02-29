import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarExport,
} from "@mui/x-data-grid";
import {
  ClearButton,
  DateButton,
  UploadButton,
} from "../components/Buttons/Buttons";
import { LOYALTI_PROGRAMM_COLUMN } from "../mocks/users-data";

function MenuButtons(props) {
  return (
    <>
      <UploadButton></UploadButton>
      <DateButton></DateButton>
      <ClearButton> </ClearButton>
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
    <GridToolbarContainer sx={{ margin: "24px 0 16px 4px" }}>
      <GridToolbarQuickFilter
        InputProps={{ disableUnderline: true }}
        placeholder="Поиск"
        sx={{
          ".MuiInputBase-root": {
            backgroundColor: "#f1f1f1",
            borderRadius: "8px",
            paddingLeft: "8px",
            paddingBottom: 0,
          },
          maxWidth: "803px",
          width: "100%",
        }}
      ></GridToolbarQuickFilter>
      <MenuButtons></MenuButtons>
      <GridToolbarExport
        startIcon={false}
        sx={{
          color: "#1d6bf3",
          border: "1px solid #1d6bf3",
          width: "132px",
          height: "34px",
          fontWeight: "400",
          padding: "0",
          fontSize: "14px",
          textTransform: "none",
        }}
      />
    </GridToolbarContainer>
  );
}
export default function Promocodes({ rowData }) {
  // Преобразуем ключ userId в id для каждого объекта в массиве rowData
  const rows = rowData.map((row) => ({
    ...row,
    id: row.userId,
  }));

  return (
    <Layout>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          hideFooter={true}
          slots={{ columnMenu: CustomColumnMenu, toolbar: CustomToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
            },
          }}
          localeText={{
            toolbarExport: "Экспортировать",
          }}
          rows={rows}
          columns={LOYALTI_PROGRAMM_COLUMN}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
          disableColumnMenu
        />
      </Box>
    </Layout>
  );
}
