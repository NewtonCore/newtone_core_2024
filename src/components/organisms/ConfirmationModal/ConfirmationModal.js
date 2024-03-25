import { LinearProgress } from "@mui/material";
import React from "react";
import { Modal } from "react-bootstrap";
import {
  DANGER_COLOR,
  PRIMARY_COLOR,
  SECONDARY_LIGHT_COLOR,
} from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";
import { TriangleAlert } from "akar-icons";

function ConfirmationModal({
  message,
  message2,
  show,
  onHide,
  actionButtonFn,
  loading,
  confirmText,
  cancelText,
  isDanger = true,
  children,
  showCancelButton = true,
}) {
  return (
    <div>
      <Modal
        scrollable
        contentClassName=""
        show={show}
        backdrop="static"
        keyboard={false}
        // onHide={() => dispatch(toggleLoginForm())}
        onHide={onHide}
        centered
      >
        {loading && <LinearProgress />}
        <Modal.Header closeButton>
          <span className="ms-auto">{message}</span>
        </Modal.Header>

        <Modal.Body>
          {isDanger ? (
            <>
              <div className="alert alert-danger">
                <h6>
                  <TriangleAlert /> Warning
                </h6>
                {message2 !== undefined && message2 !== "" && (
                  <>
                    {message2}
                    <br></br>
                  </>
                )}
                You can't undo this action.
              </div>
            </>
          ) : (
            <p className="text-center">{message2}</p>
          )}

          {children !== undefined && children}
        </Modal.Body>

        <Modal.Footer>
          <div className="d-flex mb-2 flex-row-reverse w-100">
            <div className="p-1 w-100">
              <AppButton
                className="w-100"
                size="small"
                loading={loading}
                // color={DANGER_COLOR}
                backgroundColor={isDanger ? DANGER_COLOR : PRIMARY_COLOR}
                // style={{ borderColor:isDanger && DANGER_COLOR  ,color:isDanger && DANGER_COLOR}}
                onClick={actionButtonFn}
              >
                {confirmText !== undefined ? confirmText : <>Delete</>}
              </AppButton>
            </div>

            {showCancelButton && (
              <div className="p-1 w-100">
                <AppButton
                  className="w-100"
                  backgroundColor={SECONDARY_LIGHT_COLOR}
                  color="transparent"
                  size="small"
                  loading={loading}
                  onClick={onHide}
                >
                  {cancelText !== undefined ? cancelText : <>Cancel</>}
                </AppButton>
              </div>
            )}
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ConfirmationModal;
