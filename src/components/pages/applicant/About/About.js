import React from "react";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import "./About.css";
import AboutLanding from "./pagecomponents/AboutLanding";
import OurTeam from "./pagecomponents/OurTeam";
import AboutLanding2 from "./pagecomponents/AboutLanding2";
import MissionVision from "./pagecomponents/MissionVision";
function About() {
  return (
    <div>
      <>
        <HomePageLayout />

        <AboutLanding2 />
        <AppContainerFluid>
          {/* <OurTeam></OurTeam> */}
          <MissionVision/>
          <GetStartedBottom></GetStartedBottom>
        </AppContainerFluid>
      </>
      <AppPreFooter />
      <HomePageFoooter />
    </div>
  );
}

export default About;
