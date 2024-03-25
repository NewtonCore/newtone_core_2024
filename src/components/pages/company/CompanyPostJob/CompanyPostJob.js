import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  DeleteSkill,
  handleOnChangeTextInput,
  handleOnSelectInput,
  handleRadioChange,
  PostCompanyJob,
  PostjobExperienceSkills,
  preloadSkillData,
  resetJobForm,
  toggleDeleteSkill,
  toggleEditSkill,
  toggleShowPublishJobModalModal,
  toggleShowPublishJobSuccessModalModal,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import {
  checkHasExpect_StartDateError,
  checkMinMaxSalaryError,
  checkObjectHasDateError,
  checkPropertiesIsEmpty,
  combineTwoFormData,
  convertSkillsToFormData,
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../../constants/utils";
import { COMPANY_ROUTE } from "../../../../routes/RouteLinks";
import AppButton from "../../../atoms/AppButton/AppButton";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import PostJobConfirmation from "../../../organisms/PostJobConfirmation/PostJobConfirmation";
import PostJobSuccessModal from "../../../organisms/PostJobConfirmation/PostJobSuccessModal";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import PostJobFormSkill from "./pagecomponents/PostJobFormSkill";

function CompanyPostJob() {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const editCompanyData = useSelector((state) => state.editCompany);

  const { companyProfile } = editCompanyData;
  const { data: companyProfileData } = companyProfile;

  const {
    experienceSkills,
    showPublishJobModal,
    showPublishJobSuccessModal,
    postCompanyJobState,
    showDeleteSkillModal,
    deleteSkillState,
    skillObject,
    showEditSkillModal,
  } = jobCompanyData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // preload the education page when educationObject

    const _skillObject = { ...skillObject };
    // console.log(_skillObject)

    if (showEditSkillModal) {
      dispatch(preloadSkillData(_skillObject));
    }
  }, [showEditSkillModal]);

  useEffect(() => {
    dispatch(resetJobForm());

    return () => {
      dispatch(resetJobForm());
    };
  }, []);

  const { company_job_array, skill_array, postJobExpState } = jobCompanyData;

  const handlePostSkill = () => {
    // console.log("fff");
    dispatch(
      PostjobExperienceSkills({
        data: skill_array[0],
      })
    );
  };

  const handlePostJob = ({ status, callback }) => {
    if (experienceSkills.length === 0) {
      toast.info("Kindly add at least one language stack", 1500);

      return 0;
    }

    let job_data_form = ExtractFieldsFromFormData(company_job_array);
    job_data_form["status"] = status;

    //  console.log(data_skill_form)
    job_data_form = JsonToformData(job_data_form);

    // add status to json
    let data_skills = convertSkillsToFormData(experienceSkills);

    let combined_data = combineTwoFormData(job_data_form, data_skills);
    // console.log(combined_data)
    dispatch(PostCompanyJob({ data: combined_data }))
      .unwrap()
      .then((res) => {
        setTimeout(() => {
          // console.log(res);
          if (status === "progress") {
            dispatch(toggleShowPublishJobSuccessModalModal());
          }
          if (callback !== undefined) {
            callback(res.id);
          }
        }, 100);
      })
      .catch((error) => console.error(error));
    // console.log(combined_data.values())
  };

  const handleConfirmPublishJob = () => {
    let _object = ExtractFieldsFromFormData(company_job_array, true);
    if (parseFloat(_object.min_salary) !== "") {
      if (parseFloat(_object.min_salary) < 0) {
        toast.info("Minimum salary range should not be negative", 1500);
        return 0;
      }
    }

    if (parseFloat(_object.max_salary) !== "") {
      if (parseFloat(_object.max_salary) < 1) {
        toast.info(
          "Maximum salary range should not be negative and less than 1",
          1500
        );
        return 0;

      }
    }

    let _object2 = ExtractFieldsFromFormData(
      company_job_array,
      true,
      "hasMinMaxError"
    );

    let _object3 = ExtractFieldsFromFormData(
      company_job_array,
      true,
      "hasDateError"
    );

    //

    let checkIfDataEmpty = checkPropertiesIsEmpty(_object);
    let checkSalaryError = checkMinMaxSalaryError(_object2);
    let checkDates = checkHasExpect_StartDateError(_object3);

    


    // console.log({checkDates})
    // console.log({_object})
    // console.log({_object3})

    // console.log(checkSalaryError)

    if (checkSalaryError) {
      toast.info("Kindly check the salary error", 1500);

      return 0;
    }

    if (checkDates) {
      toast.info("Kindly check the closing  and start date error", 1500);

      return 0;
    }

    if (checkIfDataEmpty) {
      toast.info("Kindly fill in all required fields", 1500);

      return 0;
    }

    if (experienceSkills.length === 0) {
      toast.info("Kindly add at least one language stack", 1500);

      return 0;
    }
    dispatch(toggleShowPublishJobModalModal());
  };

  const handleViewJobPosted = () => {
    dispatch(toggleShowPublishJobSuccessModalModal());

    setTimeout(() => {
      navigate(
        `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewJob}${postCompanyJobState.data.id}`
      );
    }, 1000);
  };

  const deleteSkill = () => {
    dispatch(DeleteSkill({ id: skillObject.id }))
      .unwrap()
      .then((res) => {
        dispatch(toggleDeleteSkill());
      });
  };

  return (
    <div>
      <CompanyLayout pageTitle="Post a Job">
        <PostJobConfirmation
          loading={postCompanyJobState.loading}
          publishFn={() => handlePostJob({ status: "progress" })}
          onHide={handleConfirmPublishJob}
          viewTalentFn={() => {
            handlePostJob({
              status: "draft",
              callback: (id) =>
                navigate(
                  `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.view_talents}${id}?status=recommended`
                ),
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
        <WhiteBgDiv loading={companyProfile.loading}>
          {companyProfileData.hasOwnProperty("user") ? (
            <>
              <PostJobFormSkill
                loadingAddingSkill={postJobExpState.loading}
                // technicalSkills={}
                handleRadioFn={handleRadioChange}
                postingJobLoading={postCompanyJobState.loading}
                isEdit={false}
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
                message={`Deleting Skill`}
                onHide={() => dispatch(toggleDeleteSkill())}
              ></PostJobFormSkill>

              <AppButton
                onClick={() => handleConfirmPublishJob()}
                type="submit"
                label="Post Job"
              ></AppButton>
            </>
          ) : (
            <>
              {!companyProfile.loading && (
                <EmptyData
                  actionLabel="Update Company Profile"
                  linkPath={"/" + COMPANY_ROUTE.index + COMPANY_ROUTE.profile}
                  navigation="#"
                  hasAction={true}
                  title="No Company Profile"
                  message="Cannot post a job without updating company profile. Click on Update Company Profile button below to proceed."
                />
              )}
            </>
          )}
        </WhiteBgDiv>
      </CompanyLayout>
    </div>
  );
}

export default CompanyPostJob;
