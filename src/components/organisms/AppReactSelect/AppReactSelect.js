import React, { useEffect } from "react";
import { useState } from "react";
import Select from "react-select";
import AppRow from "../AppRow/AppRow";

function AppReactSelect({
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
  const [defaultValues3, SetDefaultValues3] = useState(value);

  const [arrayValues, SetArrayValues] = useState([]);

  useEffect(() => {
    if (value !== "") {
      // console.log(value)
      if (typeof value === "string") {
        let val =
          Array.isArray(data) &&
          data.filter((d) => {
            return d[optionValue !== undefined ? optionValue : "id"] === value;
          });

        SetDefaultValues3(val);
        // console.log({defaultValues2})
      }

      SetDefaultValues(value);
    }
  }, [value]);

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
      {/* daya {JSON.stringify(data)} */}
      {/* VV {JSON.stringify(defaultValues3)} */}
      {/* VV {JSON.stringify(value)} */}
      {Array.isArray(data) && (
        <>
          {defaultValues2 !== undefined ? (
            <>
              {isEdit && defaultValues2.length !== 0 ? (
                <>
                  <p style={{ display: "none" }}></p>
                  <Select
                    isMulti={isMulti}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    defaultValue={
                      defaultValues2 !== undefined
                        ? defaultValues2.map((v) => v)
                        : []
                    }
                    isSearchable={true}
                    name="name"
                    onChange={(e) => handleChangeFn(e, meta)}
                    getOptionLabel={(option) =>
                      combineNameID
                        ? `${
                            valueName !== undefined
                              ? option[valueName]
                              : option.name
                          } (${option.id})`
                        : valueName !== undefined
                        ? option[valueName]
                        : option.name
                    }
                    getOptionValue={(option) =>
                      optionValue === undefined
                        ? option.id
                        : option[optionValue]
                    }
                    options={data}
                  />
                </>
              ) : (
                <>
                  {defaultValues3.length !== 0 ? (
                    <>
                      <Select
                        isMulti={isMulti}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        defaultValue={
                          defaultValues3 !== undefined
                            ? Array.isArray(defaultValues3) &&
                              defaultValues3.map((v) => v)
                            : []
                        }
                        isSearchable={true}
                        name="name"
                        onChange={(e) => handleChangeFn(e, meta)}
                        getOptionLabel={(option) =>
                          combineNameID
                            ? `${
                                valueName !== undefined
                                  ? option[valueName]
                                  : option.name
                              } (${option.id})`
                            : valueName !== undefined
                            ? option[valueName]
                            : option.name
                        }
                        getOptionValue={(option) =>
                          optionValue === undefined
                            ? option.id
                            : option[optionValue]
                        }
                        options={data}
                      />
                    </>
                  ) : (
                    <>
                      <Select
                        isMulti={isMulti}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        isSearchable={true}
                        name="name"
                        onChange={(e) => handleChangeFn(e, meta)}
                        //   onChange={(e) => console.log(e)}
                        getOptionLabel={(option) =>
                          combineNameID
                            ? `${
                                valueName !== undefined
                                  ? option[valueName]
                                  : option.name
                              } (${option.id})`
                            : valueName !== undefined
                            ? option[valueName]
                            : option.name
                        }
                        getOptionValue={(option) =>
                          optionValue === undefined
                            ? option.id
                            : option[optionValue]
                        }
                        options={data}
                      />
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              {defaultValues3.length !== 0 ? (
                <>
                  <span style={{ display: "none" }}>
                    {defaultValues3[0] !== undefined && valueName !== undefined
                      ? defaultValues3[0][valueName]
                      : defaultValues3[0].name}
                  </span>

                  <Select
                    isMulti={isMulti}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    defaultValue={
                      defaultValues3 !== undefined
                        ? Array.isArray(defaultValues3) &&
                          defaultValues3.map((v) => v)
                        : []
                    }
                    isSearchable={true}
                    name="name"
                    onChange={(e) => handleChangeFn(e, meta)}
                    getOptionLabel={(option) =>
                      combineNameID
                        ? `${
                            valueName !== undefined
                              ? option[valueName]
                              : option.name
                          } (${option.id})`
                        : valueName !== undefined
                        ? option[valueName]
                        : option.name
                    }
                    getOptionValue={(option) =>
                      optionValue === undefined
                        ? option.id
                        : option[optionValue]
                    }
                    options={data}
                  />
                </>
              ) : (
                <>
                  <Select
                    isMulti={isMulti}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    isSearchable={true}
                    name="name"
                    onChange={(e) => handleChangeFn(e, meta)}
                    getOptionLabel={(option) =>
                      combineNameID
                        ? `${
                            valueName !== undefined
                              ? option[valueName]
                              : option.name
                          } (${option.id})`
                        : valueName !== undefined
                        ? option[valueName]
                        : option.name
                    }
                    getOptionValue={(option) =>
                      optionValue === undefined
                        ? option.id
                        : option[optionValue]
                    }
                    options={data}
                  />
                </>
              )}
            </>
          )}
        </>
      )}
    </AppRow>
  );
}

export default AppReactSelect;
