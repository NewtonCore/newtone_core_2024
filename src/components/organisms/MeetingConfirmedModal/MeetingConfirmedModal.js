import React from "react";
import { Modal } from "react-bootstrap";
import AppButton from "../../atoms/AppButton/AppButton";

function MeetingConfirmedModal({
  show,
  onHide,
  actionButtonFn,
}) {
  return (
    <div>
      <Modal
        scrollable
        contentClassName=""
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
        <span className="ms-auto">
        Meeting Confirmed

          </span>
          </Modal.Header>

        <Modal.Body>

          <center>
            <p>
                Details about the meeting has been sent to your email.
            </p>
          <AppButton
            size="small"
            onClick={actionButtonFn}
            label="Return to Dashboard"
          ></AppButton>
          </center>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MeetingConfirmedModal;
