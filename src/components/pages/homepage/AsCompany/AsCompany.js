import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useDispatch } from "react-redux";
import { toggleLoginAs } from "../../../../app-redux/features/Auth/authSlice";
import {
  AS_COMPANY_SVG,
  RECRUITING_SVG,
  SEARCHING_TALENT_SVG,
} from "../../../../constants/AppSvg";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppJumbotron from "../../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppSVG from "../../../organisms/AppSVG/AppSVG";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
// import "../../../../homepages.css";
import GuaranteeDiv from "./pagecomponents/Guarantee";
import GetStartedBtnHomePages from "../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import WhyWorkWithNewton from "./pagecomponents/WhyWorkWithNewton";
import PostLanding from "./pagecomponents/PostLanding";
import styles from "./AsCompany.module.css";
import MiniLandingPage from "../../applicant/ApplicantHome/pagecomponents/MiniLandingPage";
import JoinUs from "./pagecomponents/JoinUs";
const LeftComponent = () => {
  // var w = window.innerWidth;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoginAs(1));
  }, []);

  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h1 className="display-3 fw-bolder">
          {/* {w} */}
          <br></br>
          Welcome to Newton International: Unleash the Power of Exceptional
          Software Developers
        </h1>
      </Fade>
      <Fade bottom>
        <p className="fs-5">
          Igniting Innovation: Your Pathway to Elite Software Developers with
          Newton International
        </p>

        <p className="fs-6">
          At Newton International, we believe in the transformative potential of
          technology, and we understand that exceptional software developers are
          at the heart of innovation. Our mission is to bridge the gap between
          extraordinary software developers and forward-thinking companies,
          creating a synergy that propels technological advancements to new
          heights.
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
      <AppSVG style={{ height: "auto", width: "auto" }} data={AS_COMPANY_SVG} />
    </AppCol>
  );
};

function AsCompany() {
  return (
    <div>
      <HomePageLayout />
      <AppJumbotron>
        <AppRow id="box-main">
          <LeftComponent></LeftComponent>
          <RightComponent></RightComponent>
        </AppRow>
      </AppJumbotron>
      <PostLanding styles={styles} />
      <AppContainerFluid>
        <MiniLandingPage
          image={RECRUITING_SVG}
          text="Newton International is a pioneering platform that specializes in recruiting top-tier software developers from around the world. With a rigorous selection process that identifies only the most exceptional talent, we connect these developers with companies that are ready to innovate, disrupt, and lead in their respective industries"
          heading="Who We Are"
        ></MiniLandingPage>
        <MiniLandingPage
          direction="rtl"
          image={SEARCHING_TALENT_SVG}
          heading="Who We Are"
        >
        <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>Our Approach</h5>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Quality Above All:</h6>
            <p className="fw-light">
              We pride ourselves on the quality of our developers. Our selection
              process is comprehensive and meticulous, ensuring that every
              developer in our network possesses not only technical excellence
              but also a deep understanding of industry best practices and the
              ability to adapt to new challenges seamlessly.
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Global Talent Network:</h6>
            <p className="fw-light">
              Our talent network spans the globe, bringing together diverse
              perspectives and a wealth of experience. Whether you are looking
              for experts in web development, mobile app creation, AI and
              machine learning, or any other specialized field, we have the
              right developer for your needs.
            </p>
          </Fade>
          <Fade bottom>
            <h6 className="mt-4 mb-3">Seamless Integration:</h6>
            <p className="fw-light">
              When you hire a developer through Newton International, you're not
              just getting a new team member; you're gaining a partner in
              innovation. Our developers integrate seamlessly into your
              workflows, contributing their expertise and collaborating with
              your in-house teams to achieve remarkable results.{" "}
            </p>
          </Fade>
        </MiniLandingPage>
      </AppContainerFluid>

      <AppContainerFluid>
        <GuaranteeDiv />
        <WhyWorkWithNewton />
      </AppContainerFluid>

      <JoinUs styles={styles}></JoinUs>
      <AppContainerFluid>
        <GetStartedBottom
          text="We'll locate the ideal developer for you in days, not weeks, if you provide us with the abilities you require and a detailed job description."
          heading="Employ and oversee remote devs."
        />
      </AppContainerFluid>

      <AppPreFooter />
      <HomePageFoooter />
    </div>
  );
}

export default AsCompany;
