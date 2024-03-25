import React from "react";
import "./AppContainerFluid.css";

function AppContainerFluid(props) {
  return (
    <div id={props.id} style={props.style} className={`container-xl ${props.className}`}>

      {props.children}
    </div>
  );
}

export default AppContainerFluid;
