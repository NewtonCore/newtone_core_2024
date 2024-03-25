import React from "react";
import { WHITE_COLOR } from "../../../../../constants/AppColors";
import { MONTHS } from "../../../../../constants/utils";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import TalentWorkList from "./TalentWorkList";
import classStyle from "../EditProfile.module.css";
import { LinearProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { updateSuccessStateBioData } from "../../../../../app-redux/features/TalentProfile/TalentProfileSlice";

function WorkForm({
  data,
  loading,
  sectionName,
  talentWork,
  dispatch,
  handleTextInputFn,
  handlePostWork,
  handleOnDateChangeFn,
  toggleEdit,
  isEdit = false,
  recentlyUpdated,
  handleTextInputCheckEmptyValueFn,
  toggleDelete,
  handleCheckBoxChange,
  successAdding,
  handleValidateStartEndDates
}) {
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
        state: "work_experience",
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

  const handleAddWork = () => {
    handlePostWork(data);
  };

  const handleEditWork = (data) => {
    dispatch(toggleEdit(JSON.stringify(data)));
  };

  let handleTextChange = (e, meta) => {
    // console.log(e.target.value)
    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleTextInputFn({
        state: "work_experience",
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
        state: "work_experience",
        valueToUpdate: e.target.value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  let handleDateChange = (e, meta) => {
    // console.log(e);
dispatch(handleValidateStartEndDates({state: "work",}))
    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(
      handleOnDateChangeFn({
        state: "work_experience",
        valueToUpdate: e,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

  return (
    <div>
      {!isEdit && (
        <>
          <h4 className="fw-bold">{sectionName}</h4>

          {Array.isArray(talentWork) &&
            talentWork.map((list,index) => {
              return (
                <TalentWorkList
                  handleDelete={handleDelete}
                  recentlyUpdated={recentlyUpdated}
                  data={list}
                  handleEdit={handleEditWork}
                  key={`${list.id}${index}`}
                ></TalentWorkList>
              );
            })}
        </>
      )}

      {!success && (
        <>
          {data.map((education, index_1) => {
            return (
              <div key={index_1}>
                {/* <span className="badge bg-primary">
              {sectionName} details {index_1 + 1}
            </span> */}
                {education.map((bio_1, index_2) => {
                  return (
                    <AppRow className="gx-5" key={bio_1.id}>
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
                                  type: bio_2.input_type,
                                  label: bio_2.label,
                                  value: bio_2.value,
                                  name: bio_2.name,
                                  placeholder: bio_2.placeholder,
                                  input_type: bio_2.input_type,
                                  inputId: "settings_input_fields",
                                  data: bio_2.data,
                                  has_child: bio_2.has_child,
                                  isRequired: bio_2.isRequired,
                                  id: bio_2.id,
                                  disabled: bio_2.disabled,
                                  message: bio_2.dateErrorMessage,
                                  errorMessage:
                                    bio_2.type === "text-input" &&
                                    bio_2.errorMessage,
                                    className:
                                    bio_2.hasError || bio_2.hasDateError
                                      ? classStyle.red_input
                                      : "",

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

          {!isEdit ? (
            <>
              <hr></hr>
              <center>
                <AppButton
                  loading={loading}
                  size="small"
                  label={`+ Save ${sectionName}`}
                  onClick={() => handleAddWork()}
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
              onClick={() => handleAddWork()}
            ></AppButton>
          )}
        </>
      )}

      {loading && <LinearProgress />}
    </div>
  );
}

export default WorkForm;
