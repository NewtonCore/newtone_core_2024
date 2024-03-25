import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import React from "react";

function AppDataGrid({ rows = [], columns = {},pageSize=10 }) {

  
  return (
    <div>
      <Box sx={{ height: 500, width: "100%" }}>
        <DataGrid
          getEstimatedRowHeight={() => 400}
        // getRowHeight={() => 'auto'}
          rowHeight={100}
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[pageSize]}
          disableSelectionOnClick
          disableColumnSelector
          disableDensitySelector
          experimentalFeatures={{ newEditingApi: true }}
          // onCellClick={e => console.log(e)}
        />
      </Box>
    </div>
  );
}

export default AppDataGrid;
