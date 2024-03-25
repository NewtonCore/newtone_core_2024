import React from "react";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import "./SecondaryBackground.css";

function SecondaryBackground({ children, style, className }) {
  return (
    <div id="secondary_bg" style={style} className={className}>
      <AppContainerFluid>
          <>{children}</>
      </AppContainerFluid>
    </div>
  );
}

export default SecondaryBackground;
