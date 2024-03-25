import React from "react";
import AppContainer from "../../../../organisms/AppContainer/AppContainer";
import AppContainerFluid from "../../../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../../../organisms/AppRow/AppRow";
import LoginSignUpFooter from "../LoginSignUpFooter";
import LoginSignUpHeader from "../LoginSignUpHeader";
import SignUpForm from "./SignUpForm";

function SignUp({
  isLoginForm,
  toggleSignUpForm,
  handleTalentSignUpFormChange,
  defaultSignUpData,
  toggleRevealPassword,
  passwordIsVisible,
  registerUser = {},
  errorSignUp,
  successSignUp,
  loadingSignUp,
  handleloginAsTalentCheck,
  checked,
  formInputs,
  accountCreatedSuccess
}) {
  return (
    <>
      <AppContainerFluid className="px-5 pt-3 pb-3">
        <form className="auth_form" onSubmit={(e) => registerUser(e)}>
          <LoginSignUpHeader
          accountCreatedSuccess={accountCreatedSuccess}
            checked={checked}
            handleloginAsTalentCheck={handleloginAsTalentCheck}
            isLoginForm={isLoginForm}
          />
          <SignUpForm
            formInputs={formInputs}
            toggleRevealPassword={toggleRevealPassword}
            passwordIsVisible={passwordIsVisible}
            defaultSignUpData={defaultSignUpData}
            handleTalentSignUpFormChange={handleTalentSignUpFormChange}
          />
          <AppRow>
            <LoginSignUpFooter
              successSignUp={successSignUp}
              errorSignUp={errorSignUp}
              loadingSignUp={loadingSignUp}
              loginRegisterUser={registerUser}
              isLoginForm={isLoginForm}
              toggleSignUpForm={toggleSignUpForm}
            />
          </AppRow>
        </form>
      </AppContainerFluid>
    </>
  );
}

export default SignUp;
