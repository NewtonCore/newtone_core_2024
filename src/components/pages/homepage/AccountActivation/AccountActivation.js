import React, { useEffect } from "react";
import SuccessActivation from "./SuccessActivation";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import { useParams } from "react-router-dom";
import { activateAccount } from "../../../../app-redux/features/Auth/authSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppBackDrop from "../../../organisms/AppBackDrop/AppBackDrop";
import ErrorActivation from "./ErrorActivation";
import { toast } from "react-toastify";
import { useRef } from "react";
import AppMobileNav from "../../../organisms/AppMobileNav/AppMobileNav";
// import { useLocation } from "react-router-dom";

function AccountActivation() {
  let dispatch = useDispatch();
  const param1Detail = useRef(false);

  let { param1, param2 } = useParams();
  let [showSuccess, SetShowSuccess] = useState(false);
  let [userName, SetUserName] = useState("");
  let [type, SetType] = useState("default");
  let [errorMessage, SetErrorMessage] = useState(null);

  const authData = useSelector((state) => state.auth);

  let { loginUserState } = authData;

  useEffect(() => {
    // send activation to GET URL

    param1 !== undefined &&
      param2 !== undefined &&
      !param1Detail.current &&
      dispatch(activateAccount({ param1, param2 }))
        .unwrap()
        .then((res) => {
          // console.log(res.user);

          SetUserName(res.user.first_name);
          SetType(res.user.type);
          SetShowSuccess(true);
        })
        .catch((e) => {
          // alert({e})
          SetShowSuccess(false);
          SetErrorMessage(e);
          // console.log({ e });
        });

    return () => {
      param1Detail.current = true;
    };
  }, [dispatch, param1, param2]);

  //   let location = useLocation();

  return (
    <>
      <AppMobileNav />

      <AppNavBar />
      {loginUserState.loading && <AppBackDrop open={loginUserState.loading} />}

      <div style={{ marginTop: 100}}>
      {showSuccess ? (
        <>
          <SuccessActivation type={type} userName={userName} />
        </>
      ) : (
        <>
          {!loginUserState.loading && (
            <ErrorActivation error={errorMessage}></ErrorActivation>
          )}
        </>
      )}
      </div>
      
    </>
  );
}

export default AccountActivation;
