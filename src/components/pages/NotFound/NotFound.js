import React from "react";
import { useLocation } from "react-router-dom";
import AppSVG from "../../organisms/AppSVG/AppSVG";
import { NOT_FOUND_SVG } from "../../../constants/AppSvg";

function NotFound() {
  let location = useLocation();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "90vh",
        width:"75%",
        marginLeft:"auto",
        marginRight:"auto",
        marginTop:"auto",
        marginBottom:"auto"
      }}
    >
      <AppSVG style={{height:"auto",width:"auto"}} data={NOT_FOUND_SVG}></AppSVG>
      {/* <h4 style={{fontWeight: 600, color: PRIMARY_COLOR }}>
        Oops! Page Not Found
      </h4> */}
      <p className="mt-5">
        No match for <code>{location.pathname}</code>
      </p>

      <p>
        Try the home page <a href="/">here</a>
      </p>
    </div>
  );
}

export default NotFound;
