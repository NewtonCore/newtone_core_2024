import React from "react";

function AppRadio({
  value,
  id,
  meta,
  radioName,
  checked,
  handleChange,
  options,
}) {
  const handleCheck = (e) => {
    if (e.target.name !== undefined) {
      handleChange(e, meta);
    }
  };

  return (
    <div>
      {options.map((val, index) => {
        return (
          <>
            <input
            checked={value === val.value}
              onClick={(e) => handleCheck(e)}
              defaultChecked={checked}
              className="form-check-input ml-3"
              type="radio"
              name={val.name}
              id={val.id}
              value={val.value}
            />{" "}
            <label style={{marginLeft:10}} className="form-check-label" htmlFor={val.id}>
              {val.label}
            </label>
            <br></br>
          </>
        );
      })}
    </div>
  );
}

export default AppRadio;
