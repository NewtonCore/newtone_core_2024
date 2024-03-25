import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import {
  getUserFromToken,
  getUserTokenOffline,
} from "../../app-redux/features/Auth/authSlice";
import { toggleLoginForm } from "../../app-redux/features/appData/appDataSlice";
import { toggleShowCreateAccountForm } from "../../app-redux/features/appData/appDataSlice";

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let { pathname } = location;

  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();
  let nextPage = searchParams.get("nextPage");
  let action = searchParams.get("action");

  const authData = useSelector((state) => state.auth);

  let { offlineUserToken } = authData;
  let { loginUserState } = authData;
  let { data: loginUserData } = loginUserState;
  let  type  = loginUserData !== undefined ? loginUserData.type : "";

  useEffect(() => {
    if(!loginUserState.isLoggedIn){

    if(action !== undefined){
     if(action !== null){

       if(action === "1" || action === 1){
        setTimeout(() => {
          dispatch(toggleLoginForm())
        }, 3000);
       }

      else if(action === '2' || action === 2){
        setTimeout(() => {
          dispatch(toggleLoginForm())
        dispatch(toggleShowCreateAccountForm())
        }, 3000);
      }

     }
    }
  }
   }, [loginUserState.isLoggedIn]);

  useEffect(() => {
    // Get the user offline token
    dispatch(getUserTokenOffline("@userAccess"));
    // console.log(offlineUserToken.userToken)
  }, [offlineUserToken.userToken, location]);

  useEffect(() => {
    //get user from token if not null
    if (offlineUserToken.userToken !== null) {
      dispatch(getUserFromToken());
    }
  }, [offlineUserToken.userToken]);

  useEffect(() => {
    if (loginUserState.isLoggedIn && !loginUserState.success) {
      if (type === "talent") {
        if (nextPage === null) {
          // navigate("/talent/dashboard",{ replace: true });

          // console.log({ nextPage });
          if (pathname !== "/talent/dashboard") {
            navigate(`${pathname}`, { replace: true });
          } else {
            navigate(`/talent/dashboard`, { replace: true });
          }
          // navigate(`${nextPage}`, { replace: true });
        } else {
          // console.log({nextPage})
          navigate(`${nextPage}`, { replace: true });
        }
      } else if (type === "talent") {
        if (nextPage === null) {
          // navigate("/talent/dashboard",{ replace: true });

          // console.log({ nextPage });
          if (pathname !== "/company/dashboard") {
            navigate(`${pathname}`, { replace: true });
          } else {
            navigate(`/company/dashboard`, { replace: true });
          }
          // navigate(`${nextPage}`, { replace: true });
        } else {
          // console.log({nextPage})
          navigate(`${nextPage}`, { replace: true });
        }
      }
    } else {
      if (loginUserState.error !== "") {
        // console.log({loginUserState});

        navigate(pathname, { replace: true });
        
      }
    }
  }, [loginUserState]);

  return <>{children}</>;
};

export default AuthProvider;
