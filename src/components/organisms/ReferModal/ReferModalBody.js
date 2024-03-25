import React from "react";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import CopyLinkInput from "../PostJobConfirmation/CopyLinkInput";

function ReferModalBody({ data }) {
  return (
    <AppContainerFluid>
      <center>
        <h5>Refer a friend</h5>
        <span className="text-muted">Refer a friend to Newton Recruitment</span>
      </center>

      <div className="mt-3 mb-3">
        <CopyLinkInput url={process.env.REACT_APP_WEB_URL}></CopyLinkInput>
      </div>
    </AppContainerFluid>
  );
}

export default ReferModalBody;
