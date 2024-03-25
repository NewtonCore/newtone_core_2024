import React from "react";
import ConfirmationModal from "../../../organisms/ConfirmationModal/ConfirmationModal";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import { PRIMARY_COLOR } from "../../../../constants/AppColors";
import { Lock } from "@mui/icons-material";
import { Tab, Tabs } from "react-bootstrap";

function ViewTalentsDiv({
  jobID,
  jobApplicationObject,
  showOfferJobModal,
  showRejectApplicationModal,
  handleRejectJob,
  toggleShowRejectApplicationModal,
  dispatch,
  talentsWhichAppliedJob,
  talentsRecommendedJob,
  jobStatus,
  title,
  status,
  talentsApplied,
  tabs,
  handleOfferJob,
  toggleShowOfferJobModal,
}) {
  return (
    <div>
      <>
        {/* {JSON.stringify(talentsApplied)} */}
        <ScheduleInterviewModal
          jobId={jobID}
          jobApplicationObject={jobApplicationObject}
        />
        {showOfferJobModal && (
          <ConfirmationModal
            isDanger={false}
            offerJobFunc={() => console.log("offerJobFunc")}
            confirmText="YES"
            cancelText="NO"
            // loading={deleteEducationState.loading}
            actionButtonFn={() => {
              handleOfferJob();
            }}
            show={showOfferJobModal}
            message={`Offer Job`}
            onHide={() => dispatch(toggleShowOfferJobModal())}
          />
        )}
        {showRejectApplicationModal && (
          <ConfirmationModal
            offerJobFunc={() => console.log("offerJobFunc")}
            confirmText="YES"
            cancelText="NO"
            // loading={deleteEducationState.loading}
            // actionButtonFn={()=>{rejectApplicationFunction()}}
            actionButtonFn={() => {
              handleRejectJob();
            }}
            show={showRejectApplicationModal}
            message={`Reject Application`}
            onHide={() => dispatch(toggleShowRejectApplicationModal())}
          />
        )}
        <WhiteBgDiv
          loading={
            talentsWhichAppliedJob.loading || talentsRecommendedJob.loading
          }
        >
          {/* {JSON.stringify(talentsRecommendedJob.data)} */}

          <>
            <div className="mb-5">
              <div className="position-relative">
                <div className="position-absolute top-0 start-0">
                  <h4>
                    {jobStatus === "draft" ? (
                      <SaveAsIcon
                        style={{ color: PRIMARY_COLOR }}
                        color={PRIMARY_COLOR}
                      />
                    ) : jobStatus === "progress" ? (
                      <PodcastsIcon
                        style={{ color: PRIMARY_COLOR }}
                        color={PRIMARY_COLOR}
                      />
                    ) : (
                      <Lock />
                    )}{" "}
                    {title !== undefined && title.name}
                  </h4>
                  <h5>
                    {status !== 0 && status === "recommended" ? (
                      <>
                        {talentsRecommendedJob.data.length !== undefined &&
                          talentsRecommendedJob.data.length}{" "}
                        Recommended Talents
                      </>
                    ) : (
                      <>
                        {talentsApplied.talents !== undefined &&
                          talentsApplied.talents.length}{" "}
                        Applied Talents
                      </>
                    )}
                  </h5>
                </div>
                <div className="position-absolute top-0 end-0"></div>
              </div>
            </div>

            <div style={{ marginTop: 80 }}>
              <Tabs
                defaultActiveKey={tabs[0]["id"]}
                id="fill-tab-example"
                className="mb-3"
                // justify
              >
                {tabs.map((tab, index) => {
                  return (
                    <Tab
                      key={index}
                      style={{ backgroundColor: "transparent" }}
                      eventKey={tab.id}
                      title={tab.title}
                    >
                      <>{tab.component}</>
                    </Tab>
                  );
                })}
              </Tabs>
            </div>
          </>
        </WhiteBgDiv>
      </>
    </div>
  );
}

export default ViewTalentsDiv;
