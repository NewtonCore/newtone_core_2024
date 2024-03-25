import React from "react";
import { Modal } from "react-bootstrap";
import SecondaryButton from "../../../../atoms/AppButton/SecondaryButton";
import "./Modal.css";
import { HOME_ROUTES } from "../../../../../routes/RouteLinks";
import AppLink from "../../../../organisms/AppLink/AppLink";

function TalentApplicationHistoryModal({
  applicationDetails,
  data,
  show,
  onHide,
}) {
  // console.log(data)
  return (
    <div>
      <Modal
        scrollable
        size="xl"
        // contentClassName="apply-modal"
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <span className="ms-auto">Job Status: {data.status}</span>
        </Modal.Header>
        <Modal.Body>
          {applicationDetails.hasOwnProperty("jobTitle") && (
            <>
              <h5>
                <AppLink to={`/${HOME_ROUTES.viewJob}${data.job}`}>
                  {applicationDetails.jobTitle.name} Job
                </AppLink>
              </h5>
              <span className="text-muted">
                Posted by {applicationDetails.jobDetails.company.name}
              </span>
              <br></br>
            </>
          )}

          {data.hasOwnProperty("message") && (
            <div id="alert-info-msg" className="mt-3 mb-3 p-3">
              <h6>Application Message</h6>
              {data.message !== "" && data.message !== null ? (
                data.message
              ) : (
                <div className="mt-3 mb-3 alert alert-warning">No message</div>
              )}
            </div>
          )}

          {data.hasOwnProperty("offer_letter") && (
            <>
              {data.offer_letter !== "" && data.offer_letter !== null ? (
                <div id="alert-success-msg" className="mt-3 mb-3 p-3">
                  <h6>Offer letter</h6>

                  {data.offer_letter}
                </div>
              ) : (
                ""
              )}
            </>
          )}

          {data.hasOwnProperty("reject_letter") && (
            <>
              {data.reject_letter !== "" && data.reject_letter !== null ? (
                <div id="alert-error-msg" className="mt-3 mb-3  p-3">
                  <h6>Reject letter</h6>
                  {/* <span className="text-muted">
                    {data.job.company.name}</span>
                    <br></br> */}

                  {data.reject_letter}
                </div>
              ) : (
                ""
              )}
            </>
          )}
          <SecondaryButton
            onClick={onHide}
            className="w-100"
            label={"Close"}
          ></SecondaryButton>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TalentApplicationHistoryModal;
