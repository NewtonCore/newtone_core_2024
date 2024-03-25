/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import { useDispatch, useSelector } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import PasswordResetForm from "./PasswordResetForm";
import {
  handleChangePasswordDataChange,
  handleForgotPasswordDataChange,
  sendResetPassword_Email,
} from "../../../../app-redux/features/Auth/authSlice";
import AppContainer from "../../../organisms/AppContainer/AppContainer";
import { JsonToformData } from "../../../../constants/utils";
import { toast } from "react-toastify";
import AppButton from "../../../atoms/AppButton/AppButton";
import EmailHasBeenSent from "./EmailHasBeenSent";
import { Envelope } from "akar-icons";
import { PRIMARY_COLOR } from "../../../../constants/AppColors";
import { setOfflineLocalStorage } from "../../../../constants/OfflineStorage";
import { toggleLoginForm } from "../../../../app-redux/features/appData/appDataSlice";
import { LinearProgress } from "@mui/material";
import AppMobileNav from "../../../organisms/AppMobileNav/AppMobileNav";

// import { useLocation } from "react-router-dom";

function PasswordResetPage() {
  const [hasSentMail, SetHasSentMail] = useState(null);
  const [emailSent, SetEmailSent] = useState(null);

  let dispatch = useDispatch();

  const authData = useSelector((state) => state.auth);

  let { TalentLoginData,forgotPasswordForm, forgotPassData, sendResetPassowrd_State } =
    authData;

  const handleFormChange = (e) => {
    // return 0
    let { value, name } = e.target;

    dispatch(handleForgotPasswordDataChange({ name: name, value: value }));
  };

  const sendResetPasswordMail = (e) => {
    e.preventDefault();

    SetEmailSent(forgotPassData.email);

    dispatch(
      sendResetPassword_Email({
        dataToPass: JsonToformData(forgotPassData),
      })
    )
      .unwrap()
      .then((res) => {
        SetHasSentMail(true);
        toast.success(e);
        setOfflineLocalStorage(
          "@email_for_reset_password",
          forgotPassData.email
        );
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    dispatch(
      toggleLoginForm({
        loginForm: false,
        signUpForm: null,
      })
    );
    
  
    
  }, []);



  useEffect(() => {
   
    // console.log({TalentLoginData})

    if(TalentLoginData.email !==""){
      dispatch(
        handleForgotPasswordDataChange({ name:"email", value:TalentLoginData.email })
      );
    }
    
    
  }, [TalentLoginData]);
  //   let location = useLocation();

  return (
    <>
      <AppMobileNav />

      <AppNavBar />

      <AppContainer>
        <AppRow style={{ marginTop: 150 }}>
          {/* <AppCol size={3}></AppCol> */}

          <AppCol
            olg={3}
            omg={2}
            osg={1}
            sm_size={10}
            md_size={8}
            lg_size={6}
            size={6}
            xs_size={12}

            className="shadow p-3 bg-body-tertiary rounded"
          >
            {sendResetPassowrd_State.loading && <LinearProgress />}
            {hasSentMail && (
              <center>
                <Envelope size={50} color={PRIMARY_COLOR} />
              </center>
            )}
            <h5 className="mt-3 mb-3 text-center">
              {" "}
              {hasSentMail ? "Email sent!" : "Forgot Password?"}
            </h5>
            {hasSentMail ? (
              <>
                <EmailHasBeenSent email={emailSent}></EmailHasBeenSent>
                <AppButton
                  onClick={(e) => sendResetPasswordMail(e)}
                  size="small"
                  className="w-100"
                >
                  Did not get email? Resend
                </AppButton>
              </>
            ) : (
              <>
                <div class="alert alert-warning" role="alert">
                  Instructions to reset your password will be sent to your email
                </div>

                <form
                  className="auth_form"
                  onSubmit={(e) => sendResetPasswordMail(e)}
                >
                  <PasswordResetForm
                    defaultLoginData={forgotPassData}
                    form={forgotPasswordForm}
                    handleTextInputChange={handleFormChange}
                  />
                  <AppButton
                    loadingText="Sending mail..."
                    loading={sendResetPassowrd_State.loading}
                    onClick={(e) => sendResetPasswordMail(e)}
                    size="small"
                    className="w-100"
                  >
                    Submit
                  </AppButton>
                </form>
              </>
            )}
          </AppCol>

          {/* <AppCol size={3}></AppCol> */}
        </AppRow>
      </AppContainer>
    </>
  );
}

export default PasswordResetPage;
