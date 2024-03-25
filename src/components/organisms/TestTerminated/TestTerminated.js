import { LinearProgress } from "@mui/material";
import React from "react";
import { Modal } from "react-bootstrap";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";

function TestTerminatedModal({ onHide,loading,show }) {
  return (
    <div>
      <Modal
        scrollable
        contentClassName=""
        show={show}
        onHide={onHide}
        centered
      >
        {loading && <LinearProgress />}
        <Modal.Header closeButton>
          <span className="ms-auto">Test Terminated!</span>
        </Modal.Header>

        <Modal.Body>
          <p className="text-center">Your test has been stopped because you opened another tab.</p>


          <div className="d-flex flex-row mb-3 justify-content-around">
            <div className="d-flex flex-row mb-3 justify-content-around">
              <div className="p-2">
                <AppButton
                  size="small"
                  loading={loading}
                  backgroundColor={PRIMARY_COLOR}
                  onClick={onHide}
                  label="Okay"
                ></AppButton>
              </div>
            
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default TestTerminatedModal;
