import { GridRowEditStopReasons } from "@mui/x-data-grid";
import { GridRowModes } from "@mui/x-data-grid";

// Работа со строками
export const handleRowModesModelChange = (
  newRowModesModel,
  setRowModesModel
) => {
  setRowModesModel(newRowModesModel);
};

export const handleRowEditStop = (params, event) => {
  if (params.reason === GridRowEditStopReasons.rowFocusOut) {
    event.defaultMuiPrevented = true;
  }
};

export const processRowUpdate = (newRow, rows, setRows) => {
  const updatedRow = { ...newRow, isNew: false };
  setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
  return updatedRow;
};

export const handleSaveClick = (id, rowModesModel, setRowModesModel) => () => {
  setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
};

export const handleEditClick = (id, rowModesModel, setRowModesModel) => () => {
  setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
};

export const handleCancelClick =
  (id, rows, setRows, rowModesModel, setRowModesModel) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };
