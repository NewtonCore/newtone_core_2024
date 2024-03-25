import React from "react";
import AppCol from "../AppCol/AppCol";
import AppRow from "../AppRow/AppRow";
import "./PagesHeader.css";

function PagesHeader({ title = "", RightComponent ,pageTitleLink}) {
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <AppRow>
        <AppCol size={8}>
          <div id="p-header-right">
            <span className="fs-4">{title} </span> {pageTitleLink}
          </div>
        </AppCol>

        <AppCol className="p-0" style={{display:"flex",justifyContent:"flex-end"}} size={4}>
          {RightComponent !== undefined && RightComponent}
          </AppCol>
      </AppRow>
    </div>
  );
}

export default PagesHeader;
