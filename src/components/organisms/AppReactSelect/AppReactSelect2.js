import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import AppRow from "../AppRow/AppRow";

function AppReactSelect2({
  value,
  data,
  label,
  valueName,
  handleChange,
  inputId,
  meta,
  className,
  isRequired,
  valId = undefined,
  optionValue = undefined,
  combineNameID = null,
  isMulti = false,
  defaultValues2,
  isEdit,
}) {
  const [defaultValues, SetDefaultValues] = useState(value);
  const [arrayValues, SetArrayValues] = useState([]);

  const exampleValue = [
    { id: "5e6067ddef8a973de092403d", name: "NodeJS" },
    { id: "5e6067ddef8a973de092403d112", name: "Python" },
  ];

  useEffect(() => {
    // SetDefaultValues(value);
    // console.log(value);

    if (value !== "") {
      // console.log({data})

      let val =
        Array.isArray(data) &&
        data.filter((d) => {
          return d["id"] === value.id;
        });

      if (val.length !== 0) {
        SetDefaultValues(val[0]);
      }

    //   console.log({ val });
    }

    setTimeout(() => {
    //   console.log(defaultValues);
    }, 1000);
  }, [value,data]);

  const handleChangeFn = (e, meta) => {
    if (isMulti) {
      SetDefaultValues(e);
    }
    let val = "";
    if (optionValue === undefined) {
      val = e.id;
    } else {
      val = e[optionValue];
    }
    let NewArrayValues = [...arrayValues, val];
    SetArrayValues(NewArrayValues);
    if (isMulti) {
      handleChange(
        e.map((e) => e.id),
        meta
      );
    } else {
      handleChange(
        JSON.stringify(optionValue === undefined ? e.id : e[optionValue]),
        meta
      );
    }
  };

  return (
    <AppRow className="input_div_r_select" id={inputId}>
      <div className="label_div">
        {label !== undefined && (
          <>
            <span className="label">
              {label} {isRequired && "*"}
            </span>
          </>
        )}
      </div>

      {/* VV {JSON.stringify(defaultValues)} */}
      {/* XXX {JSON.stringify(value)} */}

      {Array.isArray(data) && (
        <>
          <span style={{ display: "none" }}>
            {JSON.stringify(defaultValues)}
          </span>

          {defaultValues !== "" ? (
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              isSearchable={true}
              name="name"
              onChange={(e) => handleChangeFn(e, meta)}
              options={data}
              defaultValue={defaultValues}
            //   closeMenuOnSelect={false}
              getOptionLabel={(option) => valueName !== undefined? option[valueName] : option.name}
              getOptionValue={(option) => option.id}
            />
          ) : (
            <>
              <Select
                className="react-select-container"
                classNamePrefix="react-select"
                isSearchable={true}
                name="name"
                onChange={(e) => handleChangeFn(e, meta)}
                options={data}
                defaultValue={defaultValues}
                // closeMenuOnSelect={false}
                getOptionLabel={(option) => valueName !== undefined? option[valueName] : option.name}
                getOptionValue={(option) => option.id}
              />
            </>
          )}

        
        </>
      )}
    </AppRow>
  );
}

export default AppReactSelect2;
