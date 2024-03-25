import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";

import { useDispatch } from "react-redux";
import { toggleLoginForm } from "../../../../app-redux/features/appData/appDataSlice";
import { toggleLoginAs } from "../../../../app-redux/features/Auth/authSlice";
import {
  APPLICANT_SVG,
  CONTRACT_AGREE_SVG,
  GREET_SVG,
  MAN_APPLYING_SVG,
  WINNING_TALENTS_SVG,
} from "../../../../constants/AppSvg";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppJumbotron from "../../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppSVG from "../../../organisms/AppSVG/AppSVG";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import GetStartedBtnHomePages from "../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import JobsDiv from "./pagecomponents/JobsDiv";
import SkillsDiv from "./pagecomponents/SkillsDiv";
import WhyWorkWithUs from "./pagecomponents/WhyWorkWithUs";
import RequirementsToWork from "./pagecomponents/RequirementsToWork";
import MiniLandingPage from "../../applicant/ApplicantHome/pagecomponents/MiniLandingPage";
// import "../../../../homepages.css";
import styles from "./AsTalent.module.css";
import PostLanding from "./pagecomponents/PostLanding";
import JoinNewton from "./pagecomponents/JoinNewton";
import { Check } from "akar-icons";

const LeftComponent = () => {
  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h1 className="display-3 fw-bolder">
          {/* {w} */}
          <br></br>
          Elevate Your Software Development Career with Newton International
          {/* Derive joy by building <br></br> that software to <br></br> transform
          lives.{" "} */}
        </h1>
      </Fade>

      <Fade bottom>
        <p className="fs-6">
          Your Gateway to Success
          <br></br>
          At Newton International, we understand that as a software developer,
          your skills are in high demand, and your potential is limitless.
          That's why we've created a platform that empowers you to take control
          of your career and reach new heights of success.
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
      <AppSVG style={{ height: "auto", width: "auto" }} data={APPLICANT_SVG} />
    </AppCol>
  );
};

function AsTalent() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleLoginAs(2));
  }, []);

  const handleGetStarted = () => {
    dispatch(toggleLoginForm());
  };
  return (
    <div>
      <HomePageLayout />
      <AppJumbotron>
        <AppRow id="box-main">
          <LeftComponent handleGetStarted={handleGetStarted}></LeftComponent>
          <RightComponent></RightComponent>
        </AppRow>
      </AppJumbotron>
      <PostLanding styles={styles} />

      <AppContainerFluid>
        <MiniLandingPage heading="Why" image={WINNING_TALENTS_SVG}>
          <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>
            Why Join Newton International?
          </h5>
          <Fade bottom>
            <h6 className="mt-4 mb-3">Unparalleled Opportunities </h6>

            <p className="fw-light">
              When you become a part of the Newton International network, you
              gain access to a world of unparalleled opportunities. We have
              established partnerships with cutting-edge companies across
              various industries, offering you the chance to work on exciting
              projects that push the boundaries of technology.
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Handpicked Excellence</h6>

            <p className="fw-light">
              Our selection process is rigorous and thorough, ensuring that
              you're part of an elite community of developers. We recognize your
              skills, experience, and dedication, and we match you with
              companies that truly value your expertise.
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Flexibility and Variety</h6>

            <p className="fw-light">
              Whether you're seeking the stability of full-time employment or
              the flexibility of contract work, Newton International has you
              covered. Choose the employment type that aligns with your
              lifestyle and goals. We offer both contract and full-time
              opportunities, allowing you to shape your career according to your
              preferences.{" "}
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Global Exposure </h6>

            <p className="fw-light">
              By joining Newton International, you're not just joining a
              platform; you're becoming a part of a global network. Collaborate
              with professionals from different cultures and backgrounds,
              gaining insights and experiences that enrich your skill set and
              broaden your horizons.
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Professional Suppor</h6>

            <p className="fw-light">
              Our commitment to your success doesn't end at job placement. We
              provide ongoing support, career guidance, and resources to help
              you thrive in your role. We're invested in your journey and are
              here to ensure you have everything you need to excel.
            </p>
          </Fade>
        </MiniLandingPage>
      </AppContainerFluid>
      <AppContainerFluid>
        <MiniLandingPage
          direction="rtl"
          heading="Why"
          image={CONTRACT_AGREE_SVG}
        >
          <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>
            Get employed with Newton International
          </h5>
          <Fade bottom>
            <h6 className="mt-4 mb-3">Contract Employment</h6>

            <p className="fw-light">
              If you're drawn to the excitement of diverse projects and the
              ability to manage your own schedule, contract employment might be
              the perfect fit for you. Dive into unique challenges, expand your
              portfolio, and maintain a healthy work-life balance.
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-3">Full-Time Employment</h6>

            <p className="fw-light">
              For those seeking stability and a deep connection with a company,
              full-time employment offers the opportunity to become an integral
              part of a team. Contribute to long-term projects, build lasting
              relationships, and enjoy comprehensive benefits.
            </p>
          </Fade>
        </MiniLandingPage>
      </AppContainerFluid>

      <AppContainerFluid>
        <JobsDiv />
        <SkillsDiv />
        <WhyWorkWithUs />

        <MiniLandingPage image={GREET_SVG} direction="ltr">
          <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>
            Why you should work with us:{" "}
          </h5>
          <p>
            <Check /> 100% remote: Work with a limitless team from anywhere in
            the world.
          </p>
          <p>
            <Check /> Full and attractive compensations: Get paid with an
            higher-than U.S standard minimum wage every hour.
          </p>
          <p>
            <Check />
            Expert guided CV reviews: We have experts to review your C.V so as
            to make your skill marketable.
          </p>

          <GetStartedBtnHomePages />
        </MiniLandingPage>


        <MiniLandingPage image={MAN_APPLYING_SVG} direction="rtl">
          <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>
            Requirements to work with us{" "}
          </h5>
          <Fade bottom>
            <h6 className="mt-4 mb-4">Expertise in chosen skills:</h6>

            <p className="fw-light">
              We hire the top 1% in each programming language
            </p>
          </Fade>

          <Fade bottom>
            <h6 className="mt-4 mb-4">Perform excellently in all tests:</h6>
            <p className="fw-light">
              Tests are tailored to fit your chosen skill and seniority level.
              All tests must be passed to be hired.
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

        </MiniLandingPage>
      </AppContainerFluid>
      <JoinNewton styles={styles} />

      <AppContainerFluid>
        <GetStartedBottom
          text=""
          heading="Do not waste any more time. sign up and get started"
        />
      </AppContainerFluid>

      <AppPreFooter />
      <HomePageFoooter />
    </div>
  );
}

export default AsTalent;
