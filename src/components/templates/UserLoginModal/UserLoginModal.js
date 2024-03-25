import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLoginForm } from "../../../app-redux/features/appData/appDataSlice";
import AuthPage from "../../pages/Auth/AuthPage";
import { LinearProgress } from "@mui/material";

function UserLoginModal({ show }) {
  const appData = useSelector((state) => state.appData);
  const authData = useSelector((state) => state.auth);
  let { loginUserState, registerUserState } = authData;
  const dispatch = useDispatch();

  const { showCreateAccount, loginFormIsOpen } = appData;
  return (
    <div>
      <Modal
        scrollable
        contentClassName="login-modal"
        show={loginFormIsOpen}
        onHide={() => dispatch(toggleLoginForm())}
        centered
      >
        <Modal.Header closeButton>
          <span className="ms-auto">
            {showCreateAccount ? "Create an account" : "Sign in your account"}
          </span>
        </Modal.Header>
        {loginUserState.loading && <LinearProgress color="success" />}

        {registerUserState.loading && <LinearProgress color="success" />}

        <Modal.Body>
          <AuthPage></AuthPage>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default UserLoginModal;
