import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  handleOfferLetterChange,
  PostOfferJobNotification,
  GetTalentApplication,
  toggleShowJobOfferedModal,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";

import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";

import OfferJobLetter from "./pagecomponents/OfferJobLetterForm";
import AppButton from "../../../atoms/AppButton/AppButton";
import SuccessModal from "../../../organisms/SuccessModal/SuccessModal";
import AppImage from "../../../organisms/AppImage/AppImage";

function CompanyViewTalents() {
  const navigate = useNavigate();

  const effectRan = useRef(false);

  const jobCompanyData = useSelector((state) => state.jobCompany);
  const {
    showJobOfferedModal,
    applyingTalentData,
    offerJobData,
    offerJobState,
    company_offer_job,
    loadingAppliedTalent,
  } = jobCompanyData;

  //   const { title } = jobDetailsData;\
  // console.log({applyingTalentData})

  const hasOfferLetter = applyingTalentData.hasOwnProperty("offer_letter")
    ? applyingTalentData.offer_letter !== null
      ? true
      : false
    : false;
  const hasRejectLetter = applyingTalentData.hasOwnProperty("reject_letter")
    ? applyingTalentData.reject_letter !== null
      ? true
      : false
    : false;
  // console.log({hasRejectLetter})

  let { jobID, ApplyId } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    // navigate(0)
    if (ApplyId !== undefined && !effectRan.current) {
      //

      //   dispatch(getTalentsWhichAppliedForJob(parseInt(jobID)));
      dispatch(
        GetTalentApplication({ data: { apply_talent: parseInt(ApplyId) } })
      );
      // console.log(jobID, ApplyId)
    }

    return () => {
      effectRan.current = true;
      // dispatch(resetTalentDetails());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ApplyId]);

  const handlePostOfferJob = () => {
    // console.log('yes', offerJobData)
    let new_data = { ...offerJobData, appliedjob_id: ApplyId };
    // console.log(new_data)
    dispatch(PostOfferJobNotification({ data: new_data }))
      .unwrap()
      .then((res) => {
        dispatch(toggleShowJobOfferedModal(true));
        dispatch(
          GetTalentApplication({ data: { apply_talent: parseInt(ApplyId) } })
        );
      })
      .catch((err) => {});
  };

  const dismissModal = () => {
    dispatch(toggleShowJobOfferedModal(false));
    // navigate.()
    // navigate
  };

  const handleOfferLetterFormChange = (e) => {
    let { value, name } = e.target;
    // console.log(value, name)
    dispatch(handleOfferLetterChange({ name: name, value: value }));
  };

  useEffect(() => {
    return () => {
      dispatch(toggleShowJobOfferedModal(false));
    };
  }, []);

  return (
    <div>
      <SuccessModal
        show={showJobOfferedModal}
        onHide={() => dismissModal()}
        actionButtonFn={() => dismissModal()}
        content={
          applyingTalentData.hasOwnProperty("talent") && (
            <>
              {applyingTalentData.talent.user.picture !== null && (
                <center>
                  <AppImage
                    style={{ height: 100, width: 100, borderRadius: 50 }}
                    image={applyingTalentData.talent.user.picture}
                  ></AppImage>
                </center>
              )}
              <p className="text-center">
                {applyingTalentData.job.title.name} Job has been offered to{" "}
                {applyingTalentData.talent.first_name}{" "}
                {applyingTalentData.talent.last_name}
              </p>
            </>
          )
        }
      ></SuccessModal>
      <CompanyLayout pageTitle="Manage Jobs" pageHeaderRight={undefined}>
        <>
          <WhiteBgDiv loading={loadingAppliedTalent}>
            <h4>Offer Job</h4>
            <p className="fw-normal">Kindly read through this template and edit this offer letter as necessary</p>

            {!loadingAppliedTalent && (
              <>
                <OfferJobLetter
                  disabled={
                    !offerJobState.isValid || hasOfferLetter || hasRejectLetter
                  }
                  form_data={company_offer_job}
                  data={offerJobData}
                  onChangeForm={handleOfferLetterFormChange}
                />
                <AppButton
                  loading={offerJobState.loading}
                  disabled={
                    !offerJobState.isValid || hasOfferLetter || hasRejectLetter
                  }
                  onClick={handlePostOfferJob}
                  className="w-50"
                  label={
                    !offerJobState.isValid || hasOfferLetter || hasRejectLetter
                      ? "Job offered"
                      : "Offer Job"
                  }
                ></AppButton>
              </>
            )}
          </WhiteBgDiv>
        </>
      </CompanyLayout>
    </div>
  );
}

export default CompanyViewTalents;
