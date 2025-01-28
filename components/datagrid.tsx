import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { user } from "../App";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "username",
    width: 150,
    editable: true,
  }
];

interface interfaceProps {
  rows: user[] | []
}
export default function DataGridDemo({ rows }: interfaceProps) {
  return (
    <Box sx={{ height: 400, width: "100%", marginTop: '5px' }}>
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
        disableRowSelectionOnClick
      />
    </Box>
  );
}
