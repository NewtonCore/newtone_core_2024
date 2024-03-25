import React from "react";

function AppRadio2({ value, id, label, radioName, checked,handleCheck }) {
  // console.log(checked)
  return (
    <div className="form-check">
      <input
        onClick={(e)=>handleCheck(e.target.value)}
        defaultChecked={checked}
        // checked={checked}
        className="form-check-input"
        type="radio"
        name={radioName}
        id={id}
        value={value}
      />
      <label className="form-check-label font-weight-bold" htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default AppRadio2;
// 