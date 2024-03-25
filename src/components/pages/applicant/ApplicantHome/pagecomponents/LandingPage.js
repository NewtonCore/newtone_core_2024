import React from "react";
import { HOMEPAGE_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppJumbotron from "../../../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";
import GetStartedBtnHomePages from "../../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";

const LeftComponent = ({styles}) => {
  return (
    <AppCol className={styles.box} md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h1 className="display-3 fw-bolder animate__animated animate__fadeIn">
          {/* Newton’s all-in-
          <br></br>
          one AI-powered
          <br></br>
          job platform */}

          Newton International Inc.: 
          <br></br>
          
          The Future of Hiring for Developers
        </h1>
      </Fade>

      <Fade bottom>
        <p className="fs-6">
        Are you tired of the lengthy and tedious hiring process for software developers?

          {/* Our AI-centric platform matches you quickly to the companies that need
          your skills. */}
        </p>

        <p className="fs-6">
        Look no further! Newton International Inc. is here to revolutionize the way companies hire top tech talent. We serve as the ultimate middleman, connecting software developers with forward-thinking companies, streamlining the hiring process like never before.
{/* 
          Recruit the best software developers at Newton. We are here to manage
          your team needs. */}
        </p>
      </Fade>

      <GetStartedBtnHomePages />
    </AppCol>
  );
};

const RightComponent = ({ styles }) => {
  return (
    <AppCol id="box2222" md_size="6" size="6" lg_size="6" sm_size="6">
      <AppSVG style={{height:"auto",width:"auto"}} data={HOMEPAGE_SVG} />
    </AppCol>
  );
};

function LandingPage({ styles, getStartedFn }) {
  return (
    <>
      <AppJumbotron>
        <AppRow className={styles.box_main}>
          <LeftComponent
            getStartedFn={getStartedFn}
            styles={styles}
          ></LeftComponent>
          <RightComponent styles={styles}></RightComponent>
        </AppRow>
      </AppJumbotron>
    </>
  );
}

export default LandingPage;
