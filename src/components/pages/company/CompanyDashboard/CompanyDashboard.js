import React from "react";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import { Briefcase, Person } from "akar-icons";
import DashboardCard from "../../../organisms/DashboardCard/DashboardCard";
import AppContainer from "../../../organisms/AppContainer/AppContainer";
import { SECONDARY_COLOR } from "../../../../constants/AppColors";
import AppLineGraph from "../../../organisms/AppLineGraph/AppLineGraph";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import { useSelector } from "react-redux";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import AppFlutterwave from "../../../organisms/AppFlutterwave/AppFlutterwave";
import AppButton from "../../../atoms/AppButton/AppButton";
import { COMPANY_ROUTE } from "../../../../routes/RouteLinks";
import {
  formatAppliedTalentsFor_Updates,
  generateGraphData,
} from "../../../../constants/utils";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import UpdatesNotification from "../CompanyUpdates/pagecomponents/UpdatesNotification";
import AppLink from "../../../organisms/AppLink/AppLink";

function CompanyDashboard() {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const authData = useSelector((state) => state.auth);
  const { loginUserState, profileVisits } = authData;
  const loginUserStateData = loginUserState.data;

  const { jobByCompany } = jobCompanyData;
  const { data: jobByCompanyData } = jobByCompany;
  const { results: jobResults } = jobByCompanyData;
  const { talentsWhichAppliedJob_For_Updates: updatesData } = jobCompanyData;

  const updatesDataRes = updatesData.data.hasOwnProperty("results")
    ? updatesData.data.results
    : [];

  const { data: profileVisitsData } = profileVisits;
  const { results: profileVisitsResults, total: profileVisitsTotal } =
    profileVisitsData;

  const graphData =
    profileVisitsResults !== undefined
      ? generateGraphData(profileVisitsResults)
      : [];

  let updates = formatAppliedTalentsFor_Updates(updatesDataRes);

  // console.log({jobByCompanyData})

  const dashBoardCards = [
    {
      name: "Posted Jobs",
      image: <Briefcase></Briefcase>,
      count: jobResults !== undefined ? jobResults.length : 0,
      route: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.my_jobs}`,
    },
    {
      name: "Talents",
      image: <Person />,
      count: 0,
      route: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.hired_talents}`,
    },
  ];
  return (
    <>
      {/* <AppNavBar></AppNavBar> */}

      <CompanyLayout pageTitle="Company Dashboard">
        <WhiteBgDiv>
          <AppRow>
            <AppFlutterwave />
            <AppCol lg_size="7" sm_size="12" size={7}>
              <AppContainer className="m-0 p-0">
                <AppRow className="gx-4">
                  {dashBoardCards.map((dashBoardCard, index) => {
                    return (
                      <AppCol
                        key={index}
                        md_size="6"
                        sm_size={6}
                        xs_size={12}
                        size={6}
                        lg_size={6}
                      >
                        <DashboardCard
                          count={dashBoardCard.count}
                          image={dashBoardCard.image}
                          name={dashBoardCard.name}
                          route={dashBoardCard.route}
                        />
                      </AppCol>
                    );
                  })}
                </AppRow>

                <AppRow className="gx-5">
                  <AppCol
                    md_size="6"
                    sm_size={6}
                    xs_size={12}
                    size={6}
                    lg_size={6}
                  ></AppCol>
                  <AppCol>
                    <span className="mt-3 mb-3">Your profile visits</span>
                    <AppLineGraph
                      dataKeyXAxis="name"
                      graphData={graphData}
                    ></AppLineGraph>
                  </AppCol>
                </AppRow>
              </AppContainer>
            </AppCol>

            <AppCol lg_size="5" sm_size="12" size={5} className="">
              <AppContainer
                style={{
                  backgroundColor: SECONDARY_COLOR,
                  padding: 10,
                  borderRadius: 4,
                }}
              >
                <AppRow className="p-2">
                  <AppCol size={12}>
                    {/* start of updates */}
                    {updates.length === 0 ? (
                      <>
                        <EmptyData title="You have no updates" />
                      </>
                    ) : (
                      <>
                        {updates.length > 3 ? (
                          <>
                            {updates.slice(0, 3).map((data) => {
                              return (
                                <AppCol
                                  size={12}
                                  md_size={6}
                                  sm_size={12}
                                  xs_size={12}
                                  xl_size={12}
                                >
                                  <UpdatesNotification
                                    showImage={false}
                                    update={data}
                                  ></UpdatesNotification>
                                </AppCol>
                              );
                            })}
                          </>
                        ) : (
                          <>
                            {updates.map((data) => {
                              return (
                                <AppCol
                                  size={12}
                                  md_size={6}
                                  sm_size={12}
                                  xs_size={12}
                                  xl_size={12}
                                >
                                  <UpdatesNotification
                                    showImage={false}
                                    update={data}
                                  ></UpdatesNotification>
                                </AppCol>
                              );
                            })}
                          </>
                        )}

                        <center>
                          <AppButton
                            isLink={true}
                            linkPath={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.updates}`}
                            size="small"
                            label="View all Updates"
                          ></AppButton>
                        </center>
                      </>
                    )}

                    {/* End of updates */}
                  </AppCol>
                </AppRow>
              </AppContainer>
              {loginUserStateData.hasOwnProperty("is_staff") && (
                <>
                  {loginUserStateData.is_staff && (
                    <>
                      <div className="mt-3 border rounded p-3">
                        <h6>Admin Functionality</h6>
                        <hr></hr>
                        <div>
                          <AppLink
                            to={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.TestGorillaResult}`}
                          >
                            Upload TestGorilla Excel
                          </AppLink>
                        </div>
                        <div>
                          <AppLink
                            to={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.TestQuestion}`}
                          >
                            Upload Questions
                          </AppLink>
                        </div>
                        <div>
                          <AppLink
                            to={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.DownloadSkillResult}`}
                          >
                           Download talent test results
                          </AppLink>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </AppCol>
          </AppRow>
        </WhiteBgDiv>
      </CompanyLayout>
    </>
  );
}

export default CompanyDashboard;
