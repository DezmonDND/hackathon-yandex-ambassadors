import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridRowModes,
  GridToolbarContainer,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  ClearButton,
  DeleteButton,
  MinusButton,
  PencilButton,
  PlusButton,
  SettingsButton,
  SortButton,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from "../components/Buttons/Buttons";
import { AMBASSADORS_COLUMNS } from "../mocks/users-data";
import { useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import { Menu, Checkbox } from "@mui/material";

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
    const [openColumnsMenu, setOpenColumnsMenu] = useState(false);
    const [columnsMenuAnchorEl, setColumnsMenuAnchorEl] = useState(null);

    return (
      <>
        <CheckboxSelectionButton
          onClick={showCheckboxes}
        ></CheckboxSelectionButton>
        <SortButton></SortButton>
        <SettingsButton
          onClick={(event) => {
            setOpenColumnsMenu(!openColumnsMenu);
            setColumnsMenuAnchorEl(event.currentTarget);
          }}
        ></SettingsButton>
        <CustomPopupCheckboxes
          moreMenuAnchorEl={columnsMenuAnchorEl}
          openColumnsMenu={openColumnsMenu}
          setOpenColumnsMenu={(value) => setOpenColumnsMenu(value)}
        />
        <PencilButton></PencilButton>
        <PlusButton onClick={handleAddNewRow}></PlusButton>
        <MinusButton></MinusButton>
        <ClearButton onClick={resetRows}> </ClearButton>
        <DeleteButton onClick={deleteRows}></DeleteButton>
      </>
    );
  }

  function CustomPopupCheckboxes(props) {
    const apiRef = useGridApiContext();

    const [visibleColumns, setVisibleColumns] = useState([]);
    const [columns, setColumns] = useState(apiRef.current.getVisibleColumns());

    useEffect(() => {
      setVisibleColumns(apiRef.current.getVisibleColumns());
    }, [apiRef]);

    return (
      <Menu
        id="long-menu"
        anchorEl={props.moreMenuAnchorEl}
        open={props.openColumnsMenu}
        onClose={() => props.setOpenColumnsMenu(!props.openColumnsMenu)}
      >
        {columns.map((column) => {
          let isVisible = visibleColumns.filter(
            (x) => x.field === column.field
          );
          return (
            <div style={column.hideable ? {} : { display: "none" }}>
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon />}
                checkedIcon={<CheckBoxIcon />}
                checked={isVisible.length !== 0 ? true : false}
                onChange={(e) => {
                  apiRef.current.setColumnVisibility(
                    column.field,
                    e.target.checked
                  );
                  setVisibleColumns(apiRef.current.getVisibleColumns());
                }}
              />
              {column.headerName}
            </div>
          );
        })}
      </Menu>
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
      <GridToolbarContainer sx={{ margin: "24px 0 16px 4px" }}>
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
            maxWidth: "667px",
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
          slots={{ columnMenu: CustomColumnMenu, toolbar: CustomToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
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
          }}
          rowModesModel={rowModesModel}
          checkboxSelection={checkboxSelection}
          rowSelectionModel={selectionModel}
          onRowSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          disableRowSelectionOnClick
        />
      </Box>
    </Layout>
  );
}
