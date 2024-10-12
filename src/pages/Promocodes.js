import * as React from "react";
import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { useEffect } from "react";
import {
  DataGrid,
  GridColumnMenu,
  gridClasses,
  GridRowModes,
} from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  CloseIconButton,
  FilterExportButton,
} from "../components/Buttons/Buttons";
import { useState } from "react";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes/CustomPopupCheckboxes";
import { apiTables } from "../utils/apiTables";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { GridActionsCellItem } from "@mui/x-data-grid";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowEditStopReasons } from "@mui/x-data-grid";
import Popup from "../components/Popup/Popup";
import { PROMOCODES } from "../mocks/rows";
import { PROMOCODES_COLUMNS } from "../mocks/columns";
import {
  handleCancelClick,
  handleEditClick,
  handleSaveClick,
} from "../utils/rowEditFunctions";

export default function Promocodes({
  rowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  setRowModesModel,
  handleShowExportButton,
  handleHideButtons,
  isOpen,
  onClose,
  onClick,
  id,
}) {
  // const [rows, setRows] = useState([]);
  const [rows, setRows] = useState(PROMOCODES);

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  function processRowUpdate(newRow) {
    const id = newRow.id;
    apiTables
      .editRowPromocodes(id, newRow)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  }

  // Меню действий на странице
  function renderActions({ id }) {
    const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    if (isInEditMode) {
      return [
        <GridActionsCellItem
          key={1}
          icon={<SaveIcon />}
          label="Save"
          sx={{
            color: "#1d6bf3",
          }}
          onClick={handleSaveClick(id, rowModesModel, setRowModesModel)}
        />,
        <GridActionsCellItem
          key={2}
          sx={{
            color: "#1d6bf3",
          }}
          icon={<CancelIcon />}
          label="Cancel"
          className="textPrimary"
          onClick={handleCancelClick(
            id,
            rows,
            setRows,
            rowModesModel,
            setRowModesModel
          )}
          color="inherit"
        />,
      ];
    }

    return [
      <GridActionsCellItem
        key={3}
        sx={{
          border: "1px solid #1d6bf3",
          color: "#1d6bf3",
          borderRadius: "4px",
        }}
        icon={<EditOutlinedIcon />}
        label="Edit"
        className="textPrimary"
        onClick={handleEditClick(id, rowModesModel, setRowModesModel)}
        color="inherit"
      />,
    ];
  }

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
        >
          <MenuButtons></MenuButtons>
        </Toolbar>
      </>
    );
  }

  useEffect(() => {
    apiTables
      .getPromocodes()
      .then((promocodes) => {
        setRows(promocodes);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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
            columns={PROMOCODES_COLUMNS(onClick, renderActions)}
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
      <Popup isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
}
