import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AxiosGetService,
  AxiosPostService,
} from "../../../constants/AxiosServices";
import { toast } from "react-toastify";
import {
  removeValueFromOffline,
  setOfflineLocalStorage,
  StoreofflineLocalStorage,
} from "../../../constants/OfflineStorage";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import {
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../constants/utils";
import {
  toggleLoginForm,
  toggleShowCreateAccountForm,
} from "../appData/appDataSlice";

let TalentSignUpData = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone: "",
  company_website: "",
  type: "talent",
};

let TalentLoginData = {
  email: "",
  password: "",
};

let forgotPassData = {
  email: "",
};

let resetPassData = {
  email: "",
  password: "",
  confirmPassword: "",
};

let registerUserState = {
  loading: null,
  data: [],
  error: "",
  success: null,
};

let changePasswordState = {
  loading: null,
  data: [],
  error: "",
};

let loginUserState = {
  loading: null,
  data: [],
  error: "",
  success: null,
  isLoggedIn: false,
  isLoggedOutButton: null,
  isChangePassword: null,
};

let offlineUserToken = {
  loading: true,
  userToken: null,
  error: "",
  isPresent: null,
};

let profileVisits = {
  loading: true,
  data: [],
  error: "",
};

let IncreaseProfileVisitsState = {
  loading: true,
  data: [],
  error: "",
};

let GOOGLE_USER = {
  loading: true,
  data: [],
  error: "",
};

let GOOGLE_USER_PROFILE = {
  loading: true,
  data: [],
  error: "",
};

let sendResetPassowrd_State = {
  loading: null,
  data: [],
  error: "",
};

const initialState = {
  passwordIsVisible: null,
  TalentSignUpData,
  TalentLoginData,
  forgotPassData,
  resetPassData,
  registerUserState,
  offlineUserToken,
  offlineTokenIsPresent: null,
  loginUserState,
  skills: [],
  loginAs: 2, // talent is 2 and company is 1
  loginForm: FORM_INPUTS.login,
  talentSignUpForm: FORM_INPUTS.signupTalent,
  companySignUpForm: FORM_INPUTS.signupCompany,
  changePasswordForm: FORM_INPUTS.TALENT_CHANGE_PASS_FIELDS,
  forgotPasswordForm: FORM_INPUTS.forgot_password,
  resetPassForm: FORM_INPUTS.password_reset,
  sendResetPassowrd_State,
  changePasswordState,
  profileVisits,
  IncreaseProfileVisitsState,
  GOOGLE_USER,
  GOOGLE_USER_PROFILE,
  // loginDataFromForm : ExtractFieldsFromFormData(this.loginForm)
};

let loginDataFromForm = ExtractFieldsFromFormData(initialState.loginForm);

export const AxiosGetServiceHeader = async (url) => {
  let res = await AxiosGetService(url, offlineUserToken.userToken);

  return res.data;
};

export const Test = async (url, token) => {
  let res = await AxiosGetService(url, token);
  // console.log(res.data);
  return res.data;
};

export const loginUser = createAsyncThunk(
  "authSlice/loginUser",
  async (data, { rejectWithValue }) => {
    let { dataToPass, callback } = data;

    try {
      let url = `${process.env.REACT_APP_LOGIN_TALENT_API}`;
      const res = await AxiosPostService(url, dataToPass);
      callback(res.data.user.type);

      return res.data;
    } catch (err) {
      // console.log(err)
      return rejectWithValue(err.response.data);
    }
  }
);

export const getGoogleUserFromToken = createAsyncThunk(
  "authSlice/getGoogleUserFromToken",
  async (data, { rejectWithValue }) => {
    // console.log(data)
    let { access_token } = data;

    try {
      let url = `${process.env.REACT_APP_GOOGLE_GET_TOKEN}?access_token=${access_token.access_token}`;
      const res = await AxiosGetService(url);
      // callback(res.data.user.type);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const sendResetPassword_Email = createAsyncThunk(
  "authSlice/sendResetPassword_Email",
  async (data, { rejectWithValue }) => {
    let { dataToPass } = data;

    try {
      let url = `${process.env.REACT_APP_SEND_MAIL_FOR_RESET}`;
      const res = await AxiosPostService(url, dataToPass, true, true);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const activateAccount = createAsyncThunk(
  "authSlice/activateAccount",
  async (data, { rejectWithValue }) => {
    let { param1, param2 } = data;

    try {
      let url = `${process.env.REACT_APP_ACTIVATE_API}${param1}/${param2}/`;
      const res = await AxiosGetService(url, true);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "authSlice/resetPassword",
  async (data, { rejectWithValue }) => {
    let { dataToPass, param1, param2 } = data;

    try {
      let url = `${process.env.REACT_APP_RESET_API}${param1}/${param2}/`;
      const res = await AxiosPostService(url, dataToPass, true, true);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const convertGoogleToken = createAsyncThunk(
  "authSlice/convertGoogleToken",
  async (data, { rejectWithValue }) => {
    let { token, profile_data, callback } = data;

    let dataToPass = {
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      client_secret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
      grant_type: process.env.REACT_APP_GOOGLE_GRANT_TYPE,
      backend: process.env.REACT_APP_GOOGLE_BACKEND,
      token,
    };

    dataToPass = JsonToformData(dataToPass);

    try {
      let url = `${process.env.REACT_APP_GOOGLE_CONVERT_TOKEN}`;
      const res = await AxiosPostService(url, dataToPass, false);
      callback("talent");

      // console.log({res})

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "authSlice/changePassword",
  async ({ data }, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_UPDATE_PASSWORD}`;
      let changePassData = ExtractFieldsFromFormData(data);
      changePassData = JsonToformData(changePassData);
      const res = await AxiosPostService(url, changePassData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserFromToken = createAsyncThunk(
  "authSlice/getUserFromToken",
  async (data) => {
    let url = process.env.REACT_APP_GET_USER_FROM_TOKEN;
    const res = await AxiosGetService(url);
    // console.log({res})
    return res.data;
  }
);

export const logOutUser = createAsyncThunk("authSlice/logOutUser", async () => {
  // console.log("hehe");
  const res = await removeValueFromOffline("@userAccess");
  return res.data;
});

export const registerUser = createAsyncThunk(
  "authSlice/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_REGISTER_TALENT_API}`;
      const res = await AxiosPostService(url, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getUserTokenOffline = createAsyncThunk(
  "authSlice/getUserTokenOffline",
  async (key) => {
    let data = await StoreofflineLocalStorage(key, null);
    return data;
  }
);

export const getprofileVisits = createAsyncThunk(
  "authSlice/getprofileVisits",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_VIEW_PROFILE_HISTORY}`;
    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const getprofileVisitsCompany = createAsyncThunk(
  "authSlice/getprofileVisitsCompany",
  async (data) => {
    let url = `${process.env.REACT_APP_COMPANY_VIEW_PROFILE_HISTORY}`;
    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const increareTalentVisits = createAsyncThunk(
  "authSlice/increareTalentVisits",
  async ({ talentID }) => {
    let url = `${process.env.REACT_APP_INCREASE_PROFILE_VIEW}/${talentID}/`;
    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const increaseCompanyVisits = createAsyncThunk(
  "authSlice/increareCompanyVisits",
  async (data) => {
    let url = `${process.env.REACT_APP_INCREASE_PROFILE_VIEW_COMPANY}${data}/`;
    const res = await AxiosGetService(url);
    return res.data;
  }
);

const authSlice = createSlice({
  name: "authSlice",
  initialState,

  reducers: {
    toggleHideUserCreated: (state, payload) => {
      state.registerUserState.success = null;
    },
    handleTalentSignUpChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state
      let { name, value } = payload.payload;

      let { TalentSignUpData } = state;
      TalentSignUpData[name] = value;

      return state;
    },

    handleTalentLoginDataChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state

      let { name, value } = payload.payload;

      let { TalentLoginData } = state;
      TalentLoginData[name] = value;

      return state;
    },

    handleForgotPasswordDataChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state

      let { name, value } = payload.payload;

      let { forgotPassData } = state;
      forgotPassData[name] = value;

      return state;
    },

    handleChangePasswordDataChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state

      let { name, value } = payload.payload;

      let { resetPassData } = state;
      resetPassData[name] = value;

      return state;
    },

    toggleShowPassword: (state) => {
      state.passwordIsVisible = !state.passwordIsVisible;
    },

    toggleLoginAs: (state, action) => {
      state.loginAs = parseInt(action.payload);

      if (parseInt(action.payload) === 1) {
        state.TalentSignUpData.type = "company";
      } else {
        state.TalentSignUpData.type = "talent";
        state.TalentSignUpData.company_website = "";
      }
    },

    registerUserGlobal: (state) => {
      registerUser(state.TalentSignUpData);
      // console.log("hiii")
    },

    handleOnChangeTextInput: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "change_password":
          // console.log(action.payload)
          state.changePasswordForm[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleValidateFields: (state, action) => {
      switch (action.payload.state) {
        case "change_password":
          state.changePasswordForm = state.changePasswordForm.map((data1) => {
            return {
              ...data1, // make a copy of the bio_data_array before manipulating it
              children: data1.children.map((d2) => {
                return {
                  ...d2, // make a copy of the children
                  // change the hasError property if isReuired is true and value is empty
                  hasError:
                    (d2.value.replace(/\s+/g, "") === "" ||
                      d2.value.replace(/\s+/g, " ") === " ") &&
                    d2.isRequired === true
                      ? true
                      : false,
                };
              }),
            };
          });
      }
    },
  },

  extraReducers: (builder) => {
    // register user buiilder
    builder.addCase(registerUser.pending, (state) => {
      state.passwordIsVisible = null;
      state.registerUserState.loading = true;
      state.registerUserState.success = null;
      state.registerUserState.error = "";
      //   toast.info(`Pending...`, { autoClose: 1000 })
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.TalentLoginData.email = state.TalentSignUpData.email;

      state.TalentSignUpData = TalentSignUpData;
      state.registerUserState.loading = null;
      state.registerUserState.data = action.payload;
      setOfflineLocalStorage("@userAccess", action.payload.access);
      state.registerUserState.success = true;
      state.registerUserState.error = "";
      // toast.success(`User registered`, { autoClose: 6000 });
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.registerUserState.loading = null;
      state.registerUserState.data = [];
      state.success = null;

      if (action.payload.email !== undefined) {
        state.registerUserState.error = action.payload.email[0];
        toast.error(`${action.payload.email[0]}`, { autoClose: 6000 });
      } else {
        toast.error(`Something went wrong!`, { autoClose: 6000 });
      }
    });

    builder.addCase(toggleLoginForm, (state) => {
      state.loginUserState.error = "";
      state.registerUserState.error = "";
    });

    builder.addCase(toggleShowCreateAccountForm, (state) => {
      state.loginUserState.error = "";
      state.registerUserState.error = "";
    });

    // Get usertoken offline builder

    builder.addCase(getUserTokenOffline.pending, (state) => {
      state.offlineUserToken.loading = true;
      state.offlineUserToken.error = "";
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = null;
    });

    builder.addCase(getUserTokenOffline.fulfilled, (state, action) => {
      state.offlineUserToken.loading = null;
      state.offlineUserToken.userToken = action.payload;
      state.offlineUserToken.error = "";

      if (action.payload !== null) {
        state.offlineUserToken.isPresent = true;
        state.offlineTokenIsPresent = true;
      } else {
        state.offlineUserToken.isPresent = false;
        state.loginUserState = loginUserState;
        state.profileVisits = profileVisits;
        state.IncreaseProfileVisitsState = IncreaseProfileVisitsState;
        state.changePasswordState = changePasswordState;
      }
    });

    builder.addCase(getUserTokenOffline.rejected, (state, action) => {
      state.loginUserState.loading = null;
      state.getUserTokenOffline.loading = null;
      state.offlineTokenIsPresent = null;
      state.getUserTokenOffline.user = action.payload;
      state.offlineTokenIsPresent = null;
      state.offlineUserToken.isPresent = false;
      state.loginUserState = loginUserState;
    });
    //login user builder
    builder.addCase(loginUser.pending, (state) => {
      state.passwordIsVisible = null;
      state.loginUserState.loading = true;
      state.loginUserState.success = null;
      state.loginUserState.error = "";
      state.offlineTokenIsPresent = null;
      state.loginUserState.isLoggedIn = false;

      //   toast.info(`Pending...`, { autoClose: 1000 })
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.TalentLoginData = TalentLoginData;
      state.loginUserState.loading = null;
      state.loginUserState.isLoggedIn = true;
      state.loginUserState.data = action.payload.user;
      state.loginUserState.data.test_validation = action.payload.test_validation;

      setOfflineLocalStorage("@userAccess", action.payload.access);
      // userLoginType = default || google
      setOfflineLocalStorage("@userLoginType", "default");
      state.loginUserState.success = true;
      state.loginUserState.error = "";
      state.loginForm = FORM_INPUTS.login;
      // set token
      if (action.payload !== null) {
        state.offlineUserToken.userToken = action.payload.access;
        // state.offlineTokenIsPresent = true;
      }
      // toast.success(`Welcome ${action.payload.user.first_name}`, {
      //   autoClose: 6000,
      // });
    });

    builder.addCase(loginUser.rejected, (state, action) => {
      state.offlineTokenIsPresent = null;
      state.loginUserState.loading = null;
      state.loginUserState.data = [];
      state.loginUserState.success = null;
      state.loginUserState.error = action.payload;
      state.loginUserState.isLoggedIn = false;
    });

    // activation account

    builder.addCase(activateAccount.pending, (state) => {
      state.passwordIsVisible = null;
      state.loginUserState.loading = true;
      state.loginUserState.success = null;
      state.loginUserState.error = "";
      state.offlineTokenIsPresent = null;
      state.loginUserState.isLoggedIn = false;
    });

    builder.addCase(activateAccount.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.TalentLoginData = TalentLoginData;
      state.loginUserState.loading = null;
      state.loginUserState.isLoggedIn = true;
      state.loginUserState.data = action.payload.user;
      state.loginUserState.data.test_validation = action.payload.test_validation;
      setOfflineLocalStorage("@userAccess", action.payload.access);
      // userLoginType = default || google
      setOfflineLocalStorage("@userLoginType", "default");
      state.loginUserState.success = true;
      state.loginUserState.error = "";
      state.loginForm = FORM_INPUTS.login;
      // set token
      if (action.payload !== null) {
        state.offlineUserToken.userToken = action.payload.access;
      }
    });

    builder.addCase(activateAccount.rejected, (state, action) => {
      state.offlineTokenIsPresent = null;
      state.loginUserState.loading = null;
      state.loginUserState.data = [];
      state.loginUserState.success = null;
      state.loginUserState.error = action.payload;
      state.loginUserState.isLoggedIn = false;
      // console.log(action)
      if (action.payload !== undefined) {
      } else {
        toast.error(`Error logging in: ${action.error.message}`, {
          autoClose: 6000,
        });
      }
    });

    // End of activation account

    // RESET password

    builder.addCase(resetPassword.pending, (state) => {
      state.passwordIsVisible = null;
      state.loginUserState.loading = true;
      state.loginUserState.success = null;
      state.loginUserState.error = "";
      state.offlineTokenIsPresent = null;
      state.loginUserState.isLoggedIn = false;
      state.loginUserState.isChangePassword = true;
    });

    builder.addCase(resetPassword.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.TalentLoginData = TalentLoginData;
      state.loginUserState.loading = null;
      state.loginUserState.isLoggedIn = true;
      state.loginUserState.data = action.payload.user;
      state.loginUserState.data.test_validation = action.payload.test_validation;
      setOfflineLocalStorage("@userAccess", action.payload.access);
      // userLoginType = default || google
      setOfflineLocalStorage("@userLoginType", "default");
      state.loginUserState.success = true;
      state.loginUserState.isChangePassword = true;

      state.loginUserState.error = "";
      state.loginForm = FORM_INPUTS.login;
      // set token
      if (action.payload !== null) {
        state.offlineUserToken.userToken = action.payload.access;
      }
    });

    builder.addCase(resetPassword.rejected, (state, action) => {
      state.offlineTokenIsPresent = null;
      state.loginUserState.loading = null;
      state.loginUserState.data = [];
      state.loginUserState.success = null;
      state.loginUserState.error = action.payload;
      state.loginUserState.isLoggedIn = false;
      // console.log(action)
      if (action.payload !== undefined) {
      } else {
        toast.error(`Error logging in: ${action.error.message}`, {
          autoClose: 6000,
        });
      }
    });

    //End reset password

    // send password reset email

    builder.addCase(sendResetPassword_Email.pending, (state) => {
      state.sendResetPassowrd_State.loading = true;
      state.sendResetPassowrd_State.error = "";
      state.sendResetPassowrd_State.data = [];
    });

    builder.addCase(sendResetPassword_Email.fulfilled, (state, action) => {
      state.sendResetPassowrd_State.loading = false;
      state.sendResetPassowrd_State.error = "";
      state.sendResetPassowrd_State.data = action.payload;
    });

    builder.addCase(sendResetPassword_Email.rejected, (state, action) => {
      state.sendResetPassowrd_State.loading = false;
      state.sendResetPassowrd_State.error =
        "Something went wrong sending email";
      state.sendResetPassowrd_State.data = [];
    });

    // end send password reset mail

    // Login via google

    builder.addCase(getGoogleUserFromToken.pending, (state) => {
      state.GOOGLE_USER.loading = true;
      state.GOOGLE_USER.data = [];
      state.GOOGLE_USER.error = "";
    });

    builder.addCase(getGoogleUserFromToken.rejected, (state, action) => {
      state.GOOGLE_USER.loading = false;
      state.GOOGLE_USER.data = [];
      state.GOOGLE_USER.error = "Something went wrong";
    });

    builder.addCase(getGoogleUserFromToken.fulfilled, (state, action) => {
      state.GOOGLE_USER.loading = false;
      state.GOOGLE_USER.data = action.payload;
      state.GOOGLE_USER.error = "";
    });

    builder.addCase(convertGoogleToken.pending, (state) => {
      state.passwordIsVisible = null;
      state.loginUserState.loading = true;
      state.loginUserState.success = null;
      state.loginUserState.error = "";
      state.offlineTokenIsPresent = null;
    });

    builder.addCase(convertGoogleToken.fulfilled, (state, action) => {
      // state.loginUserState.loading = true;
      // state.loginUserState.isLoggedIn = false;

  

      // console.log(action.payload)

      setOfflineLocalStorage("@userAccess", action.payload.access_token);
      // userLoginType = default || google
      setOfflineLocalStorage("@userLoginType", "google");

      // state.loginUserState.success = true;
      state.loginUserState.error = "";
      state.loginForm = FORM_INPUTS.login;

      // set token
      if (action.payload !== null) {
        state.offlineUserToken.userToken = action.payload.access_token;
        // state.offlineTokenIsPresent = true;
      }
      // toast.success(`Welcome`, {
      //   autoClose: 6000,
      // });
    });

    builder.addCase(convertGoogleToken.rejected, (state, action) => {
      state.offlineTokenIsPresent = null;
      state.loginUserState.loading = null;
      state.loginUserState.data = [];
      state.loginUserState.success = null;
      toast.info("This user might already be existing");
    });

    builder.addCase(logOutUser.pending, (state) => {
      // console.log("pending...");
    });

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.loginUserState.isLoggedOutButton = true;
      state.offlineUserToken = offlineUserToken;
      // state.loginUserState = loginUserState;
      state.loginUserState.loading = null;
      state.loginUserState.data = [];
      state.loginUserState.isLoggedIn = false;
      state.profileVisits = profileVisits;
      state.IncreaseProfileVisitsState = IncreaseProfileVisitsState;
      state.changePasswordState = changePasswordState;

      // state.loginUserState.isLoggedIn = false;
      // state.loginUserState.isLoggedOutButton = true;
      // state.offlineUserToken.userToken = null;
      // state.offlineUserToken.loading = null;
      // state.offlineUserToken.isPresent = null;
      // state.offlineUserToken.error = "";
      // state.loginUserState.loading = null;
      // state.loginUserState.data = [];
      // state.profileVisits = profileVisits
      // state.IncreaseProfileVisitsState = IncreaseProfileVisitsState
      // state.changePasswordState = changePasswordState
    });

    builder.addCase(logOutUser.rejected, (state, action) => {
      // console.log(action.payload)
    });

    builder.addCase(getUserFromToken.pending, (state) => {
      state.loginUserState.loading = true;
    });
    builder.addCase(getUserFromToken.fulfilled, (state, action) => {
      state.loginUserState.loading = null;
      state.loginUserState.isLoggedIn = true;
      state.loginUserState.data = action.payload.user;
      state.loginUserState.data.test_validation = action.payload.test_validation;
    });
    builder.addCase(getUserFromToken.rejected, (state, action) => {
      // setOfflineLocalStorage("@userAccess", null);
      state.loginUserState.loading = null;
      state.loginUserState.isLoggedIn = null;
      state.loginUserState.data = [];
      state.loginUserState.success = null;
      state.loginUserState.error = action.error.message;
    });
    builder.addCase(changePassword.pending, (state) => {
      state.changePasswordState.loading = true;
    });

    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.changePasswordState.loading = null;
      state.changePasswordState.error = "";
      state.changePasswordState.data = action.payload;
      // console.log(action)
      // toast.success(`${action.payload}`, { autoClose: 3000 });
    });

    builder.addCase(changePassword.rejected, (state, action) => {
      state.changePasswordState.loading = null;
      state.loginUserState.error = action.error.message;
      state.changePasswordState.data = [];
      // toast.error(`Something went wrong`, { autoClose: 6000 });
    });

    builder.addCase(getprofileVisits.pending, (state) => {
      state.profileVisits.loading = true;
    });

    builder.addCase(getprofileVisits.fulfilled, (state, action) => {
      state.profileVisits.loading = null;
      state.profileVisits.error = "";
      state.profileVisits.data = action.payload;
    });

    builder.addCase(getprofileVisits.rejected, (state, action) => {
      state.profileVisits.loading = null;
      state.profileVisits.error = action.error.message;
      state.profileVisits.data = [];
    });

    // company_profile_visits

    builder.addCase(getprofileVisitsCompany.pending, (state) => {
      state.profileVisits.loading = true;
    });

    builder.addCase(getprofileVisitsCompany.fulfilled, (state, action) => {
      state.profileVisits.loading = null;
      state.profileVisits.error = "";
      state.profileVisits.data = action.payload;
    });

    builder.addCase(getprofileVisitsCompany.rejected, (state, action) => {
      state.profileVisits.loading = null;
      state.profileVisits.error = action.error.message;
      state.profileVisits.data = [];
    });

    // end

    builder.addCase(increareTalentVisits.pending, (state) => {
      state.IncreaseProfileVisitsState.loading = true;
    });

    builder.addCase(increareTalentVisits.fulfilled, (state, action) => {
      state.IncreaseProfileVisitsState.loading = null;
      state.IncreaseProfileVisitsState.error = "";
      state.IncreaseProfileVisitsState.data = action.payload;
    });

    builder.addCase(increareTalentVisits.rejected, (state, action) => {
      state.IncreaseProfileVisitsState.loading = null;
      state.IncreaseProfileVisitsState.error = action.error.message;
      state.IncreaseProfileVisitsState.data = [];
    });

    // increase company visits

    builder.addCase(increaseCompanyVisits.pending, (state) => {
      state.IncreaseProfileVisitsState.loading = true;
    });

    builder.addCase(increaseCompanyVisits.fulfilled, (state, action) => {
      state.IncreaseProfileVisitsState.loading = null;
      state.IncreaseProfileVisitsState.error = "";
      state.IncreaseProfileVisitsState.data = action.payload;
    });

    builder.addCase(increaseCompanyVisits.rejected, (state, action) => {
      state.IncreaseProfileVisitsState.loading = null;
      state.IncreaseProfileVisitsState.error = action.error.message;
      state.IncreaseProfileVisitsState.data = [];
    }); // end
  },
});

export const {
  handleTalentSignUpChange,
  handleTalentLoginDataChange,
  handleForgotPasswordDataChange,
  handleChangePasswordDataChange,
  toggleShowPassword,
  registerUserGlobal,
  toggleLoginAs,
  handleOnChangeTextInput,
  handleValidateFields,
  toggleHideUserCreated,
} = authSlice.actions;

export default authSlice.reducer;
