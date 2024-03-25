import React from "react";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import { COMPANY_ROUTE, TALENT_ROUTE } from "../../../../routes/RouteLinks";

function CompanyOverview({ userType, companyProfileDetailsData }) {
  return (
    <div>
      <SecondaryBackground>
        <div className="pt-4 pb-4">
          <div>
            <h6 className="mt-4 mb-4 fw-bold">Company overview</h6>

            <AppRow>
              <AppCol size="6" md_size={7} lg_size={8} sm_size={6} xs_size={6}>
                Name
              </AppCol>
              <AppCol size="6" md_size={5} lg_size={4} sm_size={6} xs_size={6}>
                {userType === "talent" ? (
                  <a
                    href={`/${TALENT_ROUTE.index}${TALENT_ROUTE.viewCompany}${companyProfileDetailsData.id}`}
                  >
                    {companyProfileDetailsData.name}
                  </a>
                ) : (
                  <a
                    href={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewCompany}`}
                  >
                    {companyProfileDetailsData.name}
                  </a>
                )}
              </AppCol>
            </AppRow>

            <AppRow>
              {/* {JSON.stringify(companyProfileDetailsData)} */}
              <AppCol size="6" md_size={7} lg_size={8} sm_size={6} xs_size={6}>
                Location
              </AppCol>
              <AppCol size="6" md_size={5} lg_size={4} sm_size={6} xs_size={6}>
                {companyProfileDetailsData.country}
              </AppCol>
            </AppRow>

            <AppRow>
              <AppCol size="6" md_size={7} lg_size={8} sm_size={6} xs_size={6}>
                Website
              </AppCol>
              <AppCol size="6" md_size={5} lg_size={4} sm_size={6} xs_size={6}>
                <div className="text-break">
                  {companyProfileDetailsData.user !== undefined && (
                    <>
                      {companyProfileDetailsData.user.company_website ===
                        undefined &&
                      companyProfileDetailsData.user.company_website ===
                        null ? (
                        "No website"
                      ) : (
                        <a
                          target="_blank"
                          href={`${companyProfileDetailsData.user.company_website}`}
                        >
                          {companyProfileDetailsData.user.company_website}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </AppCol>
            </AppRow>
          </div>
        </div>
      </SecondaryBackground>
    </div>
  );
}

export default CompanyOverview;
