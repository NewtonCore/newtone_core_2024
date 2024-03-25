import React from "react";

function AppRow(props) {
  const { style } = props;
  return (
    <div
      id={props.id}
      className={`row ${props.className}`}
      style={{ marginTop: 0, ...style }}
    >
      {props.children}
    </div>
  );
}

export default AppRow;
