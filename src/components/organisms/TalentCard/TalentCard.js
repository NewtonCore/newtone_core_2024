import React from "react";
import TalentCardBody from "./TalentCardBody";
import TalentCardFooter from "./TalentCardFooter";
import TalentCardHeader from "./TalentCardHeader";
import classStyle from "./TalentCard.module.css";

function TalentCard({
  data,
  showReject,
  showOfferModal,
  showScheduleModal,
  showRejectModal,
  showOfferJob,
  showSchedule,
  talentID,
  isRecommended,
  offerJob,
  jobID,
  saveProfileFn,
  showSaveProfile,
  jobDetails,
  isSavedProfile,
  toggleDeleteTalent
}) {
  // console.log({data})

  return (
    <div className={`border ${classStyle.card} rounded-1`}>
      <TalentCardHeader
      toggleDeleteTalent={toggleDeleteTalent}
        data={data}
        status={data.status}
        country={data.address}
        talent_f_name={data.first_name}
        position={data.current_job_title}
        classStyle={classStyle}
        created_at={data.created_at}
        isRecommended={isRecommended}
        score={data.score}
        score_description={data.score_description}
       isSavedProfile={isSavedProfile}

      ></TalentCardHeader>
      <TalentCardBody
        isSavedProfile={isSavedProfile}
        jobDetails={jobDetails}
        showSaveProfile={showSaveProfile}
        score={data.score}
        skills={data.user_skills}
        location={data.address}
        years_experience={data.year_of_experience}
        classStyle={classStyle}
        isRecommended={isRecommended}
        score_description={data.score_description}
      ></TalentCardBody>
      <TalentCardFooter
        showSaveProfile={showSaveProfile}
        saveProfileFn={saveProfileFn}
        offerJob={offerJob}
        showSchedule={showSchedule}
        showOfferJob={showOfferJob}
        data={data}
        showRejectModal={showRejectModal}
        showScheduleModal={showScheduleModal}
        showOfferModal={showOfferModal}
        status={data.status}
        showReject={showReject}
        talentID={data.talentId === undefined ? talentID : data.talentId}
        classStyle={classStyle}
        isRecommendedPage={isRecommended}
        jobID={jobID}
      ></TalentCardFooter>
    </div>
  );
}

export default TalentCard;
