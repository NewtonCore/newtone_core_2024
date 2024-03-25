import { LinearProgress } from "@mui/material";
import React from "react";
import "./WhiteBgDiv.css";

function WhiteBgDiv({ children, loading }) {
  return (
   <>
      {loading && <LinearProgress />}

    <div id="white_bg">

      {children}
    </div>
   </>
  );
}

export default WhiteBgDiv;
