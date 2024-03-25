import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  DeleteEducation,
  DeleteProject,
  DeleteSkill,
  DeleteWork,
  getTalent,
  getTalentProjects,
  handleAddEducation,
  handleAddProjects,
  handleAddSkill,
  handleCheckBoxChange,
  handleMultiSelect,
  handleOnChangeTextInput,
  handleOnDateChange,
  handleOnSelectInput,
  handleTalentPhotoChange,
  handleTextInputCheckEmptyValueFn,
  handleValidateBioData,
  handleValidateEducation,
  handleValidateProjects,
  handleValidateSkill,
  handleValidateStartEndDates,
  handleValidateWorkExperience,
  PostEducation,
  PostTalent,
  PostTalentProject,
  PostTalentSkill,
  PostWorkExperience,
  preloadBioData,
  preloadEducationData,
  preloadProjectData,
  preloadWorkData,
  toggleDeleteEducation,
  toggleDeleteSkill,
  toggleDeleteWork,
  toggleDeletProject,
  toggleEditFormEducation,
  toggleEditProjectForm,
  toggleEditworkForm,
  updateTalentEducation,
  updateTalentProjects,
  updateTalentWorkExperience,
} from "../../../../app-redux/features/TalentProfile/TalentProfileSlice";
import { getOfflineData } from "../../../../constants/OfflineStorage";
import {
  checkObjectHasDateError,
  checkObjectHasPhoneerror,
  checkObjectHasURLerror,
  checkPropertiesIsEmpty,
  combineTwoFormData,
  convertSkillsToFormData,
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../../constants/utils";
import AppButton from "../../../atoms/AppButton/AppButton";
import ConfirmationModal from "../../../organisms/ConfirmationModal/ConfirmationModal";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import BiodataForm from "./pagecomponents/BiodataForm";
import EducationForm from "./pagecomponents/EducationForm";
import ModalEditForm from "./pagecomponents/ModalEditForm";

import ProjectsForm from "./pagecomponents/ProjectsForm";
import SkillForm from "./pagecomponents/SkillForm";
import WorkForm from "./pagecomponents/WorkForm";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";

function EditProfile() {
  const bioDataRef = useRef(null);
  const workDataRef = useRef(null);
  const educationDataRef = useRef(null);
  const projectDataRef = useRef(null);
  const [data, setdata] = useState([]);

  const clearAll_Toasts = () => toast.dismiss();

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  const authData = useSelector((state) => state.auth);
  let { loginUserState } = authData;
  let { data: userData } = loginUserState;
  let {
    talentState: talentSliceData,
    showEditEducationModal,
    educationObject,
    skillObject,
    showEditWorkModal,
    workObject,
    projectsObject,
    showEditProjectModal,
    showDeleteEducationModal,
    showDeleteProjectModal,
    showDeleteWorkModal,
    deleteWorkState,
    showDeleteSkillModal,
    deleteEducationState,
    deleteProjectState,
    deleteSkillState,
    PostSkillState,
    talentState,
  } = TalentProfileData;

  let { data: talentDataResult } = talentSliceData;
  // let { results: talentDataResult } = talentData;

  const dispatch = useDispatch();

  const {
    bio_data_array,
    education_array,
    work_experience_array,
    skill_array,
    postTalentState,
    projects_array,
    talentEducation,
    talentWorkExperience,
    talentProjects,
    postEducationState,
    PostProjectsState,
    PostWorkExperienceState,
    talentSkills,
  } = TalentProfileData;

  const { results: talentSkillsResults } = talentSkills.data;

  const executeScroll = (ref) => ref.current.scrollIntoView();

  const handleEditProfile = (skills) => {
    // handleEducation()
    clearAll_Toasts();
    //validate the biodata form
    dispatch(handleValidateBioData());

    //extract the fields only that are required

    let bio_data_object = ExtractFieldsFromFormData(bio_data_array, true);
    let bio_data_object2 = ExtractFieldsFromFormData(
      bio_data_array,
      true,
      "hasPhoneError"
    );

    //
    let checkIfBioDataEmpty = checkPropertiesIsEmpty(bio_data_object);
    let checkIfBioDatHasPhoneError = checkObjectHasPhoneerror(bio_data_object2);

    // console.log(bio_data_object2,checkIfBioDatHasPhoneError)

    if (checkIfBioDatHasPhoneError) {
      setTimeout(() => {
        executeScroll(bioDataRef);
      }, 500);

      toast.warning("Kindly check the phone error");
      return 0;
    }

    if (checkIfBioDataEmpty) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(bioDataRef);
      }, 500);

      toast.warning("Kindly fill in the required fields");
    } else {
      // let data_skill_form = ExtractFieldsFromFormData(skill_array[0]);

      let data_skills = convertSkillsToFormData(
        skills === undefined ? talentSkillsResults : skills,
        "user_skills"
      );

      let bio_data = ExtractFieldsFromFormData(bio_data_array);

      if (typeof bio_data.photo === "string") {
        delete bio_data.photo;
      }

      if (bio_data.type === "permanent") {
        bio_data.period = "";
      }

      if(typeof bio_data["country"] === "object"){
        bio_data["country"] = bio_data["country"]["iso"]
      }
      bio_data = JsonToformData(bio_data);
      // check if country is object

      
      let combined_data = combineTwoFormData(bio_data, data_skills);

      dispatch(
        PostTalent({
          data: combined_data,
          hasProfile: talentDataResult.hasOwnProperty("id") ? true : false,
          talentID: talentDataResult !== undefined ? talentDataResult.id : "",
        })
      );
    }
  };

  const handleWorkExperience = (data) => {
    clearAll_Toasts();
    if (talentDataResult.length === 0) {
      setTimeout(() => {
        executeScroll(bioDataRef);
      }, 500);
      toast.warning("Kindly fill in the talent form");
      return 0;
    }

    //validate the biodata form
    dispatch(handleValidateWorkExperience());

    //extract the fields only that are required
    let work_object = ExtractFieldsFromFormData(work_experience_array[0], true);

    let _object2 = ExtractFieldsFromFormData(
      work_experience_array[0],
      true,
      "hasDateError"
    );

    let checkDateError = checkObjectHasDateError(_object2);

    if (checkDateError) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(workDataRef);
        toast.warning("Kindly check start and end date", 1500);
      }, 500);

      return 0;
    }
    //
    let checkIfDataEmpty = checkPropertiesIsEmpty(work_object);

    if (checkIfDataEmpty) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(workDataRef);
      }, 500);

      toast.warning("Kindly fill in the required fields");
    } else {
      // PostWorkExperience

      dispatch(
        PostWorkExperience({
          data: data,
          isEdit: Object.keys(workObject).length >= 1,
          id: workObject.id,
        })
      )
        .unwrap()
        .then((res) => {
          if (!Object.keys(workObject).length >= 1) {
            dispatch(updateTalentWorkExperience(res));
          }
        });
    }
  };

  const handlePostSkill = (data) => {
    clearAll_Toasts();
    if (talentDataResult.length === 0) {
      setTimeout(() => {
        executeScroll(bioDataRef);
      }, 500);
      dispatch(handleValidateBioData());

      toast.warning(
        "Kindly fill in the talent form and click save profile below"
      );
      return 0;
    }

    //validate the  form
    dispatch(handleValidateSkill());

    //extract the fields only that are required
    let _object = ExtractFieldsFromFormData(skill_array[0], true);
    let checkIfDataEmpty = checkPropertiesIsEmpty(_object);

    if (checkIfDataEmpty) {
      toast.warning("Kindly fill in the required fields");
    } else {
      // PostWorkExperience

      dispatch(
        PostTalentSkill({
          data: data,
          isEdit: Object.keys(workObject).length >= 1,
          id: workObject.id,
        })
      )
        .unwrap()
        .then((res) => {
          setTimeout(() => {
            let skills = [...talentSkillsResults, res];
            handleEditProfile(skills);
          }, 100);
        })
        .catch((e) => {
          toast.error("Something went wrong.");
        });
    }
  };

  const handleEducation = async (data) => {
    clearAll_Toasts();

    if (talentDataResult.length === 0) {
      setTimeout(() => {
        executeScroll(educationDataRef);
      }, 500);

      toast.warning("Kindly fill in the education form");

      return 0;
    }

    //validate the biodata form
    dispatch(handleValidateEducation());
    // dispatch(handleValidateStartEndDates());

    //extract the fields only that are required

    let _object = ExtractFieldsFromFormData(education_array[0], true);

    let _object2 = ExtractFieldsFromFormData(
      education_array[0],
      true,
      "hasDateError"
    );

    let checkDateError = checkObjectHasDateError(_object2);
    let checkIfDataEmpty = checkPropertiesIsEmpty(_object);

    if (checkDateError) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(educationDataRef);
        toast.warning("Kindly check start and end date", 1500);
      }, 500);

      return 0;
    }

    if (checkIfDataEmpty) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(educationDataRef);
        toast.warning("Kindly fill in the required fields", 1500);
      }, 500);

      return 0;
    }

    // return 0

    if (!checkDateError && !checkIfDataEmpty) {
      dispatch(
        PostEducation({
          data: data,
          isEdit: Object.keys(educationObject).length >= 1,
          id: educationObject.id,
        })
      )
        .unwrap()
        .then((res) => {
          if (!Object.keys(educationObject).length >= 1) {
            dispatch(updateTalentEducation(res));
          }
        });
    }
  };

  const handleProjects = (data) => {
    clearAll_Toasts();

    if (talentDataResult.length === 0) {
      setTimeout(() => {
        executeScroll(bioDataRef);
      }, 500);

      toast.warning("Kindly fill in the talent form", 3000);

      return 0;
    } else {
    }

    //validate the biodata form
    dispatch(handleValidateProjects());

    // alert(0)

    //extract the fields only that are required
    let _object = ExtractFieldsFromFormData(projects_array[0], true);
    let _object2 = ExtractFieldsFromFormData(
      projects_array[0],
      true,
      "hasDateError"
    );
    let _object3 = ExtractFieldsFromFormData(
      projects_array[0],
      true,
      "hasURLError"
    );

    let checkDateError = checkObjectHasDateError(_object2);
    let checkIfDataEmpty = checkPropertiesIsEmpty(_object);
    let checkURLError = checkObjectHasURLerror(_object3);

    if (checkDateError) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(projectDataRef);
        toast.warning("Kindly check start and end date", 1500);
      }, 500);

      return 0;
    }

    if (checkURLError) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(projectDataRef);
        toast.warning("The Projects URL is invalid", 1500);
      }, 500);

      return 0;
    }

    //

    if (checkIfDataEmpty) {
      // bioDataRef.current.scrollIntoView()
      setTimeout(() => {
        executeScroll(projectDataRef);
      }, 500);

      toast.warning("Kindly fill in the required fields");
    } else {
      // PostWorkExperience

      dispatch(
        PostTalentProject({
          data: data,
          isEdit: Object.keys(projectsObject).length >= 1,
          id: projectsObject.id,
        })
      )
        .unwrap()
        .then((res) => {
          if (!Object.keys(projectsObject).length >= 1) {
            dispatch(updateTalentProjects(res));
          }
          dispatch(getTalentProjects());
        });
    }
  };

  useEffect(() => {
    if (talentDataResult.hasOwnProperty("id")) {
      // preload the bio page when talent data is present
      dispatch(preloadBioData(talentDataResult));
    } else {
      //Preload the bio data with user info when talent info is undefined
      //this means that the user has not updated his/her talent information
      dispatch(preloadBioData(userData));
    }
  }, [talentDataResult, userData]);

  useEffect(() => {
    // preload the education page when educationObject

    const _educationObject = { ...educationObject };

    if (showEditEducationModal) {
      if (_educationObject.start_month !== "") {
        _educationObject.start_date = [
          `${_educationObject.start_year}`,
          `${_educationObject.start_month}`,
        ];
      }

      if (
        _educationObject.end_month !== "" &&
        _educationObject.end_month !== null
      ) {
        _educationObject.end_date = [
          `${_educationObject.end_year}`,
          `${_educationObject.end_month}`,
        ];
      }

      dispatch(preloadEducationData(_educationObject));
    }
  }, [showEditEducationModal]);

  useEffect(() => {
    // preload the work page when work

    if (showEditWorkModal) {
      let _workObject = { ...workObject };

      if (_workObject.start_month !== "") {
        _workObject.start_date = [
          `${_workObject.start_year}`,
          `${_workObject.start_month}`,
        ];
      }

      if (_workObject.end_month !== "" && _workObject.end_month !== null) {
        _workObject.end_date = [
          `${_workObject.end_year}`,
          `${_workObject.end_month}`,
        ];
      } else {
        _workObject.end_date = [``, ``];
      }

      dispatch(preloadWorkData(_workObject));
    }
  }, [showEditWorkModal]);

  useEffect(() => {
    // preload the project page

    //preload the start_date with the start month and start year

    if (showEditProjectModal) {
      let _projectsObject = { ...projectsObject };

      if (_projectsObject.start_month !== "") {
        _projectsObject.start_date = [
          `${_projectsObject.start_year}`,
          `${_projectsObject.start_month}`,
        ];
      }

      if (
        _projectsObject.end_month !== "" &&
        _projectsObject.end_month !== null
      ) {
        _projectsObject.end_date = [
          `${_projectsObject.end_year}`,
          `${_projectsObject.end_month}`,
        ];
      }

      //Get only the id of the skills to preload the edit form

      // _projectsObject.skills = _projectsObject.skills.map((val) =>
      //   val.id !== undefined ? val.id : val
      // );

      dispatch(preloadProjectData(_projectsObject));
    }
  }, [showEditProjectModal]);

  const deleteEducation = () => {
    dispatch(DeleteEducation({ id: educationObject.id }))
      .unwrap()
      .then((res) => {
        // dispatch(toggleDeleteEducation());
      });
  };

  const deleteProject = () => {
    dispatch(DeleteProject({ id: projectsObject.id }))
      .unwrap()
      .then((res) => {
        // dispatch(toggleDeletProject());
      });
  };

  const deleteWork = () => {
    dispatch(DeleteWork({ id: workObject.id }))
      .unwrap()
      .then((res) => {
        // dispatch(toggleDeleteWork());
      });
  };

  const deleteSkill = () => {
    dispatch(DeleteSkill({ id: skillObject.id }))
      .unwrap()
      .then((res) => {
        let skills = talentSkillsResults.filter((res2) => res2 !== skillObject);

        dispatch(toggleDeleteSkill());
      });
  };

  return (
    <div id="edit_profile_div">
      {/* {JSON.stringify(data)} */}
      {/* Edit education modal */}

      {postTalentState.loading && <AppBackDrop open={true}></AppBackDrop>}

      <ConfirmationModal
        loading={deleteSkillState.loading}
        actionButtonFn={() => {
          deleteSkill();
        }}
        show={showDeleteSkillModal}
        message={`Deleting Skill`}
        onHide={() => dispatch(toggleDeleteSkill())}
      />

      <ConfirmationModal
        loading={deleteEducationState.loading}
        actionButtonFn={() => {
          deleteEducation();
        }}
        show={showDeleteEducationModal}
        message={`Deleting Education`}
        onHide={() => dispatch(toggleDeleteEducation())}
      />

      <ConfirmationModal
        loading={deleteProjectState.loading}
        actionButtonFn={() => {
          deleteProject();
        }}
        show={showDeleteProjectModal}
        message={`Deleting Project`}
        onHide={() => dispatch(toggleDeletProject())}
      />

      <ConfirmationModal
        loading={deleteWorkState.loading}
        actionButtonFn={() => {
          deleteWork();
        }}
        show={showDeleteWorkModal}
        message={`Deleting Work Experience`}
        onHide={() => dispatch(toggleDeleteWork())}
      />

      {showEditEducationModal && Object.keys(educationObject).length >= 1 && (
        <ModalEditForm
          heading="Edit Education"
          show={
            showEditEducationModal && Object.keys(educationObject).length >= 1
          }
          toggleFunction={() => dispatch(toggleEditFormEducation())}
        >
          <div ref={educationDataRef}>
            {/* --- */}

            <EducationForm
              successAdding={postEducationState.success}
              handleTextInputCheckEmptyValueFn={
                handleTextInputCheckEmptyValueFn
              }
              handleValidateStartEndDates={handleValidateStartEndDates}
              isEdit
              toggleEdit={toggleEditFormEducation}
              loading={postEducationState.loading}
              handlePostEducation={handleEducation}
              talentEducation={
                talentState.data.hasOwnProperty("talenteducation_set")
                  ? talentState.data.talenteducation_set
                  : []
              }
              handleOnDateChangeFn={handleOnDateChange}
              handleTextInputFn={handleOnChangeTextInput}
              dispatch={dispatch}
              sectionName="Education"
              handleAddForm={handleAddEducation}
              data={education_array}
              handleCheckBoxChange={handleCheckBoxChange}
            />
          </div>
        </ModalEditForm>
      )}

      {showEditWorkModal && Object.keys(workObject).length >= 1 && (
        <ModalEditForm
          heading="Edit Work Experience"
          show={showEditWorkModal && Object.keys(workObject).length >= 1}
          toggleFunction={() => dispatch(toggleEditworkForm())}
        >
          <div ref={workDataRef}>
            {/* {JSON.stringify(educationObject)} */}

            {/* {JSON.stringify(education_array)} */}
            <WorkForm
              handleValidateStartEndDates={handleValidateStartEndDates}
              successAdding={PostWorkExperienceState.success}
              handleTextInputCheckEmptyValueFn={
                handleTextInputCheckEmptyValueFn
              }
              isEdit
              toggleEdit={toggleEditworkForm}
              loading={PostWorkExperienceState.loading}
              talentWork={
                talentState.data.hasOwnProperty("workexperience_set")
                  ? talentState.data.workexperience_set
                  : []
              }
              handlePostWork={handleWorkExperience}
              handleOnDateChangeFn={handleOnDateChange}
              handleTextInputFn={handleOnChangeTextInput}
              dispatch={dispatch}
              sectionName="Work Experience"
              data={work_experience_array}
              handleCheckBoxChange={handleCheckBoxChange}
            />
          </div>
        </ModalEditForm>
      )}

      {showEditProjectModal && Object.keys(projectsObject).length >= 1 && (
        <ModalEditForm
          heading="Edit Project"
          show={showEditProjectModal && Object.keys(projectsObject).length >= 1}
          toggleFunction={() => dispatch(toggleEditProjectForm())}
        >
          {/* {JSON.stringify(educationObject)} */}

          {/* {JSON.stringify(education_array)} */}
          <div ref={projectDataRef}>
            <ProjectsForm
              handleValidateStartEndDates={handleValidateStartEndDates}
              handleTextInputCheckEmptyValueFn={
                handleTextInputCheckEmptyValueFn
              }
              toggleEdit={toggleEditProjectForm}
              isEdit
              handleOnMultiSelect={handleMultiSelect}
              loading={PostProjectsState.loading}
              talentProjects={
                talentState.data.hasOwnProperty("talentproject_set")
                  ? talentState.data.talentproject_set
                  : []
              }
              handlePostProjects={handleProjects}
              handleOnDateChangeFn={handleOnDateChange}
              handleTextInputFn={handleOnChangeTextInput}
              dispatch={dispatch}
              sectionName="Projects"
              handleAddForm={handleAddProjects}
              data={projects_array}
              handleCheckBoxChange={handleCheckBoxChange}
            />
          </div>
        </ModalEditForm>
      )}

      {/*  */}
      <TalentLayout pageTitle="Edit Profile" pageHeaderRight={undefined}>
        <WhiteBgDiv loading={talentSliceData.loading}>
          {/* aaa  {JSON.stringify(talentDataResult)} */}

          <div ref={bioDataRef}>
            <BiodataForm
              userImage={
                talentSliceData.data.hasOwnProperty("photo")
                  ? talentSliceData.data.photo
                  : undefined
              }
              handleFileChange={handleTalentPhotoChange}
              handleTextInputCheckEmptyValueFn={
                handleTextInputCheckEmptyValueFn
              }
              handleTextInputFn={handleOnChangeTextInput}
              handleSelectFn={handleOnSelectInput}
              data={bio_data_array}
            />
          </div>

          <AppButton
            size="small"
            label="Save Profile"
            onClick={() => handleEditProfile()}
          ></AppButton>
          <br></br>
          <br></br>

          {talentDataResult.hasOwnProperty("id") && (
            <>
              <br></br>
              <SkillForm
                successAdding={PostSkillState.success}
                toggleDelete={toggleDeleteSkill}
                handlePostSkill={handlePostSkill}
                handleSelectFn={handleOnSelectInput}
                handleTextInputFn={handleOnChangeTextInput}
                dispatch={dispatch}
                sectionName="Skill"
                handleAddForm={handleAddSkill}
                data={skill_array}
                skillList={talentSkillsResults}
                loading={PostSkillState.loading}
              />

              {!showEditEducationModal && (
                <>
                  <div ref={educationDataRef}>
                    <EducationForm
                      successAdding={postEducationState.success}
                      handleTextInputCheckEmptyValueFn={
                        handleTextInputCheckEmptyValueFn
                      }
                      handleValidateStartEndDates={handleValidateStartEndDates}
                      recentlyUpdated={
                        postEducationState.data.length !== 0 &&
                        postEducationState.data.id
                      }
                      toggleEdit={toggleEditFormEducation}
                      toggleDelete={toggleDeleteEducation}
                      loading={postEducationState.loading}
                      handlePostEducation={handleEducation}
                      talentEducation={
                        talentState.data.hasOwnProperty("talenteducation_set")
                          ? talentState.data.talenteducation_set
                          : []
                      }
                      handleOnDateChangeFn={handleOnDateChange}
                      handleTextInputFn={handleOnChangeTextInput}
                      dispatch={dispatch}
                      sectionName="Education"
                      handleAddForm={handleAddEducation}
                      data={education_array}
                      handleCheckBoxChange={handleCheckBoxChange}
                    />
                  </div>

                  <br></br>
                </>
              )}
              {!showEditWorkModal && (
                <div ref={workDataRef}>
                  <WorkForm
                    handleValidateStartEndDates={handleValidateStartEndDates}
                    // PostWorkExperienceState
                    successAdding={PostWorkExperienceState.success}
                    handleTextInputCheckEmptyValueFn={
                      handleTextInputCheckEmptyValueFn
                    }
                    recentlyUpdated={
                      PostWorkExperienceState.data.length !== 0 &&
                      PostWorkExperienceState.data.id
                    }
                    toggleDelete={toggleDeleteWork}
                    toggleEdit={toggleEditworkForm}
                    loading={PostWorkExperienceState.loading}
                    talentWork={
                      talentState.data.hasOwnProperty("workexperience_set")
                        ? talentState.data.workexperience_set
                        : []
                    }
                    handlePostWork={handleWorkExperience}
                    handleOnDateChangeFn={handleOnDateChange}
                    handleTextInputFn={handleOnChangeTextInput}
                    dispatch={dispatch}
                    sectionName="Work Experience"
                    data={work_experience_array}
                    handleCheckBoxChange={handleCheckBoxChange}
                  />
                </div>
              )}

              {/* <LinksForm
                dispatch={dispatch}
                sectionName="Links"
                data={links_array}
                handleTextInputFn={handleOnChangeTextInput}
              /> */}

              {!showEditProjectModal && (
                <div ref={projectDataRef}>
                  <ProjectsForm
                    handleValidateStartEndDates={handleValidateStartEndDates}
                    handleTextInputCheckEmptyValueFn={
                      handleTextInputCheckEmptyValueFn
                    }
                    recentlyUpdated={
                      PostProjectsState.data.length !== 0 &&
                      PostProjectsState.data.id
                    }
                    toggleDelete={toggleDeletProject}
                    toggleEdit={toggleEditProjectForm}
                    handleOnMultiSelect={handleMultiSelect}
                    loading={PostProjectsState.loading}
                    talentProjects={
                      talentState.data.hasOwnProperty("talentproject_set")
                        ? talentState.data.talentproject_set
                        : []
                    }
                    handlePostProjects={handleProjects}
                    handleOnDateChangeFn={handleOnDateChange}
                    handleTextInputFn={handleOnChangeTextInput}
                    dispatch={dispatch}
                    sectionName="Projects"
                    handleAddForm={handleAddProjects}
                    data={projects_array}
                    handleCheckBoxChange={handleCheckBoxChange}
                  />
                </div>
              )}
            </>
          )}

          {/* <p>This button adds talent and education only for now</p> */}
        </WhiteBgDiv>
      </TalentLayout>
    </div>
  );
}

export default EditProfile;
