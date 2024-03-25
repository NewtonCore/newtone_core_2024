import { EyeClosed, EyeOpen } from "akar-icons";
import React from "react";
import AppRow from "../AppRow/AppRow";
// import "./AppTextField.css";
import classStyles from "./AppTextArea.module.css";

const AppTextArea = ({
  label = "",
  placeholder = "",
  multiline = null,
  inputId,
  handleChange = {},
  value,
  showLabel = true,
  type = "",
  name = "",
  style,
  className = "",
  passwordIsVisible = null,
  meta,
  isRequired,
  rows = 15,
  onBlurValidation,
  errorMessage,
  disabled
}) => {
  return (
    <>
      <AppRow id={inputId} className="input_div">
        <>
          {showLabel && (
            <div className="label_div">
              <span className="label">
                {label} {isRequired && "*"} {disabled && "*Disabled*"}
              </span>
            </div>
          )}
          {/* {JSON.stringify(handleChange)} */}
          <textarea
            onBlur={
              onBlurValidation !== undefined
                ? (e) => onBlurValidation(e, meta)
                : () => {}
            }
            disabled={disabled}
            placeholder={placeholder}
            style={style}
            name={name}
            className={`form-control ${className}`}
            type={passwordIsVisible ? "text" : "password"}
            value={value}
            onChange={(e) => handleChange(e, meta)}
            multiline={multiline}
            id="settings_input_text_area"
            label={placeholder}
            rows={rows}
            cols="70"
          ></textarea>
        </>
      </AppRow>
      <div className={classStyles.errorMessage}>{errorMessage}</div>
    </>
  );
};

export default AppTextArea;
