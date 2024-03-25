import React from "react";
import { COLORED_LOGO_SVG } from "../../../constants/AppSvg";
import AppCol from "../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../organisms/AppContainerFluid/AppContainerFluid";
import AppImage from "../../organisms/AppImage/AppImage";
import AppRow from "../../organisms/AppRow/AppRow";
import SecondaryBackground from "../../organisms/SecondaryBackground/SecondaryBackground";

function AppPreFooter() {
  return (
      <SecondaryBackground className="mt-4 mb-4">
        <AppContainerFluid>
          <AppRow className="mt-4 mb-4 p-0">
            <AppCol className="mt-4 mb-4 p-0">
              <AppImage style={{height:70,width:70}} image={COLORED_LOGO_SVG}></AppImage>
            </AppCol>
          </AppRow>
        </AppContainerFluid>
      </SecondaryBackground>
  );
}

export default AppPreFooter;
