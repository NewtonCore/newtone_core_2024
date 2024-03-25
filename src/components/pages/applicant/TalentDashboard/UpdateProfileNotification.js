import React from "react";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppSVG from "../../../organisms/AppSVG/AppSVG";
import { WELCOME_SVG } from "../../../../constants/AppSvg";
import AppButton from "../../../atoms/AppButton/AppButton";
import { TALENT_ROUTE } from "../../../../routes/RouteLinks";

function UpdateProfileNotification({ loginUserState }) {
  return (
    <div>
      <AppRow>
        <center>
          <AppCol style={{ height: "100%", width: "80%" }} size={12}>
            <AppSVG data={WELCOME_SVG}></AppSVG>
          </AppCol>
        </center>
        <AppCol size={12}>
          <h5 className="text-center mt-2 fw-normal">
            {loginUserState.data.hasOwnProperty("first_name") &&
              loginUserState.data.first_name}
            , welcome to Newton. You need to update your profile to be able to
            apply for jobs, view job status and other app functionalities.
          </h5>
          <center>
            <AppButton
              isLink={true}
              linkPath={`/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`}
              size="small"
            >
              Update Profile
            </AppButton>
          </center>
        </AppCol>
      </AppRow>
    </div>
  );
}

export default UpdateProfileNotification;
