import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function ProtectedTalent() {
  let location = useLocation();
  let { pathname } = location;
  const navigate = useNavigate();

  // const { redirectTo } = queryString.parse(location.search);
  const authData = useSelector((state) => state.auth);
  const [nextPage, setNextPage] = useState(null);

  let { offlineUserToken } = authData;

  let { loginUserState } = authData;
  let { data } = loginUserState;

  let { type } = data;

  useEffect(() => {
    // console.log({loginUserState})

    if (offlineUserToken.userToken) {
      if (loginUserState.isLoggedIn) {
        // When type from the loginUser State  is talent
        if (type !== "talent") {

          if(type === "company"){
            navigate(`/company/dashboard`, { replace: true });
  
            }else{
              navigate(`/`, { replace: true });
  
            }
        } else {
        }
      }
    } else {
      //when no token

      if (!offlineUserToken.userToken && !offlineUserToken.loading) {
        if (pathname === "/" || loginUserState.isLoggedOutButton) {
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
    <div>{loginUserState.isLoggedIn && type === "talent" && <Outlet />}</div>
  );
}

export default ProtectedTalent;
// && type === "talent"
