import React, { useEffect, useState } from "react";

import LandingPage from "./pagecomponents/LandingPage";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import WhatWeDo from "./pagecomponents/WhatWeDo";
import Services from "./pagecomponents/Services";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import styles from "./ApplicantHome.module.css"; // Import css modules stylesheet as styles
import { setOfflineLocalStorage } from "../../../../constants/OfflineStorage";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  toggleLoginForm,
  toggleShowCreateAccountForm,
} from "../../../../app-redux/features/appData/appDataSlice";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import PostLanding from "./pagecomponents/PostLanding";
import MiniLandingPage from "./pagecomponents/MiniLandingPage";
import {
  AS_A_DEVELOPER_SVG,
  BRAIN_THINKING_SVG,
  FOR_COMPANIES_SVG,
  HILL_FLAG_SVG,
  STUDENT_STAIRS_SVG,
} from "../../../../constants/AppSvg";
import WhyCompaniesChoose from "./pagecomponents/WhyCompaniesChoose";
import { Check } from "akar-icons";
import Fade from "react-reveal/Fade";
import GetStartedBtnHomePages from "../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import JoinNewton from "./pagecomponents/JoinNewton";

function ApplicantHome() {
  const authData = useSelector((state) => state.auth);
  let { offlineUserToken, loginUserState } = authData;
  const dispatch = useDispatch();

  let { data } = loginUserState;
  // let { user } = data;

  return (
    <div>
      {!loginUserState.loading && !offlineUserToken.loading ? (
        <>
          <HomePageLayout styles={styles} />
          <LandingPage
            getStartedFn={() => dispatch(toggleLoginForm())}
            styles={styles}
          />
          <PostLanding styles={styles} />
          <AppContainerFluid>
            <MiniLandingPage
              image={FOR_COMPANIES_SVG}
              heading="For companies"
              text="Hire thoroughly screened developers to solve your engineering problems within expected working days. Manage your team remotely with the right resources and expect the best results"
              direction="ltr"
            ></MiniLandingPage>

            <MiniLandingPage
              image={AS_A_DEVELOPER_SVG}
              heading="For developers"
              text={`Take the job application problem off your charts by getting AI-related jobs through Newton. Apply, pass all vetting tests and you will never need to send a job application again.\
            Scale up your career and work anywhere you want!`}
              direction="rtl"
            ></MiniLandingPage>
          </AppContainerFluid>
          <WhyCompaniesChoose styles={styles} />
          <AppContainerFluid>
            <MiniLandingPage
              image={STUDENT_STAIRS_SVG}
              heading="Why developers trust us"
              text={`Take the job application problem off your charts by getting AI-related jobs through Newton. Apply, pass all vetting tests and you will never need to send a job application again.\
            Scale up your career and work anywhere you want!`}
              direction="ltr"
            >
             <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>Why developers trust us</h5>
              <p>
                <Check /> Upward career scaling
              </p>
              <p>
                <Check /> No more interviews
              </p>
              <p>
                <Check /> Work anywhere you want
              </p>
            </MiniLandingPage>
          </AppContainerFluid>
          <WhatWeDo styles={styles}></WhatWeDo>

          <AppContainerFluid>
            <MiniLandingPage
              image={HILL_FLAG_SVG}
              heading="Why developers trust us"
              text={`Take the job application problem off your charts by getting AI-related jobs through Newton. Apply, pass all vetting tests and you will never need to send a job application again.\
            Scale up your career and work anywhere you want!`}
              direction="rtl"
            >
           <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>
                Why Choose Newton International Inc?
              </h5>

              <Fade bottom>
                <h6 className="mt-4 mb-3">Job Matching:</h6>
                <p className="fw-light">
                  Our job matching service uses advanced algorithms to match job
                  seekers with job listings based on their skills, experience,
                  and job preferences. This saves job seekers time and effort in
                  their job search and helps them find the perfect career match.
                </p>
              </Fade>

              <Fade bottom>
                <h6 className="mt-4 mb-3">Shorten the Hiring Timeline:</h6>

                <p className="fw-light">
                  At Newton International Inc., we understand that time is of
                  the essence when it comes to finding the perfect fit for your
                  team. Our platform is designed to accelerate the hiring
                  process, saving you valuable time and resources
                </p>
              </Fade>

              <Fade bottom>
                <h6 className="mt-4 mb-3">Access Top Tech Talent:</h6>

                <p className="fw-light">
                  Finding the right software developer can be challenging, but
                  with Newton International Inc., you gain access to a vast pool
                  of skilled and vetted professionals. We rigorously screen all
                  developers on our platform, ensuring you're only connected
                  with the best.
                </p>
              </Fade>

              <Fade bottom>
                <h6 className="mt-4 mb-3">Simplified Recruitment Process: </h6>

                <p className="fw-light">
                  Say goodbye to the mountains of resumes and lengthy email
                  exchanges. Our platform streamlines the entire recruitment
                  process, making it efficient and hassle-free for both
                  employers and candidates.
                </p>
              </Fade>

              <Fade bottom>
                <h6 className="mt-4 mb-3">Real-Time Collaboration: </h6>

                <p className="fw-light">
                  Communication is essential during the hiring process. Our
                  platform facilitates real-time collaboration between employers
                  and candidates, allowing you to assess their skills and
                  cultural fit more effectively.
                </p>
              </Fade>

              <Fade bottom>
                <h6 className="mt-4 mb-3">Transparent and Cost-Effective: </h6>

                <p className="fw-light">
                  No more hidden fees or surprises. Newton International Inc.
                  offers transparent pricing, making hiring affordable for all
                  types of companies, from startups to enterprises.
                </p>
              </Fade>
            </MiniLandingPage>
          </AppContainerFluid>

          <AppContainerFluid id="">
            <Services styles={styles}></Services>

            <MiniLandingPage
              image={BRAIN_THINKING_SVG}
              heading="How It Works"
              text={`Take the job application problem off your charts by getting AI-related jobs through Newton. Apply, pass all vetting tests and you will never need to send a job application again.\
            Scale up your career and work anywhere you want!`}
              direction="rtr"
            >
             <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>How It Works</h5>
              <p>
                <Check /> Sign Up and Create a Profile: Employers and software
                developers can sign up easily, creating their profiles to
                showcase their skills, experience, and preferences.
              </p>
              <p>
                <Check /> Skill-Based Matching: Our advanced algorithm analyzes
                job requirements and candidate profiles to ensure accurate
                skill-based matches.
              </p>
              <p>
                <Check />
                Start Connecting: Once matched, employers can initiate
                conversations with potential candidates instantly.
              </p>
              <p>
                <Check />
                Seamless Interviewing: Newton International Inc. provides tools
                for conducting interviews, technical assessments, and
                evaluations right within the platform.
              </p>

              <p>
                <Check />
                Make the Perfect Hire: With a simplified hiring process, finding
                the perfect candidate becomes a reality
              </p>
              <GetStartedBtnHomePages />
            </MiniLandingPage>
          </AppContainerFluid>

          <JoinNewton styles={styles} />

          <AppContainerFluid>
            <GetStartedBottom></GetStartedBottom>
          </AppContainerFluid>
          <AppPreFooter />

          <HomePageFoooter />
        </>
      ) : (
        <>
          <AppBackDrop open={true}></AppBackDrop>
        </>
      )}
      {/* <button onClick={()=>trigger()}>click me</button> */}

      {/* {JSON.stringify(offlineTokenIsPresent)} */}
    </div>
  );
}

export default ApplicantHome;
