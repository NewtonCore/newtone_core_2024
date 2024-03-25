import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TALENT_IMG } from "../../../constants/AppImages";
import { NAVLINKS } from "../../../constants/navlinks";
import { generateUniqueID } from "../../../constants/utils";
import AppButton from "../../atoms/AppButton/AppButton";
import LeftNavLink from "../../molecules/LeftNavLink/LeftNavLink";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppNavBar from "../../organisms/AppNavBar/AppNavBar";
import PagesHeader from "../../organisms/PagesHeader/PagesHeader";
import SideNavProfile from "../../organisms/SideNavProfile/SideNavProfile";
import LeftRightPage from "../LeftRightPage/LeftRightPage";
import { logOutUser } from "../../../app-redux/features/Auth/authSlice";
import ReferModal from "../../organisms/ReferModal/ReferModal";
import { toggleReferModal } from "../../../app-redux/features/appData/appDataSlice";
import AppMobileNav from "../../organisms/AppMobileNav/AppMobileNav";
import { Logout } from "@mui/icons-material";

const LeftNavComponent = ({ first_name, last_name, dispatch }) => {
  return (
    <>
      <div>
        <SideNavProfile isTalent={true} name={`${first_name} ${last_name}`} />
        {NAVLINKS.available_for_job_link.map((leftNavLink, index) => {
          return (
            <LeftNavLink
              key={generateUniqueID()}
              style={{ borderRadius: 40, marginBottom: 40 }}
              link={leftNavLink.link}
              image={leftNavLink.image}
              name={leftNavLink.name}
            ></LeftNavLink>
          );
        })}
        {NAVLINKS.talent_left_links.map((leftNavLink, index) => {
          return (
            <LeftNavLink
              key={generateUniqueID()}
              link={leftNavLink.link}
              image={leftNavLink.image}
              name={leftNavLink.name}
            ></LeftNavLink>
          );
        })}

        <AppButton
          size="small"
          onClick={() => dispatch(logOutUser())}
          style={{ backgroundColor: "white", color: "black" }}
        >
          <Logout /> Logout
        </AppButton>
      </div>
    </>
  );
};

function TalentLayout({
  name_of_talent,
  showLeftNav,
  children,
  pageTitle = "",
  pageHeaderRight = undefined,
  loading,
}) {
  const authData = useSelector((state) => state.auth);
  const appData = useSelector((state) => state.appData);

  let { loginUserState } = authData;
  let { data: userData } = loginUserState;
  let { first_name, last_name, phone, email } = userData;

  const dispatch = useDispatch();
  return (
    <main>
      {/* App top nav here */}
      <AppMobileNav
        component={
          <LeftNavComponent
            last_name={last_name}
            first_name={first_name}
            dispatch={dispatch}
            loading={loading}
          />
        }
        isInDashboard={true}
      />
      <AppNavBar
        loading={loading}
        navTileImage={TALENT_IMG}
        navTileTitle={`${first_name} ${last_name}`}
        rightLinks={NAVLINKS.dashboard_talent_right_links}
        leftLinks={NAVLINKS.dashboard_talent_links}
      />
      <LeftRightPage
        Left={
          <LeftNavComponent
            last_name={last_name}
            first_name={first_name}
            dispatch={dispatch}
          ></LeftNavComponent>
        }
        Right={
          <AppContainerFluid className="fluid_xl">
            <>
              <AppCol size="12">
                <>
                  {/* {JSON.stringify(pageHeaderRight)} */}
                  {pageHeaderRight !== undefined ? (
                    <PagesHeader
                      RightComponent={pageHeaderRight}
                      title={pageTitle}
                    ></PagesHeader>
                  ) : (
                    <PagesHeader title={pageTitle}></PagesHeader>
                  )}
                  {children}
                </>
              </AppCol>
            </>
          </AppContainerFluid>
        }
      />
      <ReferModal
        message="Newton is the new thing on the block. We assist companies looking to hire tech talents or build teams by using our AI-powered platform and data-driven technology to get the best fitting for the role."
        toggleFunction={() => dispatch(toggleReferModal())}
        show={appData.showReferFriendModal}
      />
    </main>
  );
}

export default TalentLayout;
