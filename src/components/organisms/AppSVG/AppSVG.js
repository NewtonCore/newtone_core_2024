import React from "react";

function AppSVG({ data = undefined, style = undefined }) {

  return (
    <>
      {data !== "" && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <object alt="Newton" data={data} height="100%" style={style}></object>
      )}
    </>
  );
}

export default AppSVG;
