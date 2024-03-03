import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridRowModes,
  GridToolbarContainer,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  ClearButton,
  DeleteButton,
  MinusButton,
  PlusButton,
  CloseIconButton,
} from "../components/Buttons/Buttons";
import { SEND_MERCH_COLUMNS } from "../mocks/users-data";
import { useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import { Checkbox } from "@mui/material";

export default function Promocodes({ rowData }) {
  const [rows, setRows] = useState(rowData);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleAddNewRow = () => {
    const id = randomId();
    console.log(id);
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
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));

    // Сохранение строки
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
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

  function MenuButtons() {
    return (
      <>
        {!checkboxSelection ? (
          <CheckboxSelectionButton
            onClick={showCheckboxes}
          ></CheckboxSelectionButton>
        ) : (
          <CloseIconButton onClick={showCheckboxes}></CloseIconButton>
        )}
        {!checkboxSelection && (
          <PlusButton onClick={handleAddNewRow}></PlusButton>
        )}
        {!checkboxSelection && <MinusButton></MinusButton>}
        {checkboxSelection && (
          <DeleteButton onClick={deleteRows}></DeleteButton>
        )}
        {checkboxSelection && <ClearButton onClick={resetRows}></ClearButton>}
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
      <GridToolbarContainer
        sx={{ margin: "24px 32px 16px 4px" }}
        style={{ maxWidth: "1246px", flexWrap: "nowrap" }}
      >
        <GridToolbarQuickFilter
          InputProps={{ disableUnderline: true }}
          placeholder="Поиск"
          sx={{
            ".MuiInputBase-root": {
              backgroundColor: "#f1f1f1",
              borderRadius: "8px",
              paddingLeft: "8px",
              paddingBottom: 0,
            },
          }}
          style={{
            maxWidth: "1156px",
            width: "100%",
          }}
        ></GridToolbarQuickFilter>
        <MenuButtons></MenuButtons>
      </GridToolbarContainer>
    );
  }

  return (
    <Layout>
      <Box sx={{ height: "100%", width: "100%" }}>
        <DataGrid
          hideFooter={true}
          slots={{
            columnMenu: CustomColumnMenu,
            toolbar: CustomToolbar,
            columnUnsortedIcon: UnfoldMoreIcon,
            columnSortedAscendingIcon: ExpandMoreIcon,
            columnSortedDescendingIcon: ExpandLessIcon,
            baseCheckbox: (props) => (
              <Checkbox
                {...props}
                checkedIcon={<CheckBoxOutlinedIcon />}
                icon={
                  <CheckBoxOutlineBlankOutlinedIcon
                    style={{ color: "#DDE0E4" }}
                  />
                }
              />
            ),
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
          }}
          rowModesModel={rowModesModel}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          disableRowSelectionOnClick
          disableColumnMenu
        />
      </Box>
    </Layout>
  );
}
