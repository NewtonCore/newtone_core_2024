import React from "react";

function AppCol({
  size = 12,
  xs_size=12,
  sm_size=12,
  md_size,
  lg_size = 12,
  xl_size,
  xxl_size,
  children,
  id="",
  style={},
  className="",

  omd = 0,
  olg = 0,
  omg = 0,
  osg = 0,
  oxsg=0,
  marginBotton = 15,
}) {
  // const { size, md_size, lg_size, xl_size, xxl_size } = props;
  return (
    <div
      id={id}
      style={{marginBottom: marginBotton, ...style, }}
      className={`col-${xs_size} col-sm-${
        sm_size === undefined ? 6 : sm_size
      }  col-md-${md_size} offset-md-${omd} col-lg-${
        lg_size === undefined ? size : lg_size
      } offset-lg-${olg} offset-md-${omg} offset-sm-${osg} offset-xs-${oxsg} col-xl-${size} col-xxl-${size} ${className}`}
    >
     {children}
    </div>
  );
}

export default AppCol;
