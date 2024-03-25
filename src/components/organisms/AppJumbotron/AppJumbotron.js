import React from "react";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";

function AppJumbotron({ children }) {
  return (
    <div className="">
      <AppContainerFluid>{children}</AppContainerFluid>
    </div>
  );
}

export default AppJumbotron;
