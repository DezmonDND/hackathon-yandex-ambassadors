import "../Tabs/Tabs.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Layout from "../../layouts/default"

const columns = [
  {
    field: 'userStatus',
    headerName: 'Статус',
    width: 140,
    editable: true,
  },
  { field: 'id', headerName: 'ID', width: 90, type: 'number', sortable: false },
  {
    field: 'userDate',
    headerName: ' Дата',
    width: 120,
    editable: true,
  },
  {
    field: 'userName',
    headerName: 'ФИО',
    width: 220,
    editable: true,
  },
  {
    field: 'userTelegram',
    headerName: 'Telegram',
    sortable: false,
    width: 200
  },
  {
    field: 'userPromocode',
    headerName: 'Промокод',
    sortable: false,
    width: 220
  },
];
export default function Promocodes({
  rowData
}) {
  // Преобразуем ключ userId в id для каждого объекта в массиве rowData
  const rows = rowData.map(row => ({
    ...row,
    id: row.userId
  }));

  return (
    <Layout>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          sx={{
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: '#F9FAFB',
              minWidth: '100%'
            },
            '& .MuiDataGrid-sortIcon': {
              backgroundImage: 'url("../../images/sort_icon.svg")',
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </Layout>
  );
}

