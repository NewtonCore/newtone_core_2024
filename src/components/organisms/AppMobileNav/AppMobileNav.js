import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  toggleLoginForm,
  toggleSideNav,
} from "../../../app-redux/features/appData/appDataSlice";
import {
  LOGO_ICON_TEAL_SVG,
  MENU_BARS_SVG,
  USER_SVG,
} from "../../../constants/AppSvg";
import AppCol from "../AppCol/AppCol";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import AppSVG from "../AppSVG/AppSVG";
import SideNav from "../SideNav/SideNav";
import "./AppMobileNav.css";

function AppMobileNav({ isInDashboard = false, component }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleSideNav(false));
  }, []);

  const handleToggleMenuBars = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      dispatch(toggleSideNav());
    } else {
      // dispatch(toggleSideNav());
    }
  };

  return (
    <>
      <SideNav
        componentPassedToDisplay={isInDashboard ? component : undefined}
        closeSideNav={() => dispatch(toggleSideNav())}
        handleClose={handleToggleMenuBars}
      ></SideNav>

      <div id="app_mobile_nav" className="">
        <AppContainerFluid id="">
          <AppRow>
            <AppCol
              id="mobile-left"
              size={4}
              lg_size={4}
              md_size={3}
              sm_size={3}
              xs_size={4}
            >
               <div style={{height:60,padding:10}}>

              <Link to="/">
               <AppSVG style={{height:50,width:50}} data={LOGO_ICON_TEAL_SVG}></AppSVG>
              </Link>
              </div>

            </AppCol>

            <AppCol
              size={4}
              lg_size={4}
              md_size={4}
              sm_size={4}
              xs_size={8}
              olg={4}
              omg={5}
              osg={5}
              oxsg={4}
              style={{ padding: 0, marginBottom: 0 }}
            >
              <AppRow id="mobile-right">
                <AppCol
                  id="user"
                  size={4}
                  lg_size={4}
                  md_size={6}
                  sm_size={4}
                  xs_size={6}
                ></AppCol>
                <AppCol
                  id="user"
                  size={4}
                  lg_size={4}
                  md_size={3}
                  sm_size={4}
                  xs_size={3}
                >
                  {!isInDashboard && (
                    <button
                      onClick={() => dispatch(toggleLoginForm())}
                      className="btn btn-default"
                    >
                      <AppSVG data={USER_SVG}></AppSVG>
                    </button>
                  )}
                </AppCol>

                <AppCol
                  id="menu_bars"
                  size={4}
                  lg_size={4}
                  md_size={3}
                  sm_size={4}
                  xs_size={3}
                >
                  <button
                    onClick={handleToggleMenuBars}
                    className="btn btn-default"
                  >
                    <AppSVG data={MENU_BARS_SVG}></AppSVG>
                  </button>
                </AppCol>
              </AppRow>
            </AppCol>
          </AppRow>
        </AppContainerFluid>
      </div>
    </>
  );
}

export default AppMobileNav;
