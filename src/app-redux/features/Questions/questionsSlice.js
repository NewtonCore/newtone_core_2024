import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AxiosGetService,
  AxiosPostService,
} from "../../../constants/AxiosServices";
import {
  combineTwoFormData,
  convertSolutionsToFormData,
  JsonToformData,
} from "../../../constants/utils";
import { logOutUser } from "../Auth/authSlice";
import { FORM_INPUTS } from "../../../constants/FormInputs";

const questionsState = {
  loading: null,
  data: [],
  error: "",
};

const talentRecordSkillState = {
  loading: null,
  data: [],
  error: "",
};

const talentReportQuestionState = {
  loading: null,
  data: [],
  error: "",
};

const postMyAnswersState = {
  loading: null,
  data: [],
  error: "",
  success: null,
};

const initialState = {
  questionSize: 50,
  questionsState,
  postMyAnswersState,
  currentQuestion: 0,
  questionsAnswered: [],
  currentQuestionID: "default",
  question_solution_answer: [],
  showRecordingModal: null,
  isRecording: null,
  recordBlog: "",
  tabHasChanged: null,
  testTerminated: null,
  talentRecordSkillState,
  showConfirmFinishTest: null,
  hasStartedTest: null,
  startTestModal: null,
  app_timer: "00:00:00",
  apply_form: FORM_INPUTS.talent_apply_job,
  report_form: FORM_INPUTS.talent_report_test,
  talentReportQuestionState,
  showReportQuestionModal: null,
};

export const getQuestions = createAsyncThunk(
  "questionSlice/getQuestions",
  async (data) => {
    if (data !== undefined) {
      let { skill_id } = data;
      let url = `${process.env.REACT_APP_QUESTION_API}?skill_id=${skill_id}&size=${initialState.questionSize}`;
      const res = await AxiosGetService(url);
      return res.data;
    } else {
      let url = `${process.env.REACT_APP_QUESTION_API}`;
      const res = await AxiosGetService(url);
      return res.data;
    }
  }
);

export const PostMyAnswers = createAsyncThunk(
  "questionSlice/PostMyAnswers",
  async (dataPassed) => {
    let { skill, quest_solutions } = dataPassed;

    quest_solutions = convertSolutionsToFormData(quest_solutions);
    let skill_form_data = JsonToformData({ skill: skill });
    let data_to_post = combineTwoFormData(skill_form_data, quest_solutions);

    let url = `${process.env.REACT_APP_TALENT_RESPONSES}`;
    const res = await AxiosPostService(url, data_to_post);
    return res.data;
  }
);

export const TalentRecordSkill = createAsyncThunk(
  "questionSlice/TalentRecordSkill",
  async ({ data }) => {
    let url = `${process.env.REACT_APP_TALENT_RECORD_SKILL}`;
    const res = await AxiosPostService(url, data);
    return res.data;
  }
);


export const TalentReportQuestion = createAsyncThunk(
  "questionSlice/TalentReportQuestion",
  async ({ data }) => {
    let url = `${process.env.REACT_APP_REPORT_QUESTION}`;
    const res = await AxiosPostService(url, data);
    return res.data;
  }
);

const questionSlice = createSlice({
  name: "questionSlice",
  initialState,
  reducers: {
    handleOnChangeTextInput_Question_Slice: (state, action) => {
      //handle on change of textInput
      const { RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "report_question":
          // console.log(action.payload)
          state.report_form[RowKey]["children"][ChildKey].value = valueToUpdate;
          return state;
      }
    },
    toggleTimer: (state, action) => {
      state.app_timer = action.payload;
    },

    toggleStartedTestModal: (state, action) => {
      if (action.payload !== undefined) {
        state.startTestModal = action.payload;
      } else {
        state.startTestModal = !state.startTestModal;
      }
    },

    toggleHasStartedTest: (state, action) => {
      if (action.payload !== undefined) {
        state.hasStartedTest = action.payload;
      } else {
        state.hasStartedTest = !state.hasStartedTest;
      }
    },
    toggleTabHasChanged: (state, action) => {
      if (action.payload !== undefined) {
        state.tabHasChanged = action.payload;
      } else {
        state.tabHasChanged = !state.tabHasChanged;
      }
    },

    togglOpenReportModal: (state, action) => {
      state.report_form = FORM_INPUTS.talent_report_test
      if (action.payload !== undefined) {
        state.showReportQuestionModal = action.payload;
      } else {
        state.showReportQuestionModal = !state.tabHasChanged;
      }
    },

    toggleTestTerminated: (state, action) => {
      state.testTerminated = true;
    },

    toggleFinishTest: (state, action) => {
      if (action.payload !== undefined) {
        state.showConfirmFinishTest = action.payload;
      } else {
        state.showConfirmFinishTest = !state.showConfirmFinishTest;
      }
    },

    updateCurrentQuestionID: (state, action) => {
      state.currentQuestionID = action.payload;
    },

    toggleNextQuestion: (state, action) => {
      if (action.payload === undefined) {
        state.currentQuestion = state.currentQuestion + 1;
        // ...moreColors.filter(c => !colors.includes(c))
        if (!state.questionsAnswered.includes(state.currentQuestion)) {
          state.questionsAnswered = [
            ...state.questionsAnswered,
            state.currentQuestion,
          ];
        }
      } else {
        // console.log(action.payload);

        state.currentQuestion = parseInt(action.payload) - 1;
      }
    },

    togglePreviousQuestion: (state) => {
      state.currentQuestion = state.currentQuestion - 1;
    },

    resetQuestion: (state) => {
      state.postMyAnswersState = postMyAnswersState;
      state.currentQuestion = 0;
    },

    ResetQuestionSolution: (state) => {
      state.question_solution_answer = [];
    },

    loadQuestionSolution: (state, action) => {
      if (
        state.question_solution_answer.length === 0 &&
        state.question_solution_answer !== false
      ) {
        state.question_solution_answer = action.payload;
      } else {
        // console.log(action.payload);
      }
    },

    selectAnswer: (state, action) => {
      // console.log({ action });

      // state.questionsState = state.questionsState.data.results.map((quest)=>
      //   parseInt(quest.id) ===  parseInt(action.payload.q).proposal_solutions[solIndex] =
      // )

      return {
        ...state,
        question_solution_answer: state.question_solution_answer.map(
          (content) =>
            parseInt(content.id) === parseInt(action.payload.q)
              ? {
                  // console.log(content)
                  ...content,
                  selectedAnswer: action.payload.s,
                }
              : content
        ),
      };
    },

    toggleShowRecordingModal: (state, action) => {
      if (action.payload === true) {
        state.showRecordingModal = true;
      } else if (action.payload === false) {
        state.showRecordingModal = false;
      } else {
        state.showRecordingModal = !state.showRecordingModal;
      }
    },

    toggleIsRecording: (state) => {
      state.isRecording = !state.isRecording;
    },

    setRecordBlob: (state, action) => {
      state.recordBlog = action.payload.blob;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getQuestions.pending, (state) => {
      state.questionsState.loading = true;
      state.questionsState.error = "";
    });

    builder.addCase(getQuestions.fulfilled, (state, action) => {
      state.questionsState.loading = false;
      state.questionsState.data = action.payload;
      state.questionsState.error = "";
    });

    builder.addCase(getQuestions.rejected, (state, action) => {
      state.questionsState.loading = false;
      state.questionsState.error = action.error.message;
    });

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.questionsState = questionsState;
      state.postMyAnswersState = postMyAnswersState;
    });

    builder.addCase(PostMyAnswers.pending, (state) => {
      state.postMyAnswersState.loading = true;
      state.postMyAnswersState.error = "";
    });

    builder.addCase(PostMyAnswers.fulfilled, (state, action) => {
      state.postMyAnswersState.loading = false;
      state.postMyAnswersState.data = action.payload;
      state.postMyAnswersState.error = "";
      state.postMyAnswersState.success = true;
    });

    builder.addCase(PostMyAnswers.rejected, (state, action) => {
      state.postMyAnswersState.loading = false;
      state.postMyAnswersState.error = action.error.message;
      state.postMyAnswersState.success = null;
    });

    // talent record skill

    builder.addCase(TalentRecordSkill.pending, (state) => {
      state.talentRecordSkillState.loading = true;
      state.talentRecordSkillState.error = "";
    });

    builder.addCase(TalentRecordSkill.fulfilled, (state, action) => {
      state.talentRecordSkillState.loading = false;
      state.talentRecordSkillState.data = action.payload;
      state.talentRecordSkillState.error = "";
    });

    builder.addCase(TalentRecordSkill.rejected, (state, action) => {
      state.talentRecordSkillState.loading = false;
      state.talentRecordSkillState.error = action.error.message;
    });
    // end talent record skill

    // report question


    builder.addCase(TalentReportQuestion.pending, (state) => {
      state.talentReportQuestionState.loading = true;
      state.talentReportQuestionState.error = "";
    });

    builder.addCase(TalentReportQuestion.fulfilled, (state, action) => {
      state.talentReportQuestionState.loading = false;
      state.talentReportQuestionState.data = action.payload;
      state.talentReportQuestionState.error = "";
    });

    builder.addCase(TalentReportQuestion.rejected, (state, action) => {
      state.talentReportQuestionState.loading = false;
      state.talentReportQuestionState.error = action.error.message;
    });
    // end report question
  },
});

export const {
  toggleNextQuestion,
  togglePreviousQuestion,
  resetQuestion,
  loadQuestionSolution,
  selectAnswer,
  updateCurrentQuestionID,
  toggleShowRecordingModal,
  toggleIsRecording,
  setRecordBlob,
  ResetQuestionSolution,
  toggleTabHasChanged,
  toggleTestTerminated,
  toggleFinishTest,
  toggleTimer,
  toggleHasStartedTest,
  toggleStartedTestModal,
  togglOpenReportModal,
  handleOnChangeTextInput_Question_Slice
} = questionSlice.actions;

export default questionSlice.reducer;
