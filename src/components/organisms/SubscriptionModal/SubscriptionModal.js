import React from "react";
import { Modal } from "react-bootstrap";
import Tada from "react-reveal/Tada";

import { useSelector } from "react-redux";
import classStyle from "./SubscriptionModal.module.css";
import SubscriptionModalBody from "./SubscriptionModalBody";
import SubscriptionModalFooter from "./SubscriptionModalFooter";
import AppButton from "../../atoms/AppButton/AppButton";
import AppRow from "../AppRow/AppRow";
import { Check } from "akar-icons";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
import { COMPANY_ROUTE } from "../../../routes/RouteLinks";

function SubscriptionModal({
  show,
  toggleFunction,
  job,
  saveTransaction,
  paymentDone,
  amount,
  currency,
  paymentTitle,
  description,
}) {
  // console.log({job})
  return (
    <div>
      <Modal
        scrollable
        contentClassName={classStyle.refer_modal}
        show={show}
        onHide={toggleFunction}
        centered
      >
        <Modal.Header closeButton>
          <span className="ms-auto">
            {!paymentDone ? "Subscription" : "Successful"}
          </span>
        </Modal.Header>
        <Modal.Body>
          {!paymentDone ? (
            <>
              <SubscriptionModalBody job={job}></SubscriptionModalBody>
              <SubscriptionModalFooter
              paymentTitle={paymentTitle}
              description={description}
                currency={currency}
                amount={amount}
                job={job}
                saveTransaction={saveTransaction}
              />
            </>
          ) : (
            <AppRow>
              <center>
                <Tada>
                  <Check style={{ color: PRIMARY_COLOR }} size={60} />
                </Tada>
              </center>

              <span className="text-muted text-center mt-4 mb-4">
                Your payment was made successfully!
              </span>

              <AppButton
                onClick={toggleFunction}
                className="w-100"
                label="Pay now"
                isLink={true}
                linkPath={`/${COMPANY_ROUTE.index}${COMPANY_ROUTE.hired_talents}`}
              >
                View Hired Talents
              </AppButton>
            </AppRow>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SubscriptionModal;
