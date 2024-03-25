import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { USER_IMAGE } from "../../../constants/AppImages";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../routes/RouteLinks";
import AppCol from "../AppCol/AppCol";
import AppImage from "../AppImage/AppImage";
import AppRow from "../AppRow/AppRow";
import "./SideNavProfile.css";

function SideNavProfile({ name = "", image = {}, isTalent = null }) {
  const TalentProfileData = useSelector((state) => state.TalentProfile);
  let { talentState: talentSliceData } = TalentProfileData;
  let { data: talentDataResult } = talentSliceData;
  const editCompanyData = useSelector((state) => state.editCompany);
  const { companyProfile } = editCompanyData;
  const { data: companyProfileData } = companyProfile;
  
  return (
    <div id="side_nav_profile">
      <AppRow>
        <AppCol size={3} md_size={3} lg_size={3} sm_size={3}>
          <div id="image_div">
            {isTalent ? (
              <>
                <AppImage
                  alt="pi-mg"
                  image={
                    talentDataResult.hasOwnProperty("photo")
                      ? talentDataResult.photo !== null
                        ? talentDataResult.photo
                        : USER_IMAGE
                      : USER_IMAGE
                  }
                ></AppImage>
              </>
            ) : (
              <AppImage
                alt="pi-mg"
                image={
                  companyProfileData.hasOwnProperty("logo")
                    ? companyProfileData.logo !== null
                      ? companyProfileData.logo
                      : USER_IMAGE
                    : USER_IMAGE
                }
              ></AppImage>
            )}
          </div>
        </AppCol>

        <AppCol size={9} md_size={9} lg_size={9} sm_size={9}>
          <span id="name" className="d-block">
            {name}
          </span>

          {isTalent ? (
            <Link to={`/${TALENT_ROUTE.index}${TALENT_ROUTE.viewProfile}`}>
              View Profile
            </Link>
          ) : (
            <Link to={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewCompany}`}>
              View Profile
            </Link>
          )}
        </AppCol>
      </AppRow>
    </div>
  );
}

export default SideNavProfile;
