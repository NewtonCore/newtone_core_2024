import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTalentsWhichAppliedForJob,
  rejectApplication,
  toggleShowRejectApplicationModal,
  toggleShowScheduleInterviewModal,
  toggleShowOfferJobModal,
  GetSchedulingInterview,
  toggleShowPayForTalent,
  togglePaymentGatewaysModal,
  SaveTalentProfile,
  toggleShowSaveModal,
  toggleDeleteSavedTalent,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { JsonToformData } from "../../../../constants/utils";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../../organisms/AppRow/AppRow";
import ConfirmationModal from "../../../organisms/ConfirmationModal/ConfirmationModal";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import TalentCard from "../../../organisms/TalentCard/TalentCard";
import { toast } from "react-toastify";
import { talentApplyingJob } from "../../../../app-redux/features/TalentSlice/talentSlice";
// import ScheduleInterviewModal from "./pagecomponents/ScheduleInterviewModal"

function TotalTalents({
  talentsApplied,
  isRecommended,
  jobID,
  showSaveProfile,
  isSavedProfile,
}) {
  // console.log({talentsApplied});
  // console.log({isRecommended})

  const dispatch = useDispatch();
  const jobSlice = useSelector((state) => state.jobCompany);

  // const { showRejectApplicationModal, showOfferJobModal, showSheduleInterviewModal,jobApplicationObject } = jobSlice;

  const handleReject = (data) => {
    // console.log(data)
    dispatch(toggleShowRejectApplicationModal(data));
  };

  const showOfferModal = (talent) => {
    dispatch(toggleShowOfferJobModal(talent));
  };

  const handleViewTalent = () => {
    dispatch(toggleShowPayForTalent());
  };

  const handleSaveProfile = (data) => {
    // console.log({ data });
    dispatch(toggleShowSaveModal(data));
  };

  const handleDeleteSaveProfile = (data) => {
    
    dispatch(toggleDeleteSavedTalent(data));
  };

  const handleOfferJob = (data) => {
    // console.log({ data });
    if (isRecommended) {
      alert("Will work on offer job for recommended talents");
    }

    if (data.hasOwnProperty("companypaymenttransaction_set")) {
      if (data.companypaymenttransaction_set.length === 0) {
        dispatch(toggleShowOfferJobModal(data));
      } else {
        dispatch(togglePaymentGatewaysModal(data));
      }
    }
  };

  const handleShowScheduleModal = (talent) => {
    if (isRecommended) {
      //if is isRecommended ,simulate an application on behalf of the talent

      let data = {
        talent: talent.talentId,
        job: jobID,
        hidden_for_talent: true,
      };
      data = JsonToformData(data);
      dispatch(talentApplyingJob(data))
        .unwrap()
        .then((res) => {
          console.log(res)
          setTimeout(() => {
            let params = {
              talentId: talent.talentId,
              apply_talent: res.id,
            };
            talent.id = res.id
            dispatch(GetSchedulingInterview({ data: params }));
            dispatch(toggleShowScheduleInterviewModal(talent));
          }, 100);
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      let params = {
        talentId: talent.talentId,
        apply_talent: talent.id,
      };
      dispatch(GetSchedulingInterview({ data: params }));
      dispatch(toggleShowScheduleInterviewModal(talent));
    }
  };

  return (
    <div>
      <>
        {/* Display Talents */}

        <AppContainerFluid style={{ marginTop: 40, padding: 0 }}>
          <AppRow className="gx-3">
            {Array.isArray(talentsApplied.talents) ? (
              <>
                {talentsApplied.talents.map((talent) => {
                  return (
                    <AppCol
                      key={talent.dataID}
                      size={6}
                      md_size={12}
                      lg_size={6}
                    >
                      <TalentCard
                      toggleDeleteTalent={handleDeleteSaveProfile}
                        isSavedProfile={isSavedProfile}
                        jobDetails={talent.jobDetails}
                        showSaveProfile={showSaveProfile}
                        saveProfileFn={handleSaveProfile}
                        jobID={jobID}
                        isRecommended={isRecommended}
                        showScheduleModal={() => {
                          handleShowScheduleModal(talent);
                          // let params = {
                          //   talentId: talent.talentId,
                          //   apply_talent: talent.id,
                          // };
                          // dispatch(GetSchedulingInterview({ data: params }));
                          // dispatch(toggleShowScheduleInterviewModal(talent));
                        }}
                        offerJob={handleOfferJob}
                        showRejectModal={() => handleReject(talent)}
                        showOfferModal={() => showOfferModal(talent)}
                        data={talent}
                      ></TalentCard>
                    </AppCol>
                  );
                })}
                {talentsApplied.talents.length === 0 && (
                  <EmptyData title="0 talents found"></EmptyData>
                )}
              </>
            ) : (
              <>
                {talentsApplied.map((talent) => {
                  return (
                    <AppCol key={talent.id} size={6} md_size={12} lg_size={6}>
                      <TalentCard
                      toggleDeleteTalent={handleDeleteSaveProfile}

                        isSavedProfile={isSavedProfile}
                        saveProfileFn={handleSaveProfile}
                        showSaveProfile={showSaveProfile}
                        jobID={jobID}
                        isRecommended={isRecommended}
                        talentID={talent.id}
                        showScheduleModal={() => {
                          let params = {
                            talentId: talent.id,
                            apply_talent: talent.id,
                          };
                          dispatch(GetSchedulingInterview({ data: params }));
                          dispatch(toggleShowScheduleInterviewModal(talent));
                        }}
                        showRejectModal={() => handleReject(talent)}
                        showOfferModal={() => showOfferModal(talent)}
                        offerJob={handleOfferJob}
                        data={talent}
                      ></TalentCard>
                    </AppCol>
                  );
                })}

                {talentsApplied.length === 0 && (
                  <EmptyData title="0 talents found"></EmptyData>
                )}
              </>
            )}
          </AppRow>

          {/* {JSON.stringify(talentsApplied)} */}

          {/* {talentsApplied.talents.length === 0 && (
              <EmptyData title="0 talents found"></EmptyData>
            )} */}
        </AppContainerFluid>
      </>
    </div>
  );
}

export default TotalTalents;
