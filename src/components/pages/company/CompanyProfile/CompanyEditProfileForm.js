import React from "react";

import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";
import classStyle from "./CompanyEdit.module.css";

import {
  handleTextInputCheckEmptyValueFn,
  handleValidateUrl,
} from "../../../../app-redux/features/editCompanyProfile/editCompanyProfileSlice";
import { useSelector } from "react-redux";

function CompanyEditProfileForm({
  data,
  handleTextInputFn,
  handleFileChange,
  handleOnSelectInput,
  dispatch,
  profile_logo,
}) {
  const appData = useSelector((state) => state.appData);

  const { appCountriesState } = appData;

  const { data: world_countries } = appCountriesState;


  let handleSelectChange = (value, meta) => {
    const { RowKey, ChildKey } = meta;

    dispatch(
      handleOnSelectInput({
        state: "biodata",
        valueToUpdate: JSON.parse(value),
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
    dispatch(handleValidateUrl({ state: "biodata" }));
    dispatch(
      handleTextInputCheckEmptyValueFn({
        state: "biodata",
        valueToUpdate: value,
        KeyName: name,
        RowKey,
        ChildKey,
        DataKey,
      })
    );
  };

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

  return (
    <>
      {data.map((field, index) => {
        return (
          <AppRow className="gx-5" key={index}>
            <>
              {/* {JSON.stringify(dataToSend)} */}

              {field.children.map((field_child, index_2) => {
                return (
                  <AppCol size={12 / field.columns} key={index_2}>
                    {/* {JSON.stringify(field_child)} */}
                    <FormInputRenderer
                      onBlurValidation={
                        field_child.type === "text-input" ||
                        field_child.type === "text-area-tiny"
                          ? handleOnBlur
                          : {}
                      }
                      handleChange={
                        field_child.type === "text-input" ||
                        field_child.type === "text-area" ||
                        field_child.type === "text-area-tiny"
                          ? handleTextChange
                          : field_child.type === "image"
                          ? handleFileInputChange
                          : field_child.type === "r-select"
                          ? handleSelectChange
                          : {}
                      }
                      type={field_child.type}
                      metaData={{
                        meta: { RowKey: index, ChildKey: index_2 },
                        label: field_child.label,
                        value:
                            field_child.name === "country"
                              ? typeof field_child.value === "object" &&
                                field_child.value !== null
                                ? field_child.value.iso
                                :field_child.value
                              : field_child.value,
                        data:
                          field_child.name === "country"
                            ? Array.isArray(world_countries) &&
                              world_countries.map((data) => data)
                            : field_child.data,
                       
                        valueName:
                          field_child.name === "country" ? "name" : undefined,
                        optionValue:
                          field_child.name === "country" ? "iso" : undefined,
                        combineNameID:
                          field_child.name === "currency" ? true : false,
                        name: field_child.name,
                        input_type: field_child.input_type,
                        type: field_child.input_type,
                        profile_logo:
                          field_child.name === "logo" ? profile_logo : "",
                        disabled: field_child.disabled,
                        isRequired: field_child.isRequired,
                        errorMessage:
                          field_child.errorMessage ||
                          field_child.URLErrorMessage,
                        className:
                          field_child.hasError ||
                          field_child.hasURLError ? classStyle.red_input : "",
                      }}
                    ></FormInputRenderer>
                  </AppCol>
                );
              })}
            </>
          </AppRow>
        );
      })}
    </>
  );
}

export default CompanyEditProfileForm;
