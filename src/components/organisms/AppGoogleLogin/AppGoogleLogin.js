import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {
  convertGoogleToken,
  getGoogleUserFromToken,
} from "../../../app-redux/features/Auth/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { GOOGLE_LOGO } from "../../../constants/AppImages";
import AppImage from "../AppImage/AppImage";
import { WHITE_COLOR } from "../../../constants/AppColors";

function AppGoogleLogin({ navigateAfterLogin }) {
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      // console.log(codeResponse)

      dispatch(getGoogleUserFromToken({ access_token: codeResponse }))
        .unwrap()
        .then((res) => {
          //   console.log({ res });
          dispatch(
            convertGoogleToken({
              callback: navigateAfterLogin,
              token: codeResponse.access_token,
              profile_data: res,
            })
          );
        })
        .catch((error) => {});
    },

    onError: (error) => toast.error(`Login failed: ${error}`),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div>
      {profile ? (
        <div className="mb-3">
          <p>Email Address: {profile.email}</p>
        </div>
      ) : (
        <center>
          <button
            style={{
              marginBottom: 10,
              borderWidth: 0,
              backgroundColor: "#4185f4",
              padding: 2,
            }}
            onClick={login}
            size="small"
          >
            <div
              className="d-inline-block"
              style={{
                backgroundColor: WHITE_COLOR,
                display: "flex",
                alignItems: "center",
                marginRight: 10,
                padding: 7,
              }}
            >
              <div className="">
                <center>
                  <AppImage
                    style={{ height: 20 }}
                    image={GOOGLE_LOGO}
                  ></AppImage>
                </center>
              </div>
            </div>
            <div
              className="d-inline-block"
              style={{ marginRight: 2, color: WHITE_COLOR }}
            >
              <div className="">Sign up/ Sign in with Google</div>
            </div>
           
          </button>
        </center>
      )}
    </div>
  );
}
export default AppGoogleLogin;
