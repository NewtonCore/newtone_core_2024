import { Copy } from "akar-icons";
import React from "react";
import { Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  BLACK_COLOR,
  GRAY_COLOR_ONE,
  SECONDARY_COLOR,
  SECONDARY_LIGHT_COLOR,
} from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";
import "./PostJobSuccess.css";
import ReferModalFooter from "../ReferModal/ReferModalFooter";
import CopyLinkInput from "./CopyLinkInput";

function PostJobSuccessModal({
  show,
  onHide,
  viewJobFn,
  publishFn,
  loading,
  jobLink,
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
        Published Successfully

          </span>
        
          
          </Modal.Header>
        <Modal.Body>
          <div className="text-muted text-center">
            Your job has been published successfully
          </div>
          {/* <span className="text-muted">Share</span> */}
          <br></br>

          <div>
          <ReferModalFooter shareUrl={jobLink}></ReferModalFooter>
          <hr></hr>

            <div className="p-2">
              <CopyLinkInput url={jobLink} />
            </div>
            <div className="p-2 mt-3">
              <AppButton
                className="w-100"
                loading={loading}
                onClick={viewJobFn}
                label="View Job"
              ></AppButton>
            </div>

        

          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PostJobSuccessModal;
