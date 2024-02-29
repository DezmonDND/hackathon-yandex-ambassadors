import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import {
  ClearButton,
  DeleteButton,
  MinusButton,
  PencilButton,
  PlusButton,
  SettingsButton,
  SortButton,
  SortIcon,
} from "../components/Buttons/Buttons";
import { AMBASSADORS_COLUMNS } from "../mocks/users-data";
import { IconButton, SvgIcon } from "@mui/material";
import { useState } from "react";
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

  function MenuButtons() {
    return (
      <>
        <CheckboxSelectionButton></CheckboxSelectionButton>
        <SortButton></SortButton>
        <SettingsButton></SettingsButton>
        <PencilButton></PencilButton>
        <PlusButton></PlusButton>
        <MinusButton></MinusButton>
        <ClearButton> </ClearButton>
        <DeleteButton></DeleteButton>
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
            maxWidth: "667px",
            width: "100%",
          }}
        ></GridToolbarQuickFilter>
        <MenuButtons></MenuButtons>
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
          columns={AMBASSADORS_COLUMNS}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
            },
          }}
          checkboxSelection={checkboxSelection}
          disableRowSelectionOnClick
          renderSortIcon={(props) => <SortIcon {...props} />}
        />
      </Box>
    </Layout>
  );
}
