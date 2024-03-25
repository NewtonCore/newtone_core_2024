import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";

function FindJobDropDownForm({ data, handleSelectFn = {} }) {
  const dispatch = useDispatch();

  let handleSelectChange = (value, meta) => {
    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleSelectFn({
        state: "find_job_select_search",
        valueToUpdate: JSON.parse(value),
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  const skillData = useSelector((state) => state.skill);

  const { skillsState } = skillData;
  const { data: skills } = skillsState;
  let { results: skillsResultsAPI } = skills;
  let skillsResults =
    skillsResultsAPI !== undefined
      ? [{ id: "all", name: "All" }, ...skillsResultsAPI]
      : [];
  //   console.log(skillsResults)
  return (
    <div>
      {/* {JSON.stringify(data)} */}

      {Array.isArray(data) &&
        data.map((bio_1, form_index) => {
          return (
            <AppRow className="gx-5" key={bio_1.id}>
              {bio_1.children.map((bio_2, child_index) => {
                if (bio_2.hidden !== true) {
                  return (
                    <AppCol size={12 / bio_1.colums} key={bio_2.id}>
                      {/* {JSON.stringify(bio_2)} */}
                      <FormInputRenderer
                        onBlurValidation={() => {}}
                        handleChange={
                          bio_2.type === "r-select" ? handleSelectChange : {}
                        }
                        type={bio_2.type}
                        metaData={{
                          meta: { RowKey: form_index, ChildKey: child_index },
                          //   label: bio_2.label,
                          value: bio_2.value,
                          name: bio_2.name,
                          input_type: bio_2.input_type,
                          inputId: "settings_input_fields",
                          data:
                            bio_2.name === "skill"
                              ? Array.isArray(skillsResults) &&
                                skillsResults.map((skill) => skill)
                              : bio_2.data,
                          type: bio_2.input_type,
                          isRequired: bio_2.isRequired,
                          maxlength: bio_2.maxlength,
                          disabled: bio_2.disabled,
                          optionValue:"name",
                          errorMessage:
                            bio_2.type === "text-input" ||
                            (bio_2.type === "text-area" && bio_2.errorMessage),
                        }}
                      ></FormInputRenderer>
                    </AppCol>

                    // </div>
                  );
                }
              })}
            </AppRow>
          );
        })}
    </div>
  );
}

export default FindJobDropDownForm;
