import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import {
  toggleLoginForm,
  toggleShowCreateAccountForm,
} from "../../../app-redux/features/appData/appDataSlice";
import {
  handleTalentLoginDataChange,
  handleTalentSignUpChange,
  toggleShowPassword,
  registerUser,
  loginUser,
  toggleLoginAs,
  toggleHideUserCreated,
} from "../../../app-redux/features/Auth/authSlice";
import { JsonToformData } from "../../../constants/utils";
import AppGoogleLogin from "../../organisms/AppGoogleLogin/AppGoogleLogin";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp/SignUp";
import { toast } from "react-toastify";
import { Check, Envelope } from "akar-icons";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";

function AuthPage() {
  const appData = useSelector((state) => state.appData);
  let [searchParams, setSearchParams] = useSearchParams();

  const navigate = useNavigate();
  let location = useLocation();
  let { pathname } = location;
  let nextPage = searchParams.get("nextPage");

  const authData = useSelector((state) => state.auth);
  let {
    TalentLoginData,
    TalentSignUpData,
    passwordIsVisible,
    registerUserState,
    loginUserState,
    loginAs,
    loginForm,
    companySignUpForm,
    talentSignUpForm,
  } = authData;

  let { success, loading, error } = registerUserState;
  let {
    success: successLogin,
    loading: loadingLogin,
    error: errorLogin,
    data: userData,
  } = loginUserState;

  const dispatch = useDispatch();

  const toggleSignUpForm = () => {
    dispatch(toggleShowCreateAccountForm());
    dispatch(handleTalentLoginDataChange({ email: "", password: "" }));
  };

  const toggleRevealPassword = () => {
    dispatch(toggleShowPassword());
  };

  const handleLoginFormChange = (e) => {
    let { value, name } = e.target;

    dispatch(handleTalentLoginDataChange({ name: name, value: value }));
  };

  const handleTalentSignUpFormChange = (e) => {
    let { value, name } = e.target;

    dispatch(handleTalentSignUpChange({ name: name, value: value }));
  };

  const handleRegisterUser = (e) => {
    e.preventDefault();
    dispatch(registerUser(JsonToformData(TalentSignUpData)))
      .unwrap()
      .then((res) => {
        toast.success(`Successful registration. ${res}`, { autoClose: 6000 });
        dispatch(toggleSignUpForm());
      })
      .catch((e) => {});
  };

  const navigateAfterLogin = (user) => {
    // console.log({ nextPage });
    // console.log({user})

    if (nextPage === null) {
      // console.log({pathname})
      if (pathname !== "/") {
        navigate(pathname, { replace: true });
      } else if (user === "talent") {
        navigate(`/talent/dashboard`, { replace: true });
      } else if (user === "company") {
        navigate(`/company/dashboard`, { replace: true });
      } else {
        // navigate(pathname, { replace: true });
        navigate(`/`, { replace: true });
      }
    } else {
      // console.log({ nextPage });

      navigate(`${nextPage}`, { replace: true });
    }
  };

  const handleLoginUser = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        dataToPass: JsonToformData(TalentLoginData),
        callback: (usr) => navigateAfterLogin(usr),
      })
    )
      .unwrap()
      .then((res) => {
        // toast.info(res)
      })
      .catch((e) => {
        toast.error(e);
      });
  };

  const handleCheck = (val) => {
    dispatch(toggleLoginAs(val));
  };

  useEffect(() => {
    // return ()=>toggleLoginForm()
    // console.log({userData})

    if (userData.hasOwnProperty("type")) {
      navigateAfterLogin(userData.type);
    }
  }, [loginUserState]);


  

  return (
    <div>
      {success ? (
        <>
          <center>
            <Envelope size={50} color={PRIMARY_COLOR} />
            <h5 className="mt-3 mb-3">
              User registered successfully. Kindly check your email to verfiy
              your account
            </h5>

            <AppButton
              size="small"
              onClick={() => dispatch(toggleHideUserCreated())}
            >
              Proceed to Login
            </AppButton>
          </center>
        </>
      ) : (
        <>
          {parseInt(loginAs) === 2 && (
            <>
              <AppGoogleLogin navigateAfterLogin={navigateAfterLogin} />
              <p className="text-center text-muted">
              Or connect with your email
              </p>
              
            </>
          )}

         
          {appData.showCreateAccount ? (
            <SignUp
              accountCreatedSuccess={success}
              formInputs={
                parseInt(loginAs) === 1 ? companySignUpForm : talentSignUpForm
              }
              handleloginAsTalentCheck={handleCheck}
              checked={loginAs}
              errorSignUp={error}
              successSignUp={success}
              loadingSignUp={loading}
              registerUser={handleRegisterUser}
              toggleRevealPassword={toggleRevealPassword}
              passwordIsVisible={passwordIsVisible}
              defaultSignUpData={TalentSignUpData}
              handleTalentSignUpFormChange={handleTalentSignUpFormChange}
              toggleSignUpForm={toggleSignUpForm}
              isLoginForm={!appData.showCreateAccount}
            ></SignUp>
          ) : (
            <Login
              accountCreatedSuccess={success}
              formInputs={loginForm}
              handleloginAsTalentCheck={handleCheck}
              checked={loginAs}
              errorLogin={errorLogin}
              successLogin={successLogin}
              loadingLogin={loadingLogin}
              loginUser={handleLoginUser}
              toggleRevealPassword={toggleRevealPassword}
              passwordIsVisible={passwordIsVisible}
              defaultLoginData={TalentLoginData}
              handleLoginFormChange={handleLoginFormChange}
              toggleSignUpForm={toggleSignUpForm}
              isLoginForm={!appData.showCreateAccount}
            ></Login>
          )}
        </>
      )}
    </div>
  );
}

export default AuthPage;
