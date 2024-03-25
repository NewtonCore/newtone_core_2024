import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ConfirmationModal from "../../../../organisms/ConfirmationModal/ConfirmationModal";
import SkillForm from "../../../applicant/EditProfile/pagecomponents/SkillForm";
import CompanyPostJobForm from "./CompanyPostJobForm";
import {
  preloadSkillData,
  toggleEditSkill,
} from "../../../../../app-redux/features/jobCompany/jobCompanySlice";
import { useSelector } from "react-redux";
import ModalEditForm from "../../../applicant/EditProfile/pagecomponents/ModalEditForm";

function PostJobFormSkill({
  isEdit,
  handlePostSkill,
  handleSelectFn,
  handleTextInputFn,
  handleRadioFn,
  dispatch,
  sectionName = "Language Stack",
  skillList,
  skill_data,
  form_data,
  loading_delete,
  deleteSkill,
  showDeleteSkillModal,
  onHide,
  toggleDeleteSkill,
  postingJobLoading,
  jobObject = "",
  loadingAddingSkill,
}) {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const [formHasLoaded, setFormHasLoaded] = useState(true);
  const [loadingForm, setLoadingForm] = useState(false);

  const { skillObject, showEditSkillModal } = jobCompanyData;

  const handleEditSkill = (data) => {
    // console.log(data);
    dispatch(toggleEditSkill(JSON.stringify(data)));
  };

  useEffect(() => {
    // preload the education page when educationObject

    const _skillObject = { ...skillObject };
    // console.log(_skillObject);

    if (showEditSkillModal) {
      dispatch(preloadSkillData(_skillObject));
    }
  }, [showEditSkillModal]);

  useEffect(() => {
    // setLoadingForm(true);
    // if (jobObject !== null) {
    //   setTimeout(() => {
    //     setFormHasLoaded(true);
    //     setLoadingForm(false);
    //   }, 1000);
    // } else {
    //   setLoadingForm(false);
    //   setFormHasLoaded(false);
    // }
  }, [jobObject]);
  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading_delete || postingJobLoading || loadingForm}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <ModalEditForm
        toggleFunction={() => handleEditSkill()}
        heading="Edit Skill"
        show={showEditSkillModal && Object.keys(skillObject).length >= 0}
      >
        <SkillForm
          isEdit
          toggleEdit={handleEditSkill}
          toggleDelete={toggleDeleteSkill}
          handlePostSkill={handlePostSkill}
          handleSelectFn={handleSelectFn}
          handleTextInputFn={handleTextInputFn}
          dispatch={dispatch}
          sectionName={sectionName}
          skillList={skillList}
          data={skill_data}
          loading={loadingAddingSkill}
        />
      </ModalEditForm>

      {formHasLoaded && (
        <>
          <ConfirmationModal
            loading={loading_delete}
            actionButtonFn={deleteSkill}
            show={showDeleteSkillModal}
            message={`Delete Skill`}
            onHide={onHide}
            message2="Are you sure you want to delete?"
          />

          <CompanyPostJobForm isEdit={isEdit} data={form_data} />

          {!showEditSkillModal && (
            <>
              <SkillForm
                toggleEdit={handleEditSkill}
                toggleDelete={toggleDeleteSkill}
                handlePostSkill={handlePostSkill}
                handleSelectFn={handleSelectFn}
                handleTextInputFn={handleTextInputFn}
                dispatch={dispatch}
                sectionName={sectionName}
                skillList={skillList}
                data={skill_data}
                loading={loadingAddingSkill}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default PostJobFormSkill;
