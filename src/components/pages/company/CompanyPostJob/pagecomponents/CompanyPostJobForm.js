import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleOnChangeTextInput,
  handleOnSelectInput,
  handleOnChangeFileInput,
  handleRadioChange,
  handleValidateJobForm,
  handleTextInputCheckEmptyValueFn,
  handleValidateStartEndDates,
  handleValidateMinMaxSalary,
} from "../../../../../app-redux/features/jobCompany/jobCompanySlice";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import currencies from "../../../../../constants/three_currencies.json";
import { ExtractFieldsFromFormData } from "../../../../../constants/utils";
import classStyle from "./CompanyJob.module.css";

function CompanyPostJobForm({ data, isEdit = false }) {
  const dispatch = useDispatch();

  const skillData = useSelector((state) => state.skill);

  const { technicalSkillsState } = skillData;
  const { data: skills } = technicalSkillsState;
  const { results: skillsResults } = skills;

  let onBlurValidation = () => {
    let _object = ExtractFieldsFromFormData(data[0], true);
    // let checkIfDataEmpty = checkPropertiesIsEmpty(_object);

    dispatch(handleValidateJobForm());
  };

  let handleOnBlur = (e, meta) => {

    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleTextInputCheckEmptyValueFn({
        state: "job_data",
        valueToUpdate: e.target.value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );

      dispatch(handleValidateMinMaxSalary());



  };

  let handleRadionFn = (e, meta) => {
    // console.log({e})
    // console.log({meta})

    // return 0

    let value = "";
    let name = "";

    if (e.target !== undefined) {
      value = e.target.value;
      name = e.target.name;
    } else {
      value = e;
    }

    const { RowKey, ChildKey } = meta;

    dispatch(
      handleRadioChange({
        state: "job_data",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  let handleTextChange = (e, meta) => {
    dispatch(handleValidateStartEndDates());
    let value = "";
    let name = "";

    if (e.target !== undefined) {
      value = e.target.value;
      name = e.target.name;
    } else {
      value = e;
    }
    const { RowKey, ChildKey } = meta;

    dispatch(
      handleOnChangeTextInput({
        state: "job_data",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  let handleSelectChange = (value, meta) => {
    // let { value, name } = e.target;

    const { RowKey, ChildKey } = meta;
    // console.log(meta)

    dispatch(
      handleOnSelectInput({
        state: "job_data",
        valueToUpdate: JSON.parse(value),
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  const handlePostJob = (e) => {
    e.preventDefault();
  };
  const handleFileChange = (e, metaData, file) => {
    // console.log(e, 'in the header')
    // console.log(metaData, 'in the header')
    // console.log(file, 'in the header')
    const { DataKey, RowKey, ChildKey } = metaData.meta;
    dispatch(
      handleOnChangeFileInput({
        state: "job_data",
        valueToUpdate: file,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  return (
    <form onSubmit={(e) => handlePostJob(e)}>
      {Array.isArray(data) &&
        data.map((input_row, input_row_index) => {
          return (
            <AppRow className="gx-5" key={input_row.id}>
              {input_row.desc !== undefined && !input_row.hidden && (
                <h6 className="mt-4">{input_row.desc} * </h6>
              )}
              {input_row.children.map((child_input, child_index) => {
                if (child_input.hidden !== true) {
                  return (
                    <AppCol
                      size={12 / input_row.colums}
                      md_size={12}
                      lg_size={12 / input_row.colums}
                      key={child_input.id}
                    >
                      <FormInputRenderer
                        onBlurValidation={
                          child_input.type === "text-input" ||
                          child_input.type === "text-area" ||
                          child_input.type === "text-area-tiny"
                            ? handleOnBlur
                            : {}
                        }
                        // handleChange={
                        //   child_input.type === "text-input" ||
                        //   child_input.type === "text-area"
                        //     ? handleTextChange
                        //     : child_input.type === "select"
                        //     ? handleSelectChange
                        //     : {}
                        // }
                        handleChange={
                          child_input.type === "text-input" ||
                          child_input.type === "text-area" ||
                          child_input.type === "mui-date" ||
                          child_input.type === "text-area-tiny"
                            ? handleTextChange
                            : child_input.type === "select" ||
                              child_input.type === "r-select" || child_input.type === "r-select-2"
                            ? handleSelectChange
                            : child_input.type === "file"
                            ? handleFileChange
                            : child_input.type === "radioInput"
                            ? handleRadionFn
                            : {}
                        }
                        type={child_input.type}
                        metaData={{
                          meta: {
                            RowKey: input_row_index,
                            ChildKey: child_index,
                          },
                          value: child_input.value,
                          showMonthYearPicker:
                            child_input.type === "year-month-date" && false,
                          // defaultValues2 = isEdit ?

                          errorMessage:
                            child_input.type === "text-input" ||
                            (child_input.type === "text-area" &&
                              child_input.errorMessage) ||
                            child_input.minMaxMessage,

                          ...child_input,
                          inputId: "settings_input_fields",
                          type: child_input.input_type,
                          data:
                            child_input.name === "title"
                              ? Array.isArray(skillsResults) &&
                                skillsResults.map((skill) => skill)
                              : child_input.name === "currency"
                              ? Array.isArray(currencies) &&
                                currencies.map((skill) => skill)
                              : child_input.data,
                          options:
                            child_input.name === "give_work_authorization"
                              ? child_input.options
                              : [],
                          valueName:
                            child_input.name === "title" ? "name" : undefined,
                          combineNameID:
                            child_input.name === "currency" ? true : false,
                          isEdit: isEdit,
                          message:
                            child_input.dateErrorMessage ||
                            child_input.minMaxMessage,
                          className:
                            child_input.hasError || child_input.hasDateError || child_input.hasMinMaxError
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
    </form>
  );
}

export default CompanyPostJobForm;
