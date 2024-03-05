import { useGridApiContext } from "@mui/x-data-grid";
import {
  CheckBoxIcon,
  CheckBoxOutlineBlankIcon,
} from "../components/Buttons/Buttons";
import React, { useEffect, useState } from "react";
import { randomId } from "@mui/x-data-grid-generator";
import { Menu, Checkbox } from "@mui/material";

export const CustomPopupCheckboxes = (props) => {
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
        column.id = randomId();
        let isVisible = visibleColumns.filter((x) => x.field === column.field);
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
