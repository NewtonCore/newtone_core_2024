import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCompanyProfileDetails,
  getJobCompanyDetails,
  resetJobDetails,
  talentConfirmJobOffer,
  toggleShowTalentApplicationHistoryModal,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { JOB_TEST } from "../../../../constants/AppImages";
import { NAVLINKS } from "../../../../constants/navlinks";
import {
  FormatDate,
  dateDiff,
  returnSalary,
  returnTimeDifference,
} from "../../../../constants/utils";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../../organisms/AppRow/AppRow";

import JobTiles from "../../../organisms/JobTiles/JobTiles";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import { HOME_ROUTES, TALENT_ROUTE } from "../../../../routes/RouteLinks";
import { Money, Calendar } from "akar-icons";
import About from "../../AppPages/ViewJob/pagecomponents/About";
import { Accordion } from "react-bootstrap";
import { Warning } from "@mui/icons-material";
import JobOverview from "../../AppPages/ViewJob/JobOverview";
import ExperienceSkill from "../../AppPages/ViewJob/ExperienceSkill";
import CompanyOverview from "../../AppPages/ViewJob/CompanyOverview";
import {
  getAppliedTalentObject,
  resetapplyingTalentData,
} from "../../../../app-redux/features/TalentSlice/talentSlice";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import { toast } from "react-toastify";
import { DANGER_COLOR } from "../../../../constants/AppColors";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import AppLink from "../../../organisms/AppLink/AppLink";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";

function ConfirmJobOffer() {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const talentSliceData = useSelector((state) => state.talent);

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  let { talentState: talentData } = TalentProfileData;
  let { data: talentDataResult } = talentData;

  const {
    talentJobAnswer,
    jobDetails,
    similarJobs,
    companyProfileDetails,
    allCompanyJobs,
  } = jobCompanyData;
  const { applyingTalentData } = talentSliceData;
  const { data: jobDetailsData } = jobDetails;
  const { data: similarJobsData } = similarJobs;
  const { data: companyProfileDetailsData } = companyProfileDetails;
  const authData = useSelector((state) => state.auth);

  const { loginUserState } = authData;
  const { data: dataLogin } = loginUserState;
  const { type: userType } = dataLogin;
  const { data: allJobsData } = allCompanyJobs;
  const { results: allJobsDataResults } = allJobsData;
  console.log(applyingTalentData);
  const { job, id: ApplyID, give_work_authorization } = jobDetailsData;

  let {
    title,
    description,
    experience,
    currency,
    min_salary,
    max_salary,
    expiration_date,
    created_at,
    period,
    on_site,
    mode,
    qualification,
    experienceskills,
    company,
    type,

    id: jobID,
  } = job !== undefined ? job : "";

  let { jobOfferID } = useParams();
  let dispatch = useDispatch();

  let job_overview = [
    FormatDate(created_at),
    `${period !== null && period !== "" ? `${period} month ${type}` : ""}`,
    `${mode}`,

    `${on_site ? "On site" : "Remote"}`,
    `${
      on_site
        ? give_work_authorization
          ? "Company gives work authorization to candidates not in their zone"
          : "Company does not give work authority"
        : null
    }`,

    `${currency !== null ? currency : ""} ${returnSalary(
      min_salary,
      max_salary
    )}`,
    FormatDate(expiration_date),
    `${
      qualification !== null && qualification !== undefined
        ? qualification
        : "-"
    }`,
    experience !== null ? `${experience} Years` : "Test Experience",
  ];

  const effectJobDetail = useRef(false);

  const handleGetData = () => {
    dispatch(
      getJobCompanyDetails({
        jobID: parseInt(jobOfferID),
        isAppliedTalentURL: true,
      })
    )
      .unwrap()
      .then((res) => {
        // console.log(res)
        if (userType === "talent" || userType === "company") {
          dispatch(getCompanyProfileDetails(res.job.company.id));
        }
        dispatch(getAppliedTalentObject(res.job.id))
          .unwrap()
          .then((res) => {})
          .catch((err) => {});
      });
  };

  useEffect(() => {
    // navigate(0);
  }, []);
  // console.log(similarJobsResults)

  useEffect(() => {
    //get job details when page has loaded
    // jobOfferID !== undefined &&
    //   !effectJobDetail.current &&
    //get the job application object
    // handleGetData();
    jobOfferID !== undefined && !effectJobDetail.current && handleGetData();

    return () => {
      effectJobDetail.current = true;
      dispatch(resetJobDetails());
      dispatch(resetapplyingTalentData());
      dispatch(toggleShowTalentApplicationHistoryModal(false));
    };
  }, [jobOfferID]);

  const handleJobAnswer = (answer = "accepted") => {
    let data = {
      appliedjob_id: ApplyID,
      answer: answer,
      hide_for_talent: false,
    };

    // data = JsonToformData(data);

    dispatch(talentConfirmJobOffer({ data }))
      .unwrap()
      .then((res) => {
        toast.info(res);
        handleGetData();
      })
      .catch((err) => {
        toast.error(err);
        handleGetData();
      });
  };
  // console.log({ jobDetails });
  // const appData = useSelector((state) => state.appData);
  return (
    <>
      {/* <AppNavBar
        rightLinks={NAVLINKS.dashboard_talent_right_links}
        leftLinks={NAVLINKS.dashboard_talent_links}
      /> */}

      <TalentLayout pageTitle="Job Offer" pageHeaderRight={undefined}>
        {applyingTalentData.loading ||
          (jobDetails.loading && <AppBackDrop open={true} />)}

        {jobDetails.loading ||
          (talentJobAnswer.loading && <AppBackDrop open={true} />)}

        {/* <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={
          talentJobAnswer.loading === null ? false : talentJobAnswer.loading
        }
      >
        <CircularProgress color="inherit" />
      </Backdrop <WhiteBgDiv>ackdrop> */}
 <WhiteBgDiv>
        {jobDetails.data.hasOwnProperty("id") &&
        jobDetails.loading !== true &&
        applyingTalentData.id !== null ? (
          <>
           
              <h4>
              <AppLink to={`${HOME_ROUTES.index}${HOME_ROUTES.viewJob}${jobID}`}>
                {title !== undefined && title !== null
                  ? title.name !== null &&
                    `${title.name} Job Offer by ${
                      company !== undefined ? company.name : "-"
                    }`
                  : "No job title"}
              </AppLink>
              </h4>
             

              <>
                
                <div className="mb-3">
                  {/* {JSON.stringify(Talent)} */}

                  {description !== undefined && <></>}

                  {/* Offer letter */}

                  {applyingTalentData.data.hasOwnProperty("offer_letter") ||
                  applyingTalentData.data.hasOwnProperty("reject_letter") ? (
                    <>
                      {applyingTalentData.data.offer_letter !== null ||
                      applyingTalentData.data.reject_letter !== null ? (
                        <>
                          {applyingTalentData.data.offer_letter !== "" &&
                            applyingTalentData.data.offer_letter !== null && (
                              <>
                                <Accordion defaultActiveKey="0">
                                  <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                      {" "}
                                      Offer Letter
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {applyingTalentData.data.status !==
                                      "rejected"
                                        ? applyingTalentData.data.offer_letter
                                        : applyingTalentData.data.reject_letter}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </>
                            )}

                          {applyingTalentData.data.reject_letter !== "" &&
                            applyingTalentData.data.reject_letter !== null && (
                              <>
                                <Accordion>
                                  <Accordion.Item eventKey="0.2">
                                    <Accordion.Header>
                                      {" "}
                                      Reject Letter
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {applyingTalentData.data.status !==
                                      "rejected"
                                        ? applyingTalentData.data.offer_letter
                                        : applyingTalentData.data.reject_letter}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              </>
                            )}

{userType === "talent" && (
                  <>
                    {talentDataResult.hasOwnProperty("data") &&
                    !talentDataResult.data.hasOwnProperty("id") ? (
                      <>
                        <span>Your profile is not updated.</span>
                        <AppButton
                          isLink={true}
                          linkPath={`/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`}
                          size="small"
                          label="Update Profile "
                          // onClick={() => dispatch(toggleApplyJobModal())}
                        ></AppButton>
                      </>
                    ) : (
                      <>
                        {applyingTalentData.data.hasOwnProperty("status") ? (
                          <>
                            {applyingTalentData.data.status !== "accepted" &&
                            applyingTalentData.data.status !== "pending" &&
                            applyingTalentData.data.status !== "rejected" &&
                            applyingTalentData.data.status !==
                              "talent-reject" ? (
                              <>
                                <div className="mt-2 mb-4">
                                  <AppButton
                                  style={{marginRight:10}}
                                    size="small"
                                    label="Accept Job"
                                    onClick={() => handleJobAnswer()}
                                  ></AppButton>
                                  <AppButton
                                    style={{
                                      backgroundColor: DANGER_COLOR,
                                    }}
                                    size="small"
                                    label="Reject Job"
                                    onClick={() =>
                                      handleJobAnswer("talent-reject")
                                    }
                                  ></AppButton>
                                </div>
                              </>
                            ) : (
                              <>
                                {applyingTalentData.data.status ===
                                "rejected" ? (
                                  <AppButton
                                    style={{
                                      backgroundColor: DANGER_COLOR,
                                    }}
                                    className="btn-danger"
                                    size="small"
                                    disabled
                                  >
                                    <Warning></Warning>
                                    Application Rejected
                                  </AppButton>
                                ) : (
                                  <>
                                    {applyingTalentData.data.status ===
                                    "pending" ? (
                                      <>
                                        <AppButton
                                          size="small"
                                          disabled
                                          label="Pending Application"
                                        ></AppButton>
                                      </>
                                    ) : (
                                      <>
                                        {applyingTalentData.data.status ===
                                        "talent-reject" ? (
                                          <AppButton
                                            size="small"
                                            disabled
                                            style={{
                                              backgroundColor: DANGER_COLOR,
                                            }}
                                          >
                                            You rejected offer
                                          </AppButton>
                                        ) : (
                                          <AppButton
                                            size="small"
                                            disabled
                                            label={
                                              applyingTalentData.data.status
                                            }
                                          ></AppButton>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    )}
                  </>
                )}

                          <br></br>

                          {applyingTalentData.data.hasOwnProperty(
                            "message"
                          ) && (
                            <>
                              {applyingTalentData.data.message !== "" &&
                              applyingTalentData.data.message !== null ? (
                                <Accordion>
                                  <Accordion.Item eventKey="0.1">
                                    <Accordion.Header>
                                      Application Message
                                    </Accordion.Header>
                                    <Accordion.Body>
                                      {applyingTalentData.data.message}
                                    </Accordion.Body>
                                  </Accordion.Item>
                                </Accordion>
                              ) : (
                                <div className="mt-3 mb-3 alert alert-warning">
                                  No Application Message
                                </div>
                              )}
                            </>
                          )}
                          <br></br>

                          <Accordion>
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                Job Description
                              </Accordion.Header>
                              <Accordion.Body>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <Calendar
                                      style={{ marginRight: 10 }}
                                      size={15}
                                    />

                                    <span className="text-muted">
                                      {returnTimeDifference(
                                        dateDiff(
                                          new Date(),
                                          FormatDate(created_at)
                                        ),
                                        "Job Posted"
                                      )}
                                    </span>
                                  </li>

                                  <li className="list-inline-item">
                                    <Calendar
                                      style={{ marginRight: 10 }}
                                      size={15}
                                    />

<span className="text-muted">
                                  Application end:{" "}
                                  {FormatDate(expiration_date) !== undefined
                                    ? FormatDate(expiration_date)
                                    : ""}{" "}
                                </span>
                                  </li>
                                </ul>
                              
                                <About
                                  about={`${
                                    description !== undefined ? description : ""
                                  }`}
                                ></About>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </>
                      ) : (
                        <>
                          <Accordion defaultActiveKey="1">
                            <Accordion.Item eventKey="1">
                              <Accordion.Header>
                                Job Description
                              </Accordion.Header>
                              <Accordion.Body>
                                <ul className="list-inline">
                                  <li className="list-inline-item">
                                    <Calendar
                                      style={{ marginRight: 10 }}
                                      size={15}
                                    />

                                    <span className="text-muted">
                                      {returnTimeDifference(
                                        dateDiff(
                                          new Date(),
                                          FormatDate(created_at)
                                        ),
                                        "Job Posted"
                                      )}
                                    </span>
                                  </li>
                                </ul>
                                <span className="text-muted mb-3">
                                  Application end:{" "}
                                  {FormatDate(expiration_date) !== undefined
                                    ? FormatDate(expiration_date)
                                    : ""}{" "}
                                </span>
                                <About
                                  about={`${
                                    description !== undefined ? description : ""
                                  }`}
                                ></About>
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </>

           
          </>
        ) : (
          <>
            <AppContainerFluid>
              {!jobDetails.loading && !applyingTalentData.loading && (
                <>
                  <EmptyData
                    title="No job/application found in our records."
                    message={
                      <>
                        {userType === "talent" &&
                          "You can try applying from the suggestions below"}
                      </>
                    }
                  ></EmptyData>

                  <br></br>
                </>
              )}

              {!applyingTalentData.loading && (
                <>
                  {userType === "talent" && !jobDetails.loading && (
                    <AppRow className="gx-3">
                      {Array.isArray(allJobsDataResults) &&
                        allJobsDataResults.map((job) => {
                          return (
                            <AppCol
                              key={job.id}
                              size={6}
                              md_size={6}
                              lg_size={6}
                            >
                              <JobTiles
                                companyName={
                                  job.company !== null && job.company.name
                                }
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
                                companyLogo={
                                  job.company !== null && job.company.logo
                                }
                                date={FormatDate(job.created_at)}
                                location={
                                  job.company !== null && job.company.country
                                }
                                price_amount={
                                  job.salary !== "" ? job.salary : undefined
                                }
                                min_salary={
                                  job.min_salary !== ""
                                    ? job.min_salary
                                    : undefined
                                }
                                max_salary={
                                  job.max_salary !== ""
                                    ? job.max_salary
                                    : undefined
                                }
                                timeline={job.mode}
                              ></JobTiles>
                            </AppCol>
                          );
                        })}
                    </AppRow>
                  )}
                </>
              )}
            </AppContainerFluid>
          </>
        )}
        </WhiteBgDiv>
        {/* {JSON.stringify(userData)} */}
      </TalentLayout>
    </>
  );
}

export default ConfirmJobOffer;
