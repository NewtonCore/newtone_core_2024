import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  rejectApplication,
  getJobCompanyDetails,
  getTalentsWhichAppliedForJob,
  toggleShowRejectApplicationModal,
  toggleShowOfferJobModal,
  getTalentsRecommenedForJob,
  toggleShowSaveModal,
  SaveTalentProfile,
  getMySavedProfiles,
  resetJobDetails,
  resetTalentsRecommended,
  toggleDeleteSavedTalent,
  DeleteSavedTalentProfile,
  deleteSavedProfileFromState,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import {
  PutTalentsInArray_FromJob,
  PutTalentsInArray_FromJob_Recommended,
} from "../../../../constants/utils";

import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import TotalTalents from "./TotalTalents";
import ScheduleInterviewModal from "./pagecomponents/ScheduleInterviewModal";
import ConfirmationModal from "../../../organisms/ConfirmationModal/ConfirmationModal";
import { JsonToformData } from "../../../../constants/utils";
import { COMPANY_ROUTE, HOME_ROUTES } from "../../../../routes/RouteLinks";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import { PRIMARY_COLOR } from "../../../../constants/AppColors";
import { useRef } from "react";
import { Lock } from "@mui/icons-material";
import { toast } from "react-toastify";
import {
  getAppliedTalentObject,
  talentApplyingJob,
} from "../../../../app-redux/features/TalentSlice/talentSlice";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import AppLink from "../../../organisms/AppLink/AppLink";

function CompanyViewTalents({ talentsData, isSavedProfile }) {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const talentSlice = useSelector((state) => state.talent);

  const { appliedTalentState } = talentSlice;

  const {
    jobApplicationObject,
    showRejectApplicationModal,
    showOfferJobModal,
    showSaveTalentModal,
    talentsWhichAppliedJob,
    jobDetails,
    talentsRecommendedJob,
    saveTalentProfileState,
    showDeleteSavedTalentModal,
    savedTalentObject,
  } = jobCompanyData;

  let { results: talentsWhichAppliedJobResults } = talentsWhichAppliedJob.data;
  const { data: jobDetailsData } = jobDetails;
  const { title, status: jobStatus } = jobDetailsData;

  const [talentsApplied, setTalentsApplied] = useState([]);
  const [pendingTalent, setTalentPending] = useState([]);
  const [rejectedTalent, setTalentRejected] = useState([]);
  const [offeredTalent, setTalentOffered] = useState([]);

  let { jobID } = useParams();
  let dispatch = useDispatch();
  let status = searchParams.get("status");

  const effectJob = useRef(false);

  useEffect(() => {
    if (jobID !== undefined) {
      if (!effectJob.current) {
        dispatch(getTalentsWhichAppliedForJob(parseInt(jobID)));
        dispatch(
          getJobCompanyDetails({
            jobID: parseInt(jobID),
            isAppliedTalentURL: false,
          })
        )
          .unwrap()
          .then((res) => {
            if (status !== null && status === "recommended") {
              dispatch(getTalentsRecommenedForJob(jobID));
            }
          });
      }
    }

    return () => {
      effectJob.current = true;
      dispatch(resetJobDetails());
      dispatch(resetTalentsRecommended());
    };
  }, [jobID, status, effectJob]);

  useEffect(() => {
    if (talentsWhichAppliedJobResults !== undefined) {
      setTalentsApplied(
        PutTalentsInArray_FromJob(
          talentsWhichAppliedJobResults,
          "all",
          jobDetailsData
        )
      );

      setTalentPending(
        PutTalentsInArray_FromJob(
          talentsWhichAppliedJobResults,
          "pending",
          jobDetailsData
        )
      );

      setTalentRejected(
        PutTalentsInArray_FromJob(
          talentsWhichAppliedJobResults,
          "rejected",
          jobDetailsData
        )
      );

      setTalentOffered(
        PutTalentsInArray_FromJob(
          talentsWhichAppliedJobResults,
          "offered",
          jobDetailsData
        )
      );
    }
    return () => {
      setTalentsApplied([]);
    };
  }, [talentsWhichAppliedJobResults]);

  useEffect(() => {
    if (talentsData !== undefined) {
      if (talentsData.length !== 0) {
        setTalentsApplied(PutTalentsInArray_FromJob(talentsData));
      }
    }
  }, [talentsData]);

  const handleOfferJob = () => {
    dispatch(toggleShowOfferJobModal());

    if (status === "recommended") {
      // dispatch(getAppliedTalentObject(jobID)).unwrap()
      // .then(res=>console.log(res))
      // .catch(e=>console.log(e))
      // return 0
      let data = {
        talent: jobApplicationObject.talentId,
        job: jobApplicationObject.jobID,
        hidden_for_talent: true,
      };
      data = JsonToformData(data);
      dispatch(talentApplyingJob(data))
        .unwrap()
        .then((res) => {
          setTimeout(() => {
            navigate(
              `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}${res.job.id}/${res.id}`
            );
            window.location.reload();
          }, 1000);
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      setTimeout(() => {
        navigate(
          `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}${jobApplicationObject.jobID}/${jobApplicationObject.id}`
        );
        window.location.reload();
      }, 1000);
    }
  };
  const handleRejectJob = () => {
    dispatch(toggleShowRejectApplicationModal());

    setTimeout(() => {
      navigate(
        `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}reject/${jobApplicationObject.jobID}/${jobApplicationObject.id}`
      );
      window.location.reload();
    }, 1000);
  };

  const all_tabs = [
    {
      id: 1,
      component: (
        <TotalTalents
          jobID={jobID}
          isRecommended={status === "recommended" ? true : false}
          talentsApplied={talentsApplied}
        />
      ),
      title: `Total ${
        talentsApplied.hasOwnProperty("talents")
          ? talentsApplied.talents.length
          : 0
      }`,
    },
    {
      id: 2,
      component: (
        <TotalTalents
          jobID={jobID}
          isRecommended={status === "recommended" ? true : false}
          talentsApplied={pendingTalent}
        />
      ),
      title: `Pending ${
        pendingTalent.hasOwnProperty("talents")
          ? pendingTalent.talents.length
          : 0
      }`,
    },

    {
      id: 3,
      component: (
        <TotalTalents
          jobID={jobID}
          isRecommended={status === "recommended" ? true : false}
          talentsApplied={rejectedTalent}
        />
      ),
      title: `Rejected ${
        rejectedTalent.hasOwnProperty("talents")
          ? rejectedTalent.talents.length
          : 0
      }`,
    },

    {
      id: 4,
      component: (
        <TotalTalents
          jobID={jobID}
          isRecommended={status === "recommended" ? true : false}
          talentsApplied={offeredTalent}
        />
      ),
      title: `Offered ${
        offeredTalent.hasOwnProperty("talents")
          ? offeredTalent.talents.length
          : 0
      }`,
    },
  ];

  const single_tabs = [
    {
      id: 1,
      component: (
        <TotalTalents
          jobID={jobID}
          isRecommended={status === "recommended" ? true : false}
          talentsApplied={PutTalentsInArray_FromJob_Recommended(
            talentsRecommendedJob.data,
            jobDetailsData
          )}
        />
      ),
      title: `Total ${
        talentsRecommendedJob.hasOwnProperty("data")
          ? talentsRecommendedJob.data.length
          : 0
      }`,
    },
  ];

  const saved_talents_tabs = [
    {
      id: 1,
      component: (
        <TotalTalents
          isSavedProfile={true}
          showSaveProfile={false}
          jobID={jobID}
          isRecommended={status === "recommended" ? true : false}
          talentsApplied={talentsApplied}
        />
      ),
      title: `Total ${
        talentsApplied.hasOwnProperty("talents")
          ? talentsApplied.talents.length
          : 0
      }`,
    },
  ];

  const tabs =
    status && (status === "recommended") !== null
      ? single_tabs
      : isSavedProfile
      ? saved_talents_tabs
      : all_tabs;

  const saveProfileForLater = (data) => {
    // console.log(jobApplicationObject);
    dispatch(
      SaveTalentProfile(
        JsonToformData({
          job: jobApplicationObject.jobID,
          talent: jobApplicationObject.talentId,
        })
      )
    )
      .unwrap()
      .then((res) => {
        dispatch(toggleShowSaveModal());
        toast.success(`Profile for ${res.talent.first_name} has been saved`);
        dispatch(getMySavedProfiles());
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const DeleteSavedProfile = (data) => {
    dispatch(
      DeleteSavedTalentProfile(data.id)
    )
      .unwrap()
      .then((res) => {
        dispatch(toggleDeleteSavedTalent());
        toast.info(`Profile for ${data.first_name} has been deleted`);
        // dispatch(getMySavedProfiles());
        dispatch(deleteSavedProfileFromState(data.id))
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div>
      {appliedTalentState.loading && <AppBackDrop open={true}></AppBackDrop>}
      <ScheduleInterviewModal
        jobId={
          jobApplicationObject.hasOwnProperty("jobID")
            ? jobApplicationObject.jobID
            : jobID
        }
        jobApplicationObject={jobApplicationObject}
      />

      {showOfferJobModal &&
        jobApplicationObject.hasOwnProperty("first_name") &&
        jobApplicationObject.hasOwnProperty("jobTitle") && (
          <ConfirmationModal
            isDanger={false}
            offerJobFunc={() => {}}
            confirmText="YES"
            cancelText="NO"
            actionButtonFn={() => {
              handleOfferJob();
            }}
            show={showOfferJobModal}
            message={`Offer Job`}
            onHide={() => dispatch(toggleShowOfferJobModal())}
          >
            <div className="alert alert-info">
              <>
                Do you want to offer {jobApplicationObject.jobTitle.name} job to{" "}
                {jobApplicationObject.first_name} ?
              </>
            </div>
          </ConfirmationModal>
        )}
      {showRejectApplicationModal && (
        <ConfirmationModal
          offerJobFunc={() => {}}
          confirmText="YES"
          cancelText="NO"
          actionButtonFn={() => {
            handleRejectJob();
          }}
          show={showRejectApplicationModal}
          message={`Reject Application`}
          onHide={() => dispatch(toggleShowRejectApplicationModal())}
        />
      )}

      {showSaveTalentModal &&
        jobApplicationObject.hasOwnProperty("first_name") &&
        jobApplicationObject.hasOwnProperty("jobTitle") && (
          <ConfirmationModal
            isDanger={false}
            offerJobFunc={() => {}}
            confirmText="SAVE"
            cancelText="CANCEL"
            loading={saveTalentProfileState.loading}
            actionButtonFn={() => {
              saveProfileForLater();
            }}
            show={showSaveTalentModal}
            message={`Save Profile`}
            // message2={}
            onHide={() => dispatch(toggleShowSaveModal())}
          >
            <div className="alert alert-info">
              <p>Talent : {jobApplicationObject.first_name}</p>

              <p>Job : {jobApplicationObject.jobTitle.name}</p>

              {`Saved Profiles will appear on the talents page`}
            </div>
          </ConfirmationModal>
        )}

      {showDeleteSavedTalentModal &&
        savedTalentObject.hasOwnProperty("id") &&  savedTalentObject.hasOwnProperty("first_name")&& (
          <ConfirmationModal
            isDanger={true}
            offerJobFunc={() => {}}
            confirmText="Delete"
            cancelText="CANCEL"
            loading={saveTalentProfileState.loading}
            actionButtonFn={() => {
              DeleteSavedProfile(savedTalentObject);
            }}
            show={showDeleteSavedTalentModal}
            message={`Delete Saved Profile`}
            message2={`Delete profile for ${savedTalentObject.first_name}`}
            onHide={() => dispatch(toggleDeleteSavedTalent())}
          >
            
          </ConfirmationModal>
        )}

      {isSavedProfile ? (
        <>
          <>
            <WhiteBgDiv
              loading={
                talentsWhichAppliedJob.loading || talentsRecommendedJob.loading
              }
            >
              <>
                <div className="mb-5">
                  <div className="position-relative">
                    <div className="position-absolute top-0 start-0"></div>
                    <div className="position-absolute top-0 end-0"></div>
                  </div>
                </div>

                <div>
                  <Tabs
                    defaultActiveKey={tabs[0]["id"]}
                    id="fill-tab-example"
                    className="mb-3"
                    // justify
                  >
                    {tabs.map((tab, index) => {
                      return (
                        <Tab
                          key={index}
                          style={{ backgroundColor: "transparent" }}
                          eventKey={tab.id}
                          title={tab.title}
                        >
                          <>{tab.component}</>
                        </Tab>
                      );
                    })}
                  </Tabs>
                </div>
              </>
            </WhiteBgDiv>
          </>
        </>
      ) : (
        <>
          <CompanyLayout pageTitle="Manage Jobs" pageHeaderRight={undefined}>
            <>
              <WhiteBgDiv
                loading={
                  talentsWhichAppliedJob.loading ||
                  talentsRecommendedJob.loading
                }
              >
                <>
                  <div className="mb-5">
                    <div className="position-relative">
                      <div className="position-absolute top-0 start-0">
                        <h4>
                          {jobStatus === "draft" ? (
                            <SaveAsIcon
                              style={{ color: PRIMARY_COLOR }}
                              color={PRIMARY_COLOR}
                            />
                          ) : jobStatus === "progress" ? (
                            <PodcastsIcon
                              style={{ color: PRIMARY_COLOR }}
                              color={PRIMARY_COLOR}
                            />
                          ) : (
                            <Lock />
                          )}{" "}
                          {title !== undefined && (
                            <AppLink
                              to={`${HOME_ROUTES.index}${HOME_ROUTES.viewJob}${jobID}`}
                            >
                              {title.name}
                            </AppLink>
                          )}
                        </h4>
                        <h5>
                          {status !== 0 && status === "recommended" ? (
                            <>
                              {talentsRecommendedJob.data.length !==
                                undefined &&
                                talentsRecommendedJob.data.length}{" "}
                              Recommended Talents
                            </>
                          ) : (
                            <>
                              {talentsApplied.talents !== undefined &&
                                talentsApplied.talents.length}{" "}
                              Applied Talents
                            </>
                          )}
                        </h5>
                      </div>
                      <div className="position-absolute top-0 end-0"></div>
                    </div>
                  </div>

                  <div style={{ marginTop: 80 }}>
                    <Tabs
                      defaultActiveKey={tabs[0]["id"]}
                      id="fill-tab-example"
                      className="mb-3"
                    >
                      {tabs.map((tab, index) => {
                        return (
                          <Tab
                            key={index}
                            style={{ backgroundColor: "transparent" }}
                            eventKey={tab.id}
                            title={tab.title}
                          >
                            <>{tab.component}</>
                          </Tab>
                        );
                      })}
                    </Tabs>
                  </div>
                </>
              </WhiteBgDiv>
            </>
          </CompanyLayout>
        </>
      )}
    </div>
  );
}

export default CompanyViewTalents;
