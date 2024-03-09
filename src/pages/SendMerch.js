import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import { DataGrid, GridColumnMenu, GridRowModes } from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  DeleteButton,
  MinusButton,
  PlusButton,
  CloseIconButton,
  SettingsButton,
} from "../components/Buttons/Buttons";
import { SEND_MERCH_COLUMNS, buttonClick } from "../mocks/users-data";
import { useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes";
import { apiTables } from "../components/utils/apiTables";
import { Button } from "@mui/material";

export default function SendMerch({
  // setRows,
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
}) {
  const [rows, setRows] = useState([]);

  const SEND_MERCH_COLUMNS = [
    {
      headerName: "ID",
      field: "id",
      width: 60,
      headerAlign: "center",
      align: "center",
      type: "number",
      sortable: false,
    },
    {
      headerName: "Куратор",
      field: "tutor",
      width: 184,
      headerAlign: "center",
      align: "center",
      editable: false,
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
            {cellValues.row.tutor.full_name}
          </Button>
        );
      },
    },
    {
      headerName: "Мерч",
      field: "merch",
      width: 208,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      headerName: "Размер толстовки",
      field: "name_and_size",
      width: 195,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (params) => params.row.ambassador.clothing_size,
    },
    {
      headerName: "Размер носков",
      field: "clothing_size",
      width: 195,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (params) => params.row.ambassador.shoe_size,
    },
    {
      headerName: "ФИО",
      field: "name",
      width: 184,
      headerAlign: "center",
      align: "center",
      editable: false,
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
            {cellValues.row.ambassador.name}
          </Button>
        );
      },
    },
    {
      headerName: "Индекс",
      field: "postal_code",
      width: 103,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (params) => params.row.ambassador.address.postal_code,
    },
    {
      headerName: "Страна",
      field: "country",
      width: 103,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (params) => params.row.ambassador.address.country,
    },
    {
      headerName: "Город",
      field: "city",
      width: 103,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (params) => params.row.ambassador.address.city,
    },
    {
      headerName: "Улица, дом, квартира",
      field: "street",
      width: 194,
      headerAlign: "center",
      align: "center",
      editable: true,
      valueGetter: (params) => params.row.ambassador.address.street,
    },
    {
      headerName: "Телефон",
      field: "application_number",
      width: 108,
      headerAlign: "center",
      align: "center",
      editable: true,
    },
    {
      headerName: "Месяц отправки",
      field: "created",
      width: 173,
      headerAlign: "center",
      align: "center",
      editable: false,
      valueFormatter: (params) => new Date(params?.value).toLocaleString('default', { month: 'long' }),
    },
  ];

  const handleAddNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        userCurator: "",
        userMerch: "",
        userHudiSize: "",
        userSocksSize: "",
        userName: "",
        userIndex: "",
        isNew: true,
      },
    ]);

    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "userHudiSize" },
    }));
  };

  function deleteRows() {
    setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
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
    apiTables.getSendMerch().then((merch) => {
      setRows(merch);
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
              setRows,
              setRowModesModel,
            },
          }}
          localeText={{
            toolbarExport: "Экспортировать",
          }}
          rows={rows}
          columns={SEND_MERCH_COLUMNS}
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
