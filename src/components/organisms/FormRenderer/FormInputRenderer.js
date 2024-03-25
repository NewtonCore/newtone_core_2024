import React from "react";
import AppSelectInput from "../../AppSelectInput/AppSelectInput";
import AppDivRadioButton from "../AppDivRadioButton/AppDivRadioButton";
import AppRadio from "../AppRadio/AppRadio";
import AppTextArea from "../AppTextArea/AppTextArea";
import AppTextField from "../AppTextField/AppTextField";
import AppFilePicker from "../AppFilePicker/AppFilePicker";
import AppMultiSelect from "../AppTagInput/AppMultiSelect";
import AppFileAnyPicker from "../AppFileAnyPicker/AppFileAnyPicker";
import AppCheckBox from "../AppCheckBox/AppCheckBox";
import AppReactSelect from "../AppReactSelect/AppReactSelect";
import AppMUIDatePicker from "../AppMUIDatePicker/AppMUIDatePicker";
import MuiAppYearMonthPicker from "../AppDatePicker/MuiAppDatePicker";
import AppCkEditor from "../AppCkEditor/AppCkEditor";
import SelectUniversityModal from "../SelectUniversityModal/SelectUniversityModal";
import AppRadioInput from "../AppRadioInput/AppRadioInput";
import AppReactSelect2 from "../AppReactSelect/AppReactSelect2";
import AppButtonSelect from "../AppButtonSelect/AppButtonSelect";
import AppButtonSelectOptions from "../AppButtonSelect/AppButtonSelectOptions";

function FormInputRenderer({ type, metaData, handleChange, onBlurValidation }) {
  switch (type) {

    case "buttonSelectOptions":
      return (
        <AppButtonSelectOptions
          handleChange={handleChange}
          isRequired={metaData.isRequired}
          name={metaData.name}
          label={metaData.label}
          value={metaData.value}
          id={metaData.id}
          meta={metaData.meta}
          children={metaData.children}
          style={metaData.style}
          options={metaData.options}
          size={metaData.size}
        ></AppButtonSelectOptions>
      );

    case "buttonSelect":
      return (
        <AppButtonSelect
          handleChange={handleChange}
          isRequired={metaData.isRequired}
          name={metaData.name}
          label={metaData.label}
          value={metaData.value}
          id={metaData.id}
          meta={metaData.meta}
          children={metaData.children}
          style={metaData.style}
        ></AppButtonSelect>
      );
        
    case "radioDiv":
      return (
        <AppDivRadioButton
          handleChange={handleChange}
          isRequired={metaData.isRequired}
          svg_image={metaData.icon}
          name={metaData.name}
          label={metaData.label}
          value={metaData.value}
          id={metaData.id}
          labelFooter={metaData.labelFooter}
          meta={metaData.meta}

        ></AppDivRadioButton>
      );
      case "radioInput":
        return (
          <AppRadioInput
            defaultValue={metaData.value}
            handleChange={handleChange}
            isRequired={metaData.isRequired}
            svg_image={metaData.icon}
            name={metaData.name}
            label={metaData.label}
            id={metaData.id}
            labelFooter={metaData.labelFooter}
            meta={metaData.meta}
            options={metaData.options}
            size={metaData.size}

          ></AppRadioInput>
        );

    case "radio":
      return (
        <AppRadio
          isRequired={metaData.isRequired}
          radioName={metaData.name}
          label={metaData.label}
          value={metaData.value}
          id={metaData.id}
          options={metaData.options}
          meta={metaData.meta}
          handleChange={handleChange}
          name={metaData.name}


        ></AppRadio>
      );

    case "text-input":
      return (
        <>
          <AppTextField
            showDisabledLabel={metaData.showDisabledLabel}
            placeholder={metaData.placeholder}
            min={metaData.min}
            disabled={metaData.disabled}
            title={metaData.title}
            pattern={metaData.pattern}
            onBlurValidation={onBlurValidation}
            isRequired={metaData.isRequired}
            meta={metaData.meta}
            label={metaData.label}
            toggleRevealPassword={metaData.toggleRevealPassword}
            passwordIsVisible={metaData.passwordIsVisible}
            value={metaData.value}
            handleChange={handleChange}
            className={metaData.className}
            inputId={metaData.inputId}
            name={metaData.name}
            type={metaData.type}
            errorMessage={metaData.errorMessage}
            showLabel={metaData.showLabel}
          ></AppTextField>
        </>
      );
    case "text-area-tiny":
      return (
        <>
          <AppCkEditor

           onBlurValidation={onBlurValidation}
           maxlength={metaData.maxlength}
           isRequired={metaData.isRequired}
           meta={metaData.meta}
           label={metaData.label}
           toggleRevealPassword={metaData.toggleRevealPassword}
           value={metaData.value}
           handleChange={handleChange}
           className={metaData.className}
           inputId={metaData.inputId}
           name={metaData.name}
           type={metaData.type}
           errorMessage={metaData.errorMessage}
           rows={metaData.rows ? metaData.rows : 10}
          >

          </AppCkEditor>
        </>
      )

    case "text-area":
      return (
        <>
          <AppTextArea
          disabled={metaData.disabled}
            onBlurValidation={onBlurValidation}
            maxlength={metaData.maxlength}
            isRequired={metaData.isRequired}
            meta={metaData.meta}
            label={metaData.label}
            toggleRevealPassword={metaData.toggleRevealPassword}
            value={metaData.value}
            handleChange={handleChange}
            className={metaData.className}
            inputId={metaData.inputId}
            name={metaData.name}
            type={metaData.type}
            errorMessage={metaData.errorMessage}
            rows={metaData.rows ? metaData.rows : 15}
          ></AppTextArea>
        </>
      );

    case "select":
      return (
        <>
          <AppSelectInput
            valId={metaData.valId !== undefined && metaData.valId}
            className={metaData.className}
            isRequired={metaData.isRequired}
            value={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
            valueKey={metaData.valueKey}
            valueName={metaData.valueName}
            handleChange={handleChange}
          ></AppSelectInput>
        </>
      );

    case "r-select":
      return (
        <>
          <AppReactSelect
            isEdit={metaData.isEdit}
            defaultValues2={metaData.defaultValues2}
            isMulti={metaData.isMulti}
            combineNameID={metaData.combineNameID}
            optionValue={metaData.optionValue}
            valId={metaData.valId !== undefined && metaData.valId}
            className={metaData.className}
            isRequired={metaData.isRequired}
            value={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
            valueKey={metaData.valueKey}
            valueName={metaData.valueName}
            handleChange={handleChange}
          ></AppReactSelect>
        </>
      );
    
      case "r-select-2":
      return (
        <>
          <AppReactSelect2
            isEdit={metaData.isEdit}
            defaultValues2={metaData.defaultValues2}
            isMulti={metaData.isMulti}
            combineNameID={metaData.combineNameID}
            optionValue={metaData.optionValue}
            valId={metaData.valId !== undefined && metaData.valId}
            className={metaData.className}
            isRequired={metaData.isRequired}
            value={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
            valueKey={metaData.valueKey}
            valueName={metaData.valueName}
            handleChange={handleChange}
          ></AppReactSelect2>
        </>
      );

      case "uni-select":
      return (
        <>
          <SelectUniversityModal
            isEdit={metaData.isEdit}
            defaultValues2={metaData.defaultValues2}
            isMulti={metaData.isMulti}
            combineNameID={metaData.combineNameID}
            optionValue={metaData.optionValue}
            valId={metaData.valId !== undefined && metaData.valId}
            className={metaData.className}
            isRequired={metaData.isRequired}
            val={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
            valueKey={metaData.valueKey}
            valueName={metaData.valueName}
            handleChange={handleChange}
          ></SelectUniversityModal>
        </>
      );
    
      case "year-month":
        return (
          <>
            {/* -- {metaData.value} */}
            <MuiAppYearMonthPicker
              disabled={metaData.disabled}
              showMonthYearPicker={metaData.showMonthYearPicker}
              message={metaData.message}
              isRequired={metaData.isRequired}
              className={metaData.className}
              value={metaData.value}
              hasChild={metaData.has_child}
              meta={metaData.meta}
              inputId={metaData.inputId}
              label={metaData.label}
              data={metaData.data}
              valueKey={metaData.valueKey}
              valueName={metaData.valueName}
              handleChange={handleChange}
            ></MuiAppYearMonthPicker>
          </>
        );

    
    case "mui-date":
      return (
        <>
          {/* -- {metaData.value} */}
          <AppMUIDatePicker
          message={metaData.message}
            handleChange={handleChange}
            isRequired={metaData.isRequired}
            className={metaData.className}
            defaultValue={metaData.value}
            meta={metaData.meta}
            inputId={metaData.inputId}
            label={metaData.label}
            data={metaData.data}
          ></AppMUIDatePicker>
        </>
      );
    case "multi-select":
      return (
        <>
          <AppMultiSelect
            value={metaData.value}
            handleChange={handleChange}
            meta={metaData.meta}
            isRequired={metaData.isRequired}
            className={metaData.className}
            data={metaData.data}
            handleReturnData={metaData.handleReturnData}
            label={metaData.label}
          ></AppMultiSelect>
          
          {/* <AppTagInput
            handleReturnData={metaData.handleReturnData}
            label={metaData.label}
          ></AppTagInput> */}
        </>
      );

    case "image":
      return (
        <AppFilePicker
          userImage={metaData.profile_logo}
          handleChange={handleChange}
          meta={metaData.meta}
        ></AppFilePicker>
      );
    case "file":
      return (
        <AppFileAnyPicker
          handleChange={handleChange}
          meta={metaData}
        ></AppFileAnyPicker>
      );

    case "checkbox":
      return (
        <>
          <AppCheckBox
            value={metaData.value}
            meta={metaData.meta}
            handleChange={handleChange}
            id={metaData.id}
            label={metaData.label}
          />
        </>
      );
    // case "date":
    //   return (
    //    <>
    //    <label>

    //    </label>

    //    <input
    //       handleChange={handleChange}
    //       meta={metaData.meta}
    //       type={metaData.type}
    //       value={metaData.value}
    //       isRequired={metaData.isRequired}
    //       className={metaData.className}
    //     />
    //    </>
    //   );

    default:
      return <>No input to return</>;
  }
}

export default FormInputRenderer;
