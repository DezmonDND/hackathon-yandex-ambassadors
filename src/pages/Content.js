import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu } from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  CloseIconButton,
  SettingsButton,
} from "../components/Buttons/Buttons";
import {
  // CONTENT_COLUMNS,
  buttonClick,
  renderSelectEditInputCell,
  renderSelectEditInputCellMerch,
} from "../mocks/users-data";
import { useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Content({
  rowData,
  // setRows,
  rowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  handleRowModesModelChange,
  handleRowEditStop,
  processRowUpdate,
  renderActions,
  handleShowExportButton,
  handleHideButtons,
}) {
  const [rows, setRows] = useState(rowData);

  const CONTENT_COLUMNS = [
    {
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      field: "userId",
      sortable: false,
      disableColumnMenu: true,
      width: 90,
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
      headerName: "Отправка мерча",
      headerAlign: "center",
      align: "center",
      field: "userSendMerch",
      width: 162,
      editable: true,
      disableColumnMenu: true,
      type: "singleSelect",
      renderEditCell: renderSelectEditInputCellMerch,
    },
    {
      headerName: "Статус",
      headerAlign: "center",
      align: "center",
      field: "userStatus",
      width: 140,
      editable: true,
      disableColumnMenu: true,
      renderEditCell: renderSelectEditInputCell,
    },
    {
      headerName: "ФИО",
      headerAlign: "center",
      align: "center",
      field: "userName",
      width: 220,
      editable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Button
            style={{
              color: "#1D6BF3",
              textTransform: "none",
              fontWeight: "400",
            }}
            onClick={buttonClick}
          >
            {cellValues.row.userName}
          </Button>
        );
      },
    },
    {
      headerName: "Telegram",
      headerAlign: "center",
      align: "center",
      field: "userTelegram",
      width: 164,
      editable: true,
      disableColumnMenu: true,
    },
    {
      headerName: "Отзыв",
      headerAlign: "center",
      align: "center",
      field: "userFeedback",
      width: 214,
      editable: true,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "#1D6BF3" }}
            to={cellValues.row.userFeedback}
            target="blank"
          >
            {cellValues.row.userFeedback}
          </Link>
        );
      },
    },
    {
      headerName: "Хабр",
      headerAlign: "center",
      align: "center",
      field: "userHabr",
      width: 214,
      editable: true,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Link
            style={{ textDecoration: "none", color: "#1D6BF3" }}
            to={cellValues.row.userHabr}
            target="blank"
          >
            {cellValues.row.userHabr}
          </Link>
        );
      },
    },
  ];

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
          sx={{
            ".MuiMenu-list": {
              minWidth: "200px",
            },
          }}
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

  // Преобразуем ключ userId в id для каждого объекта в массиве rowData
  // const rows = rowData.map((row) => ({
  //   ...row,
  //   id: row.id,
  // }));

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
              padding: "7px 0",
              margin: "0 3px",
              backgroundColor: "#E8F2FF",
              border: "1px solid #E0E0E0",
              borderRadius: " 4px",
            },
          }}
          rowModesModel={rowModesModel}
          processRowUpdate={processRowUpdate}
          onRowModesModelChange={handleRowModesModelChange}
          onRowEditStop={handleRowEditStop}
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
