import React from "react";
import { ENVELOPE_SUCCESS } from "../../../constants/AppSvg";
import AppCol from "../AppCol/AppCol";
import AppImage from "../AppImage/AppImage";
import AppRow from "../AppRow/AppRow";
import AppSVG from "../AppSVG/AppSVG";
import classStyles from "./AppDivRadioButton.module.css";
// import "./AppDivRadioButton.css";

function AppDivRadioButton({
  svg_image = undefined,
  name = "name",
  label = "Name",
  value = "Value",
  id,
  labelFooter = "Test",
  meta,
  handleChange,
  defaultValue,
}) {
  const handleCheckFn = (e) => {
    // handleCheck({e:{name:name}},meta)

    if (e.target.name !== undefined) {
      // console.log(e.target.name);
      // console.log(e.target.value);
      handleChange(e, meta);
    }

    // console.log(e.target.querySelector('input'));
  };
  return (
    <label
      onClick={(e) => {
        handleCheckFn(e);
      }}
      className={classStyles.radioDiv}
      htmlFor={id}
    >
      <AppRow>
        <AppCol
          className={classStyles.radio_div}
          size={2}
          sm_size={2}
          lg_size={2}
          xs_size={2}
        >
          <input
            type="radio"
            id={id}
            name={name}
            // value={value !== "" ? !!value : value}
            value={value}
            defaultChecked={defaultValue === value ? true : false}
          />
        </AppCol>

        <AppCol
          className={classStyles.radio_label}
          size={10}
          sm_size={8}
          lg_size={8}
          xs_size={8}
        >
          <div style={{ height: 30 }}>
            <AppImage image={svg_image} />

            <label htmlFor={id} style={{ marginLeft: 10 }}>
              <h6>{label}</h6>
            </label>
          </div>

          <label htmlFor={id}>
            {/* <br></br> */}
            <span>{labelFooter}</span>
          </label>
        </AppCol>
      </AppRow>
    </label>
  );
}

export default AppDivRadioButton;
