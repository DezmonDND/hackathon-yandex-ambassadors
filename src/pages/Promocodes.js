import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { ClearButton } from "../components/Buttons/Buttons";
import { PROMOCODES_COLUMNS } from "../mocks/users-data";
import { useState } from "react";
import { IconButton, SvgIcon } from "@mui/material";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function Promocodes({ rowData }) {
  const [checkboxSelection, setCheckboxSelection] = useState(false);

  function CheckboxSelectionButton() {
    return (
      <IconButton
        onClick={() => setCheckboxSelection(!checkboxSelection)}
        sx={{
          border: "1px solid #1d6bf3",
          borderRadius: "4px",
          width: "34px",
          height: "34px",
        }}
      >
        <SvgIcon
          sx={{ color: "#1d6bf3", width: "19px", height: "19px" }}
          component={UploadFileIcon}
        ></SvgIcon>
      </IconButton>
    );
  }

  function MenuButtons(props) {
    return (
      <>
        <CheckboxSelectionButton></CheckboxSelectionButton>
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
            maxWidth: "886px",
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
          columns={PROMOCODES_COLUMNS}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
            },
          }}
          checkboxSelection={checkboxSelection}
          disableRowSelectionOnClick
          disableColumnMenu
        />
      </Box>
    </Layout>
  );
}
