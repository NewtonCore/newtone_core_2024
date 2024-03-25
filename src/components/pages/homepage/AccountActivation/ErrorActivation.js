import React from "react";
import { ACCOUNT_ACTIVATION_ERROR_SVG } from "../../../../constants/AppSvg";
import AppSVG from "../../../organisms/AppSVG/AppSVG";
import AppButton from "../../../atoms/AppButton/AppButton";
import { useNavigate } from "react-router-dom";

function ErrorActivation({ showImage=true ,error=null ,pre_message = "Something went wrong activating your account"}) {
  const navigate = useNavigate()
  const handleClickHomeBtn=()=>{
    navigate("/")
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "45%",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "auto",
          // marginTop: 100,
        }}
      >

        {
          showImage &&

          <AppSVG
          style={{ height: "auto", width: "auto" }}
          data={ACCOUNT_ACTIVATION_ERROR_SVG}
        ></AppSVG> 
        }
       
        {
            error !== null &&

            <h5 className="text-center mt-4 mb-4">
           {pre_message}. {error}
          </h5>
        }
       
        <AppButton onClick={()=>handleClickHomeBtn()} size="small">
          Go to home
        </AppButton>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default ErrorActivation;
