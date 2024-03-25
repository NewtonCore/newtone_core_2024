import { EyeClosed, EyeOpen } from "akar-icons";
import React from "react";
import AppRow from "../AppRow/AppRow";
import { v4 as uuidv4 } from "uuid";

import classStyles from "./AppTextField.module.css";

const AppTextField = ({
  label = "",
  placeholder = "",
  multiline = null,
  inputId,
  handleChange = () => {},
  value,
  showLabel = true,
  type = "",
  name = "",
  alias = "",
  style,
  className = "",
  passwordIsVisible = null,
  toggleRevealPassword = {},
  meta,
  isRequired,
  maxlength = 255,
  errorMessage,
  onBlurValidation = () => {},
  handleOnFocus = () => {},
  pattern,
  title,
  disabled,
  min,
  showDisabledLabel = true,
}) => {
  return (
    <>
      <AppRow id={inputId} className="input_div">
        <>
          {/* aa {JSON.stringify(isRequired)} */}
          {showLabel && (
            <div className="label_div">
              <span className="label">
                {label} {isRequired && "*"}{" "}
                {showDisabledLabel && (
                  <>
                    {disabled && <span className="text-muted">Disabled</span>}
                  </>
                )}
              </span>
            </div>
          )}

          {type === "password" ? (
            <div className="input-group password-field">
              <input
                title={title}
                pattern={pattern}
                maxLength={maxlength}
                placeholder={placeholder}
                style={style}
                name={name}
                className={`form-control ${className}`}
                type={passwordIsVisible ? "text" : "password"}
                defaultValue={value}
                onChange={(e) => handleChange(e,meta)}
                multiline={multiline}
                id={uuidv4()}
                label={placeholder}
                required={isRequired}
              />
              <span className="input-group-text" id="basic-addon1">
                <button type="button" onClick={() => toggleRevealPassword()}>
                  {passwordIsVisible ? (
                    <EyeClosed style={{ color: "teal" }}></EyeClosed>
                  ) : (
                    <EyeOpen></EyeOpen>
                  )}
                </button>
              </span>
            </div>
          ) : (
            <>
              <input
                min={min}
                disabled={disabled}
                title={title}
                pattern={pattern}
                onBlur={
                  onBlurValidation !== undefined
                    ? (e) => onBlurValidation(e, meta)
                    : () => {}
                }
                maxLength={maxlength}
                alias={alias}
                placeholder={placeholder}
                // onFocus={(e) => handleOnFocus(e)}
                style={style}
                name={name}
                className={`form-control ${className}`}
                type={type}
                value={value}
                onChange={
                  handleChange !== undefined
                    ? (e) => handleChange(e, meta)
                    : () => {}
                }
                multiline={multiline}
                id={uuidv4()}
                required={isRequired}
              />
            </>
          )}
        </>
      </AppRow>

      <div className={classStyles.errorMessage}>{errorMessage}</div>
    </>
  );
};

export default AppTextField;
