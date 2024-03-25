import { Logout } from "@mui/icons-material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../../app-redux/features/Auth/authSlice";
import { NAVLINKS } from "../../../constants/navlinks";
import { generateUniqueID } from "../../../constants/utils";
import AppButton from "../../atoms/AppButton/AppButton";
import LeftNavLink from "../../molecules/LeftNavLink/LeftNavLink";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppMobileNav from "../../organisms/AppMobileNav/AppMobileNav";
import AppNavBar from "../../organisms/AppNavBar/AppNavBar";
import AppRow from "../../organisms/AppRow/AppRow";
import PagesHeader from "../../organisms/PagesHeader/PagesHeader";
import SideNavProfile from "../../organisms/SideNavProfile/SideNavProfile";
import LeftRightPage from "../LeftRightPage/LeftRightPage";

export const LeftNavComponentCompany = ({
  first_name,
  last_name,
  dispatch,
  type,
}) => {
  return (
    <>
      <div>
        <SideNavProfile isTalent={true} name={`${first_name} ${last_name}`} />
        {type === "talent" && (
          <>
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
          </>
        )}

        {type === "talent" ? (
          <>
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
          </>
        ) : (
          <>
            {NAVLINKS.company_left_links.map((leftNavLink, index) => {
              return (
                <LeftNavLink
                  key={generateUniqueID()}
                  link={leftNavLink.link}
                  image={leftNavLink.image}
                  name={leftNavLink.name}
                ></LeftNavLink>
              );
            })}
          </>
        )}

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
function CompanyLayout({
  showLeftNav,
  children,
  pageTitle = "",
  pageTitleLink,
}) {
  const authData = useSelector((state) => state.auth);

  let { loginUserState } = authData;
  let { data: userData } = loginUserState;
  let { first_name, last_name,  } = userData;

  const dispatch = useDispatch();

  return (
    <main>
      {/* App top nav here */}

      <AppMobileNav
        component={
          <LeftNavComponentCompany
            type={userData.type}
            last_name={last_name}
            first_name={first_name}
            dispatch={dispatch}
          />
        }
        isInDashboard={true}
      />

      <AppNavBar
        navTileTitle={`${first_name} ${last_name}`}
        rightLinks={NAVLINKS.company_top_right_links}
        leftLinks={NAVLINKS.company_top_left_links}
      />
      <LeftRightPage
        Left={
          <>
            <SideNavProfile
              isTalent={false}
              name={`${first_name} ${last_name}`}
            />
            {NAVLINKS.company_left_links.map((leftNavLink) => {
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
          </>
        }
        Right={
          <>
            <AppContainerFluid>
              <AppRow>
                <AppCol size="12">
                  <AppRow>
                    <PagesHeader
                      pageTitleLink={pageTitleLink}
                      title={pageTitle}
                    ></PagesHeader>

                    {children}
                  </AppRow>
                </AppCol>
              </AppRow>
            </AppContainerFluid>
          </>
        }
      />
    </main>
  );
}

export default CompanyLayout;
