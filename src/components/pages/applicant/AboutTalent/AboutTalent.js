import { LinearProgress } from "@mui/material";
import { Pencil } from "akar-icons";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { increareTalentVisits } from "../../../../app-redux/features/Auth/authSlice";
import {
  getTalentDetails,
  resetTalentDetails,
} from "../../../../app-redux/features/TalentProfile/TalentProfileSlice";
import { TEAL_CIRCLE_SVG } from "../../../../constants/AppSvg";
import { DUMMY_DATA } from "../../../../constants/dummyData/dummyData";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../../routes/RouteLinks";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppImage from "../../../organisms/AppImage/AppImage";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import AppRow from "../../../organisms/AppRow/AppRow";
import DetailsPage from "../../../organisms/DetailsPage/DetailsPage";
import DetailsPageHeader from "../../../organisms/DetailsPageHeader/DetailsPageHeader";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import TalentCompanyOverView from "../../../organisms/TalentCompanyOverView/TalentCompanyOverView";
import TalentEducationList from "../EditProfile/pagecomponents/TalentEducationList";
import TalentProjectsList from "../EditProfile/pagecomponents/TalentProjectsList";
import TalentWorkList from "../EditProfile/pagecomponents/TalentWorkList";
import About from "./pagecomponents/About";
import AppMobileNav from "../../../organisms/AppMobileNav/AppMobileNav";
import SecondaryButton from "../../../atoms/AppButton/SecondaryButton";

function AboutTalent() {
  

  let [searchParams, setSearchParams] = useSearchParams();
  let referJob = searchParams.get("referJob");
  let application = searchParams.get("application");


  const { talentID } = useParams();
  const authData = useSelector((state) => state.auth);
  const skillData = useSelector((state) => state.skill);
  const dispatch = useDispatch();

  const effectRan = useRef(false);

  const handleDownloadCV=()=>{
    window.print();
  }
  useEffect(() => {
    // effectRan makes sure that the effect is ran once
    //get the talent details by the company
    if (talentID !== null && !effectRan.current && talentID !== undefined) {
      // console.log(talentID);
      dispatch(getTalentDetails({ talentID: talentID }));
      //increase profile visits
      dispatch(increareTalentVisits({ talentID: talentID }));
    }

    return () => {
      effectRan.current = true;
      dispatch(resetTalentDetails());
    };
  }, [talentID]);

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  
  let { talentState: talentSliceData, talentDetails } = TalentProfileData;

// console.log({talentDetails})
  let { data: talentDataResult } = talentSliceData;

  let { talentEducation, talentWorkExperience } = TalentProfileData;
  let { talentProjects, talentSkills } = TalentProfileData;

  const { results: talentSkillsResults } = talentSkills.data;
  let { loginUserState } = authData;

  let { data: userData } = loginUserState;

  let { first_name, last_name, phone, email, gender } =
    userData.type === "talent" ? userData : talentDetails.data;

  let talentEducationData =
    userData.type === "talent"
      ? talentDataResult.talenteducation_set
      : talentDetails.data.talenteducation_set;

  let talentWorkData =
  userData.type === "talent"
      ?talentDataResult.workexperience_set
      : talentDetails.data.workexperience_set;

  let talentProjectsData =
  userData.type === "talent"
      ? talentDataResult.talentproject_set
      : talentDetails.data.talentproject_set;



  const { skillsState } = skillData;
  const { data: skills } = skillsState;
  let { results: skillsResults } = skills;

  skillsResults  = skillsResults.filter((sr)=>{
    return sr.skill !==null
  })
  // qualification
  let talent_overview = [
    !talentDataResult.hasOwnProperty("id")
      ? talentDetails.data.hasOwnProperty("gender")
        ? talentDetails.data["gender"]
        : null
      : talentDataResult.gender,
    email,
    phone,
    !talentDataResult.hasOwnProperty("id")
      ? talentDetails.data.hasOwnProperty("qualification")
        ? talentDetails.data["qualification"]
        : null
      : talentDataResult.qualification,
    !talentDataResult.hasOwnProperty("id")
      ? talentDetails.data.hasOwnProperty("year_of_experience")
        ?  `${talentDetails.data["year_of_experience"]} ${talentDetails.data["year_of_experience"] === 1 ? "Year":"Years"}`
        : null
      : `${talentDataResult.year_of_experience} Years`,
  ];

  // console.log(talentProjectsData)

  return (
    <div>
      <AppMobileNav />

      <AppNavBar loading={talentDetails.loading} />

      {/* {talentDetails.data} */}

      <DetailsPage
        Header={
          <>
            <DetailsPageHeader
              image={
                talentDataResult.hasOwnProperty("photo") ||
                talentDetails.data.hasOwnProperty("photo")
                  ? talentDataResult.photo || talentDetails.data.photo
                  : null
              }
              Details={
                <>
                  {/* {JSON.stringify(talentDataResult)} */}

                  {/* {JSON.stringify(talentData)} */}

                  {talentDetails.loading && <LinearProgress></LinearProgress>}

                  {talentDataResult.hasOwnProperty("id") ||
                  talentDetails.data.hasOwnProperty("first_name") ? (
                    <>
                      <ul className="list-inline">
                        <>
                          <li className="list-inline-item">
                            <AppImage
                              style={{ height: 20 }}
                              image={TEAL_CIRCLE_SVG}
                            ></AppImage>{" "}
                            <span className="mr-3">
                              {userData.type === "talent" ? (
                                <>
                                  {talentDataResult.current_job_title !==
                                    undefined &&
                                    talentDataResult.current_job_title !== "" &&
                                    talentDataResult.current_job_title !== null
                                    ? talentDataResult.current_job_title
                                    : "*no job title*"}
                                </>
                              ) : (
                                <>
                                  {talentDetails.data.current_job_title !==
                                    undefined &&
                                  talentDetails.data.current_job_title !== "" &&
                                  talentDetails.data.current_job_title !== null
                                    ? talentDetails.data.current_job_title
                                    : "*no job title*"}
                                </>
                              )}
                            </span>
                          </li>
                        </>

                        <li className="list-inline-item">
                          <AppImage
                            style={{ height: 20 }}
                            image={TEAL_CIRCLE_SVG}
                          ></AppImage>{" "}
                          <span className="mr-3">
                          {userData.type === "talent" ? (
                                <>
                                  {talentDataResult.address !==
                                    undefined &&
                                    talentDataResult.address !== "" &&
                                    talentDataResult.address !== null
                                    ? talentDataResult.address
                                    : "*no address*"}
                                </>
                              ) : (
                                <>
                                  {talentDetails.data.address !==
                                    undefined &&
                                  talentDetails.data.address !== "" &&
                                  talentDetails.data.address !== null
                                    ? talentDetails.data.address
                                    : "*no address*"}
                                </>
                              )}

                       
                          </span>
                        </li>
                      </ul>

                      {userData.type === "company" &&
                        referJob !== undefined && referJob !== null && (
                          <SecondaryButton
                            style={{ height: "50%" }}
                            size="small"
                            isLink={true}
                            linkPath={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}${referJob}/${application}`}
                          >
                            Offer job
                          </SecondaryButton>
                        )}
                    </>
                  ) : (
                    <>...</>
                  )}
                </>
              }
              label={
                first_name !== undefined ?  userData.type === "talent"  ? `${first_name} ${last_name}` : first_name : null
              }
              ActionComponent={
                <>
                  {userData.type === "talent" ? (
                    <AppButton
                      size="small"
                      isLink={true}
                      linkPath={`/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`}
                    >
                      <Pencil></Pencil> Edit Profile
                    </AppButton>
                  ) : (
                    <AppButton onClick={()=>handleDownloadCV()} label="Download CV"></AppButton>
                  )}
                </>
              }
            ></DetailsPageHeader>
          </>
        }
        MainLeftComponent={
          <>
            {/* {JSON.stringify(Talent)} */}
            {/* aaa {JSON.stringify(talentDataResult.about_me)} */}
            {userData.type === "talent" ? (
              <>
                <About
                  about={
                    talentDataResult.about_me === null
                      ? "No about. Kindly update your profile"
                      : talentDataResult.about_me
                  }
                ></About>
              </>
            ) : (
              <>
                <About
                  about={
                    talentDetails.data.about_me === null
                      ? "No about for this talent."
                      : talentDetails.data.about_me
                  }
                  // about2={
                  //   talentDetails.data.about_me === null
                  //     ? userData.type === "talent"
                  //       ? "No about. Kindly update your profile"
                  //       : "No about for this talent."
                  //     : talentDetails.data.about_me
                  // }
                ></About>
              </>
            )}

            <h5 className="mt-4 fw-bold">Education</h5>
            {Array.isArray(talentEducationData) && (
              <>
                {talentEducationData.length === 0 && (
                  <div className="alert alert-warning">No education added</div>
                )}
                {talentEducationData.map((list) => {
                  return (
                    <TalentEducationList
                      showDivider={false}
                      showActionButtons={false}
                      data={list}
                      key={list.id}
                    ></TalentEducationList>
                  );
                })}
              </>
            )}

            <h5 className="mt-4 fw-bold">Work Experience</h5>
            {Array.isArray(talentWorkData) && (
              <>
                {talentWorkData.length === 0 && (
                  <div className="alert alert-warning">No work added</div>
                )}

                {talentWorkData.map((list) => {
                  return (
                    <TalentWorkList
                      showDivider={false}
                      showActionButtons={false}
                      data={list}
                      key={list.id}
                    ></TalentWorkList>
                  );
                })}
              </>
            )}

            <h5 className="mt-4 fw-bold">Projects</h5>
            {/* {JSON.stringify(talentProjectsData)} */}
            {Array.isArray(talentProjectsData) && (
              <>
                {talentProjectsData.length === 0 && (
                  <div className="alert alert-warning">No projects added</div>
                )}
                {talentProjectsData.map((list) => {
                  return (
                    <TalentProjectsList
                      showDivider={false}
                      showActionButtons={false}
                      skillsResults={skillsResults}
                      data={list}
                      key={list.id}
                    ></TalentProjectsList>
                  );
                })}
              </>
            )}

            {/* {talentProjects.loading
              ? "Loading projects"
              : talentProjectsData.length === 0 && "No Project information"} */}
          </>
        }
        MainRightComponent={
          <>
            <SecondaryBackground>
              <br></br>
              <h6 className="mt-4 fw-bold">Talent overview</h6>

              {DUMMY_DATA.talent_overview.map((talent, index) => {
                return (
                  <TalentCompanyOverView
                    data={talent_overview[index]}
                    key={talent.id}
                    label={talent.label}
                  ></TalentCompanyOverView>
                );
              })}
            </SecondaryBackground>

            {Array.isArray(talentSkillsResults) && (
              <>
                <SecondaryBackground>
                  <>
                    <br></br>
                    <h6 className="mt-4 fw-bold">Skills</h6>
                    {userData.type === "talent" ? (
                      <>
                        {/* {JSON.stringify(talentDetails)} */}
                        {Array.isArray(talentDataResult.user_skills) &&
                          talentDataResult.user_skills
                          .filter((sr)=>{
                            return sr.skill !==null
                          })
                          .map((skillData) => {
                            return (
                              <AppRow key={skillData.id}>
                                <AppCol
                                  size="6"
                                  md_size={7}
                                  lg_size={8}
                                  sm_size={6}
                                  xs_size={6}
                                >
                                  {skillData.skill.name !== undefined &&
                                    skillData.skill.name}
                                </AppCol>
                                <AppCol
                                  size="6"
                                  md_size={5}
                                  lg_size={4}
                                  sm_size={6}
                                  xs_size={6}
                                >
                                  {skillData.yearExperience}{" "}
                                  {skillData.yearExperience === 1
                                    ? "Year"
                                    : "Years"}
                                </AppCol>
                              </AppRow>
                            );
                          })}
                      </>
                    ) : (
                      <>
                        {Array.isArray(talentDetails.data.user_skills) &&
                          talentDetails.data.user_skills.map((skillData) => {
                            return (
                              <AppRow key={skillData.id}>
                                <AppCol
                                  size="6"
                                  md_size={7}
                                  lg_size={8}
                                  sm_size={6}
                                  xs_size={6}
                                >
                                  {skillData.skill.name !== undefined &&
                                    skillData.skill.name}
                                </AppCol>
                                <AppCol
                                  size="6"
                                  md_size={5}
                                  lg_size={4}
                                  sm_size={6}
                                  xs_size={6}
                                >
                                  {skillData.yearExperience}{" "}
                                  {skillData.yearExperience === 1
                                    ? "Year"
                                    : "Years"}
                                </AppCol>
                              </AppRow>
                            );
                          })}
                      </>
                    )}
                  </>
                </SecondaryBackground>
              </>
            )}
          </>
        }
      ></DetailsPage>
      {/* {JSON.stringify(userData)} */}
    </div>
  );
}

export default AboutTalent;
