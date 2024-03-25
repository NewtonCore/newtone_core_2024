import { LinearProgress } from "@mui/material";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  deleteCompanyJob,
  getJobByCompany,
  handleOnSelectInput,
  toggleShowCompanyDeleteModal,
  togglePayPalModal,
  PostPaymentTransaction,
  toggleEditFormJob,
  preloadJobData,
  PostjobExperienceSkills,
  handleOnChangeTextInput,
  toggleShowPublishJobSuccessModalModal,
  PostCompanyJob,
  toggleShowPublishJobModalModal,
  toggleDeleteSkill,
  DeleteSkill,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import {
  combineTwoFormData,
  convertSkillsToFormData,
  ExtractFieldsFromFormData,
  JsonToformData,
  removeNullValues,
} from "../../../../constants/utils";
import { COMPANY_ROUTE } from "../../../../routes/RouteLinks";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import ConfirmationModal from "../../../organisms/ConfirmationModal/ConfirmationModal";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import PaginationNextPrevious from "../../../organisms/PaginationNextPrevious/PaginationNextPrevious";
import PostJobConfirmation from "../../../organisms/PostJobConfirmation/PostJobConfirmation";
import PostJobSuccessModal from "../../../organisms/PostJobConfirmation/PostJobSuccessModal";
import SubscriptionModal from "../../../organisms/SubscriptionModal/SubscriptionModal";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import ModalEditForm from "../../applicant/EditProfile/pagecomponents/ModalEditForm";
import PostJobFormSkill from "../CompanyPostJob/pagecomponents/PostJobFormSkill";
import MyJobsTable from "./pagecomponents/MyJobsTable";
import SortByForm from "./SortByForm";
import {
  getOfflineData,
  removeValueFromOffline,
} from "../../../../constants/OfflineStorage";

function CompanyJobs() {
  // const navigate = useNavigate();
  const effectJob = useRef(false);
  const jobCompanyData = useSelector((state) => state.jobCompany);

  // const appData = useSelector((state) => state.appData);

  const [formHasLoaded, setFormHasLoaded] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const {
    jobByCompany,
    showDeleteCompanyModal,
    companyJobDetails,
    deleteCompanyState,
    job_ordering_form,
    job_ordering,
    company_job_array,
    showEditJobForm,
    jobObject,
    skill_array,
    experienceSkills,
    postCompanyJobState,
    showPublishJobModal,
    showPublishJobSuccessModal,
    deleteSkillState,
    showDeleteSkillModal,
    skillObject,
    postJobExpState
  } = jobCompanyData;
  const { data: jobByCompanyData } = jobByCompany;
  const { results: jobResults, links: allJobsLinks } = jobByCompanyData;

  const { next, previous } =
    allJobsLinks !== undefined ? allJobsLinks : { next: null, previous: null };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const deleteSkill = () => {
    dispatch(DeleteSkill({ id: skillObject.id }))
      .unwrap()
      .then((res) => {
        dispatch(toggleDeleteSkill());
      });
  };

  const handlePostSkill = () => {
    // console.log("fff");
    dispatch(
      PostjobExperienceSkills({
        data: skill_array[0],
      })
    );
  };

  // useEffect(() => {
  //   setLoadingForm(true);
  //   if (jobObject !== null) {
  //     setTimeout(() => {
  //       setFormHasLoaded(true);
  //       setLoadingForm(false);
  //     }, 1000);
  //   } else {
  //     setLoadingForm(false);
  //     setFormHasLoaded(false);
  //   }
  // }, [jobObject]);

  const getJobFromLocalStorage = async () => {
    let jobObjectLocalStorage = getOfflineData("@companyJob");

    jobObjectLocalStorage.then((res) => {
      if (res === null) {
        // dispatch(getTalent());
      } else {
        dispatch(toggleEditFormJob(JSON.stringify(res)));

        setTimeout(() => {
          removeValueFromOffline("@companyJob");
        }, 1500);
      }
    });
  };

  useEffect(() => {
    getJobFromLocalStorage();
    // dispatch(toggleEditFormJob(JSON.stringify(jobObjectLocalStorage)));
  }, []);

  useEffect(() => {
    if (jobObject !== null) {
      dispatch(preloadJobData(jobObject));
    }
  }, [jobObject]);

  useEffect(() => {
    if (job_ordering !== undefined) {
      dispatch(getJobByCompany({ ordering: job_ordering }));
      effectJob.current = true;
    } else {
      if (!effectJob.current) {
        dispatch(getJobByCompany());
      }
    }

    return () => {
      effectJob.current = true;
    };
  }, [job_ordering]);

  const deleteJob = () => {
    dispatch(deleteCompanyJob(companyJobDetails.id));
  };

  const handleConfirmPublishJob = () => {
    // console.log("first");
    if (experienceSkills.length === 0) {
      toast.info("Kindly add at least one language stack", 1500);

      return 0;
    }
    // console.log("first2");
    dispatch(toggleShowPublishJobModalModal());

    // handlePostJob();
  };

  const handlePostJob = ({ status, callback }) => {
    if (experienceSkills.length === 0) {
      toast.info("Kindly add at least one language stack", 1500);
      return 0;
    }
    let data_form = ExtractFieldsFromFormData(company_job_array);

    data_form = removeNullValues(data_form)
    //  console.log(data_skill_form)
    data_form["status"] = status;

    let isEdit = jobObject.hasOwnProperty("id");

    if (isEdit) {
      if (
        typeof data_form.title === "object" ||
        typeof data_form.title === "string"
      ) {
        delete data_form.title;
      }
      data_form = JsonToformData(data_form);
    }

    let data_skills = convertSkillsToFormData(experienceSkills);

    let combined_data = combineTwoFormData(data_form, data_skills);

    // console.log(combined_data)
    dispatch(
      PostCompanyJob({
        data: combined_data,
        id: jobObject.id,
        isEdit: isEdit,
      })
    )
      .unwrap()
      .then((res) => {
        setTimeout(() => {
          dispatch(toggleEditFormJob());

          if (status === "progress") {
            dispatch(toggleShowPublishJobSuccessModalModal());
          }
          if (callback !== undefined) {
            callback(res.id);
          }
        }, 100);
      })
      .catch((error) => toast.error(error));
    // console.log(combined_data.values())
  };

  const handleViewJobPosted = () => {
    dispatch(toggleShowPublishJobSuccessModalModal());

    setTimeout(() => {
      navigate(
        `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}${postCompanyJobState.data.id}`
      );
    }, 1000);
  };

  // console.log(jobCompanyData.paymentDone, "paymeb");
  return (
    <CompanyLayout
      pageTitleLink={
        <>
          <Link
            style={{ fontWeight: 300, color: "inherit" }}
            to={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.post_job}`}
          >
            Post a Job
          </Link>
        </>
      }
      pageTitle="My Jobs"
    >
      <AppBackDrop open={jobByCompany.loading || loadingForm}></AppBackDrop>
      <PostJobConfirmation
        loading={postCompanyJobState.loading}
        publishFn={() => handlePostJob({ status: "progress" })}
        onHide={handleConfirmPublishJob}
        viewTalentFn2={() => {
          dispatch(toggleShowPublishJobModalModal());
          navigate("/" + COMPANY_ROUTE.index + COMPANY_ROUTE.hired_talents);
        }}
        viewTalentFn={() => {
          handlePostJob({
            status: jobObject.status,
            callback: (id) => {
              dispatch(toggleEditFormJob());
              // console.log("first");
              setTimeout(() => {}, 3000);

              setFormHasLoaded(false);
              setTimeout(() => {
                navigate(
                  `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.view_talents}${id}?status=recommended`
                );
              }, 300);
            },
          });
          dispatch(toggleShowPublishJobModalModal());
        }}
        show={showPublishJobModal}
      />

      <PostJobSuccessModal
        jobLink={`${process.env.REACT_APP_WEB_URL}${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}${postCompanyJobState.data.id}`}
        viewJobFn={() => handleViewJobPosted()}
        onHide={() => dispatch(toggleShowPublishJobSuccessModalModal())}
        show={showPublishJobSuccessModal}
      />

      {jobObject !== null && (
        <ModalEditForm
          toggleFunction={() => dispatch(toggleEditFormJob())}
          show={showEditJobForm}
          heading={`${
            jobObject !== null
              ? `Edit ${jobObject.title !== null && jobObject.title.name} Job ${
                  jobObject.status === "draft" ? "(Draft)" : ""
                }`
              : "Edit Job"
          }`}
        >
          {formHasLoaded ? (
            <PostJobFormSkill
            loadingAddingSkill={postJobExpState.loading}
              jobObject={jobObject}
              postingJobLoading={postCompanyJobState.loading}
              isEdit={true}
              form_data={company_job_array}
              handlePostSkill={handlePostSkill}
              handleSelectFn={handleOnSelectInput}
              handleTextInputFn={handleOnChangeTextInput}
              dispatch={dispatch}
              sectionName="Language Stack"
              skillList={experienceSkills}
              skill_data={skill_array}
              toggleDeleteSkill={toggleDeleteSkill}
              loading_delete={deleteSkillState.loading}
              deleteSkill={() => {
                deleteSkill();
              }}
              showDeleteSkillModal={showDeleteSkillModal}
              message={`Delete Skill`}
              onHide={() => dispatch(toggleDeleteSkill())}
            ></PostJobFormSkill>
          ) : (
            <p>Loading form ...</p>
          )}

          <AppButton
            loading={loadingForm}
            onClick={() => handleConfirmPublishJob()}
            type="submit"
            label="Update Job"
          ></AppButton>
        </ModalEditForm>
      )}

      <ConfirmationModal
        loading={deleteCompanyState.loading}
        actionButtonFn={() => {
          deleteJob();
        }}
        show={showDeleteCompanyModal}
        message="Delete Job"
        message2={`Are you sure you want to delete job  ${
          companyJobDetails.title !== null
            ? companyJobDetails.hasOwnProperty("title")
              ? `with title ${companyJobDetails.title.name}?`
              : "."
            : "."
        }`}
        onHide={() => dispatch(toggleShowCompanyDeleteModal())}
      />

      <SubscriptionModal
        toggleFunction={() => dispatch(togglePayPalModal())}
        show={jobCompanyData.showSubScriptionModal}
        job={jobCompanyData.talentToBeSubscriibed}
        paymentDone={jobCompanyData.paymentDone}
        saveTransaction={(data) =>
          dispatch(PostPaymentTransaction({ data: data }))
          .unwrap()
          .then(res=>{

          }).catch(err=>{
            toast.error(err)
          })
        }
      />

      <WhiteBgDiv>
        {/* ---> {JSON.stringify(jobResults)} */}

        {jobResults !== undefined && (
          <>
            {jobResults.length === 0 ? (
              <>
                <EmptyData
                  actionLabel="Post a Job"
                  linkPath={"/" + COMPANY_ROUTE.index + COMPANY_ROUTE.post_job}
                  navigation="#"
                  hasAction={true}
                  title="No Jobs Available"
                  message="You have not published any jobs yet. Click on Post a Job button below"
                />
              </>
            ) : (
              <>
                <SortByForm
                  handleSelectFn={handleOnSelectInput}
                  data={job_ordering_form}
                />
                <MyJobsTable data={jobResults} />

                <PaginationNextPrevious
                  previous={previous}
                  next={next}
                  previousFn={() =>
                    dispatch(
                      getJobByCompany({
                        pageURL: previous !== undefined && previous,
                      })
                    )
                  }
                  nextFn={() =>
                    dispatch(
                      getJobByCompany({
                        pageURL: next !== undefined && next,
                      })
                    )
                  }
                />
              </>
            )}
          </>
        )}
      </WhiteBgDiv>
    </CompanyLayout>
  );
}

export default CompanyJobs;
