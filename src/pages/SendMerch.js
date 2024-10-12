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
import { useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import { newBaseCheckbox } from "../components/NewBaseCheckbox/NewBaseCheckbox";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Toolbar from "../components/Toolbar/Toolbar";
import { CustomPopupCheckboxes } from "../components/CustomPopupCheckboxes/CustomPopupCheckboxes";
import { apiTables } from "../utils/apiTables";
import Popup from "../components/Popup/Popup";
import { SEND_MERCH_ROWS } from "../mocks/rows";
import { SEND_MERCH_COLUMNS } from "../mocks/columns";

export default function SendMerch({
  rowModesModel,
  setRowModesModel,
  checkboxSelection,
  selectionModel,
  setSelectionModel,
  showExportButton,
  handleRowModesModelChange,
  processRowUpdate,
  handleShowExportButton,
  handleHideButtons,
  showDeleteButton,
  handleShowDeleteButton,
  isOpen,
  onClose,
  onClick,
  id,
}) {
  // const [rows, setRows] = useState([]);
  const [rows, setRows] = useState(SEND_MERCH_ROWS);

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

  // function deleteRows() {
  //   const ids = rows
  //     .filter((r) => selectionModel.includes(r.id))
  //     .map(({ id }) => id);
  //   console.log(ids);

  //   ids.forEach((id) => {
  //     apiTables
  //       .deleteRowSendMerch(id)
  //       .then((res) => {
  //         console.log(res);
  //         setRows((rows) => rows.filter((r) => !selectionModel.includes(r.id)));
  //       })
  //       .catch((e) => console.log(`Error! ${e}`));
  //   });
  // }

  useEffect(() => {
    apiTables
      .getSendMerch()
      .then((merch) => {
        setRows(merch);
      })
      .catch((e) => console.log(`Error! ${e}`));
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
                setRows,
                setRowModesModel,
              },
            }}
            localeText={{
              toolbarExport: "Экспортировать",
            }}
            rows={rows}
            columns={SEND_MERCH_COLUMNS(onClick)}
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
      <Popup isOpen={isOpen} onClose={onClose} id={id} />
    </>
  );
}
