import React from "react";
import HomePageFoooter from "../../templates/HomePageFoooter/HomePageFoooter";
import AppCol from "../AppCol/AppCol";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import "./DetailsPage.css"

function DetailsPage({
  MainLeftComponent = undefined,
  MainRightComponent = undefined,
  Header,
  children,
  showPageFooter=true
}) {
  return (
    <div>
        <div className="detail-page">
        {Header !== undefined && Header}
        </div>

      <AppContainerFluid  id="main-content-details">
        <AppRow>
          <AppCol size={8} md_size={7} lg_size={8} sm_size={12}>
            {MainLeftComponent !== undefined && MainLeftComponent}
          </AppCol>
          <AppCol size={4} md_size={5} lg_size={4} sm_size={12}>
            {MainRightComponent !== undefined && MainRightComponent}
          </AppCol>
        </AppRow>
      </AppContainerFluid>
      {children}
      {
        showPageFooter &&
        <HomePageFoooter />

      }
    </div>
  );
}

export default DetailsPage;
