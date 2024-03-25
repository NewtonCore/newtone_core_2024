import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  AxiosGetService,
  AxiosPostService,
} from "../../../constants/AxiosServices";
import { JsonToformData } from "../../../constants/utils";

export const getCompanyDebit = createAsyncThunk(
  "companyDebitSlice/getCompanyDebit",
  async (data) => {
    let url = process.env.REACT_APP_COMPANY_PAYMENT_INFO;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const SaveCompanyDebit = createAsyncThunk(
  "companyDebitSlice/SaveCompanyDebit",
  async (data) => {
    let url = process.env.REACT_APP_COMPANY_PAYMENT_INFO;
    let res = await AxiosPostService(url, JsonToformData(data));
    // console.log(res.data);
    return res.data;
  }
);

let companyDebitState = {
  loading: null,
  data: [],
  error: "",
};

let companyDebitSaveState = {
  loading: null,
  data: [],
  error: "",
};

const companyDebitSlice = createSlice({
  name: "companyDebit",
  initialState: {
    companyDebitState,
    companyDebitSaveState,
  },
  reducers: {
    test: (state) => {},
  },

  extraReducers: (builder) => {
    builder.addCase(SaveCompanyDebit.pending, (state, action) => {
      state.companyDebitSaveState.loading = true;
    });

    builder.addCase(SaveCompanyDebit.fulfilled, (state, action) => {
      state.companyDebitSaveState.loading = false;
      state.companyDebitSaveState.data = action.payload;
      toast.success(`Saved Debit information`, {
        autoClose: 6000,
      });
    });

    builder.addCase(SaveCompanyDebit.rejected, (state, action) => {
      state.companyDebitSaveState.loading = false;
      state.companyDebitSaveState.data = [];
      state.companyDebitSaveState.error = action.error.message;

      toast.error(`${action.error.message}`, { autoClose: 6000 });
    });
  },
});

export const {} = companyDebitSlice.actions;

export default companyDebitSlice.reducer;
