import React from "react";
import AppDivButton from "../../atoms/AppButton/AppDivButton";
import AppButtonSelect from "./AppButtonSelect";
import {
  BLACK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SECONDARY_LIGHT_COLOR,
  WHITE_COLOR,
} from "../../../constants/AppColors";
import AppCol from "../AppCol/AppCol";
import AppRow from "../AppRow/AppRow";
import AppImage from "../AppImage/AppImage";

function AppButtonSelectOptions({
  handleChange,
  meta,
  value,
  name,
  children,
  style,
  options,

  size,
}) {
  const handleClick = (opt) => {
    // handleCheck({e:{name:name}},meta)
    let e = {
      target: {
        name: opt.name,
        value: opt.value,
      },
    };

    if (e.target.name !== undefined) {
      handleChange(e, meta);
    }
  };
  return (
    <AppRow>
      {/* value {value} */}
      {options.map((opt, index) => {
        return (
          <AppCol
            size={size}
            xs_size={12}
            md_size={12}
            lg_size={size}
            key={index}
          >
            <AppButtonSelect
              children={children}
              style={{
                color: value === opt.value ? WHITE_COLOR : BLACK_COLOR,
                backgroundColor:
                  value === opt.value ? PRIMARY_COLOR : WHITE_COLOR,
                borderWidth: 1,
                borderColor: "rgba(0,0,0,.2)",
                textAlign: "left",
              }}
              handleChange={() => handleClick(opt)}
            >
              <>
                <div className="p-3" id="app_button_div_div">
                  <AppImage style={{ height: 20 }} image={opt.icon} />
                  <p>{opt.label}</p>
                  <p className="fw-light" style={{ fontSize: "80%" }}>
                    {/* <br></br> */}
                    {opt.labelFooter}
                  </p>
                </div>
              </>
            </AppButtonSelect>
          </AppCol>
        );
      })}
    </AppRow>
  );
}

export default AppButtonSelectOptions;
