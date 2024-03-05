import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu } from "@mui/x-data-grid";
import {
  ClearButton,
  CheckboxSelectionButton,
  CloseIconButton,
} from "../components/Buttons/Buttons";
import { CONTENT_COLUMNS } from "../mocks/users-data";
import { useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";

export default function Promocodes({ rowData }) {
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);

  function showCheckboxes() {
    setCheckboxSelection(!checkboxSelection);
  }

  function resetRows() {
    setSelectionModel([]);
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

  // Преобразуем ключ userId в id для каждого объекта в массиве rowData
  const rows = rowData.map((row) => ({
    ...row,
    id: row.userId,
  }));

  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
        style={{ borderStyle: "hidden" }}
          hideFooter={true}
          slots={{
            columnMenu: CustomColumnMenu,
            toolbar: CustomToolbar,
            columnUnsortedIcon: ({ sortingOrder, ...other }) => (
              <UnfoldMoreIcon {...other} />
            ),
            columnSortedAscendingIcon: ExpandMoreIcon,
            columnSortedDescendingIcon: ExpandLessIcon,
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
          columns={CONTENT_COLUMNS}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
            },
            ".MuiDataGrid-iconButtonContainer": {
              visibility: "visible",
            },
            ".MuiDataGrid-sortIcon": {
              opacity: "inherit !important",
            },
            ".MuiDataGrid-editInputCell": {
              padding: '7px 0',
              margin: '0 3px',
              backgroundColor: '#E8F2FF',
              border: '1px solid #E0E0E0',
              borderRadius:' 4px',
            }
          }}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          disableRowSelectionOnClick
          editMode="row"
        />
      </Box>
    </Layout>
  );
}
