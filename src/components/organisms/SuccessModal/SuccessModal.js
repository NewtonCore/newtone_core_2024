import React from "react";
import { Modal } from "react-bootstrap";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";
import Tada from "react-reveal/Tada";
import { Check } from "akar-icons";

function SuccessModal({
  message = "Success",
  message2,
  show,
  onHide,
  actionButtonFn,
  loading,
  content,
}) {
  return (
    <div>
      <Modal
        scrollable
        contentClassName=""
        show={show}
        keyboard={false}
        // onHide={() => dispatch(toggleLoginForm())}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <span className="ms-auto">{message}</span>
        </Modal.Header>

        <Modal.Body>
          <center>
            <Tada>
              <Check style={{ color: PRIMARY_COLOR }} size={60} />
            </Tada>
          </center>

          {content !== undefined ? (
            <>{content}</>
          ) : (
            <p className="text-center">{message2}</p>
          )}
          <div>
            <AppButton
              className="w-100"
              size="small"
              loading={loading}
              backgroundColor={PRIMARY_COLOR}
              onClick={actionButtonFn}
            >
              OK
            </AppButton>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SuccessModal;
