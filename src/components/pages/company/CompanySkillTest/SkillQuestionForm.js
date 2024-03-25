import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";
import {
  handleOnChangeFileInput,
  handleOnSelectInput,
} from "../../../../app-redux/features/Skill/skillSlice";

function SkillQuestionForm({ data,SetSkillSelected }) {
  const dispatch = useDispatch();

  const handleFileChange = (e, metaData, file) => {
    const { RowKey, ChildKey } = metaData.meta;
    dispatch(
      handleOnChangeFileInput({
        state: "skill_question",
        valueToUpdate: file,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  let handleSelectChange = (value, meta) => {
    const { DataKey, RowKey, ChildKey } = meta;
    // console.log(meta)

    if(SetSkillSelected !==undefined){
      SetSkillSelected(value)
    }

    // return 0
    dispatch(
      handleOnSelectInput({
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
  skillsResults  = skillsResults.filter((sr)=>{
    return sr.skill !==null
  })
  

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {Array.isArray(data) &&
        data.map((parent, form_index) => {
          return (
            <AppRow className="gx-5" key={parent.id}>
              {parent.children.map((child, child_index) => {
                if (child.hidden !== true) {
                  return (
                    <AppCol size={12 / parent.colums} key={child.id}>
                      <FormInputRenderer
                        onBlurValidation={() => {}}
                        handleChange={
                          child.type === "file"
                            ? handleFileChange
                            : child.type === "select" ||
                              child.type === "r-select" ||
                              child.type === "r-select-2"
                            ? handleSelectChange
                            : {}
                        }
                        type={child.type}
                        metaData={{
                          meta: { RowKey: form_index, ChildKey: child_index },
                          label: child.label,
                          value: child.value,
                          name: child.name,
                          input_type: child.input_type,
                          inputId: "settings_input_fields",
                          data:
                            child.name === "skill_id"
                              ? Array.isArray(skillsResults) &&
                                skillsResults.map((skill) => skill)
                              : child.data,
                          valueName: "name",
                          valId: "valId",
                          type: child.input_type,
                          isRequired: child.isRequired,
                          maxlength: child.maxlength,
                          disabled: child.disabled,
                          accept: ".txt",
                        }}
                      ></FormInputRenderer>
                    </AppCol>
                  );
                }
              })}
            </AppRow>
          );
        })}
    </div>
  );
}

export default SkillQuestionForm;
