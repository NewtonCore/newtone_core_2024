import React from "react";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Body from "./Body";
import classStyle from "./SubscriptionModule.module.css";

function SubscriptionModule({ show, toggleFunction }) {
  let appData = useSelector((state) => state.appData);
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
            <Body/>
            <Footer/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SubscriptionModule;
