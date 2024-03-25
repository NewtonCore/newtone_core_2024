import React from "react";
import { MAN_APPLYING_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";

const LeftComponent = ({ getStarted }) => {
  // var w = window.innerWidth;

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h5 className="display-6  mt-4">Requirements to work with us</h5>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Expertise in chosen skills:</h6>

        <p className="fw-light">
          We hire the top 1% in each programming language
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Perform excellently in all tests:</h6>
        <p className="fw-light">
          Tests are tailored to fit your chosen skill and seniority level. All
          tests must be passed to be hired.
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">2+ years of experience:</h6>
        <p className="fw-light">
          Entry-level software developers must have at least two years of
          experience with projects to show.
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">Dedicate 40+ hours every week:</h6>
        <p className="fw-light">
          Every employee is to dedicate at least 40 hours every week, which
          equates to at least 5 hours everyday.
        </p>
      </Fade>
      <Fade bottom>
        <h6 className="mt-4 mb-4">English fluency:</h6>
        <p className="fw-light">
          Developers must be able to communicate in English language.{" "}
        </p>
      </Fade>

      <Fade bottom>
        <h6 className="mt-4 mb-4">
          Communication, Proactiveness and Efficiency
        </h6>
        <p className="fw-light">
          To ensure smooth progress across teams, these qualities are highly
          encouraged.{" "}
        </p>
      </Fade>
    </AppCol>
  );
};

const RightComponent = () => {
  return (
    <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
      {/* APPLICANT_SVG */}
      <AppSVG
        style={{ height: "auto", width: "auto" }}
        data={MAN_APPLYING_SVG}
      />
    </AppCol>
  );
};

function RequirementsToWork() {
  return (
    <>
      <AppRow id="box-main2">
        <RightComponent></RightComponent>

        <LeftComponent></LeftComponent>
      </AppRow>
    </>
  );
}

export default RequirementsToWork;
