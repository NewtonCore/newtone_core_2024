import React from "react";
import AppButton from "../../../atoms/AppButton/AppButton";
import { SHARE_SVG } from "../../../../constants/AppSvg";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import { Briefcase, Clock, Person } from "akar-icons";
import DashboardCard from "../../../organisms/DashboardCard/DashboardCard";
import AppContainer from "../../../organisms/AppContainer/AppContainer";
import { SECONDARY_COLOR } from "../../../../constants/AppColors";
import AppLineGraph from "../../../organisms/AppLineGraph/AppLineGraph";
import AppImage from "../../../organisms/AppImage/AppImage";
import { useDispatch, useSelector } from "react-redux";
import { toggleReferModal } from "../../../../app-redux/features/appData/appDataSlice";
import { FormatDate, generateGraphData } from "../../../../constants/utils";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import { TALENT_ROUTE } from "../../../../routes/RouteLinks";
import UpdateProfileNotification from "./UpdateProfileNotification";

function TalentDashboard() {
  let authData = useSelector((state) => state.auth);
  let talentData = useSelector((state) => state.talent);
  let TalentProfile = useSelector((state) => state.TalentProfile);
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const { talentsWhichAppliedJob } = jobCompanyData;
  let { results: talentsWhichAppliedJobResults } = talentsWhichAppliedJob.data;

  const { talentInterviewsState } = talentData;
  const { data: talentInterviewData } = talentInterviewsState;
  const { talentState } = TalentProfile;

  const { profileVisits, loginUserState } = authData;

  const { data: profileVisitsData } = profileVisits;
  const { results: profileVisitsResults, total: profileVisitsTotal } =
    profileVisitsData;

  const graphData =
    profileVisitsResults !== undefined
      ? generateGraphData(profileVisitsResults)
      : [];

  const dispatch = useDispatch();

  // console.log(talentState.data.length);

  const dashBoardCards = [
    {
      name: "Applied Jobs",
      image: <Briefcase></Briefcase>,
      count:
        talentsWhichAppliedJobResults !== undefined
          ? talentsWhichAppliedJobResults.length
          : 0,
      route: `/${TALENT_ROUTE.index}${TALENT_ROUTE.jobStatus}`,
    },
    {
      name: "Profile Views",
      image: <Person />,
      count: profileVisitsTotal !== undefined ? profileVisitsTotal : 0,
      route: `#`,
    },
  ];
  return (
    <>
      {/* <AppNavBar></AppNavBar> */}

      <TalentLayout
        pageTitle="Talent Dashboard"
        pageHeaderRight={
          <>
            <AppButton
              onClick={() => dispatch(toggleReferModal())}
              color="white"
              size="small"
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <AppImage
                  style={{ height: 25, marginRight: 10 }}
                  image={SHARE_SVG}
                />
                Refer a friend
              </div>
            </AppButton>
          </>
        }
      >
        <WhiteBgDiv loading={talentState.loading}>
          <>
            {!talentState.data.hasOwnProperty("id") ? (
              <>
                {!talentState.loading && (
                  <UpdateProfileNotification
                    loginUserState={loginUserState}
                  ></UpdateProfileNotification>
                )}
              </>
            ) : (
              <>
                <AppRow>
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
                            noDataMsg="You seem not to have any profile visits yet"
                            name="Profile visits"
                            dataKeyXAxis="name"
                            graphData={graphData}
                          ></AppLineGraph>
                        </AppCol>
                      </AppRow>
                    </AppContainer>
                  </AppCol>

                  <AppCol
                    lg_size="5"
                    sm_size="12"
                    size={5}
                    style={{ margin: 0 }}
                  >
                    <AppContainer
                      style={{
                        backgroundColor: SECONDARY_COLOR,
                        padding: 10,
                        borderRadius: 4,
                      }}
                    >
                      {talentInterviewData.length === 0 && (
                        <>
                          <EmptyData
                            title="No updates to show"
                            message="Here you will see your job offers once an application has been made by you."
                          />
                        </>
                      )}
                      <AppRow className="p-2">
                        <AppCol size={12}>
                          {talentInterviewData.results !== undefined && (
                            <>
                              {talentInterviewData.results.length === 0 ? (
                                <EmptyData
                                  title="No updates to show"
                                  message="Here you will see your job offers once an application has been made by you."
                                />
                              ) : (
                                <>
                                  {talentInterviewData.results.map(
                                    (interview) => {
                                      return (
                                        <>
                                          <p>
                                            Meeting (
                                            {FormatDate(
                                              new Date(interview.date)
                                            )}{" "}
                                            - {interview.time_zone})
                                          </p>
                                          <p>Time: {interview.start_time}</p>
                                          <Clock
                                            size={15}
                                          ></Clock> Duraton:{" "}
                                          {interview.time_duration} minutes
                                          <hr></hr>
                                        </>
                                      );
                                    }
                                  )}

                                  <center>
                                    <AppButton
                                      size="small"
                                      label="View all Updates"
                                    ></AppButton>
                                  </center>
                                </>
                              )}
                            </>
                          )}
                        </AppCol>
                      </AppRow>
                    </AppContainer>
                  </AppCol>
                </AppRow>
              </>
            )}
            <></>
          </>
        </WhiteBgDiv>
      </TalentLayout>
    </>
  );
}

export default TalentDashboard;
