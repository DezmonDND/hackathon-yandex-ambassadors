import { useEffect, useState } from "react";
import {
  gridVisibleColumnFieldsSelector,
  useGridApiContext
} from "@mui/x-data-grid";

function useExportXSLX(columns) {
  const apiRef = useGridApiContext();
  const watch = gridVisibleColumnFieldsSelector(apiRef);


  const [columnsKey, setColumnsKey] = useState([]);
  const [columnsNames, setColumnsNames] = useState([]);

  useEffect(() => {
    const columnsHeader = gridVisibleColumnFieldsSelector(apiRef);
    setColumnsKey(columnsHeader.filter(item => item !== '__check__'));
  }, [apiRef, watch]);

  useEffect(() => {
    if (columns) {
      const filteredColumns = columns.filter(column => columnsKey.includes(column.field));
      setColumnsNames(filteredColumns.map(column => column.headerName))
    }
  }, [columns, columnsKey]);

  const config = {
    columnNames: columnsNames,
    keys: columnsKey,
    fileName: 'data.xlsx',
    sheetName: 'Info xlsx',
  };

  return config;
}

export default useExportXSLX;
