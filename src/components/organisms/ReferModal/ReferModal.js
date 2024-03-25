import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import classStyle from "./ReferModal.module.css";
import ReferModalBody from "./ReferModalBody";
import ReferModalFooter from "./ReferModalFooter";

function ReferModal({ show, toggleFunction,message }) {
  let appData = useSelector((state) => state.appData);
  let { refer_form_array } = appData;
  return (
    <div>
      <Modal
        scrollable
        contentClassName={classStyle.refer_modal}
        show={show}
        onHide={toggleFunction}
        centered
      >
        <Modal.Body>
          <ReferModalBody data={refer_form_array}></ReferModalBody>
          <ReferModalFooter shareTitle={message} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReferModal;
