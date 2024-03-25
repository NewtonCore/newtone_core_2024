import { Pencil } from "akar-icons";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getCompanyProfileDetails,
  resetJobDetails,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { JOB_TEST } from "../../../../constants/AppImages";
import { NAVLINKS } from "../../../../constants/navlinks";
import { COMPANY_ROUTE } from "../../../../routes/RouteLinks";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import AppRow from "../../../organisms/AppRow/AppRow";
import DetailsPage from "../../../organisms/DetailsPage/DetailsPage";
import DetailsPageHeader from "../../../organisms/DetailsPageHeader/DetailsPageHeader";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import About from "../AboutTalent/pagecomponents/About";
import CompanyOverview from "../../AppPages/ViewJob/CompanyOverview";
import { increaseCompanyVisits } from "../../../../app-redux/features/Auth/authSlice";

function ViewCompany() {
  const CompanyProfile = useSelector((state) => state.editCompany);
  const jobCompany = useSelector((state) => state.jobCompany);
  const { companyProfile } = CompanyProfile;
  const { companyProfileDetails } = jobCompany;
  const { data: companyProfileData } = companyProfile;
  const { data: companyProfileDetailsData } = companyProfileDetails;

  // const { companyProfileDetails } =
  // companyProfile;

  const authData = useSelector((state) => state.auth);

  const { loginUserState } = authData;
  const { data: dataLogin } = loginUserState;
  const { type: userType } = dataLogin;

  let { companyID } = useParams();
  let dispatch = useDispatch();

  const effectJobDetail = useRef(false);

  useEffect(() => {
    //get company profile details when page has been loaded by talent

    if (companyID !== undefined && !effectJobDetail.current) {
      dispatch(getCompanyProfileDetails(companyID));
      dispatch(increaseCompanyVisits(companyID));
    }

    return () => {
      effectJobDetail.current = true;
      dispatch(resetJobDetails());
    };
  }, [companyID]);

  return (
    <div>
      <AppNavBar
        rightLinks={NAVLINKS.dashboard_talent_right_links}
        leftLinks={NAVLINKS.dashboard_talent_links}
      />

      <DetailsPage
        Header={
          <>
            {/* {JSON.stringify(companyProfileDetails)} */}
            {userType !== undefined && userType === "talent" ? (
              <>
                <DetailsPageHeader
                  image={
                    companyProfileDetailsData.logo !== null &&
                    companyProfileDetailsData.logo !== undefined
                      ? companyProfileDetailsData.logo
                      : JOB_TEST
                  }
                  label={`${
                    companyProfileDetailsData.name !== undefined
                      ? companyProfileDetailsData.name
                      : ""
                  }`}
                ></DetailsPageHeader>
              </>
            ) : (
              <>
                <DetailsPageHeader
                  image={
                    companyProfileData.logo !== null &&
                    companyProfileData.logo !== undefined
                      ? companyProfileData.logo
                      : JOB_TEST
                  }
                  label={`${
                    companyProfileData.name !== undefined
                      ? companyProfileData.name
                      : ""
                  }`}
                  ActionComponent={
                    <>
                      {userType !== undefined && userType === "company" ? (
                        <AppButton
                          size="small"
                          isLink={true}
                          linkPath={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.profile}`}
                        >
                          <Pencil></Pencil> Edit Profile
                        </AppButton>
                      ) : (
                        <></>
                      )}
                    </>
                  }
                ></DetailsPageHeader>
              </>
            )}
          </>
        }
        MainLeftComponent={
          <>
            {userType !== undefined && userType === "talent" ? (
              <>
                <About
                  heading="About Company"
                  about={`${
                    companyProfileDetailsData.about !== undefined
                      ? companyProfileDetailsData.about
                      : ""
                  }`}
                ></About>
              </>
            ) : (
              <>
                <About
                  heading="About Company"
                  about={`${
                    companyProfileData.about !== undefined
                      ? companyProfileData.about
                      : ""
                  }`}
                ></About>
              </>
            )}
          </>
        }
        MainRightComponent={
          <>
            <CompanyOverview
              userType={userType}
              companyProfileDetailsData={
                userType === "talent"
                  ? companyProfileDetailsData
                  : companyProfileData
              }
            ></CompanyOverview>
          </>
        }
      ></DetailsPage>
    </div>
  );
}

export default ViewCompany;
