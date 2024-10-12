import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu } from "@mui/x-data-grid";
import {
  DateButton,
  CheckboxSelectionButton,
  CloseIconButton,
  SettingsButton,
  FilterExportButton,
} from "../components/Buttons/Buttons";
import { BUDGET_COLUMN } from "../mocks/users-data";
import { useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import BudgetTabs from "../components/BudgetTabs/BudgetTabs";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes/CustomPopupCheckboxes";

export default function Budget({
  rowData,
  rowModesModel,
  selectionModel,
  setSelectionModel,
  handleRowModesModelChange,
  handleRowEditStop,
  processRowUpdate,
}) {
  const [rows, setRows] = useState(rowData);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [showExportButton, setShowExportButton] = useState(false);

  function showCheckboxes() {
    setCheckboxSelection(!checkboxSelection);
  }

  const handleShowExportButton = () => {
    setShowExportButton(true);
    showCheckboxes(true);
  };

  const handleHideButtons = () => {
    setShowExportButton(false);
    showCheckboxes(false);
  };

  function MenuButtons() {
    const [openColumnsMenu, setOpenColumnsMenu] = useState(false);
    const [columnsMenuAnchorEl, setColumnsMenuAnchorEl] = useState(null);

    return (
      <>
        {!checkboxSelection && (
          <SettingsButton
            onClick={(event) => {
              setOpenColumnsMenu(!openColumnsMenu);
              setColumnsMenuAnchorEl(event.currentTarget);
            }}
          ></SettingsButton>
        )}
        <CustomPopupCheckboxes
          moreMenuAnchorEl={columnsMenuAnchorEl}
          openColumnsMenu={openColumnsMenu}
          setOpenColumnsMenu={(value) => setOpenColumnsMenu(value)}
        />
        {!checkboxSelection ? (
          <CheckboxSelectionButton
            onClick={handleShowExportButton}
          ></CheckboxSelectionButton>
        ) : (
          <CloseIconButton onClick={handleHideButtons}></CloseIconButton>
        )}
        {!checkboxSelection && <DateButton></DateButton>}
        {checkboxSelection && (
          <FilterExportButton
            onClick={(event) => {
              setOpenColumnsMenu(!openColumnsMenu);
              setColumnsMenuAnchorEl(event.currentTarget);
            }}
          ></FilterExportButton>
        )}
        <CustomPopupCheckboxes
          moreMenuAnchorEl={columnsMenuAnchorEl}
          openColumnsMenu={openColumnsMenu}
          setOpenColumnsMenu={(value) => setOpenColumnsMenu(value)}
        />
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
          columns={BUDGET_COLUMN}
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
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
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
