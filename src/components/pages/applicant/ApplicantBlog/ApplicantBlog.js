import React from "react";
import Blog from "./pagecomponents/Blog";
import "./ApplicantBlog.css";
import HomePageLayout from "../../../templates/HomePageLayout/HomePageLayout";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import GetStartedBottom from "../../../organisms/GetStartedBottom/GetStartedBottom";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";

function ApplicantBlog() {
  return (
    <>
      <HomePageLayout />
      <AppContainerFluid id="applicant-blog-div">
        <h4>Our Blog</h4>
        <Blog />
        <Blog />
        <GetStartedBottom></GetStartedBottom>
      </AppContainerFluid>
      <AppPreFooter/>
      <HomePageFoooter />
    </>
  );
}

export default ApplicantBlog;
