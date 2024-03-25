import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import { FormGroup } from "react-bootstrap";
import AppRow from "../AppRow/AppRow";

function AppCheckBox({
  label = "",
  id = "",
  placeholder = "",
  multiline = null,
  inputId = "settings_input_fields",
  handleChange = () => {},
  value = "",
  showLabel = true,
  type = "",
  name = "",
  alias = "",
  style,
  className = "",
  meta,
  isRequired,
  maxlength = 255,
  errorMessage,
  disabled,
}) {
  // console.log({value})
  return (
    <AppRow id={inputId} className="input_div">
     
      <div className="form-check">
        <FormGroup>
          {value === true ? (
            <FormControlLabel
              id={id}
              onChange={(e) => handleChange(e, meta)}
              control={<Checkbox checked={true} />}
              label={label}
            />
          ) : (
            <FormControlLabel
              id={id}
              onChange={(e) => handleChange(e, meta)}
              control={<Checkbox checked={false} />}
              label={label}
            />
          )}
        </FormGroup>

        {/* <input
          onChange={(e)=>handleChange(e, meta)}
          className="form-check-input"
          type="checkbox"
          value=""
          id={id}
        />
        <label className="form-check-label" for={id}>
          {label} 
        </label> */}
      </div>
    </AppRow>
  );
}

export default AppCheckBox;
