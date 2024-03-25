import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WHITE_COLOR } from "../../../../../constants/AppColors";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import ExperienceSkillsList from "./ExperienceSkillsList";
import { removeDuplicatesFromTwoObjArrays } from "../../../../../constants/utils";
import { LinearProgress } from "@mui/material";

function SkillForm({
  sectionName,
  data,
  dispatch,
  handleAddForm,
  handleTextInputFn,
  handleSelectFn,
  handlePostSkill,
  skillList,
  toggleDelete,
  loading,
  successAdding,
  toggleEdit,
  isEdit=false,
}) {
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    // console.log({data})
  },[isEdit])

  useEffect(() => {
    if (successAdding) {
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 100);
    }
  }, [successAdding]);

  const handleDeleteSkill = (data) => {
    dispatch(toggleDelete(JSON.stringify(data)));
  };

  const handleAddSkill = () => {
    // dispatch(handleAddForm());

    handlePostSkill(data);
  };

  let handleTextChange = (e, meta) => {
    // console.log(e.target.value)
    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleTextInputFn({
        state: "skill",
        valueToUpdate: value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let handleSelectChange = (value, meta) => {
    // let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;
    // console.log(meta)

    dispatch(
      handleSelectFn({
        state: "skill",
        valueToUpdate: JSON.parse(value),
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  const skillData = useSelector((state) => state.skill);

  const { skillsState } = skillData;
  const { data: skills } = skillsState;
  let { results: skillsResults } = skills;

  // filter skills that have a null value meaning they might have been deleted on the db
  let skillListFiltered  = skillList.filter((sr)=>{
    return sr.skill !==null
  })

  

  let filteredSkills = isEdit ?skillsResults: removeDuplicatesFromTwoObjArrays(
    skillListFiltered,
    skillsResults
  );

  
  // console.log(filteredSkills)

  return (
    <div className="mt-4">
      {!isEdit && (
        <>
          <h5>
            {sectionName}{" "}
            {skillsResults !== undefined && (
              <>
                ex: {""}
                {skillsResults.length > 3 &&
                  skillsResults.slice(0, 3).map((skill, index) => {
                    if (index + 1 === 3) {
                      return skill.name;
                    } else {
                      return skill.name + ", ";
                    }
                  })}
              </>
            )}
          </h5>
          {Array.isArray(skillListFiltered) &&
            skillListFiltered.map((list) => {
              return (
                <ExperienceSkillsList
                  handleDelete={handleDeleteSkill}
                  key={list.id}
                  data={list}
                  toggleEdit={toggleEdit}
                />
              );
            })}
        </>
      )}

      {Array.isArray(filteredSkills) && filteredSkills.length === 0 && (
        <div class="alert alert-warning" role="alert">
          No skills to choose from
        </div>
      )}
      {!success ? (
        <>
          {data.map((education, index_1) => {
            return (
              <span key={index_1}>
                {education.map((row, row_index) => {
                  return (
                    <AppRow className="gx-5" key={row.id}>
                      {row.children.map((child, child_index) => {
                        return (
                          <AppCol
                            size={12 / row.colums}
                            lg_size={12 / row.colums}
                            key={child.id}
                          >
                            <FormInputRenderer
                              handleChange={
                                child.type === "text-input"
                                  ? handleTextChange
                                  : child.type === "select" ||
                                    child.type === "r-select" ||
                                    child.type === "r-select-2"
                                  ? handleSelectChange
                                  : {}
                              }
                              type={child.type}
                              metaData={{
                                meta: {
                                  DataKey: index_1,
                                  RowKey: row_index,
                                  ChildKey: child_index,
                                },
                                label: child.label,
                                value: child.value,
                                name: child.name,
                                input_type: child.input_type,
                                inputId: "settings_input_fields",
                                min: child.min,
                                data:
                                  child.name === "skill"
                                    ? Array.isArray(filteredSkills) &&
                                      filteredSkills.map((skill) => skill)
                                    : child.data,
                                type: child.input_type,
                                isFromBackendData: child.isFromBackendData,
                                isRequired: child.isRequired,
                                errorMessage:
                                  child.type === "text-input" &&
                                  child.errorMessage,
                                valueName:
                                  child.name === "skill" ? "name" : undefined,
                                // handleChange: handleTextChange,
                                // handleSelectChange: handleSelectChange,
                              }}
                            ></FormInputRenderer>
                          </AppCol>
                        );
                      })}
                    </AppRow>
                  );
                })}
              </span>
            );
          })}

          <hr></hr>
          <center>
            <AppButton
              size="small"
              // style={{ backgroundColor: WHITE_COLOR, color: "black" }}
              label={`+ Save ${sectionName}`}
              onClick={() => handleAddSkill()}
            ></AppButton>
          </center>
        </>
      ) : (
        <LinearProgress />
      )}

      <hr></hr>
    </div>
  );
}

export default SkillForm;
