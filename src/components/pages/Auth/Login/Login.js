import React from "react";
import AppRow from "../../../organisms/AppRow/AppRow";
import LoginFooter from "./LoginSignUpFooter";
import LoginForm from "./LoginForm";
import LoginHeader from "./LoginSignUpHeader";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import { Link } from "react-router-dom";
import { HOME_ROUTES } from "../../../../routes/RouteLinks";

function Login({
  isLoginForm,
  toggleSignUpForm,
  handleLoginFormChange,
  defaultLoginData,
  passwordIsVisible,
  toggleRevealPassword,
  errorLogin,
  successLogin,
  loadingLogin,
  loginUser,
  checked,
  handleloginAsTalentCheck,
  formInputs,
  accountCreatedSuccess
}) {
  return (
    <>
      <AppContainerFluid className="px-5 pt-3 pb-3">
        <form className="auth_form" onSubmit={(e) => loginUser(e)}>
          <LoginHeader
            handleloginAsTalentCheck={handleloginAsTalentCheck}
            checked={checked}
            isLoginForm={isLoginForm}
            accountCreatedSuccess={accountCreatedSuccess}
          />
          <LoginForm
            formInputs={formInputs}
            toggleRevealPassword={toggleRevealPassword}
            passwordIsVisible={passwordIsVisible}
            defaultLoginData={defaultLoginData}
            handleLoginFormChange={handleLoginFormChange}
          />

          <AppRow>
            <div>
              <span
                style={{ fontSize: "90%" }}
                className="mb-2 mt-4 p-0 text-muted float-end"
              >
               <Link style={{textDecoration:"none"}} to={`${HOME_ROUTES.index}${HOME_ROUTES.passwordResetPage}`}>
               Forgot password
               </Link>
              </span>
            </div>
            <LoginFooter
              loginRegisterUser={loginUser}
              errorLogin={errorLogin}
              successLogin={successLogin}
              loadingLogin={loadingLogin}
              isLoginForm={isLoginForm}
              toggleSignUpForm={toggleSignUpForm}
            />
            
          </AppRow>
          
        </form>
      </AppContainerFluid>
    </>
  );
}

export default Login;
