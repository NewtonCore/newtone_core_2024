import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCompanyDebit } from "../../app-redux/features/companyDebitInfo/companyDebitSlice";
import { getCompanyProfile } from "../../app-redux/features/editCompanyProfile/editCompanyProfileSlice";
import {
  getEducation,
  getTalent,
  getTalentProjects,
  getTalentWorkExperiences,
} from "../../app-redux/features/TalentProfile/TalentProfileSlice";
import {
  getAllJobCompany,
  getAppliedTalent,
  getJobByCompany,
  GetMyPaymentForTalent,
  getMySavedProfiles,
  getTalentsAppliedForJob_For_Updates,
  getTalentsWhichHired,
} from "../../app-redux/features/jobCompany/jobCompanySlice";
import {
  getSkills,
  getTechnicalSkills,
} from "../../app-redux/features/Skill/skillSlice";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../RouteLinks";
import { getprofileVisits, getprofileVisitsCompany } from "../../app-redux/features/Auth/authSlice";
import { getNewtonAvailabilities } from "../../app-redux/features/ScheduleInterview/ScheduleInterviewSlice";
import { getTalentInterviews } from "../../app-redux/features/TalentSlice/talentSlice";
import { getOfflineData } from "../../constants/OfflineStorage";
import { getAppCountries, getAppHourlyRate, toggleLoginForm } from "../../app-redux/features/appData/appDataSlice";

function AppDataProvider({ children }) {
  const dispatch = useDispatch();
  const TalentProfileData = useSelector((state) => state.TalentProfile);
  let { talentState: talentSliceData } = TalentProfileData;
  let { data: talentDataResult } = talentSliceData;

  const authData = useSelector((state) => state.auth);
  const { loginUserState } = authData;

  const [pageTitle, setPageTitle] = useState("Home");

  const titleMap = [
    { path: "/", title: "Newton" },
    { path: "/password-reset", title: "Forgot Password" },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.dashboard}`,
      title: "Talent Dashboard",
    },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.jobAvailability}`,
      title: "Job Availability",
    },
    { path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.updates}`, title: "Updates" },
    { path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.tests}`, title: "Tests" },
    { path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.testsID}`, title: "Tests" },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.testsIDskillID}`,
      title: "Tests",
    },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`,
      title: "Edit Profile",
    },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.jobStatus}`,
      title: "Job Status",
    },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.viewProfile}`,
      title: "View Profile",
    },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.settings}`,
      title: "Settings",
    },
    {
      path: `/${TALENT_ROUTE.index}${TALENT_ROUTE.viewJob}`,
      title: "Viewing Job",
    },
    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`,
      title: "Company Dashboard",
    },
    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.update_password}`,
      title: "Update Password",
    },
    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.hired_talents}`,
      title: "Hired Talents",
    },
    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.profile}`,
      title: "Profile",
    },
    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.post_job}`,
      title: "Post Job",
    },
    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.my_jobs}`,
      title: "My Jobs",
    },

    {
      path: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}`,
      title: "Viewing Job",
    },
  ];

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find((item) => item.path === curLoc.pathname);
    if (curTitle && curTitle.title) {
      setPageTitle(curTitle.title);
      document.title = curTitle.title;
    }
  }, [curLoc]);

  useEffect(() => {
    //load skill,questions when auth changes
    // dispatch(getSkills());
    dispatch(getAllJobCompany({ data: "All" }));
    dispatch(getSkills());
    dispatch(getAppCountries())
    dispatch(getAppHourlyRate())
    dispatch(getTechnicalSkills());

    if (loginUserState.isLoggedIn) {
      // console.log(first)
     
      if (loginUserState.data.type === "talent") {
        let user_profile = getOfflineData("user_profile");
        dispatch(getTalent());

        user_profile.then((res) => {
          if (res === null) {
          } else {
            // dispatch(addTalentDataFromLocalStorage({talentState:res,talentSkills:res.user_skills}))
          }
        });

        setTimeout(() => {}, 100);
      } else if (loginUserState.data.type === "company") {
        dispatch(getJobByCompany());
        dispatch(getCompanyProfile());
        dispatch(getCompanyDebit());
        dispatch(getNewtonAvailabilities());
        dispatch(getTalentsWhichHired());
        dispatch(GetMyPaymentForTalent());
        dispatch(getTalentsAppliedForJob_For_Updates())
        dispatch(getMySavedProfiles())
        dispatch(getprofileVisitsCompany());

      }
    }
  }, [dispatch, loginUserState]);

  useEffect(() => {
    if (
      talentDataResult.length === 0 &&
      loginUserState.data.type === "talent"
    ) {
      dispatch(getTalentWorkExperiences());
      dispatch(getEducation());
      dispatch(getTalentProjects());
      dispatch(getprofileVisits());
      dispatch(getAppliedTalent());
      dispatch(getTalentInterviews());
    }
  }, [talentDataResult, loginUserState]);

  useEffect(() => {
    if (loginUserState.isLoggedOutButton) {
      dispatch(toggleLoginForm());
    }
  }, [loginUserState]);

  return <div>{children}</div>;
}

export default AppDataProvider;
