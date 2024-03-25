import React from "react";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import FaqTabs from "./pagecomponents/FaqTabs";
import SearchFaq from "./pagecomponents/SearchFaq";

function ApplicantFAQ() {
  return (
    <div>
      <HomePageLayout></HomePageLayout>
      <AppContainerFluid id="faqs_div">
        <SearchFaq></SearchFaq>
        <FaqTabs />
        <GetStartedBottom></GetStartedBottom>
      </AppContainerFluid>
      <AppPreFooter />
      <HomePageFoooter></HomePageFoooter>
    </div>
  );
}

export default ApplicantFAQ;
