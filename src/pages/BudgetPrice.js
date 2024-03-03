import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  GridToolbarExport,
  GridRowModes,
} from "@mui/x-data-grid";
import {
  ClearButton,
  CheckboxSelectionButton,
  MinusButton,
  PlusButton,
  CloseIconButton,
} from "../components/Buttons/Buttons";
import { BUDGET_PRICE_COLUMN } from "../mocks/users-data";
import { useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import { Checkbox } from "@mui/material";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

export default function Promocodes({ rowData }) {
  const [rows, setRows] = useState(rowData);
  const [checkboxSelection, setCheckboxSelection] = useState(false);
  const [selectionModel, setSelectionModel] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});

  const handleAddNewRow = () => {
    const id = randomId();
    setRows((oldRows) => [
      ...oldRows,
      {
        id,
        userMerchName: "",
        userMerchPrice: "",
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
        {checkboxSelection && <ClearButton onClick={resetRows}> </ClearButton>}
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
        {checkboxSelection && (
          <GridToolbarExport
            startIcon={false}
            sx={{
              color: "#1d6bf3",
              border: "1px solid #1d6bf3",
              minWidth: "132px",
              height: "34px",
              fontWeight: "400",
              padding: "0",
              fontSize: "14px",
              textTransform: "none",
            }}
          />
        )}
      </GridToolbarContainer>
    );
  }

  function newBaseCheckbox(props) {
    return (
      <Checkbox
        {...props}
        checkedIcon={<CheckBoxOutlinedIcon />}
        icon={<CheckBoxOutlineBlankOutlinedIcon style={{ color: "#DDE0E4" }} />}
      />
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
          columns={BUDGET_PRICE_COLUMN}
          sx={{
            ".MuiDataGrid-columnHeaders": {
              backgroundColor: "#F9FAFB",
              minWidth: "100%",
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
