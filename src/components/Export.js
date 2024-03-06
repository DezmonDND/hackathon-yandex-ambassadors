import { MenuItem } from "@mui/material";
import * as XLSX from "xlsx";
import * as React from "react";
import {
  gridFilteredSortedRowIdsSelector,
  gridVisibleColumnFieldsSelector,
  useGridApiContext,
} from "@mui/x-data-grid";

const config = {
    columnNames: [
      'Статус',
      'ID',
      'Дата',
      'ФИО',
      'Telegram',
      'Промокод',
    ],
    keys: ['userStatus', 'id', 'userDate', 'userName', 'userTelegram', 'userPromocode'],
    fileName: 'data.xlsx',
    sheetName: 'Promocodes Info',
  };

function getExcelData(apiRef) {
  const filteredSortedRowIds = gridFilteredSortedRowIdsSelector(apiRef);
  const visibleColumnsField = gridVisibleColumnFieldsSelector(apiRef);

  const data = filteredSortedRowIds.map((id) => {
    const row = {};
    visibleColumnsField.forEach((field) => {
      row[field] = apiRef.current.getCellParams(id, field).value;
    });
    return row;
  });

  return data;
}

function handleExport(apiRef) {
  const data = getExcelData(apiRef);

  const rows = data.map((row) => {
    const mRow = {};
    for (const key of config.keys) {
      mRow[key] = row[key];
    }
    return mRow;
  });

  const worksheet = XLSX.utils.json_to_sheet(rows);
  XLSX.utils.sheet_add_aoa(worksheet, [[...config.columnNames]], {
    origin: "A1",
  });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, config.sheetName);
  XLSX.writeFile(workbook, config.fileName, { compression: true });
}

export function ExportMenuItem(props) {
  const apiRef = useGridApiContext();
  const { hideMenu } = props;

  return (
    <MenuItem
      onClick={() => {
        handleExport(apiRef);
        hideMenu?.();
      }}
    >
      Скачать в Excel
    </MenuItem>
  );
}
