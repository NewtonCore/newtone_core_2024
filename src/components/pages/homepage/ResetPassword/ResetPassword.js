import React, { useEffect } from "react";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import { Link, useParams } from "react-router-dom";
import {
  handleChangePasswordDataChange,
  resetPassword,
  toggleShowPassword,
} from "../../../../app-redux/features/Auth/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import { useRef } from "react";
import SuccessActivation from "../AccountActivation/SuccessActivation";
import AppContainer from "../../../organisms/AppContainer/AppContainer";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import { PRIMARY_COLOR } from "../../../../constants/AppColors";
import { LockOn } from "akar-icons";
import ResetPassForm from "./ResetPassForm";
import AppButton from "../../../atoms/AppButton/AppButton";
import { JsonToformData } from "../../../../constants/utils";
import { toast } from "react-toastify";
import AppMobileNav from "../../../organisms/AppMobileNav/AppMobileNav";
// import { useLocation } from "react-router-dom";

function ResetPassword() {
  let dispatch = useDispatch();
  const param1Detail = useRef(false);
  let { param1, param2 } = useParams();
  let [showSuccess, SetShowSuccess] = useState(false);
  let [userName, SetUserName] = useState("");
  let [type, SetType] = useState("default");
  let [errorMessage, SetErrorMessage] = useState(null);

  const authData = useSelector((state) => state.auth);

  let { loginUserState } = authData;

  const toggleRevealPassword = () => {
    dispatch(toggleShowPassword());
  };



  useEffect(() => {
    // send activation to GET URL

    // param1 !== undefined &&
    //   param2 !== undefined &&
    //   !param1Detail.current &&
    //   dispatch(resetPassword({ param1, param2 }))
    //     .unwrap()
    //     .then((res) => {
    //       console.log(res.user);

    //       SetUserName(res.user.first_name);
    //       SetType(res.user.type);
    //       SetShowSuccess(true);
    //     })
    //     .catch((e) => {
    //       SetShowSuccess(false);
    //       SetErrorMessage(e);
    //     });

    return () => {
      param1Detail.current = true;
    };
  }, [dispatch, param1, param2]);

  let { resetPassData, resetPassForm, passwordIsVisible } = authData;

  const handleFormChange = (e) => {
    // return 0
    let { value, name } = e.target;

    dispatch(handleChangePasswordDataChange({ name: name, value: value }));
  };

  const resetPasswordFn = (e) => {
    e.preventDefault();
    let data_ = JsonToformData(resetPassData);
    dispatch(resetPassword({ dataToPass: data_, param1, param2 }))
      .unwrap()
      .then((res) => {
        SetUserName(res.user.first_name);
        SetType(res.user.type);
        SetShowSuccess(true);
      })
      .catch((err) => {
        SetShowSuccess(false);
        toast.error(`Error: ${err}`);
      });
  };

  //   let location = useLocation();

  return (
    <>
      <AppMobileNav />

      <AppNavBar />
      <AppContainer>
        <AppRow style={{ marginTop: 100 }}>
          <AppCol size={3}></AppCol>

          {!showSuccess &&
          !loginUserState.isLoggedIn &&
          !loginUserState.loading ? (
            <AppCol size={6} className="shadow p-3 bg-body-tertiary rounded">
              <center>
                <LockOn size={50} color={PRIMARY_COLOR} />
              </center>
              <h5 className="mt-3 mb-3 text-center">Password Reset </h5>
              <hr></hr>

              <form className="auth_form" onSubmit={(e) => resetPasswordFn(e)}>
                <ResetPassForm
                  toggleRevealPassword={toggleRevealPassword}
                  passwordIsVisible={passwordIsVisible}
                  form={resetPassForm}
                  defaultLoginData={resetPassData}
                  handleTextInputChange={handleFormChange}
                ></ResetPassForm>

                <AppButton className="w-100" size="small">
                  Reset Password
                </AppButton>
              </form>
            </AppCol>
          ) : (
            <>
              {!loginUserState.isLoggedIn ? (
                <center>
                  {!loginUserState.loading && (
                    <Link to="/">Nothing to show here, proceed to Home</Link>
                  )}
                </center>
              ) : (
                <>
                  {!loginUserState.isChangePassword && (
                    <SuccessActivation
                      width="70%"
                      type={loginUserState.data.type}
                      message=""
                      userName={loginUserState.data.first_name}
                      pre_message="You are already logged in"
                    ></SuccessActivation>
                  )}
                </>
              )}
            </>
          )}

          <AppCol size={3}></AppCol>
        </AppRow>
      </AppContainer>
      {loginUserState.loading && <AppBackDrop open={loginUserState.loading} />}
      {showSuccess ? (
        <>
          <SuccessActivation
            width="70%"
            pre_message="Your password has been reset"
            message=""
            type={type}
            userName={userName}
          />
        </>
      ) : (
        <>
          {/* {!loginUserState.loading && !loginUserState.isLoggedIn && (
            <ErrorActivation
              showImage={false}
              error={errorMessage}
            ></ErrorActivation>
          )} */}
        </>
      )}
    </>
  );
}

export default ResetPassword;
