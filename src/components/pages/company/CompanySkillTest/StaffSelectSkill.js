import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";
import {
  handleOnChangeFileInput,
  handleOnSelectInput,
} from "../../../../app-redux/features/Skill/skillSlice";

function StaffSelectSkill({ data,SetTalentSelected }) {
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
    SetTalentSelected(value)
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

    let talentSelected = talentResults.filter((t)=>{
        return parseInt(t.id) === parseInt(value)
    })

    if(talentSelected.length !== 0){
    SetTalentSelected(talentSelected[0])

    }
  };

  const talent = useSelector((state) => state.talent);

  const { talentState } = talent;
  const { data: talents } = talentState;
  let { results: talentResults } = talents;
  
  
//   console.log({talentState})

  return (
    <div>
        hahah
      {JSON.stringify(data)}
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
                              child.type === "r-select" 
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
                            child.name === "skill"
                              ? Array.isArray(talentResults) &&
                              talentResults.map((mydata) => mydata)
                              : child.data,
                          valId: "valId",
                          type: child.input_type,
                          isRequired: child.isRequired,
                          maxlength: child.maxlength,
                          disabled: child.disabled,
                          accept: ".txt",
                          valueName:
                          child.name === "skill" ? "first_name" : undefined,
                          optionValue:
                          child.name === "skill" ? "id" : undefined,
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

export default StaffSelectSkill;
