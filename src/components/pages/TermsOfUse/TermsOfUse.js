import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleLoginForm } from "../../../app-redux/features/appData/appDataSlice";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import GetStartedBottom from "../../organisms/GetStartedBottom/GetStartedBottom";
import HomePageFoooter from "../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../templates/HomePageLayout/HomePageLayout";
import TermsOfUseDoc from "./pagecomponents/TermsOfUseDoc";

function TermsOfUse() {
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

      <AppContainerFluid id="applicant-blog-div">
        <h4>Terms of use</h4>
        <TermsOfUseDoc />
        <GetStartedBottom></GetStartedBottom>
      </AppContainerFluid>
      <HomePageFoooter />
    </div>
  );
}

export default TermsOfUse;
