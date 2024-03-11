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
  renderSelectEditInputCell,
  renderSelectEditInputCellMerch,
} from "../mocks/users-data";
import { useState } from "react";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import Popup from "../components/Popup/Popup";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { GridActionsCellItem, GridRowModes } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowEditStopReasons } from "@mui/x-data-grid";
import { apiTables } from "../components/utils/apiTables";
import { useEffect } from "react";
import { REGEX_URL } from "../components/utils/constants";

export default function Content({
  rowData,
  rowModesModel,
  setRowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  handleShowExportButton,
  handleHideButtons,
  isOpen,
  onClose,
  onClick,
}) {
  const [rows, setRows] = useState([]);

  const CONTENT_COLUMNS = [
    {
      headerName: "ID",
      headerAlign: "center",
      align: "center",
      field: "id",
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
      field: "sending_merch",
      width: 162,
      editable: false,
      disableColumnMenu: true,
      type: "singleSelect",
      valueGetter: (cellValues) => {
        return `Доступно: ${cellValues.value}/2`;
      },
      renderCell: (cellValues) => {
        if (cellValues.value !== "Доступно: 0/2") {
          return (
            <Link
              style={{
                backgroundColor: "#5A9BFF",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "10px 23px 10px 23px",
                borderRadius: "4px",
              }}
              to={"/send-merch"}
            >
              {cellValues.value}
            </Link>
          );
        }
      },
    },
    {
      headerName: "Статус",
      headerAlign: "center",
      align: "center",
      field: "status",
      width: 140,
      editable: false,
      disableColumnMenu: true,
      renderEditCell: renderSelectEditInputCell,
    },
    {
      headerName: "ФИО",
      headerAlign: "center",
      align: "center",
      field: "name",
      width: 220,
      editable: true,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        return (
          <Button
            style={{
              color: "#1D6BF3",
              textTransform: "none",
              fontWeight: "400",
            }}
            onClick={onClick}
          >
            {cellValues.row.name}
          </Button>
        );
      },
    },
    {
      headerName: "Telegram",
      headerAlign: "center",
      align: "center",
      field: "telegram_id",
      width: 164,
      editable: true,
      disableColumnMenu: true,
    },
    {
      headerName: "Отзыв",
      headerAlign: "center",
      align: "center",
      field: "review",
      width: 214,
      editable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        if (REGEX_URL.test(cellValues.value)) {
          return (
            <Link
              style={{
                textDecoration: "none",
                color: "#1D6BF3",
                overflow: "hidden",
              }}
              to={cellValues.row.review}
              target="blank"
            >
              {cellValues.row.review}
            </Link>
          );
        }
      },
    },
    {
      headerName: "Хабр",
      headerAlign: "center",
      align: "center",
      field: "content",
      width: 214,
      editable: false,
      disableColumnMenu: true,
      renderCell: (cellValues) => {
        if (REGEX_URL.test(cellValues.value)) {
          return (
            <Link
              style={{
                textDecoration: "none",
                color: "#1D6BF3",
                overflow: "hidden",
              }}
              to={cellValues.row.content}
              target="blank"
            >
              {cellValues.row.content}
            </Link>
          );
        }
      },
    },
    {
      headerName: "Комментарий",
      headerAlign: "center",
      align: "center",
      field: "comment",
      width: 300,
      editable: true,
      disableColumnMenu: true,
    },
  ];

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
          onClick={handleSaveClick(id)}
        />,
        <GridActionsCellItem
          key={2}
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
        key={2}
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
  }

  // Работа со строками
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
      .editRowContent(id, newRow)
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

  useEffect(() => {
    apiTables
      .getContent()
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
      <Popup isOpen={isOpen} onClose={onClose} />
    </>
  );
}
