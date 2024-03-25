import { LinearProgress } from "@mui/material";
import React from "react";
import { Modal } from "react-bootstrap";
import { BLACK_COLOR, GRAY_COLOR_ONE, SECONDARY_COLOR, SECONDARY_LIGHT_COLOR } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";

function PostJobConfirmation({
  message,
  show,
  onHide,
  viewTalentFn={},
  publishFn,
  loading,
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
        {loading && <LinearProgress/>}
        <Modal.Header closeButton>
        <span className="ms-auto">
       Are you sure?

          </span>
        
        </Modal.Header>
        <Modal.Body>
          {message}
          <br></br>

          <div>
            <div className="p-2">
              <AppButton
                className="w-100"
                loading={loading}
                onClick={viewTalentFn}
                label="View Talent Now"
              ></AppButton>
            </div>
            <div className="p-2 mt-3">
              <AppButton
                className="w-100"
                backgroundColor={SECONDARY_LIGHT_COLOR}
                 color= "transparent"
                loading={loading}
                onClick={publishFn}
                label="Publish Publicly"
              ></AppButton>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PostJobConfirmation;
