import React from "react";
import { SECONDARY_LIGHT_COLOR } from "../../../constants/AppColors";
import { COMPANY_ROUTE } from "../../../routes/RouteLinks";
import AppButton from "../../atoms/AppButton/AppButton";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";
import AppCol from "../AppCol/AppCol";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";
import AppRow from "../AppRow/AppRow";
import { useNavigate } from "react-router-dom";

function TalentCardFooter({
  classStyle,
  talentID,
  showReject,
  showSchedule,
  showOfferJob,
  status,
  showScheduleModal,
  showRejectModal,
  showOfferModal,
  data,
  offerJob,
  isRecommendedPage = true,
  jobID,
  saveProfileFn,
  showSaveProfile,
  isSavedProfile
}) {
  const navigate = useNavigate();
  // console.log(data)
  const FirstRowActionButtons = [
    {
      id: 1,
      label: "View Talent",
      // link: `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewTalent}${talentID}`,
      // isLink: true,
      function: () => {
        navigate(
          `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewTalent}${
            data.talentId
          }?referJob=${jobID === undefined ? data.jobID : jobID}&application=${
            data.id
          }`
        );
      },
    },
    {
      id: 2,
      showButton: showSaveProfile,
      label: "Save Profile",
      function: (data) => saveProfileFn(data),
    },
  ];

  const SecondActionButtons = [
    {
      id: 1,
      label: "Schedule Interview",
      showReject: showSchedule === undefined ? showReject : showSchedule,
      status: status,
      function: (data) => showScheduleModal(data),
      hideOnRecommendedPage: false,
    },
    {
      id: 2,
      label: "Reject Application",
      showReject: showReject,
      status: status,
      function: (data) => showRejectModal(data),
      hideOnRecommendedPage: isRecommendedPage,
    },
    {
      id: 3,
      label: "Offer Job",
      showReject: showOfferJob === undefined ? showReject : showOfferJob,
      status: status,
      function: (data) => showOfferModal(data),
      hideOnRecommendedPage: false,

      // function:(dataPassed)=>offerJob(dataPassed)
    },
  ];
  return (
    <div className={classStyle.card_footer}>
      <hr></hr>

      <div className="d-flex justify-content-between">
        {FirstRowActionButtons.map((button) => {
          return (
            button.showButton !== false && (
              <div className="p-2" key={button.id}>
                <SecondaryButton
                  onClick={() => button.function(data)}
                  linkPath={button.link}
                  isLink={button.isLink}
                  className={`${classStyle.button} w-100`}
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                  size="small"
                >
                  {button.label}
                </SecondaryButton>
              </div>
            )
          );
        })}
      </div>

      <>
        <div className="d-flex justify-content-between">
          {SecondActionButtons.map((button) => {
            return (
              button.showReject !== false &&
              button.status !== "rejected" &&
              button.status !== "accepted" &&
              button.status !== "offered" &&
              !button.hideOnRecommendedPage && (
                <div className="p-2" key={button.id}>
                  <SecondaryButton
                    onClick={() => button.function(data)}
                    isLink={button.isLink}
                    className={classStyle.button}
                    backgroundColor={SECONDARY_LIGHT_COLOR}
                    color="transparent"
                    size="small"
                  >
                    {button.label}
                  </SecondaryButton>
                </div>
              )
            );
          })}
        </div>
      </>
    </div>
  );
}

export default TalentCardFooter;
