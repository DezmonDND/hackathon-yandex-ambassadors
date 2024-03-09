import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu, GridRowModes } from "@mui/x-data-grid";
import {
  DeleteButton,
  MinusButton,
  PlusButton,
  SettingsButton,
  CloseIconButton,
  CheckboxSelectionButton,
} from "../components/Buttons/Buttons";
import React, { useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes";
import {
  renderSelectEditInputCell,
  renderSelectEditInputCellProfession,
} from "../mocks/users-data";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Popup from "../components/Popup/Popup";
import { apiTables } from "../components/utils/apiTables";
import { GridActionsCellItem } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowEditStopReasons } from "@mui/x-data-grid";

export default function Ambassadors({
  rows,
  setRows,
  rowModesModel,
  setRowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  handleShowExportButton,
  handleHideButtons,
  showDeleteButton,
  handleShowDeleteButton,
  isOpen,
  onClose,
  onClick,
}) {
  const AMBASSADORS_COLUMNS = [
    {
      field: "status",
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
      renderCell: renderActions,
    },
    {
      field: "created",
      headerName: " Дата",
      headerAlign: "center",
      align: "center",
      width: 120,
      editable: true,
      disableColumnMenu: true,
      valueFormatter: (params) => new Date(params?.value).toLocaleDateString(),
    },
    {
      field: "name",
      headerName: "ФИО",
      headerAlign: "center",
      align: "center",
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
            {cellValues?.row?.name}
          </Button>
        );
      },
    },
    {
      field: "gender",
      headerName: "Пол",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 80,
      sortable: false,
    },
    {
      field: "onboarding_status",
      headerName: "Онбординг",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 120,
      sortable: false,
    },
    {
      field: "program",
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
      field: "country",
      headerName: "Страна",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 120,
      sortable: false,
      valueGetter: (params) => params?.row?.address?.country,
    },
    {
      field: "city",
      headerName: "Город",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 120,
      sortable: false,
      valueGetter: (params) => params?.row?.address?.city,
    },
    {
      field: "email",
      headerName: "E-mail",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 141,
      sortable: false,
    },
    {
      field: "phone_number",
      headerName: "Телефон",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 136,
      sortable: false,
    },
    {
      field: "telegram_id",
      headerName: "Telegram",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 122,
      sortable: false,
    },
    {
      field: "education",
      headerName: "Образование",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 219,
      sortable: false,
    },
    {
      field: "job",
      headerName: "Место работы/должность",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 272,
      sortable: false,
    },
    {
      field: "purpose",
      headerName: "Цель в Практикуме",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 462,
      sortable: false,
    },
    {
      field: "tutor",
      headerName: "Цель амбассадорства",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 347,
      sortable: false,
    },
  ];

  // Меню действий на странице
  function renderActions({ id }) {
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
  }

  function handleAddNewRow() {
    const id = randomId();

    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        status: "уточняется",
        created: new Date(),
        name: "",
        gender: "",
        onboarding_status: "",
        program: "",
        // country: "",
        // city: "",
        email: "",
        phone_number: "",
        telegram_id: "",
        education: "",
        job: "",
        purpose: "",
        tutor: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
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
    apiTables
      .addNewRowAmbassadors(newRow)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  }

  function deleteRows() {
    const ids = rows
      .filter((r) => selectionModel.includes(r.id))
      .map(({ id }) => id);
    console.log(ids);

    ids.forEach((id) => {
      apiTables
        .deleteRowAmbassadors(id)
        .then((res) => {
          console.log(res);
          setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
        })
        .catch((e) => console.log(`Error! ${e}`));
    });
  }

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

  useEffect(() => {
    apiTables
      .getAmbassadors()
      .then((ambassadors) => {
        setRows(ambassadors);
      })
      .catch((err) => console.log(err));
  }, [setRows]);

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
            editMode="row"
          />
        </Box>
      </Layout>
      <Popup isOpen={isOpen} onClose={onClose} />
    </>
  );
}
