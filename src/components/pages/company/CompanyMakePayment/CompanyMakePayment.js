import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCompanyProfileDetails,
  getJobCompanyDetails,
  PostPaymentTransaction,
  togglePaymentGatewaysModal,
  togglePayPalModal,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { JsonToformData } from "../../../../constants/utils";
import PaymentSelectionModal from "../../../organisms/PaymentSelectionModal/PaymentSelectionModal";
import SubscriptionModal from "../../../organisms/SubscriptionModal/SubscriptionModal";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import testData from "./testData.json";
import { getAppliedTalentObject } from "../../../../app-redux/features/TalentSlice/talentSlice";
import { COMPANY_ROUTE } from "../../../../routes/RouteLinks";
import { toast } from "react-toastify";
// let testData =
function CompanyMakePayment() {
  const navigate = useNavigate();

  const jobCompanyData = useSelector((state) => state.jobCompany);
  const { jobDetails } = jobCompanyData;
  const { data: jobDetailsData } = jobDetails;
  const { job, talent } = jobDetailsData;
  let { title } = job !== undefined ? job : "";
  const amount = 40;
  const currency = "USD";

  let paymentTitle = `Payment for Talent:
  ${talent !== undefined ? talent.first_name + " " + talent.last_name : "___"}
  
  `;
  let paymentDescription = `${
    title !== undefined && title !== null
      ? title.name !== null && title.name
      : "No job title"
  }
      Job
  `;

  let { jobOfferID } = useParams();

  const { showPaymentGatewaysModal } = jobCompanyData;
  let dispatch = useDispatch();

  const effectJobDetail = useRef(false);

  useEffect(() => {
    // dispatch(togglePaymentGatewaysModal())
  }, [jobOfferID]);

  const handleGetData = () => {
    dispatch(
      getJobCompanyDetails({
        jobID: parseInt(jobOfferID),
        isAppliedTalentURL: true,
      })
    )
      .unwrap()
      .then((res) => {
        // console.log(res)
        dispatch(getCompanyProfileDetails(res.job.company.id));
        dispatch(getAppliedTalentObject(res.job.id))
          .unwrap()
          .then((res) => {})
          .catch((err) => {});
      });
  };

  useEffect(() => {
    jobOfferID !== undefined &&
      !effectJobDetail.current &&
      console.log("Confirm job offer");

    handleGetData();
    dispatch(togglePaymentGatewaysModal());
    return () => {
      effectJobDetail.current = true;
    };
  }, [jobOfferID]);

  const handlePostPaymentTransaction = (data) => {
    // console.log({ data });

    // return 0
    let json_data = {
      amount: data.amount,
      transaction_id: Date.now(),
      job: jobOfferID,
      talent: data.talent.id,
    };

    let form_data = JsonToformData(json_data);

    dispatch(PostPaymentTransaction({ data: form_data }))
      .unwrap()
      .then((res) => {})
      .catch((err) => {
        toast.error(err);
      });
  };

  const handleCancelModal = () => {
    dispatch(togglePaymentGatewaysModal());

    setTimeout(() => {
      navigate(`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.dashboard}`);
    }, 100);
  };

  return (
    <>
      <CompanyLayout pageTitle="Make Payment">
        <WhiteBgDiv>
          <br></br>
          <br></br>

          <PaymentSelectionModal
            paymentTitle={paymentTitle}
            description={paymentDescription}
            amount={amount}
            currency={currency}
            // job={jobCompanyData.talentToBeSubscriibed}
            job={testData}
            saveTransaction={(data) => handlePostPaymentTransaction(data)}
            show={showPaymentGatewaysModal}
            onHide={() => handleCancelModal()}
          ></PaymentSelectionModal>

          <SubscriptionModal
            paymentTitle={paymentTitle}
            description={paymentDescription}
            currency={currency}
            amount={amount}
            toggleFunction={() => dispatch(togglePayPalModal())}
            show={jobCompanyData.showSubScriptionModal}
            // job={jobCompanyData.talentToBeSubscriibed}
            job={testData}
            paymentDone={jobCompanyData.paymentDone}
            saveTransaction={(data) => handlePostPaymentTransaction(data)}
          />
        </WhiteBgDiv>
      </CompanyLayout>
    </>
  );
}

export default CompanyMakePayment;
