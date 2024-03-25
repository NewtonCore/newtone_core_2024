import React, { useEffect, useState } from "react";
import {  useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function Protectedcompany() {
  let location = useLocation();
  let { pathname } = location;
  const navigate = useNavigate();


  // const { redirectTo } = queryString.parse(location.search);
  const authData = useSelector((state) => state.auth);

  let { offlineUserToken } = authData;

  let { loginUserState } = authData;
  let { data } = loginUserState;
  // let { user } = data;

  let { type } = data;

  useEffect(() => {
    // console.log({loginUserState})
    if (offlineUserToken.userToken) {
      if (loginUserState.isLoggedIn) {
        if (type !== "company") {
          // When type from the loginUser State  is talent

          if(type === "talent"){
          navigate(`/talent/dashboard`, { replace: true });

          }else{
            navigate(`/`, { replace: true });

          }
        } else {
          // console.log("company");
        }
      }
    } else {
      //when no token

      if (!offlineUserToken.userToken && !offlineUserToken.loading) {
        // console.log("token null and loading null");
        if (pathname === "/") {
          // setNextPage
          navigate(`/`, { replace: true });
        } else {
          if (loginUserState.isLoggedOutButton) {
            navigate(`/`, { replace: true });
          } else {
            navigate(`/?nextPage=${pathname}`, { replace: true });
          }
        }
      } else {
      }
    }
  }, [loginUserState, location, offlineUserToken]);

  return (
    <div>{loginUserState.isLoggedIn && type === "company" && <Outlet />}</div>
  );
}

export default Protectedcompany;
// && type === "company"
