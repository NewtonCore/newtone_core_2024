import React from "react";
import { SERVICES_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";
import styles from "../ApplicantHome.module.css"
const LeftComponent = ({ getStarted }) => {
  // var w = window.innerWidth;

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
      <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>Services We Provide</h5>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Job Matching:</h6>
        <p className="fw-light">
          Our job matching service uses advanced algorithms to match job seekers
          with job listings based on their skills, experience, and job
          preferences. This saves job seekers time and effort in their job
          search and helps them find the perfect career match.
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Job Listing:</h6>

        <p className="fw-light">
          Our job listing service helps companies reach the right candidates by
          only showing their job listings to job seekers who are specifically
          qualified for the job. This saves companies time and effort in the
          hiring process and helps them find the perfect candidate for their
          company.
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Interview Management:</h6>

        <p className="fw-light">
          We can help you set up interviews for the candidates you select.
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Career Resources:</h6>

        <p className="fw-light">
          We provide job seekers with resources and information to help them
          navigate the job market and find the perfect career match.
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

function Services() {
  return (
    <>
      <AppRow id="box-main2">
        <RightComponent></RightComponent>

        <LeftComponent></LeftComponent>
      </AppRow>
    </>
  );
}

export default Services;
