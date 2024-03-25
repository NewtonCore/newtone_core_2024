import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginForm } from "../../../../app-redux/features/appData/appDataSlice";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import PrivacyPolicyDoc from "./pagecomponents/PrivacyPolicyDoc";

function PrivacyPolicy() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      toggleLoginForm({
        loginForm: false,
        signUpForm: null,
      })
    );
  }, []);
  return (
    <div>
      <HomePageLayout />

      <AppContainerFluid id="applicant-blog-div" style={{marginTop:100}}>
        <h4  className="mt-5">Privacy Policy</h4>
        <PrivacyPolicyDoc />
        <GetStartedBottom></GetStartedBottom>
      </AppContainerFluid>
      <HomePageFoooter />
    </div>
  );
}

export default PrivacyPolicy;
