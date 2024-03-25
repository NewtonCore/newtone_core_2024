import React from "react";
import { generateUniqueID } from "../../constants/utils";
import AppRow from "../organisms/AppRow/AppRow";

function AppSelectInput({
  value,
  data,
  label,
  valueName,
  handleChange,
  inputId,
  meta,
  className,
  isRequired,
  valId=undefined
}) {
  return (
    <AppRow className="input_div" id={inputId}>
      <div className="label_div">
        {
          label !== undefined &&
          <>
           <span className="label">
          {label} {isRequired && "*"} 
        </span>
          </>
        }
       
      </div>
      {/* {inputId} */}
      {/* {value} */}

      <select
        // defaultValue="default"
        value={value}
        className={`form-select ${className}`}
        onChange={(e) => handleChange(JSON.stringify(e.target.value), meta)}
      >
        <option value="" selected disabled>
          Select an option 
        </option>


        {Array.isArray(data) && (
          <>
            {typeof data[0] === "string" ? (
              data.map((val) => {
                return (
                  <option
                    // defaultValue={value}
                    selected={value === val && true}
                    key={generateUniqueID()}
                    value={val}
                  >
                    {valueName === undefined ? val : val[valueName]}
                  </option>
                );
              })
            ) : (
              <>
              
                {typeof data[0] === "object" ? (
                  data.map((val) => {
                    return (
                      <option
                        defaultValue ={parseInt(value) === parseInt(val["id"]) && val}
                        key={generateUniqueID()}
                        value={val["id"]}
                      >
                        {valueName === undefined ? val : val[valueName]}
                      </option>
                    );
                  })
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        )}
      </select>
    </AppRow>
  );
}

export default AppSelectInput;
