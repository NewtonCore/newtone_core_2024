import React from "react";
import AppCol from "../AppCol/AppCol";
import AppDivRadioButton from "../AppDivRadioButton/AppDivRadioButton";
import AppRow from "../AppRow/AppRow";

function AppRadioInput({
  options,
  handleChange,
  meta,
  isRequired,
  defaultValue,
  size
}) {
  let defValue =
    defaultValue === "true"
      ? true
      : defaultValue === "false"
      ? false
      : defaultValue;
  // console.log({defaultValue})

  return (
    <AppRow>
      {options.map((val,index) => {
        return (
            <AppCol size={size === undefined ? 6 : size} key={`${JSON.stringify(val)}${index}`}>
              <AppDivRadioButton
                defaultValue={defValue}
                handleChange={handleChange}
                isRequired={isRequired}
                svg_image={val.icon}
                name={val.name}
                label={val.label}
                value={val.value}
                id={val.id}
                labelFooter={val.labelFooter}
                meta={meta}
              ></AppDivRadioButton>
            </AppCol>
        );
      })}
    </AppRow>
  );
}

export default AppRadioInput;
