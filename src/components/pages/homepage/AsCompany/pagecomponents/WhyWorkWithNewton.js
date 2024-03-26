import React from "react";
import { MAN_APPLYING_SVG, TALENT_SEARCH_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import styles from "../AsCompany.module.css"

const LeftComponent = ({ getStarted }) => {

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
      <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>Why Choose Newton International Inc.</h5>
      </Fade>

      {DUMMY_DATA.whyChooseNewton.map((data) => {
        return (
          <Fade key={data.id} bottom>
            <h6 className="mt-4 mb-4">{data.title}</h6>

            <p className="fw-light">{data.desc}</p>
          </Fade>
        );
      })}
    </AppCol>
  );
};

const RightComponent = () => {
  return (
    <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
      {/* APPLICANT_SVG */}
      <AppSVG
        style={{ height: "auto", width: "auto" }}
        data={TALENT_SEARCH_SVG}
      />
    </AppCol>
  );
};

function WhyWorkWithNewton() {
  return (
    <>
      <AppRow id="box-main2">
        <RightComponent></RightComponent>

        <LeftComponent></LeftComponent>
      </AppRow>
    </>
  );
}

export default WhyWorkWithNewton;
