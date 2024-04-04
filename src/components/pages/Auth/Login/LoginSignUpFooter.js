import React from "react";
import { Link } from "react-router-dom";
import AppButton from "../../../atoms/AppButton/AppButton";

const LoginText = () => {
  return (
    <>
      By clicking log in, you agree to our{" "}
      {<Link to="/terms-of-use">Terms of Use</Link>} and our{" "}
      {<Link to="/privacy-policy">Privacy Policy</Link>}
    </>
  );
};

const CreateAccountText = () => {
  return (
    <>
      By clicking create, you agree to our{" "}
      {<Link to="/terms-of-use">Terms of Use</Link>} and our{" "}
      {<Link to="/privacy-policy">Privacy Policy</Link>}
    </>
  );
};
function LoginSignUpFooter({
  toggleSignUpForm = {},
  isLoginForm,
  loginRegisterUser = {},
  loadingSignUp,
  errorSignUp = undefined,
  successSignUp = undefined,
  errorLogin,
  successLogin = undefined,
  loadingLogin,
  loginUser = {},
  loginAs
}) {
  return (
    <>
      <center className="mb-3 p-0 text-muted">
        <span className=" p-0 text-muted" style={{ fontSize: 12 }}>
          {isLoginForm ? <LoginText /> : <CreateAccountText />}
        </span>
      </center>

      {errorLogin !== undefined && (
        <p style={{ color: "red" }} className="danger">
          {!isLoginForm ? errorSignUp : errorLogin}
        </p>
      )}

      {errorSignUp !== undefined && (
        <p style={{ color: "red" }} className="danger">
          {!isLoginForm ? errorSignUp : errorLogin}
        </p>
      )}

      {successSignUp && <p style={{ color: "green" }}>User created!</p>}

      <AppButton
        type="submit"
        loading={isLoginForm ? loadingLogin : loadingSignUp}
        // onClick={(e) => loginRegisterUser(e)}
        className="w-100"
        label={isLoginForm ? "Sign In" : "Create account"}
      ></AppButton>

      <center className="mt-1 p-0">
        <AppButton
          size="small"
          onClick={() => toggleSignUpForm()}
          style={{ fontSize: 15, padding: 0, margin: 0 }}
          color="white"
          label={isLoginForm ? "Create an Account" : "Have an account? Sign in"}
        ></AppButton>
      </center>
    </>
  );
}

export default LoginSignUpFooter;
