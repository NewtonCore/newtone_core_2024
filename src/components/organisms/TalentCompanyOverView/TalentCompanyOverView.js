import React from "react";
import { TEAL_CIRCLE_SVG } from "../../../constants/AppSvg";
import AppImage from "../AppImage/AppImage";
import classStyle from "./TalentCompanyOverView.module.css";

function TalentCompanyOverView({ label, data }) {
  return (
    <>
      {data !== null && data !== "null" && (
        <div className={classStyle.container}>
          <div className="d-flex flex-row bd-highlight mb-2">
            <div className="p-1 bd-highlight">
              <AppImage
                style={{ height: 15 }}
                image={TEAL_CIRCLE_SVG}
              ></AppImage>
            </div>
            <div className="p-2 bd-highlight">
              <h6>{label}</h6>
              <div className="fw-light">{data}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TalentCompanyOverView;
