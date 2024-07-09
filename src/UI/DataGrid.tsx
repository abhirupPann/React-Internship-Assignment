import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

// Define the interface with the correct property casing
interface Row {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Define the columns
const columns: GridColDef[] = [
  { field: 'userId', headerName: 'User ID', width: 90 },
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Body',
    width: 150,
    editable: true,
  },
];

// Define the props interface
interface DataGridDemoProps {
  rows: Row[];
}

// Define the component with the props interface
const DataGridDemo: React.FC<DataGridDemoProps> = ({ rows }) => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default DataGridDemo;
