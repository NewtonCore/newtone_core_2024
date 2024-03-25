import React from "react";
import { useDispatch } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppJumbotron from "../../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../../organisms/AppRow/AppRow";
import GetStartedBtnHomePages from "../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";

const LeftComponent = ({ getStarted }) => {
  // var w = window.innerWidth;
  const dispatch = useDispatch();

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <h1 className="display-3 fw-bolder animate__animated animate__fadeIn">
        {/* {w} */}
        <br></br>
        List of Skills
      </h1>
      <p className="fs-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
        condimentum auctor fermentum tempor dolor posuere morbi. Tristique
        feugiat netus volutpat facilisis magna posuere.
      </p>
      <GetStartedBtnHomePages />
      
    </AppCol>
  );
};

const RightComponent = () => {
  return (
    <AppCol id="box22" md_size="6" size="6" lg_size="6" sm_size="6">
      {/* APPLICANT_SVG */}
      <AppSVG data={APPLICANT_SVG} />
    </AppCol>
  );
};

function ApplicantSkills() {
  return (
    <div>
      <HomePageLayout />
      <AppJumbotron>
        <AppRow id="box-main">
          <LeftComponent></LeftComponent>
          <RightComponent></RightComponent>
        </AppRow>
      </AppJumbotron>
    </div>
  );
}

export default ApplicantSkills;
