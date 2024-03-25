import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "../../../app-redux/features/appData/appDataSlice";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../routes/RouteLinks";
import AppButton from "../../atoms/AppButton/AppButton";

function GetStartedBtnHomePages() {
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.auth);
  let { offlineUserToken, loginUserState } = authData;

  let { type: userType } = loginUserState.data;

  let getStartedFn = () => {
    dispatch(toggleLoginForm());
  };
  return (
    <>
      {!loginUserState.loading && (
        <>
          {!loginUserState.isLoggedIn ? (
            <>
              <AppButton onClick={getStartedFn} label="Get Started"></AppButton>
            </>
          ) : (
            <>
              <AppButton
                isLink={true}
                linkPath={
                  userType === "talent"
                    ? `/${TALENT_ROUTE.index}${TALENT_ROUTE.dashboard}`
                    : `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`
                }
                label={
                  userType === "talent"
                    ? "Talent Dashboard"
                    : "Company Dashboard"
                }
              ></AppButton>
            </>
          )}
        </>
      )}
    </>
  );
}

export default GetStartedBtnHomePages;
