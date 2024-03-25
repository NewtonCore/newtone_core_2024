import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AxiosGetService,
  AxiosPostService,
} from "../../../constants/AxiosServices";
import { FORM_INPUTS } from "../../../constants/FormInputs";

const skillsState = {
  loading: null,
  data: { results: [] },
  error: "",
};

const technicalSkillsState = {
  loading: null,
  data: { results: [] },
  error: "",
};

const skillByIDState = {
  loading: null,
  data: [],
  error: "",
};

const testGorillaState = {
  loading: null,
  data: [],
  error: "",
};

const TestQuestionState = {
  loading: null,
  data: [],
  error: "",
};

const initialState = {
  skillsState,
  skillByIDState,
  skillFilter: "all",
  talent_search_skill_form: FORM_INPUTS.talent_search_skill,
  q_search: "",
  technicalSkillsState,
  TestQuestionState,
  testGorillaState,
  staff_upload_gorilla_result: FORM_INPUTS.staff_upload_test_gorilla,
  staff_upload_questions: FORM_INPUTS.staff_add_question,
  staff_talent_list: FORM_INPUTS.staff_talent_list,
  staff_skill_list: FORM_INPUTS.staff_skill_list,


};

export const getSkills = createAsyncThunk(
  "skillSlice/getSkills",
  async (data) => {
    let url = `${process.env.REACT_APP_ALL_SKILLS_API}`;
    const res = await AxiosGetService(url, true);
    return res.data;
  }
);

export const getTechnicalSkills = createAsyncThunk(
  "skillSlice/getTechnicalSkills",
  async (data) => {
    let url = `${process.env.REACT_APP_ALL_SKILLS_API}?type=technical`;
    const res = await AxiosGetService(url, true);
    return res.data;
  }
);

export const getSkillByID = createAsyncThunk(
  "skillSlice/getSkillByID",
  async ({ id }) => {
    let url = `${process.env.REACT_APP_SKILL_API}${id}`;
    const res = await AxiosGetService(url);
    return res.data;
  }
);

export const uploadTestGorillaTest = createAsyncThunk(
  "skillSlice/uploadTestGorillaTest",
  async (data, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_UPLOAD_TEST_GORILLA_API}`;

      const res = await AxiosPostService(url, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const uploadTestQuestion = createAsyncThunk(
  "skillSlice/uploadTestQuestion",
  async (data, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_LOAD_QUESTION}`;     
      const res = await AxiosPostService(url, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);


export const downloadTestResult = createAsyncThunk(
  "skillSlice/downloadTestResult",
  async (data, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_DOWNLOAD_SKILL}${data}/`;     
      const res = await AxiosGetService(url);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);
const skillSlice = createSlice({
  name: "skillSlice",
  initialState,
  reducers: {
    toggleSkillFilter(state, action) {
      state.skillFilter = action.payload;
    },
    // FORM_INPUTS.staff_skill_list
    resetStaffSkill(state, action) {
      state.staff_skill_list = FORM_INPUTS.staff_skill_list;
    },
    // staff_talent_list: FORM_INPUTS.staff_talent_list,

    resetStaffTalents(state, action) {
      state.staff_talent_list = FORM_INPUTS.staff_talent_list;
    },
    handleOnChangeTextInput: (state, action) => {
      //handle on change of textInput
      const { RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "gorilla_result":
          // console.log(action.payload)
          state.talent_search_skill_form[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleOnChangeFileInput: (state, action) => {
      const { RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "gorilla_result":
          // console.log(action.payload)
          state.staff_upload_gorilla_result[RowKey]["children"][
            ChildKey
          ].value = valueToUpdate;
          return state;

        case "skill_question":
          // console.log(action.payload)
          state.staff_upload_questions[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleOnSelectInput: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      //handle on change of textInput
      switch (action.payload.state) {
        case "skill":
          // console.log(action.payload);
          state.staff_upload_questions[RowKey]["children"][
            ChildKey
          ].value = valueToUpdate;
          return state;
        case "talent":
            // console.log(action.payload);
            state.staff_talent_list[RowKey]["children"][
              ChildKey
            ].value = valueToUpdate;
            return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getSkills.pending, (state) => {
      state.skillsState.loading = true;
      state.skillsState.error = "";
    });

    builder.addCase(getSkills.fulfilled, (state, action) => {
      state.skillsState.loading = false;
      state.skillsState.data.results = action.payload;
      state.skillsState.error = "";
    });

    builder.addCase(getSkills.rejected, (state, action) => {
      state.skillsState.loading = false;
      state.skillsState.error = action.error.message;
    });

    // Get technical skills

    builder.addCase(getTechnicalSkills.pending, (state) => {
      state.technicalSkillsState.loading = true;
      state.technicalSkillsState.error = "";
    });

    builder.addCase(getTechnicalSkills.fulfilled, (state, action) => {
      state.technicalSkillsState.loading = false;
      state.technicalSkillsState.data.results = action.payload;
      state.technicalSkillsState.error = "";
    });

    builder.addCase(getTechnicalSkills.rejected, (state, action) => {
      state.technicalSkillsState.loading = false;
      state.technicalSkillsState.error = action.error.message;
    });

    // Get skill by id

    builder.addCase(getSkillByID.pending, (state) => {
      state.skillByIDState.loading = true;
      state.skillByIDState.error = "";
    });

    builder.addCase(getSkillByID.fulfilled, (state, action) => {
      state.skillByIDState.loading = false;
      state.skillByIDState.data = action.payload;
      state.skillByIDState.error = "";
    });

    builder.addCase(getSkillByID.rejected, (state, action) => {
      state.skillByIDState.loading = false;
      state.skillByIDState.error = action.error.message;
    });

    // UPLOAD TEXTGORILLA TEST
    builder.addCase(uploadTestGorillaTest.pending, (state) => {
      state.testGorillaState.loading = true;
      state.testGorillaState.error = "";
    });

    builder.addCase(uploadTestGorillaTest.fulfilled, (state, action) => {
      state.testGorillaState.loading = false;
      state.testGorillaState.data = action.payload;
      state.testGorillaState.error = "";
    });

    builder.addCase(uploadTestGorillaTest.rejected, (state, action) => {
      state.testGorillaState.loading = false;
      state.testGorillaState.error = action.error.message;
    });
    // END

     // UPLOAD  TEST QUESTION
     builder.addCase(uploadTestQuestion.pending, (state) => {
      state.TestQuestionState.loading = true;
      state.TestQuestionState.error = "";
    });

    builder.addCase(uploadTestQuestion.fulfilled, (state, action) => {
      state.TestQuestionState.loading = false;
      state.TestQuestionState.data = action.payload;
      state.TestQuestionState.error = "";
    });

    builder.addCase(uploadTestQuestion.rejected, (state, action) => {
      state.TestQuestionState.loading = false;
      state.TestQuestionState.error = action.error.message;
    });

    builder.addCase(downloadTestResult.fulfilled, (state, action) => {
      
    });
    // END
  },
});

export const {
  toggleSkillFilter,
  handleOnChangeTextInput,
  handleOnChangeFileInput,
  handleOnSelectInput,resetStaffSkill,resetStaffTalents
} = skillSlice.actions;

export default skillSlice.reducer;
