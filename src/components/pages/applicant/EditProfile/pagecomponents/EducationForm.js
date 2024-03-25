import { LinearProgress } from "@mui/material";
import React from "react";
import { WHITE_COLOR } from "../../../../../constants/AppColors";
import {
  checkPropertiesIsEmpty,
  ExtractFieldsFromFormData,
  MONTHS,
} from "../../../../../constants/utils";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import TalentEducationList from "./TalentEducationList";
import classStyle from "../EditProfile.module.css";
import { handleValidateEducation, updateSuccessStateBioData } from "../../../../../app-redux/features/TalentProfile/TalentProfileSlice";
import { universities } from "../../../../../constants/world_universities";
import { useState } from "react";
import { useEffect } from "react";

// let universities = [
//   {
//     "id": 1,
//   "CountryCode": "AD",
//   "name": "University of Andorra",
//   "Website": "http://www.uda.ad/"
//   },
//   {
//     "id": 2,
//   "CountryCode": "AE",
//   "name": "Abu Dhabi University",
//   "Website": "http://www.adu.ac.ae/"
//   },
// ]

const EducationForm = ({
  data,
  loading,
  toggleEdit,
  toggleDelete,
  handleTextInputFn,
  handleOnDateChangeFn,
  handlePostEducation,
  handleAddForm,
  sectionName,
  talentEducation,
  dispatch,
  isEdit = false,
  recentlyUpdated,
  handleValidateStartEndDates,
  handleTextInputCheckEmptyValueFn,
  handleCheckBoxChange,
  successAdding,
}) => {
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    return ()=>{
      dispatch(updateSuccessStateBioData())
    }
  },[])

  useEffect(() => {
      if (successAdding) {
        setSuccess(true);
  
        setTimeout(() => {
          setSuccess(false);
        }, 100);
      }
    
  }, [successAdding]);

  const handleCheckBox = (e, meta) => {
    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleCheckBoxChange({
        state: "education_data",
        valueToUpdate: e.target.checked,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };
  const handleAddEducation = () => {
    handlePostEducation(data);

    // dispatch(handleAddForm());
  };

  const handleEditEducation = (data) => {
    dispatch(toggleEdit(JSON.stringify(data)));
  };

  const handleDeleteEducation = (data) => {
    dispatch(toggleDelete(JSON.stringify(data)));
  };

  let onBlurValidation = () => {
    let _object = ExtractFieldsFromFormData(data[0], true);
    // let checkIfDataEmpty = checkPropertiesIsEmpty(_object);

    dispatch(handleValidateEducation());
  };

  let handleTextChange = (e, meta) => {
    // console.log(e.target.value)

    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleTextInputFn({
        state: "education_data",
        valueToUpdate: e.target.value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let handleOnBlur = (e, meta) => {
    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;

    dispatch(
      handleTextInputCheckEmptyValueFn({
        state: "education_data",
        valueToUpdate: e.target.value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let handleDateChange = (e, meta) => {
    onBlurValidation();

    // check if end date is less than start date
    dispatch(handleValidateStartEndDates({state: "education",}));
    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleOnDateChangeFn({
        state: "education_data",
        valueToUpdate: e,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let blurTest = (e) => {
    console.log(e.target.name);
  };

  return (
    <>
      {/* <input name="testTest" type="text" onBlur={(e)=>blurTest(e)}></input> */}
      {!isEdit && (
        <>
          <h4 className="fw-bold">
            {isEdit && "Edit"} {sectionName}
          </h4>
          {Array.isArray(talentEducation) &&
            talentEducation.map((list,index) => {
              return (
                <TalentEducationList
                  recentlyUpdated={recentlyUpdated}
                  data={list}
                  handleEditEducation={handleEditEducation}
                  handleDeletEducation={handleDeleteEducation}
                  key={`${list.id}${index}`}

                ></TalentEducationList>
              );
            })}
        </>
      )}

      {!success && (
        <>
          {data.map((education, index_1) => {
            return (
              <div key={index_1}>
                {education.map((bio_1, index_2) => {
                  return (
                    <AppRow className="gx-5" key={index_2}>
                      {bio_1.children.map((bio_2, index) => {
                        if (bio_2.hidden !== true) {
                          return (
                            <AppCol size={12 / bio_1.colums} key={index}>
                              {/* {JSON.stringify(bio_2)} */}
                              <FormInputRenderer
                                onBlurValidation={
                                  bio_2.type === "text-input" ||
                                  bio_2.type === "text-area" ||
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
                                  label: bio_2.label,
                                  value:
                                    bio_2.name === "start_date"
                                      ? bio_2.value === ""
                                        ? bio_1.children
                                            .filter((start) => {
                                              return (
                                                start.name === "start_month" ||
                                                start.name === "start_year"
                                              );
                                            })
                                            .map((val) => {
                                              return val.value;
                                            })
                                        : bio_2.value
                                      : bio_2.name === "end_date"
                                      ? bio_2.value === ""
                                        ? bio_1.children
                                            .filter((start) => {
                                              return (
                                                start.name === "end_month" ||
                                                start.name === "end_year"
                                              );
                                            })
                                            .map((val) => {
                                              return val.value;
                                            })
                                        : bio_2.value
                                      : bio_2.value,
                                  name: bio_2.name,
                                  placeholder: bio_2.placeholder,
                                  data:
                                    bio_2.name === "school"
                                      ? Array.isArray(universities) &&
                                        universities
                                          .slice(0, 100)
                                          .map((skill) => skill)
                                      : bio_2.data,

                                  input_type: bio_2.input_type,
                                  inputId: "settings_input_fields",
                                  type: bio_2.input_type,

                                  has_child: bio_2.has_child,
                                  isRequired: bio_2.isRequired,
                                  message: bio_2.dateErrorMessage,
                                  id: bio_2.id,
                                  disabled: bio_2.disabled,
                                  errorMessage:
                                    bio_2.type === "text-input" &&
                                    bio_2.errorMessage,
                                  className:
                                    bio_2.hasError || bio_2.hasDateError
                                      ? classStyle.red_input
                                      : "",
                                  valueName:
                                    bio_2.name === "school"
                                      ? "name"
                                      : undefined,
                                  // handleChange: handleTextChange,
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
          })}

          {/*  button and function for adding education */}

          {!isEdit ? (
            <>
              <hr></hr>

              <center>
                <AppButton
                  loading={loading}
                  size="small"
                  label={`+ Save ${sectionName}`}
                  onClick={() => handleAddEducation()}
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
              onClick={() => handleAddEducation()}
            ></AppButton>
          )}
        </>
      )}

      {loading && <LinearProgress />}

      {/* {FORM_INPUTS.EDIT_PROFILE.education.map((bio_1) => {
        return (
          <AppRow className="gx-5" key={bio_1.id}>
            {bio_1.children.map((bio_2) => {
              return (
                <AppCol size={12 / bio_1.colums} key={bio_2.id}>
                  <FormInputRenderer
                    type={bio_2.type}
                    metaData={{
                      label: bio_2.label,
                      value: bio_2.value,
                      name: bio_2.name,
                      input_type: bio_2.input_type,
                      inputId: "settings_input_fields",
                      data:bio_2.data
                    }}
                  ></FormInputRenderer>
                </AppCol>

                // </div>
              );
            })}
          </AppRow>
        );
      })} */}
    </>
  );
};

export default EducationForm;
