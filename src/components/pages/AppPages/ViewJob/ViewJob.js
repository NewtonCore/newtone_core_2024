import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCompanyProfileDetails,
  getJobCompanyDetails,
  getSimilarJobs,
  getTalentsRecommenedForJob,
  resetJobDetails,
  toggleShowTalentApplicationHistoryModal,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { JOB_TEST } from "../../../../constants/AppImages";
import { NAVLINKS } from "../../../../constants/navlinks";
import {
  FormatDate,
  dateDiff,
  returnTimeDifference,
  stripTags,
} from "../../../../constants/utils";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import AppRow from "../../../organisms/AppRow/AppRow";
import DetailsPage from "../../../organisms/DetailsPage/DetailsPage";
import DetailsPageHeader from "../../../organisms/DetailsPageHeader/DetailsPageHeader";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import About from "./pagecomponents/About";
import SimilarJobs from "./SimilarJobs";
import {
  toggleApplyJobModal,
  getAppliedTalentObject,
  resetapplyingTalentData,
} from "../../../../app-redux/features/TalentSlice/talentSlice";
import ApplyModal from "./pagecomponents/ApplyModal";
import JobTiles from "../../../organisms/JobTiles/JobTiles";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../../routes/RouteLinks";
import {
  Calendar,
  Pencil,
  Check,
  Briefcase,
  TrashBin,
  EyeOpen,
  Send,
} from "akar-icons";
import { toggleLoginForm } from "../../../../app-redux/features/appData/appDataSlice";
import { LinearProgress } from "@mui/material";
import { StoreofflineLocalStorage } from "../../../../constants/OfflineStorage";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import AppMobileNav from "../../../organisms/AppMobileNav/AppMobileNav";
import ReferModalFooter from "../../../organisms/ReferModal/ReferModalFooter";
import CopyLinkInput from "../../../organisms/PostJobConfirmation/CopyLinkInput";
import JobOverview from "./JobOverview";
import ExperienceSkill from "./ExperienceSkill";
import CompanyOverview from "./CompanyOverview";
import { Cancel, Visibility } from "@mui/icons-material";

function ViewJob() {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const talentSliceData = useSelector((state) => state.talent);
  const editCompanySlice = useSelector((state) => state.editCompany);

  let { companyProfile } = editCompanySlice;
  let { data: companyProfileData } = companyProfile;

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  let { talentState: talentData } = TalentProfileData;
  let { data: talentDataResult } = talentData;

  const { jobDetails, similarJobs, companyProfileDetails, allCompanyJobs } =
    jobCompanyData;
  const { applyingTalentData } = talentSliceData;
  const { data: jobDetailsData } = jobDetails;
  const { data: similarJobsData } = similarJobs;
  const { data: companyProfileDetailsData } = companyProfileDetails;

  const { results: similarJobsResults } = similarJobsData;

  const authData = useSelector((state) => state.auth);

  const { loginUserState } = authData;
  const { data: dataLogin } = loginUserState;
  const { type: userType } = dataLogin;
  const { data: allJobsData } = allCompanyJobs;
  const { results: allJobsDataResults } = allJobsData;
  // console.log(applyingTalentData)
  const {
    created_at,
    title,
    description,
    experience,
    currency,
    min_salary,
    max_salary,
    expiration_date,
    qualification,
    experienceskills,
    type,
    on_site,
    period,
    mode,
    give_work_authorization,
    company,
  } = jobDetailsData;

  // console.log(company);

  let { jobID } = useParams();
  let dispatch = useDispatch();

  let job_overview = [
    FormatDate(created_at),
    `${
      period !== null && period !== ""
        ? `${period} ${period === 1 ? "month" : "months"} ${type}`
        : ""
    }`,
    `${mode}`,

    `${on_site ? "On site" : "Remote"}`,
    `${
      on_site
        ? give_work_authorization
          ? "Company gives work authorization to candidates not in their zone"
          : "Company does not give work authority"
        : null
    }`,

    // `${currency !== null ? currency : ""} ${returnSalary(
    //   min_salary,
    //   max_salary
    // )}`,
    FormatDate(expiration_date),
    `${
      qualification !== null && qualification !== undefined
        ? qualification
        : "-"
    }`,
    experience !== null
      ? `${experience} ${experience === 1 ? "Year" : "Years"}`
      : "No Experience",
  ];

  let showLoginModal = () => {
    dispatch(toggleLoginForm());
  };

  const effectJobDetail = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    //get job details when page has loaded
    jobID !== undefined &&
      !effectJobDetail.current &&
      dispatch(
        getJobCompanyDetails({
          jobID: parseInt(jobID),
          isAppliedTalentURL: false,
        })
      )
        .unwrap()
        .then((res) => {
          dispatch(getSimilarJobs(parseInt(jobID)));
          dispatch(getAppliedTalentObject(jobID));
          dispatch(getTalentsRecommenedForJob(parseInt(jobID)));
          dispatch(getCompanyProfileDetails(res.company.id));
        })
        .catch((e) => {});
    // jobID !== undefined &&
    //   dispatch(getAppliedTalentObject(jobID))

    return () => {
      effectJobDetail.current = true;
      dispatch(resetJobDetails());
      dispatch(resetapplyingTalentData());
      dispatch(toggleShowTalentApplicationHistoryModal(false));
    };
  }, [dispatch, jobID]);

  const triggerEditJobFn = () => {
    StoreofflineLocalStorage("@companyJob", jobDetailsData);

    setTimeout(() => {
      navigate(`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.my_jobs}`);
    }, 100);
  };

  // const appData = useSelector((state) => state.appData);
  return (
    <div>
      <AppMobileNav />

      <AppNavBar
        rightLinks={NAVLINKS.dashboard_talent_right_links}
        leftLinks={NAVLINKS.dashboard_talent_links}
      />

      {jobDetails.loading ||
        (applyingTalentData.loading && <AppBackDrop open={true} />)}

      {/* {JSON.stringify(jobDetailsData)} */}
      <ApplyModal
        jobTitle={`${
          title !== undefined && title !== null
            ? title.name !== null && title.name
            : "No job title"
        }`}
        user={talentDataResult}
        jobId={jobID}
      />

      {jobDetails.data.hasOwnProperty("id") && jobDetails.loading !== true ? (
        <>
          <DetailsPage
            Header={
              <>
                <DetailsPageHeader
                  image={
                    companyProfileDetailsData.logo !== undefined
                      ? companyProfileDetailsData.logo !== null
                        ? companyProfileDetailsData.logo
                        : null
                      : null
                  }
                  image2={JOB_TEST}
                  label={`${
                    title !== undefined && title !== null
                      ? title.name !== null && title.name
                      : "No job title"
                  }`}
                  Details={
                    <>
                      <span className="text-muted">
                        {returnTimeDifference(
                          dateDiff(new Date(), FormatDate(created_at))
                        )}
                      </span>
                      <ul className="list-inline">
                        <li className="list-inline-item">
                          <Calendar style={{ marginRight: 10 }} size={15} />

                          <span className="mr-3">{FormatDate(created_at)}</span>
                        </li>
                        {/* company */}

                        <li className="list-inline-item">
                          <Briefcase style={{ marginRight: 10 }} size={15} />

                          {jobDetailsData.company !== undefined && (
                            <>
                              <span className="mr-3">
                                {company !== undefined &&
                                company.name !== undefined && company.name !== null
                                  ? company.name
                                  : "-"}
                              </span>
                            </>
                          )}
                        </li>

                        {/* <li className="list-inline-item">
                          <Money style={{ marginRight: 10 }} size={15} />
                          {currency !== undefined && currency !== null
                            ? currency
                            : ""}{" "}
                          {returnSalary(min_salary, max_salary)}
                        </li> */}
                      </ul>
                    </>
                  }
                  ActionComponent={
                    <>
                      {userType === "talent" ? (
                        <>
                          {!talentDataResult.hasOwnProperty("id") ? (
                            <>
                              {!talentData.loading ? (
                                <>
                                  <span>Your profile is not updated.</span>
                                  <AppButton
                                    isLink={true}
                                    linkPath={`/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`}
                                    size="small"
                                    label="Update Profile"
                                  ></AppButton>
                                </>
                              ) : (
                                <LinearProgress />
                              )}
                            </>
                          ) : (
                            <>
                              {applyingTalentData.loading ? (
                                <>
                                  <p>Please wait...</p>
                                </>
                              ) : (
                                <>
                                  {applyingTalentData.id === null ? (
                                    <>
                                      <span className="text-muted mb-3">
                                        Application end:{" "}
                                        {FormatDate(expiration_date) !==
                                        undefined
                                          ? FormatDate(expiration_date)
                                          : ""}{" "}
                                      </span>
                                      <AppButton
                                        size="small"
                                        onClick={() =>
                                          dispatch(toggleApplyJobModal())
                                        }
                                      >
                                        <Send></Send> Apply Now
                                      </AppButton>
                                    </>
                                  ) : (
                                    <>
                                      {applyingTalentData.data
                                        .hidden_for_talent ? (
                                        <>
                                          {applyingTalentData.data.status ===
                                            "offered" && (
                                            <>
                                              <p className="text-success">
                                                {" "}
                                                <Check />You Applied
                                              </p>
                                              <AppButton
                                                size="small"
                                                onClick={() =>
                                                  navigate(
                                                    `/${TALENT_ROUTE.index}${TALENT_ROUTE.acceptJobOffer}${applyingTalentData.id}`
                                                  )
                                                }
                                              >
                                                View Job Offer
                                              </AppButton>
                                            </>
                                          )}

                                          {applyingTalentData.data.status ===
                                            "rejected" && (
                                            <AppButton size="small" disabled>
                                              <Cancel /> Job Offer rejected
                                            </AppButton>
                                          )}
                                          {applyingTalentData.data.status ===
                                            "pending" && (
                                            <>
                                              <span className="text-muted mb-3">
                                                Application end:{" "}
                                                {FormatDate(expiration_date) !==
                                                undefined
                                                  ? FormatDate(expiration_date)
                                                  : ""}{" "}
                                              </span>
                                              <AppButton
                                                size="small"
                                                onClick={() =>
                                                  dispatch(
                                                    toggleApplyJobModal()
                                                  )
                                                }
                                              >
                                                <Send></Send> Apply Now
                                              </AppButton>
                                            </>
                                          )}
                                        </>
                                      ) : (
                                        <>
                                          <AppButton size="small" disabled>
                                            <Check /> Applied
                                          </AppButton>
                                        </>
                                      )}
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          <span className="text-muted mb-3">
                            Application end:{" "}
                            {FormatDate(expiration_date) !== undefined
                              ? FormatDate(expiration_date)
                              : ""}{" "}
                          </span>
                          {userType !== "company" ? (
                            <>
                              <AppButton
                                onClick={() => showLoginModal()}
                                size="small"
                                label="Login To Apply"
                              ></AppButton>
                            </>
                          ) : (
                            <>
                              {/* companyProfileDetailsData.id */}

                              {companyProfileData.hasOwnProperty("id") &&
                              companyProfileDetailsData.hasOwnProperty("id") ? (
                                <>
                                  {parseInt(companyProfileData.id) ===
                                  parseInt(companyProfileDetailsData.id) ? (
                                    <AppButton
                                      onClick={() => triggerEditJobFn()}
                                      size="small"
                                    >
                                      <Pencil /> Edit Job
                                    </AppButton>
                                  ) : (
                                    <>
                                      <AppButton
                                        disabled
                                        // onClick={()=>triggerEditJobFn()}
                                        size="small"
                                        label="Only Talents Can Apply"
                                      ></AppButton>
                                    </>
                                  )}
                                </>
                              ) : (
                                <>
                                  <AppButton
                                    disabled
                                    // onClick={()=>triggerEditJobFn()}
                                    size="small"
                                    label="Only Talents Can Apply"
                                  ></AppButton>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  }
                ></DetailsPageHeader>
              </>
            }
            MainLeftComponent={
              <>
                {/* {JSON.stringify(Talent)} */}
                <About
                  about={`${description !== undefined ? description : ""}`}
                ></About>
              </>
            }
            MainRightComponent={
              <>
                <JobOverview job_overview={job_overview}></JobOverview>
                <br></br>

                <ExperienceSkill
                  experienceskills={experienceskills}
                ></ExperienceSkill>

                <CompanyOverview
                  userType={userType}
                  companyProfileDetailsData={companyProfileDetailsData}
                ></CompanyOverview>

                <SecondaryBackground>
                  <br></br>
                  <h6 className="mt-4 mb-4 fw-bold">Share job</h6>
                  <ReferModalFooter
                    shareTitle={
                      title !== undefined && title.name !== undefined
                        ? `Newton - ${title.name} Job. ${stripTags(
                            description
                          ).substr(0, 20)}`
                        : "Newton Job Offer"
                    }
                    shareUrl={window.location.href}
                  ></ReferModalFooter>

                  <div className="mt-3 mb-3">
                    <CopyLinkInput url={window.location.href}></CopyLinkInput>
                  </div>
                  <br></br>
                </SecondaryBackground>
              </>
            }
          >
            {/* {JSON.stringify(similarJobsResults.length)} */}
            {similarJobsResults !== undefined && userType === "talent" && (
              <SimilarJobs data={similarJobsResults} />
            )}
          </DetailsPage>
        </>
      ) : (
        <>
          <AppContainerFluid style={{ marginTop: 100 }}>
            {!jobDetails.loading && (
              <>
                <EmptyData
                  title="No job found in our records."
                  message={
                    <>
                      {userType === "talent" &&
                        "You can try the suggestions below"}
                    </>
                  }
                ></EmptyData>

                <br></br>
              </>
            )}

            {userType === "talent" && !jobDetails.loading && (
              <AppRow className="gx-3">
                {Array.isArray(allJobsDataResults) &&
                  allJobsDataResults.map((job) => {
                    return (
                      <AppCol key={job.id} size={4} md_size={6} lg_size={4}>
                        <JobTiles
                          companyName={job.company !== null && job.company.name}
                          title={
                            job.title !== undefined
                              ? job.title !== null
                                ? job.title.name
                                : "*No job title*"
                              : "*No job title*"
                          }
                          jobID={job.id}
                          currency={job.currency}
                          jobOfferID={job.id}
                          companyLogo={job.company !== null && job.company.logo}
                          date={FormatDate(job.created_at)}
                          location={job.company !== null && job.company.country}
                          price_amount={
                            job.salary !== "" ? job.salary : undefined
                          }
                          min_salary={
                            job.min_salary !== "" ? job.min_salary : undefined
                          }
                          max_salary={
                            job.max_salary !== "" ? job.max_salary : undefined
                          }
                          timeline={job.mode}
                        ></JobTiles>
                      </AppCol>
                    );
                  })}
              </AppRow>
            )}
          </AppContainerFluid>
        </>
      )}
      {/* {JSON.stringify(userData)} */}
    </div>
  );
}

export default ViewJob;
