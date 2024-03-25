import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
} from "../../../constants/AxiosServices";

export const getNewtonAvailabilities = createAsyncThunk(
  "ScheduleInterviewSlice/getNewtonAvailabilities",
  async (data) => {
    let url = `${process.env.REACT_APP_NEWTON_AVAILABILITY}`;
    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const ScheduleInterview = createAsyncThunk(
  "ScheduleInterviewSlice/ScheduleInterview",
  async ( data , {rejectWithValue}) => {
    try {
      let url = `${process.env.REACT_APP_SCHEDULE_INTERVIEW_WITH_NEWTON}`;
      let res = await AxiosPostService(url, data);

      return res.data;
    } catch (err) {
      // if (!err.response) {
      //   throw err
      // }
      // console.log(e.response.data);
      return rejectWithValue(err.response.data)

      // return e;
    }
  }
);

let newtonAvailabilityState = {
  data: [],
  loading: null,
  error: "",
};

let ScheduleInterviewState = {
  data: [],
  loading: null,
  error: "",
};

const ScheduleInterviewSlice = createSlice({
  name: "ScheduleInterviewSlice",
  initialState: {
    showMeetingScheduled: false,
    newtonAvailabilityState,
    ScheduleInterviewState,
  },
  reducers: {
    toggleTest: (state) => {},
    toggleShowMeetingScheduledModal: (state) => {
      state.showMeetingScheduled = !state.showMeetingScheduled;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getNewtonAvailabilities.pending, (state) => {
      state.newtonAvailabilityState.loading = true;
      state.newtonAvailabilityState.error = "";
      state.newtonAvailabilityState.data = [];
    });
    builder.addCase(getNewtonAvailabilities.fulfilled, (state, action) => {
      state.newtonAvailabilityState.loading = false;
      state.newtonAvailabilityState.error = "";
      state.newtonAvailabilityState.data = action.payload;
    });
    builder.addCase(getNewtonAvailabilities.rejected, (state, action) => {
      state.newtonAvailabilityState.loading = false;
      state.newtonAvailabilityState.error = action.error.message;
      state.newtonAvailabilityState.data = [];
    });

    builder.addCase(ScheduleInterview.pending, (state) => {
      state.ScheduleInterviewState.loading = true;
      state.ScheduleInterviewState.error = "";
      state.ScheduleInterviewState.data = [];
    });
    builder.addCase(ScheduleInterview.fulfilled, (state, action) => {
      state.ScheduleInterviewState.loading = false;
      state.ScheduleInterviewState.error = "";
      state.ScheduleInterviewState.data = action.payload;
    });
    builder.addCase(ScheduleInterview.rejected, (state, action) => {
      // console.log(action)
      state.ScheduleInterviewState.loading = false;
      state.ScheduleInterviewState.error = action.payload;
      state.ScheduleInterviewState.data = [];
      // toast.error(`${action.error.message}`, { autoClose: 2000 });
    });
  },
});

export const { toggleShowMeetingScheduledModal } =
  ScheduleInterviewSlice.actions;

export default ScheduleInterviewSlice.reducer;
