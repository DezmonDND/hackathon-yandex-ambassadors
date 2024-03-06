import { useEffect, useState } from "react";
import {
  gridVisibleColumnFieldsSelector,
  useGridApiContext,
} from "@mui/x-data-grid";

function useExportXSLX(columns) {
  const apiRef = useGridApiContext();
  const [columnsKey, setColumns] = useState(gridVisibleColumnFieldsSelector(apiRef));
  const columnsHeaderName = columns?.map(column => column.headerName)

  useEffect(() => {
    const columnsHeader = gridVisibleColumnFieldsSelector(apiRef)
    setColumns(columnsHeader.slice(1, columnsHeader.length));
  }, [apiRef]);

  const config = {
    columnNames: columnsHeaderName,
    keys: columnsKey,
    fileName: 'data.xlsx',
    sheetName: 'Info xlsx',
  };

  return config
}
export default useExportXSLX;
