import { LinearProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NEWTON_LOGO } from "../../../constants/AppImages";
import { NAVLINKS } from "../../../constants/navlinks";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../routes/RouteLinks";
import AppNavLink from "../../molecules/AppNavLink/AppNavLink";
import AppCol from "../AppCol/AppCol";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import AppNavTileButton from "../SideNavProfile/AppNavTileButton/AppNavTileButton";
import "./AppNavBar.css";
import UserLoginModal from "../../templates/UserLoginModal/UserLoginModal";
import AppButton from "../../atoms/AppButton/AppButton";
import {
  toggleLoginForm,
  toggleShowCreateAccountForm,
} from "../../../app-redux/features/appData/appDataSlice";

function AppNavBar({
  LeftComponent,
  RightComponent,
  // leftLinks,
  // rightLinks,
  navTileTitle,
  navTileImage,
  loading = false,
}) {
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.auth);
  const { loginUserState } = authData;
  const { isLoggedIn, data: dataLogin } = loginUserState;
  const { type: userType } = dataLogin;

  let { first_name, last_name, phone, email } = dataLogin;

  let rightLinks = isLoggedIn
    ? userType === "talent"
      ? NAVLINKS.dashboard_talent_right_links
      : userType === "company"
      ? NAVLINKS.company_top_right_links
      : NAVLINKS.dashboard_talent_right_links
    : [];

  let leftLinks = isLoggedIn
    ? userType === "talent"
      ? NAVLINKS.dashboard_talent_links
      : userType === "company"
      ? NAVLINKS.company_top_left_links
      : NAVLINKS.dashboard_talent_right_links
    : NAVLINKS.home_page_links;
  // let leftLinks = []

  let testLinks = [
    {
      name: "Home",
      linkTo: "",
    },
    {
      name: "FAQ",
    },
    {
      name: "Schedule a call",
    },
  ];

  let testLinks2 = [
    {
      name: "Post a Job",
      linkTo: "",
    },
  ];

  let SignInLink = [
    {
      name: "Sign In",
      link: "#",
      func: () => dispatch(toggleLoginForm()),

    },
  ];

  const toggleCreateAccount = () => {
    dispatch(toggleLoginForm());
    dispatch(toggleShowCreateAccountForm());
  };

  return (
    <div id="appnav" className="fixed-top">
      {loading || (loginUserState.loading && <LinearProgress />)}

      <UserLoginModal></UserLoginModal>

      <AppContainerFluid style={{ marginTop: 10 }}>
        <>
          {/* <AppCol size={1}></AppCol> */}
          <AppCol size={12} md_size="12" sm_size={12}>
            <div id="left">
              <div id="app_nav_logo">
                <Link to="/">
                  <img alt="Newton" draggable={false} src={NEWTON_LOGO}></img>
                </Link>
              </div>

              {LeftComponent !== undefined ? (
                LeftComponent
              ) : (
                <>
                  {!loginUserState.loading && (
                    <AppNavLink
                      links={leftLinks === undefined ? testLinks : leftLinks}
                    ></AppNavLink>
                  )}
                </>
              )}
            </div>

            <div id="right">
              {RightComponent !== undefined ? (
                RightComponent
              ) : (
                <>
                  {!loginUserState.loading && (
                    <>
                      {!isLoggedIn ? (
                        <>
                          <div style={{ marginRight: 10 }}>
                            <AppNavLink links={SignInLink}></AppNavLink>
                          </div>

                          {/* <Link to="/" onClick={() => dispatch(toggleLoginForm())}>
                          Sign In
                        </Link> */}
                          {/* <AppButton
                            
                            backgroundColor="transparent"
                            color="white"
                            label="Sign In"
                            size="small"
                          ></AppButton> */}

                          <AppButton
                            onClick={() => toggleCreateAccount()}
                            label="Create Account"
                            size="small"
                          ></AppButton>
                        </>
                      ) : (
                        <>
                          <AppNavLink
                            links={
                              rightLinks === undefined ? testLinks2 : rightLinks
                            }
                          ></AppNavLink>
                          <AppNavTileButton
                            link={
                              userType === "talent"
                                ? `/${TALENT_ROUTE.index}${TALENT_ROUTE.dashboard}`
                                : userType === "company"
                                ? `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`
                                : ""
                            }
                            image={navTileImage}
                            title={`${first_name} ${last_name}`}
                          />
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </AppCol>
          {/* <AppCol size={1}></AppCol> */}
        </>
      </AppContainerFluid>
    </div>
  );
}

export default AppNavBar;
