import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "../../../app-redux/features/appData/appDataSlice";
import AppButton from "../../atoms/AppButton/AppButton";
import AppCol from "../AppCol/AppCol";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import PrimaryContainer from "../PrimaryContainer/PrimaryContainer";
import "./GetStartedBottom.css";
import Fade from "react-reveal/Fade";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../routes/RouteLinks";

function GetStartedBottom({
  heading = "Work and Build Awesome Softwares",
  text = "Now is the time to get into that role that would bring you the satisfaction you desire. Build software that solve challenges in your society.",
  // text = "",
}) {
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.auth);
  let { offlineUserToken, loginUserState } = authData;

  let { type: userType } = loginUserState.data;

  const handleGetStarted = () => {
    dispatch(toggleLoginForm());
  };
  return (
    <div id="get_started">
      <>
        <PrimaryContainer className="primary">
          <AppContainerFluid>
            <AppRow>
              <AppCol size="8" md_size={8} lg_size={8} sm_size={12}>
                <Fade bottom>
                  <h1
                    className="display-3 fw-bolder mb-4 mt-4"
                    style={{ fontSize: 65 }}
                  >
                    {heading}
                  </h1>
                </Fade>

                <Fade bottom>
                  <small> {text}</small>
                </Fade>
              </AppCol>

              <AppCol
                size="4"
                sm_size={12}
                md_size={4}
                lg_size={4}
                id="get_started_btn"
              >
                <Fade bottom>
                  <div className="d-inline-flex p-2 bd-highlight justify-content-center">
                    {!loginUserState.isLoggedIn ? (
                      <>
                        <AppButton
                          onClick={() => handleGetStarted()}
                          label="Get Started"
                          color="white"
                        ></AppButton>
                      </>
                    ) : (
                      <>
                        <AppButton
                          color="white"
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
                  </div>
                </Fade>
              </AppCol>
            </AppRow>
          </AppContainerFluid>
        </PrimaryContainer>
      </>
    </div>
  );
}

export default GetStartedBottom;
