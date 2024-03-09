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
  buttonClick,
  renderSelectEditInputCell,
  renderSelectEditInputCellProfession,
} from "../mocks/users-data";
import { Button } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Popup from "../components/Popup/Popup";
import { apiTables } from "../components/utils/apiTables";

export default function Ambassadors({
  rows,
  setRows,
  rowModesModel,
  setRowModesModel,
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
  showDeleteButton,
  handleShowDeleteButton,
  isOpen,
  onClose, 
  onClick
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
            {cellValues.row.name}
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
      valueGetter: (params) => params.row.address.country,
    },
    {
      field: "city",
      headerName: "Город",
      headerAlign: "center",
      align: "center",
      editable: true,
      width: 120,
      sortable: false,
      valueGetter: (params) => params.row.address.city,
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

  const handleAddNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        status: "уточняется",
        created: "",
        name: "",
        gender: "",
        onboarding_status: "",
        program: "",
        country: "",
        city: "",
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
  };

  function deleteRows() {
    setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
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
    apiTables.getAmbassadors().then((ambassadors) => {
      setRows(ambassadors);
    });
  }, [setRows]);

  return (
   <>
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.name}
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
   <Popup isOpen={isOpen} onClose={onClose} />
  </>
  );
}
