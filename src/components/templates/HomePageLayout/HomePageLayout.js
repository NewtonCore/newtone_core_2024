import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleLoginForm,
  toggleShowCreateAccountForm,
} from "../../../app-redux/features/appData/appDataSlice";
import { NAVLINKS } from "../../../constants/navlinks";
import AppButton from "../../atoms/AppButton/AppButton";
import AppNavLink from "../../molecules/AppNavLink/AppNavLink";
import AppMobileNav from "../../organisms/AppMobileNav/AppMobileNav";
import AppNavBar from "../../organisms/AppNavBar/AppNavBar";
import ReferModal from "../../organisms/ReferModal/ReferModal";
import UserLoginModal from "../UserLoginModal/UserLoginModal";
import { Link } from "react-router-dom";

function HomePageLayout({ showLeftNav, children, pageTitle = "", styles }) {
  const dispatch = useDispatch();

  const authData = useSelector((state) => state.auth);
  const { offlineUserToken, loginUserState } = authData;
  const { isLoggedIn, data: dataLogin } = loginUserState;
  const { type: userType } = dataLogin;

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
    <main>
      {/* App top nav here */}
      <AppMobileNav />

      <AppNavBar
        LeftComponent={
          <>
            <AppNavLink
              links={
                isLoggedIn
                  ? userType === "talent"
                    ? NAVLINKS.home_page_links_logged_in_talent
                    : userType === "company"
                    ? NAVLINKS.home_page_links_logged_in_company
                    : NAVLINKS.home_page_links
                  : NAVLINKS.home_page_links
              }
            ></AppNavLink>
          </>
        }
        RightComponent={
          !isLoggedIn ? (
            <>
              <div style={{ marginRight: 10 }}>
                <AppNavLink links={SignInLink}></AppNavLink>
              </div>
              {/* <AppButton
                onClick={() => dispatch(toggleLoginForm())}
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
          ) : undefined
        }
      />
      <UserLoginModal></UserLoginModal>
    </main>
  );
}

export default HomePageLayout;
