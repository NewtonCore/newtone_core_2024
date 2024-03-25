import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import classStyle from "../EditProfile.module.css";
import { handleValidatePhone } from "../../../../../app-redux/features/TalentProfile/TalentProfileSlice";

function BiodataForm({
  data,
  handleTextInputFn = {},
  handleSelectFn = {},
  handleTextInputCheckEmptyValueFn,
  handleFileChange,
  userImage,
}) {
  const dispatch = useDispatch();

  const handleFileInputChange = (e, metaData, file) => {
    const { RowKey, ChildKey } = metaData;
    dispatch(
      handleFileChange({
        state: "biodata",
        valueToUpdate: file,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  let handleTextChange = (e, meta) => {
    let { value, name } = e.target;
    const { RowKey, ChildKey } = meta;

    dispatch(
      handleTextInputFn({
        state: "biodata",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  let handleOnBlur = (e, meta) => {
    let { value, name } = e.target;

    const { DataKey, RowKey, ChildKey } = meta;
    dispatch(handleValidatePhone({ state: "bio_data" }));
    dispatch(
      handleTextInputCheckEmptyValueFn({
        state: "bio_data",
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

    const { RowKey, ChildKey } = meta;
    // console.log(meta)

    dispatch(
      handleSelectFn({
        state: "biodata",
        valueToUpdate: JSON.parse(value),
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  const appData = useSelector((state) => state.appData);

  const { appCountriesState } = appData;

  const { data: countries } = appCountriesState;

  return (
    <div>
      {/* {JSON.stringify(appCountriesState)} */}
      {Array.isArray(data) &&
        data.map((field, form_index) => {
          return (
            <AppRow className="gx-5" key={field.id}>
              {field.children.map((field_child, child_index) => {
                if (field_child.hidden !== true) {
                  return (
                    <AppCol size={12 / field.colums} key={field_child.id}>
                      {/* {JSON.stringify(field_child)} */}
                      <FormInputRenderer
                        onBlurValidation={
                          field_child.type === "text-input" ||
                          field_child.type === "text-area" ||
                          field_child.type === "text-area-tiny"
                            ? handleOnBlur
                            : {}
                        }
                        handleChange={
                          field_child.type === "text-input" ||
                          field_child.type === "text-area" ||
                          field_child.type === "text-area-tiny"
                            ? handleTextChange
                            : field_child.type === "select" ||
                              field_child.type === "r-select"
                            ? handleSelectChange
                            : field_child.type === "image"
                            ? handleFileInputChange
                            : {}
                        }
                        type={field_child.type}
                        metaData={{
                          meta: { RowKey: form_index, ChildKey: child_index },
                          label: field_child.label,
                          value:
                            field_child.name === "country"
                              ? typeof field_child.value === "object" &&
                                field_child.value !== null
                                ? field_child.value.iso
                                :field_child.value
                              : field_child.value,
                          name: field_child.name,
                          input_type: field_child.input_type,
                          className:
                            field_child.hasError ||
                            (field_child.hasPhoneError && classStyle.red_input),
                          inputId: "settings_input_fields",
                          data:
                            field_child.name === "country"
                              ? Array.isArray(countries) &&
                                countries.map((country) => country)
                              : field_child.data,
                          type: field_child.input_type,
                          isRequired: field_child.isRequired,
                          maxlength: field_child.maxlength,
                          disabled: field_child.disabled,
                          min: field_child.min,
                          errorMessage:
                            field_child.errorMessage ||
                            field_child.PhoneErrorMessage,
                          placeholder: field_child.placeholder,
                          profile_logo: userImage,
                          valueName:
                            field_child.name === "country" ? "name" : undefined,
                          optionValue:
                            field_child.name === "country" ? "iso" : undefined,
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

export default BiodataForm;
