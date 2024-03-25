import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";
import {
  handleOnChangeFileInput,
  handleOnSelectInput,
} from "../../../../app-redux/features/Skill/skillSlice";
import { getAllTalents } from "../../../../app-redux/features/TalentSlice/talentSlice";

function TalentListForm({ data,SetTalentSelected }) {
  const dispatch = useDispatch();
  const [all_PageTalents,SetAllTalents]  = useState([])

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
        state: "talent",
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
  let { links: talentLinks } = talents;

  
  useEffect(()=>{
    
    if(talentResults !== undefined){
      let  all_talents = []

    let {next,previous} = talentLinks
    // console.log({next})

    if(next !==null){
      dispatch(getAllTalents(next)).then(res=>{
        let res_results =res.payload.results

        setTimeout(() => {
          const concatenatedArray = all_PageTalents.concat(res_results);
          SetAllTalents(concatenatedArray); 
        }, 1000);
     
        

        // console.log(res_results)
        // res_results.map((result)=>{
        // console.log(result)

         

        // })
        
        // Update the state with the new array

      
      })

    }


  }
  // console.log(all_PageTalents)

    
  },[talentResults])
  
//   console.log({talentState})

  return (
    <div>
      all_PageTalents {JSON.stringify(all_PageTalents.length)}
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
                            child.name === "talent"
                              ? Array.isArray(all_PageTalents) &&
                              all_PageTalents.map((mydata) => mydata)
                              : child.data,
                          valId: "valId",
                          type: child.input_type,
                          isRequired: child.isRequired,
                          maxlength: child.maxlength,
                          disabled: child.disabled,
                          accept: ".txt",
                          valueName:
                          child.name === "talent" ? "first_name" : undefined,
                          optionValue:
                          child.name === "talent" ? "id" : undefined,
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

export default TalentListForm;
