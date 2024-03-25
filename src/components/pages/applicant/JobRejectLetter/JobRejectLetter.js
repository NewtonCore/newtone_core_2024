import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  rejectApplication,
  handleRejectLetterChange,
  GetTalentApplication,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import JobRejectLetter from "./pagecomponents/JobRejectLetterForm";
import AppButton from "../../../atoms/AppButton/AppButton";
import { toast } from "react-toastify";

function CompanyViewTalents() {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const {
    applyingTalentData,

    rejectAppData,
    offerJobState,
    company_reject_application,
    rejectApplicationState,
  } = jobCompanyData;

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

  let { jobID, ApplyId } = useParams();
  let dispatch = useDispatch();

  useEffect(() => {
    if (jobID !== undefined) {
      dispatch(
        GetTalentApplication({ data: { apply_talent: parseInt(ApplyId) } })
      );
    }
  }, [ApplyId]);

  const handlePostRejectJob = () => {
    let new_data = { ...rejectAppData, appliedjob_id: ApplyId };
    // console.log(new_data)
    dispatch(rejectApplication({ data: new_data }))
      .unwrap()
      .then((res) => {
        toast.info("Application has been rejected");
      })
      .catch((err) => {
        toast.error(err);
      });
    dispatch(
      GetTalentApplication({ data: { apply_talent: parseInt(ApplyId) } })
    );
  };

  const handleOfferLetterFormChange = (e) => {
    let { value, name } = e.target;
    dispatch(handleRejectLetterChange({ name: name, value: value }));
  };

  return (
    <div>
      <CompanyLayout pageTitle="Manage Jobs" pageHeaderRight={undefined}>
        <>
          <WhiteBgDiv>
            <h4>Reject Application</h4>
            <p className="fw-normal">Kindly read through this template and edit this offer letter as necessary</p>

            <JobRejectLetter
              disabled={
                !offerJobState.isValid || hasOfferLetter || hasRejectLetter
              }
              form_data={company_reject_application}
              data={rejectAppData}
              onChangeForm={handleOfferLetterFormChange}
            />
            <AppButton
              loading={rejectApplicationState.loading}
              disabled={
                !offerJobState.isValid || hasOfferLetter || hasRejectLetter
              }
              onClick={handlePostRejectJob}
              className="w-50"
              label={
                hasRejectLetter || hasOfferLetter
                  ? "Application Rejected"
                  : "Reject Application"
              }
            ></AppButton>
          </WhiteBgDiv>
        </>
      </CompanyLayout>
    </div>
  );
}

export default CompanyViewTalents;
