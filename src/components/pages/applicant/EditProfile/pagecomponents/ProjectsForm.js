import React from "react";
import { WHITE_COLOR } from "../../../../../constants/AppColors";
import { MONTHS } from "../../../../../constants/utils";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import TalentProjectsList from "./TalentProjectsList";
import classStyle from "../EditProfile.module.css";
import { LinearProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { handleValidateUrl } from "../../../../../app-redux/features/TalentProfile/TalentProfileSlice";

function ProjectsForm({
  sectionName,
  data,
  loading,
  dispatch,
  talentProjects,
  handlePostProjects,
  handleAddForm,
  handleTextInputFn,
  handleOnDateChangeFn,
  handlePostProject,
  handleOnMultiSelect,
  toggleEdit,
  isEdit,
  recentlyUpdated,
  handleTextInputCheckEmptyValueFn,
  toggleDelete,
  handleCheckBoxChange,
  handleValidateStartEndDates,
}) {
  const handleCheckBox = (e, meta) => {
    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleCheckBoxChange({
        state: "projects",
        valueToUpdate: e.target.checked,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };
  const handleDelete = (data) => {
    dispatch(toggleDelete(JSON.stringify(data)));
  };

  const handleEditProject = (data) => {
    // console.log(data)
    dispatch(toggleEdit(JSON.stringify(data)));
  };

  const handleAddProject = () => {
    handlePostProjects(data);
  };
  let handleTextChange = (e, meta) => {
    let { value, name } = e.target;
    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleTextInputFn({
        state: "projects",
        valueToUpdate: value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let handleDateChange = (e, meta) => {
    // console.log(e);
    dispatch(handleValidateStartEndDates({ state: "projects" }));

    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleOnDateChangeFn({
        state: "project_data",
        valueToUpdate: e,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };
  let handleOnBlur = (e, meta) => {
    dispatch(handleValidateUrl({ state: "projects" }));

    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleTextInputCheckEmptyValueFn({
        state: "project_data",
        valueToUpdate: e.target.value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let handleMultiChange = (e, meta) => {
    // console.log(e);
    // console.log(meta);

    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleOnMultiSelect({
        state: "project_data",
        valueToUpdate: e,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  const skillData = useSelector((state) => state.skill);

  const { skillsState } = skillData;
  const { data: skills } = skillsState;
  const { results: skillsResults } = skills;
  return (
    <div>
      {!isEdit && (
        <>
          <h4 className="fw-bold">{sectionName}</h4>
          {Array.isArray(talentProjects) &&
            talentProjects.map((list, index) => {
              return (
                <TalentProjectsList
                  handleDelete={handleDelete}
                  recentlyUpdated={recentlyUpdated}
                  skillsResults={skillsResults}
                  handleEdit={handleEditProject}
                  data={list}
                  key={`${list.id}${index}`}
                ></TalentProjectsList>
              );
            })}
        </>
      )}

      {data.map((education, index_1) => {
        return (
          <span key={index_1}>
            {education.map((bio_1, index_2) => {
              return (
                <AppRow className="gx-5" key={bio_1.id}>
                  {/* {JSON.stringify(bio_1)} */}
                  {bio_1.children.map((bio_2, index) => {
                    if (bio_2.hidden !== true) {
                      return (
                        <AppCol size={12 / bio_1.colums} key={bio_2.id}>
                          <FormInputRenderer
                            onBlurValidation={
                              bio_2.type === "text-input" ||
                              bio_2.type === "text-area-tiny"
                                ? handleOnBlur
                                : {}
                            }
                            handleChange={
                              bio_2.type === "text-input" ||
                              bio_2.type === "text-area" ||
                              bio_2.type === "text-area-tiny"
                                ? handleTextChange
                                : bio_2.type === "year-month"
                                ? handleDateChange
                                : bio_2.type === "r-select" ||
                                  bio_2.type === "multi-select"
                                ? handleMultiChange
                                : bio_2.type === "checkbox"
                                ? handleCheckBox
                                : {}
                            }
                            type={bio_2.type}
                            metaData={{
                              meta: {
                                DataKey: index_1,
                                RowKey: index_2,
                                ChildKey: index,
                              },
                              isMulti: bio_2.type === "r-select" ? true : false,
                              label: bio_2.label,
                              value: bio_2.value,
                              defaultValues2:
                                bio_2.type === "r-select"
                                  ? bio_2.value
                                  : [{ name: "nothing" }],
                              isEdit: isEdit,

                              name: bio_2.name,
                              input_type: bio_2.input_type,
                              inputId: "settings_input_fields",
                              data:
                                bio_2.name === "skills"
                                  ? skillsResults !== undefined
                                    ? skillsResults
                                    : []
                                  : bio_2.data,
                              type: bio_2.input_type,
                              has_child: bio_2.has_child,
                              isRequired: bio_2.isRequired,
                              errorMessage:
                                (bio_2.type === "text-input" &&
                                  bio_2.errorMessage) ||
                                bio_2.URLErrorMessage,
                              id: bio_2.id,
                              placeholder: bio_2.placeholder,
                              message: bio_2.dateErrorMessage,
                              disabled: bio_2.disabled,
                              className:
                                bio_2.hasError ||
                                bio_2.hasDateError ||
                                bio_2.hasURLError
                                  ? classStyle.red_input
                                  : "",
                            }}
                          ></FormInputRenderer>
                        </AppCol>
                      );
                    }
                  })}
                </AppRow>
              );
            })}
          </span>
        );
      })}

      {!isEdit ? (
        <>
          <hr></hr>
          <center>
            <AppButton
              size="small"
              label={`+ Save ${sectionName}`}
              onClick={() => handleAddProject()}
            ></AppButton>
          </center>

          <hr></hr>
        </>
      ) : (
        <AppButton
          loading={loading}
          size="small"
          // style={{ backgroundColor: WHITE_COLOR, color: "black" }}
          label={`Update ${sectionName}`}
          onClick={() => handleAddProject()}
        ></AppButton>
      )}

      {loading && <LinearProgress />}
    </div>
  );
}

export default ProjectsForm;
