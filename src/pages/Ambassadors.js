import Box from "@mui/material/Box";
import Layout from "../layouts/default";
import {
  DataGrid,
  GridColumnMenu,
  GridRowModes,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid";
import {
  CheckboxSelectionButton,
  ClearButton,
  DeleteButton,
  MinusButton,
  PlusButton,
  SettingsButton,
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
  CloseIconButton,
} from "../components/Buttons/Buttons";
import { AMBASSADORS_COLUMNS } from "../mocks/users-data";
import React, { forwardRef, useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import { Menu, Checkbox } from "@mui/material";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CheckBoxOutlineBlankOutlinedIcon from "@mui/icons-material/CheckBoxOutlineBlankOutlined";

export default function Ambassadors({ rowData }) {
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

  const MenuButtons = () => {
    const [openColumnsMenu, setOpenColumnsMenu] = useState(false);
    const [columnsMenuAnchorEl, setColumnsMenuAnchorEl] = useState(null);

    return (
      <>
        {!checkboxSelection ? (
          <CheckboxSelectionButton
            onClick={showCheckboxes}
          ></CheckboxSelectionButton>
        ) : (
          <CloseIconButton onClick={showCheckboxes}></CloseIconButton>
        )}
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
        {!checkboxSelection && (
          <PlusButton onClick={handleAddNewRow}></PlusButton>
        )}
        {!checkboxSelection && <MinusButton></MinusButton>}
        {checkboxSelection && <ClearButton onClick={resetRows}> </ClearButton>}
        {checkboxSelection && (
          <DeleteButton onClick={deleteRows}></DeleteButton>
        )}
      </>
    );
  };

  const CustomPopupCheckboxes = (props) => {
    const apiRef = useGridApiContext();

    const [visibleColumns, setVisibleColumns] = useState([]);
    const [columns, setColumns] = useState(apiRef.current.getVisibleColumns());

    useEffect(() => {
      setVisibleColumns(apiRef.current.getVisibleColumns());
    }, [apiRef]);

    return (
      <Menu
        style={{
          top: "7px",
          left: "-130px",
        }}
        id="long-menu"
        anchorEl={props.moreMenuAnchorEl}
        open={props.openColumnsMenu}
        onClose={() => props.setOpenColumnsMenu(!props.openColumnsMenu)}
      >
        {columns.map((column) => {
          column.id = randomId()
          let isVisible = visibleColumns.filter(
            (x) => x.field === column.field
          );
          return (
            <div
              key={column.id}
              style={column.hideable ? {} : { display: "none" }}
            >
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
  };

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
