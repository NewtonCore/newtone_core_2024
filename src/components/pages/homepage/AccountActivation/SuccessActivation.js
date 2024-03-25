import React from "react";
import { ACCOUNT_ACTIVATION_SUCCESS_SVG } from "../../../../constants/AppSvg";
import AppSVG from "../../../organisms/AppSVG/AppSVG";

import AppButton from "../../../atoms/AppButton/AppButton";
import { Link, useNavigate } from "react-router-dom";
import { TALENT_ROUTE, COMPANY_ROUTE } from "../../../../routes/RouteLinks";

function SuccessActivation({width="45%", userName = "Visitor", type,pre_message="Welcome to Newton",message="Your account has been activated" }) {

  const navigate = useNavigate()

  const handleClickDashboardBtn=()=>{
    navigate( type === "talent"
    ? `/${TALENT_ROUTE.index}${TALENT_ROUTE.dashboard}`
    : type === "company"
    ? `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`
    : "/")
  }
  return (
    <div>
        
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          // width: "45%",
          width:width,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "auto",
          // marginTop: 100,
        }}
      >
        <AppSVG
          style={{ height: "auto", width: "auto" }}
          data={ACCOUNT_ACTIVATION_SUCCESS_SVG}
        ></AppSVG>
        <h5 className="text-center mt-4 mb-4">
          {userName}, {pre_message}. {message}
        </h5>
        <AppButton
        onClick={()=>handleClickDashboardBtn()}
          // isLink={true}
          // linkPath={`${
           
          // }`}
          size="small"
        >
          Proceed to {type} dashboard
        </AppButton>
        <br></br>
        <br></br>

        <Link style={{ textDecoration: "none" }} to="/" size="small">
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default SuccessActivation;
