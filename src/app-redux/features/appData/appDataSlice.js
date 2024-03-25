import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AxiosGetService } from "../../../constants/AxiosServices";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import { getGoogleUserFromToken, getUserTokenOffline, loginUser } from "../Auth/authSlice";

export const AxiosGetServiceHeader = createAsyncThunk(
  "appDataSlice/AxiosGetServiceHeader",
  async (data) => {
    let { url, token } = data;
    let res = await AxiosGetService(url, token);
    console.log(res.data);
    return res.data;
  }
);

export const getSkills = createAsyncThunk(
  "appDataSlice/AxiosGetServiceHeader",
  async (data) => {
    let { url, token } = data;
    let res = await AxiosGetService(url, token);
    // console.log(res.data);
    return res.data;
  }
);


export const getAppCountries = createAsyncThunk(
  "appDataSlice/getAppCountries",
  async (data, { rejectWithValue }) => {
    try {
      let url = process.env.REACT_APP_COUNTRY_URL;
      url ="https://newtoncore.com/api/config/country/"
      const res = await AxiosGetService(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);


export const getAppHourlyRate = createAsyncThunk(
  "appDataSlice/getAppHourlyRate",
  async (data, { rejectWithValue }) => {
    try {
      let url = process.env.REACT_APP_COUNTRY_URL;
      url ="https://newtoncore.com/api/config/hour-rate/"
      const res = await AxiosGetService(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
let appCountriesState = {
  loading: null,
  data: [],
  error: "",
};


let appHourlyRateState = {
  loading: null,
  data: [],
  error: "",
};

const appDataSlice = createSlice({
  name: "appData",
  initialState: {
    loginFormIsOpen: false,
    userLoginLevel: null,
    showSideNav: false,
    showCreateAccount: null,
    showReferFriendModal: null,
    showSubScriptionModal: null,
    showPaymentSuccessModal: null,
    refer_form_array: FORM_INPUTS.referalForm,
    appCountriesState,
    appHourlyRateState

  },
  reducers: {
    toggleLoginForm: (state, action) => {
      if (action.payload !== undefined) {
        let { loginForm, signUpForm } = action.payload;
        state.loginFormIsOpen = loginForm;
        state.showCreateAccount = signUpForm;
      } else {
        state.loginFormIsOpen = !state.loginFormIsOpen;
        state.showCreateAccount = null;
      }
    },

    toggleUserLoginLevel: (state, action) => {
      let { payload } = action;
      state.userLoginLevel = payload;
    },

    toggleSideNav: (state, action) => {
      if (action !== undefined) {
        let { payload } = action;

        if (payload === false) {
          state.showSideNav = payload;
        } else {
          state.showSideNav = !state.showSideNav;
        }
      } else {
        state.showSideNav = !state.showSideNav;
      }
    },
    closeSideNav: (state) => {},
    toggleShowCreateAccountForm: (state) => {
      state.loginFormIsOpen = true;
      state.showCreateAccount = !state.showCreateAccount;
    },

    toggleReferModal: (state) => {
      state.showReferFriendModal = !state.showReferFriendModal;
    },

    togglePayPalModal: (state) => {
      state.showSubScriptionModal = !state.showSubScriptionModal;
    },

    togglePaymentSuccessfulModal: (state) => {
      state.showSubScriptionModal = !state.showSubScriptionModal;
    },

    
  },

  ShowAppMessage: (state, action) => {
    toast.success(`${action.payload}`, {
      autoClose: 6000,
    });
  },

  extraReducers: (builder) => {
    builder.addCase(AxiosGetServiceHeader.pending, (state) => {
      state.registerUserState.loading = true;
      state.registerUserState.success = false;
      state.registerUserState.error = "";
      //   toast.info(`Pending...`, { autoClose: 1000 })
    });

    builder.addCase(loginUser.fulfilled, (state) => {
      state.loginFormIsOpen = null;

      //   toast.info(`Pending...`, { autoClose: 1000 })
    });

    builder.addCase(getUserTokenOffline.fulfilled, (state, action) => {
      if (action.payload !== null) {
      } else {
      }
    });

    builder.addCase(getGoogleUserFromToken.fulfilled, (state, action) => {
      state.loginFormIsOpen = false
    });

    builder.addCase(getAppCountries.pending, (state) => {
      state.appCountriesState.loading = true;
    });
    builder.addCase(getAppCountries.fulfilled, (state, action) => {
      state.appCountriesState.loading = null;
      state.appCountriesState.error = "";
      state.appCountriesState.data = action.payload;
    });
    builder.addCase(getAppCountries.rejected, (state, action) => {
      state.appCountriesState.loading = null;
      state.appCountriesState.error = action.error.message;
      state.appCountriesState.data = [];
    });

    // get hourly rate

    builder.addCase(getAppHourlyRate.pending, (state) => {
      state.appHourlyRateState.loading = true;
    });
    builder.addCase(getAppHourlyRate.fulfilled, (state, action) => {
      state.appHourlyRateState.loading = null;
      state.appHourlyRateState.error = "";
      state.appHourlyRateState.data = action.payload;
    });
    builder.addCase(getAppHourlyRate.rejected, (state, action) => {
      state.appHourlyRateState.loading = null;
      state.appHourlyRateState.error = action.error.message;
      state.appHourlyRateState.data = [];
    });
  },
});

export const {
  toggleLoginForm,
  toggleUserLoginLevel,
  toggleSideNav,
  closeSideNav,
  toggleShowCreateAccountForm,
  toggleReferModal,
  ShowAppMessage,
  togglePaymentSuccessfulModal,
  togglePayPalModal,
  
} = appDataSlice.actions;

export default appDataSlice.reducer;
