import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { useEffect } from "react";
import { DataGrid, GridColumnMenu, gridClasses } from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  CloseIconButton,
  FilterExportButton,
} from "../components/Buttons/Buttons";
import {
  buttonClick,
  // PROMOCODES_COLUMNS,
  renderSelectEditInputCell,
} from "../mocks/users-data";
import { useState } from "react";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes";
import { Button } from "@mui/material";
import { apiTables } from "../components/utils/apiTables";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";

export default function Promocodes({
  // rows,
  // setRows,
  rowModesModel,
  checkboxSelection,
  setCheckboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  setShowExportButton,
  handleRowModesModelChange,
  handleRowEditStop,
  processRowUpdate,
  renderActions,
  handleShowExportButton,
  handleHideButtons,
}) {
  const [rows, setRows] = useState([]);

  const PROMOCODES_COLUMNS = [
    {
      field: "status",
      headerName: "Статус",
      width: 150,
      editable: true,
      sortable: false,
      headerAlign: "center",
      align: "center",
      type: "singleSelect",
      valueGetter: (params) => params.row.ambassador.status.name,
      renderEditCell: renderSelectEditInputCell,
    },
    {
      field: "id",
      headerName: "ID",
      width: 90,
      type: "number",
      sortable: false,
      headerAlign: "center",
      align: "center",
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
      field: "created",
      headerName: "Дата",
      width: 120,
      editable: false,
      headerAlign: "center",
      align: "center",
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    {
      field: "name",
      headerName: "ФИО",
      width: 220,
      editable: true,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return (
          <Button
            style={{
              color: "#1D6BF3",
              textTransform: "none",
              fontWeight: "400",
            }}
            onClick={buttonClick}
          >
            {params.row.ambassador.name}
          </Button>
        );
      },
    },
    {
      field: "telegram",
      headerName: "Telegram",
      headerAlign: "center",
      align: "center",
      sortable: false,
      editable: true,
      width: 200,
      valueGetter: (params) => {
        return params.row.ambassador.telegram;
      },
    },
    {
      field: "code",
      headerName: "Промокод",
      headerAlign: "center",
      align: "center",
      sortable: false,
      editable: true,
      width: 220,
    },
  ];

  function MenuButtons() {
    const [openColumnsMenu, setOpenColumnsMenu] = useState(false);
    const [columnsMenuAnchorEl, setColumnsMenuAnchorEl] = useState(null);

    return (
      <>
        {!checkboxSelection ? (
          <CheckboxSelectionButton
            onClick={handleShowExportButton}
          ></CheckboxSelectionButton>
        ) : (
          <CloseIconButton onClick={handleHideButtons}></CloseIconButton>
        )}
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
          columns={PROMOCODES_COLUMNS}
        >
          <MenuButtons></MenuButtons>
        </Toolbar>
      </>
    );
  }

  useEffect(() => {
    apiTables.getPromocodes().then((promocodes) => {
      setRows(promocodes);
    });
  }, []);

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
          columns={PROMOCODES_COLUMNS}
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
            [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]:
              {
                outline: "none",
              },
            [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]:
              {
                outline: "none",
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
          disableColumnMenu
          editMode="row"
        />
      </Box>
    </Layout>
  );
}
