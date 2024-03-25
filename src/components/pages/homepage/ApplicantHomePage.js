import React from "react";
import { useDispatch } from "react-redux";
import { toggleLoginForm } from "../../../app-redux/features/appData/appDataSlice";
import { APPLICANT_SVG } from "../../../constants/AppSvg";
import { DUMMY_DATA } from "../../../constants/dummyData/dummyData";
import AppButton from "../../atoms/AppButton/AppButton";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainer from "../../organisms/AppContainer/AppContainer";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppJumbotron from "../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../organisms/AppRow/AppRow";
import AppSVG from "../../organisms/AppSVG/AppSVG";
import GetStartedBtnHomePages from "../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
import PrimaryCard from "../../organisms/PrimaryCard/PrimaryCard";
import PrimaryContainer from "../../organisms/PrimaryContainer/PrimaryContainer";
import SkillsTile from "../../organisms/SkillsTile/SkillsTile";
import HomePageFoooter from "../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../templates/HomePageLayout/HomePageLayout";
import UserLoginModal from "../../templates/UserLoginModal/UserLoginModal";
// import "./HomePage.css";

const LeftComponent = () => {
    // var w = window.innerWidth;
  return (
    <AppCol id="box" md_size="6" size="6" lg_size="6" sm_size="6">
      <h1 className="display-3 fw-bolder">
        {/* {w} */}
        <br></br>
        Derive joy by building <br></br> that software to <br></br> transform
        lives.
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
    <AppCol id="box22"  md_size="6" size="6" lg_size="6" sm_size="6">
      {/* APPLICANT_SVG */}
      <AppSVG data={APPLICANT_SVG} />
    </AppCol>
  );
};

function ApplicantHomePage() {

  return (
    <div>
      <HomePageLayout />
      {/* <UserLoginModal></UserLoginModal> */}
      <>
        <AppJumbotron>
          <AppRow id="box-main">
            <LeftComponent></LeftComponent>
            <RightComponent></RightComponent>
          </AppRow>
        </AppJumbotron>

        <AppContainerFluid>
          <AppRow id="jobs_div" className="">
            <h1
              className="display-3 text-center mb-5 mt-4"
              style={{ fontSize: 50,fontWeight:600 }}

            >
              We have jobs well suited for you:
            </h1>
            <AppCol omd={0} olg={1} size="10" md_size="12" sm_size={12}>
              <AppRow>
                {DUMMY_DATA.jobdDesc.map((job) => {
                  return (
                    <>
                      <AppCol md_size="6" size="3" lg_size="6" sm_size="6" xs_size="6">
                        <PrimaryCard color={job.color}>
                          <div
                            id="image_div"
                            style={{ backgroundColor: "white" }}
                          >
                            <AppSVG data={job.image} />
                          </div>
                          <center>
                          {job.title}
                          <p className="fs-6 text-center fw-light">{job.desc}</p>
                          </center>
                        </PrimaryCard>
                      </AppCol>
                    </>
                  );
                })}
              </AppRow>
            </AppCol>
          </AppRow>
          
          <AppRow id="skills_div" className="gap-2">
            <h1 className="display-3 fw-bolder mb-4 mt-4" style={{ fontSize: 35 }}>
              Skills
            </h1>
            {DUMMY_DATA.skills.map((skill) => {
              return (
                <>
                  <SkillsTile
                    image={skill.image}
                    text={skill.name}
                  ></SkillsTile>
                </>
              );
            })}
          </AppRow>

          <AppJumbotron>
            <PrimaryContainer color="primary">
              <AppContainer>
                <AppRow>
                  <AppCol size="8" sm_size={12} >
                    <h1
                      className="display-3 fw-bolder mb-4 mt-4"
                      style={{ fontSize: 65 }}
                    >
                      Work and Build <br></br> Awesome Softwares
                    </h1>
                    <small className="">
                      {" "}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra condimentum auctor fermentum tempor dolor posuere
                      morbi. Tristique feugiat netus volutpat facilisis magna
                      posuere.
                    </small>
                  </AppCol>

                  <AppCol size="4" sm_size={12}>
                    <div className="d-inline-flex p-2 bd-highlight justify-content-center">
                    <GetStartedBtnHomePages />
                   
                    </div>
                  </AppCol>
                </AppRow>
              </AppContainer>
            </PrimaryContainer>
          </AppJumbotron>
          
         
        </AppContainerFluid>
        <HomePageFoooter/>
      </>
    </div>
  );
}

export default ApplicantHomePage;
