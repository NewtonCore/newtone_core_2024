import React from "react";
import Fade from "react-reveal/Fade";
import { CAREER_GROWTH_SVG } from "../../../../constants/AppSvg";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppJumbotron from "../../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppSVG from "../../../organisms/AppSVG/AppSVG";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import "../../../../homepages.css";
import GetStartedBtnHomePages from "../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import { DUMMY_DATA } from "../../../../constants/dummyData/dummyData";
import SkillsTile from "../../../organisms/SkillsTile/SkillsTile";
// import test from "./skills/"
const LeftComponent = ({ getStarted }) => {
  // var w = window.innerWidth;

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h1 className="display-3 fw-bolder">
          {/* {w} */}
          <br></br>
          List of Skills
        </h1>
      </Fade>

      <GetStartedBtnHomePages />
    </AppCol>
  );
};

const RightComponent = () => {
  return (
    <AppCol id="box22" md_size="6" size="6" lg_size="6" sm_size="6">
      <AppSVG style={{ width: "100%" }} data={CAREER_GROWTH_SVG} />
    </AppCol>
  );
};

function ListOfSkills() {
  return (
    <div>
      <HomePageLayout />
      <AppJumbotron>
        <AppRow id="box-main">
          <LeftComponent></LeftComponent>
          <RightComponent></RightComponent>
        </AppRow>
      </AppJumbotron>

      <AppContainerFluid>
        {/* <GuaranteeDiv /> */}

        <AppRow>
          {DUMMY_DATA.skills.slice(0, 12).map((skill) => {
            return (
              <>
                <AppCol
                  size={2}
                  sm_size={2}
                  md_size={2}
                  xs_size={4}
                  lg_size={2}
                >
                  <SkillsTile
                    image={skill.image}
                    text={skill.name}
                  ></SkillsTile>
                </AppCol>
              </>
            );
          })}
        </AppRow>
        <GetStartedBottom
          text="We'll locate the ideal developer for you in days, not weeks, if you provide us with the abilities you require and a detailed job description."
          heading="Work and Build Awesome Softwares"
        />
      </AppContainerFluid>

      <AppPreFooter />
      <HomePageFoooter />
    </div>
  );
}

export default ListOfSkills;
