import React from "react";
import { DEVELOPER_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";
import AppJumbotron from "../../../../organisms/AppJumbotron/AppJumbotron";
import GetStartedBtnHomePages from "../../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import AppRow from "../../../../organisms/AppRow/AppRow";

const LeftComponent = ({ getStarted, handleGetStarted }) => {

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h1 className="display-3 fw-bolder">
          {/* {w} */}
          <br></br>
          We help to scale tech industries

          {/* Derive joy by building <br></br> that software to <br></br> transform
          lives.{" "} */}
        </h1>
      </Fade>

      <Fade bottom>
        <p className="fs-6">
        Newtoncore has risen to the challenge of this time to provide an unmatched solution to outsourcing talents. We pride ourselves in our AI-driven system and our customer-centric model that optimizes both company and talent needs.

        </p>
      </Fade>

      <GetStartedBtnHomePages />
    </AppCol>
  );
};

const RightComponent = () => {
  return (
    <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
      {/* APPLICANT_SVG */}
      <AppSVG style={{height:"auto",width:"auto"}} data={DEVELOPER_SVG} />
    </AppCol>
  );
};

function AboutLanding2() {
  return (
    <AppJumbotron>
    <AppRow id="box-main">
      <LeftComponent></LeftComponent>
      <RightComponent></RightComponent>
    </AppRow>
  </AppJumbotron>
  );
}

export default AboutLanding2;
