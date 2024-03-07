import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridRowModes,
} from "@mui/x-data-grid";
import {
  DeleteButton,
  MinusButton,
  PlusButton,
  SettingsButton,
  CloseIconButton,
  CheckboxSelectionButton,
} from "../components/Buttons/Buttons";
// import { AMBASSADORS_COLUMNS } from "../mocks/users-data";
import React, { useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes";
import CancelIcon from "@mui/icons-material/Close";
import {
  buttonClick,
  renderSelectEditInputCell,
  renderSelectEditInputCellProfession,
} from "../mocks/users-data";
import { GridActionsCellItem, GridRowEditStopReasons } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

export default function Ambassadors({ rowData }) {
  const [rows, setRows] = useState(rowData);
  const [rowModesModel, setRowModesModel] = useState({});
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const [showExportButton, setShowExportButton] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const AMBASSADORS_COLUMNS = [
    {
      field: "userStatus",
      headerName: "Статус",
      headerAlign: "center",
      align: "center",
      width: 150,
      editable: true,
      sortable: false,
      disableColumnMenu: true,
      type: "singleSelect",
      renderEditCell: renderSelectEditInputCell,
    },
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      width: 90,
      type: "number",
      sortable: false,
      editable: false,
      disableColumnMenu: true,
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
      renderCell: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "#1d6bf3",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              sx={{
                color: "#1d6bf3",
              }}
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            sx={{
              border: "1px solid #1d6bf3",
              color: "#1d6bf3",
              borderRadius: "4px",
            }}
            icon={<EditOutlinedIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
        ];
      },
    },

    {
      field: "userDate",
      headerName: " Дата",
      headerAlign: "center",
      align: "center",
      width: 120,
      editable: true,
      disableColumnMenu: true,
    },
    {
      field: "userName",
      headerName: "ФИО",
      headerAlign: "center",
      align: "center",
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
      field: "userProgramm",
      headerName: "Программа",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 400,
      type: "singleSelect",
      sortable: false,
      renderEditCell: renderSelectEditInputCellProfession,
    },
    {
      field: "userCountry",
      headerName: "Страна",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 120,
      sortable: false,
    },
    {
      field: "userCity",
      headerName: "Город",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 120,
      sortable: false,
    },
  ];

  const handleAddNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        userStatus: "уточняется",
        userDate: "",
        userName: "",
        userProgramm: "",
        userCountry: "",
        userCity: "",
        isNew: true,
      },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "userName" },
    }));
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  function showCheckboxes() {
    setCheckboxSelection(!checkboxSelection);
  }

  function resetRows() {
    setSelectionModel([]);
  }

  function deleteRows() {
    setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
  }

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleShowDeleteButton = () => {
    setShowDeleteButton(true);
    showCheckboxes(true);
  };

  const handleShowExportButton = () => {
    setShowExportButton(true);
    showCheckboxes(true);
  };

  const handleHideButtons = () => {
    setShowDeleteButton(false);
    setShowExportButton(false);
    showCheckboxes(false);
  };

  const MenuButtons = () => {
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
        {!checkboxSelection && (
          <MinusButton onClick={handleShowDeleteButton}></MinusButton>
        )}
        {!checkboxSelection && (
          <PlusButton onClick={handleAddNewRow}></PlusButton>
        )}

        {showDeleteButton && <DeleteButton onClick={deleteRows}></DeleteButton>}
      </>
    );
  };

  const CustomColumnMenu = (props) => {
    return (
      <GridColumnMenu
        {...props}
        slots={{
          columnMenuColumnsItem: null,
          columnMenuSortItem: null,
        }}
      />
    );
  };

  const CustomToolbar = () => {
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
  };

  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          style={{ borderStyle: "hidden" }}
          hideFooter={true}
          editMode="row"
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
              setRows,
              setRowModesModel,
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
            ".MuiDataGrid-iconButtonContainer": {
              visibility: "visible",
            },
            ".MuiDataGrid-sortIcon": {
              opacity: "inherit !important",
            },
            ".MuiDataGrid-menuIcon": {
              visibility: "visible",
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
        />
      </Box>
    </Layout>
  );
}
