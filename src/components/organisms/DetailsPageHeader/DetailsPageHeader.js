import React from "react";
import { TALENT_IMG, USER_IMAGE } from "../../../constants/AppImages";
import AppCol from "../AppCol/AppCol";
import AppImage from "../AppImage/AppImage";
import AppRow from "../AppRow/AppRow";
import AppSVG from "../AppSVG/AppSVG";
import SecondaryBackground from "../SecondaryBackground/SecondaryBackground";
import classStyle from "./DetailsPageHeader.module.css"
function DetailsPageHeader({
  ActionComponent = undefined,
  label = "",
  Details = undefined,
  image=null,
  loading,
  children
}) {
  return (
   <SecondaryBackground>
     <div className={classStyle.detailsHeader}>
      <AppRow>
        <AppCol size={8} md_size={7} lg_size={8} sm_size={12}>
          <div className={classStyle.detailsLeft}>
           <div className={classStyle.svg}>
      {/* aaa  {image} */}

           <AppImage image={image === null ? USER_IMAGE : image} />
           </div>

           <div className={classStyle.labelDetails}>
           <h5>{label !== undefined && label}</h5>
              <div>{Details !== undefined && Details}</div>
           </div>

          </div>
        </AppCol>
        <AppCol size={4} md_size={5} lg_size={4} sm_size={12} className={classStyle.actionComponent}>
          {ActionComponent !== undefined && ActionComponent}
        </AppCol>
      </AppRow>
    </div>
    {children}
   </SecondaryBackground>
  );
}

export default DetailsPageHeader;
