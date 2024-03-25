import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";

function AppBackDrop({ open }) {
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default AppBackDrop;
