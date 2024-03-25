import React from "react";
import { CREATIVITY_1_IMAGE } from "../../../../../../constants/AppImages";
import AppBlogContent from "../../../../../organisms/AppBlogContent/AppBlogContent";
import AppContainerFluid from "../../../../../organisms/AppContainerFluid/AppContainerFluid";

import SecondaryBackground from "../../../../../organisms/SecondaryBackground/SecondaryBackground";
import AppPreFooter from "../../../../../templates/AppPreFooter/AppPreFooter";
import HomePageFoooter from "../../../../../templates/HomePageFoooter/HomePageFoooter";
import HomePageLayout from "../../../../../templates/HomePageLayout/HomePageLayout";
import Blog from "../../pagecomponents/Blog";

function ViewBlog() {
  return (
    <div>
      <HomePageLayout />
      <AppContainerFluid id="" style={{ marginTop: 100 }}>
        <AppBlogContent image={CREATIVITY_1_IMAGE}></AppBlogContent>
        <h4>Also Read</h4>
        <Blog></Blog>

        <SecondaryBackground></SecondaryBackground>
      </AppContainerFluid>
      <AppPreFooter />
      <HomePageFoooter />
    </div>
  );
}

export default ViewBlog;
