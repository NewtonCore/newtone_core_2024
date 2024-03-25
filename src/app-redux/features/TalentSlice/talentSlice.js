import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
} from "../../../constants/AxiosServices";
import { FORM_INPUTS } from "../../../constants/FormInputs";



export const getAllTalents = createAsyncThunk(
  "getAllTalents/getAllTalents",
  async (urlPassed, { rejectWithValue }) => {
    try {
      let url = urlPassed === undefined ? `${process.env.REACT_APP_TALENT}` : urlPassed;
      let res = await AxiosGetService(url);
      // console.log(res.data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getTalentInterviews = createAsyncThunk(
  "talentSlice/getTalentInterviews",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_MY_INTERVIEWS}`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const talentApplyingJob = createAsyncThunk(
  "talentSlice/talentApplyingJob",
  async (data, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_TALENT_APPLYING_TO_A_JOB}`;

      const res = await AxiosPostService(url, data);
      // callback(res.data.user.type);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const talentConfirmJobOfferz = createAsyncThunk(
  "talentSlice/talentConfirmJobOfferz",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_JOB_ANSWER}`;
    const res = await AxiosPostService(url, data);
    // callback(res.data.user.type);
    return res.data;
  }
);

export const updateTalentApplyingJob = createAsyncThunk(
  "talentSlice/updateTalentApplyingJob",
  async (data, { rejectWithValue }) => {
    // console.log(data, data.get("id"));
    // let { dataToPass, callback } = data;
    // console.log(callback)
    try {
      let url = `${process.env.REACT_APP_TALENT_APPLYING_TO_A_JOB}`;
      url = url + data.get("id") + "/";
      const res = await AxiosPutService(url, data);
      // // callback(res.data.user.type);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getAppliedTalentObject = createAsyncThunk(
  "talentSlice/getAppliedTalentObject",
  async (data, { rejectWithValue }) => {
    // data is the jobID
    try {
      
      let url = `${process.env.REACT_APP_GET_TALENT_JOB_APPLYIED_OBJECT}`;
      url = url + data;
      let res = await AxiosGetService(url, true);
      // console.log(res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

let talentInterviewsState = {
  loading: null,
  data: [],
  error: "",
};

let appliedTalentState = {
  loading: false,
  data: {},
  error: "",
};

let applyingTalentData = {
  message: "",
  job: null,
  id: null,
  data: {},
  loading: false,
};

const talentSlice = createSlice({
  name: "talentSlice",
  initialState: {
    talentState: {
      loading: null,
      data: [],
      error: "",
    },
    apply_form: FORM_INPUTS.talent_apply_job,
    showApplyJobModal: false,
    appliedTalentState,
    applyingTalentData,
    talentInterviewsState,
  },
  reducers: {
    handleApplyingTalentChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state
      let { name, value } = payload.payload;

      // let { appliedTalentState } = state;
      // applyingTalentData[name] = value;
      state.applyingTalentData[name] = value;

      return state;
    },
    toggleTest: (state) => {},
    toggleApplyJobModal: (state) => {
      // console.log(state, 'toogle')
      state.showApplyJobModal = !state.showApplyJobModal;
    },

    resetapplyingTalentData: (state) => {
      state.applyingTalentData.id = null;
      state.applyingTalentData.message = null;
      state.applyingTalentData.job = "";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllTalents.pending, (state) => {
      state.talentState.loading = true;
      state.talentState.error = "";
      state.showApplyJobModal = !state.showApplyJobModal;
    });
    builder.addCase(getAllTalents.fulfilled, (state, action) => {
      state.talentState.loading = false;
      state.talentState.data = action.payload;

      // if(state.talentState.data.length !==0){
      //   state.talentState.data = [...state.talentState.data,action.payload]

      // }else{
      // state.talentState.data = action.payload;

      // }
      state.talentState.error = "";
      state.showApplyJobModal = true;
    });
    builder.addCase(getAllTalents.rejected, (state, action) => {
      state.talentState.loading = false;
      state.talentState.data = [];
      state.showApplyJobModal = true;
      // state.talentState.error = action.payload.message;
    });

    // Applying route
    builder.addCase(talentApplyingJob.pending, (state) => {
      state.appliedTalentState.loading = true;
      state.appliedTalentState.error = "";
    });
    builder.addCase(talentApplyingJob.fulfilled, (state, action) => {
      state.appliedTalentState.loading = false;
      state.appliedTalentState.data = action.payload;
      state.appliedTalentState.error = "";
      if (action.payload) {
        // state.applyingTalentData.message = action.payload.message
        state.applyingTalentData.id = action.payload.id;
      }
    });
    builder.addCase(talentApplyingJob.rejected, (state, action) => {
      state.appliedTalentState.loading = false;
      state.appliedTalentState.data = {};
    });
    builder.addCase(getAppliedTalentObject.pending, (state, action) => {
      state.applyingTalentData.loading = true;
    });

    builder.addCase(getAppliedTalentObject.rejected, (state, action) => {
      state.applyingTalentData.loading = false;
    });

    builder.addCase(getAppliedTalentObject.fulfilled, (state, action) => {
      state.applyingTalentData.loading = false;

      if (action.payload) {
        state.applyingTalentData.data = action.payload;

        // console.log(action.payload, 'after getting object')
        state.applyingTalentData.message = action.payload.message;
        state.applyingTalentData.id = action.payload.id;
      } else {
        state.applyingTalentData.message = "";
        state.applyingTalentData.id = null;
      }
      state.appliedTalentState.error = "";
    });

    builder.addCase(getTalentInterviews.pending, (state) => {
      state.talentInterviewsState.loading = true;
      state.talentInterviewsState.error = "";
    });
    builder.addCase(getTalentInterviews.fulfilled, (state, action) => {
      state.talentInterviewsState.loading = false;
      state.talentInterviewsState.data = action.payload;
      state.talentInterviewsState.error = "";
    });
    builder.addCase(getTalentInterviews.rejected, (state, action) => {
      state.talentInterviewsState.loading = false;
      state.talentInterviewsState.data = {};
    });
  },
});

export const {
  resetapplyingTalentData,
  toggleApplyJobModal,
  handleApplyingTalentChange,
} = talentSlice.actions;

export default talentSlice.reducer;
