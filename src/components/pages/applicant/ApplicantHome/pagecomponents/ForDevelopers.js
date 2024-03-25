import React from "react";
import { SERVICES_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";

const LeftComponent = ({ getStarted }) => {

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h5 className="display-6  mt-4">For Developers</h5>
      </Fade>

      <Fade bottom>
        <p className="fw-light">
          Take the job application problem off your charts by getting AI-related
          jobs through Newton. Apply, pass all vetting tests and you will never
          need to send a job application again.
          <br></br>
          Scale up your career and work anywhere you want!
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

function ForDevelopers() {
  return (
    <>
      <AppRow id="box-main2">
        <LeftComponent></LeftComponent>
        <RightComponent></RightComponent>
      </AppRow>
    </>
  );
}

export default ForDevelopers;
