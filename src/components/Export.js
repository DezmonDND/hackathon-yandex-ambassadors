import { MenuItem } from "@mui/material";
import * as XLSX from "xlsx";
import * as React from "react";
import {
  useGridApiContext,
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
} from "@mui/x-data-grid";

export function ExportMenuItem({ config, hideMenu }) {
  const apiRef = useGridApiContext();

  function handleExport() {
    const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
    const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

    // Получение выбранных строк
    const selectedRows = filteredSortedRowIds.filter((id) =>
      apiRef.current.isRowSelected(id)
    );

    // Фильтрация данных для выбранных строк
    const rows = selectedRows.map((id) => {
      const row = {};
      visibleColumnsField.forEach((field) => {
        if (field !== '__check__') {
          row[field] = apiRef.current.getCellParams(id, field).value;
        }
      });
      return row;
    });
    // Создание документа Excel
    const worksheet = XLSX.utils.json_to_sheet(rows);
    XLSX.utils.sheet_add_aoa(worksheet, [[...config.columnNames]], {
      origin: "A1",
    });

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, config.sheetName);
    XLSX.writeFile(workbook, config.fileName, { compression: true });
  }

  return (
    <MenuItem
      onClick={() => {
        handleExport();
        hideMenu?.();
      }}
    >
      Скачать в Excel
    </MenuItem>
  );
}
