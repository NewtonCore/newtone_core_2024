import React from "react";
import { useEffect } from "react";
import { Modal } from "react-bootstrap";
import classStyle from "../EditProfile.module.css";

function ModalEditForm({
  show,
  toggleFunction,
  children,
  heading = "heading",
}) {
  return (
    <div>
      <Modal size="xl" scrollable show={show} onHide={toggleFunction} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="ms-auto">{heading}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalEditForm;
