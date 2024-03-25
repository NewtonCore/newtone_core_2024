import React from "react";
import { SERVICES_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";

const LeftComponent = ({ getStarted }) => {
  // var w = window.innerWidth;

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h5 className="display-6  mt-4">For companies</h5>
      </Fade>

      <Fade bottom>
        <p className="fw-light">
          Hire thoroughly screened developers to solve your engineering problems
          within expected working days. Manage your team remotely with the right
          resources and expect the best results
        </p>
      </Fade>
    </AppCol>
  );
};

const RightComponent = () => {
  return (
    <AppCol id="box22" md_size="6" size="6" lg_size="6" sm_size="6">
      {/* APPLICANT_SVG */}
      <AppSVG data={SERVICES_SVG} />
    </AppCol>
  );
};

function ForCompanies() {
  return (
    <>
      <AppRow id="box-main2">
        <RightComponent></RightComponent>

        <LeftComponent></LeftComponent>
      </AppRow>
    </>
  );
}

export default ForCompanies;
