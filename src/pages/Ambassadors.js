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
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes/CustomPopupCheckboxes";
import { AMBASSADORS_COLUMNS } from "../mocks/columns";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Popup from "../components/Popup/Popup";
import { apiTables } from "../utils/apiTables";
import { GridActionsCellItem } from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { GridRowEditStopReasons } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { USERS } from "../mocks/rows";
import {
  handleCancelClick,
  handleEditClick,
  handleSaveClick,
} from "../utils/rowEditFunctions";

export default function Ambassadors({
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
  id,
}) {
  const [rows, setRows] = useState(USERS);

  const renderActions = ({ id }) => {
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
            borderRadius: "4px",
          }}
          icon={<DeleteIcon />}
          label="Edit"
          className="textPrimary"
          onClick={handleDeleteClick(id, setRowModesModel)}
          color="inherit"
        />,
        <GridActionsCellItem
          key={3}
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
        key={4}
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
  };

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
        country: "",
        city: "",
        postal_code: "",
        street: "",
        email: "",
        phone_number: "",
        telegram_id: "",
        education: "",
        job: "",
        purpose: "",
        activity: "",
        isNew: true,
      },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  }

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  function processRowUpdate(newRow) {
    if (newRow.isNew === true) {
      apiTables
        .addNewRowAmbassadors(newRow)
        .then((res) => {
          const updatedRow = { ...newRow, id: res.id, isNew: false };
          setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
        })
        .catch((err) => console.log(err));
    } else {
      const id = newRow.id;
      apiTables
        .editRowAmbassadors(id, newRow)
        .then((res) => {
          setRows(rows.map((row) => (row.id === res.id ? res : row)));
        })
        .catch((err) => console.log(err));
    }
    return newRow;
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

  const handleDeleteClick = (id) => () => {
    apiTables
      .deleteRowAmbassadors(id)
      .then((res) => {
        console.log(res);
        setRows(rows.filter((row) => row.id !== id));
      })
      .catch((e) => console.log(`Error! ${e}`));
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
            columns={AMBASSADORS_COLUMNS(onClick, renderActions)}
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
      <Popup isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
}
