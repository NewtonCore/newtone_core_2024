import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  AxiosDeleteService,
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
} from "../../../constants/AxiosServices";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import {
  CheckEndDateLessThanStart2,
  CheckMinMaxSalaryError,
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../constants/utils";
import validate from "validate.js";
import { logOutUser } from "../Auth/authSlice";

const schema = {
  // meeting_link: {
  //   presence: { allowEmpty: false },
  //   url: true,
  // },
  date: {
    presence: { allowEmpty: false, message: "is required" },
  },
  start_time: {
    presence: { allowEmpty: false, message: "is required" },
    length: {
      is: 5,
    },
  },
  time_zone: {
    presence: { allowEmpty: false, message: "is required" },
  },
};
const schema_2 = {
  message: {
    presence: { allowEmpty: false, message: "is required" },
  },
};

export const handleValidateStartEndDates = createAsyncThunk(
  "jobCompany/handleValidateStartEndDates",
  async (data) => {
    return data;
  }
);

export const handleValidateMinMaxSalary = createAsyncThunk(
  "jobCompany/handleValidateMinMaxSalary",
  async (data) => {
    return data;
  }
);

export const getJobByCompany = createAsyncThunk(
  "jobCompany/getJobByCompany",
  async (data) => {
    let ordering = "created_at";
    let url = process.env.REACT_APP_MY_COMPANY_JOB;
    // console.log(data)

    if (data !== undefined) {
      if (data.pageURL !== undefined) {
        url = data.pageURL;
      }

      if (data.ordering !== undefined) {
        ordering = data.ordering;
        url = `${url}?ordering=${ordering}`;
      }
    }

    // console.log({url})

    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const getAllJobCompany = createAsyncThunk(
  "jobCompany/getCompanyJobCompany",
  async ({ data = undefined, pageURL = undefined }) => {
    let ordering = "-created_at";

    // console.log({data})
    let url = `${process.env.REACT_APP_CREATE_JOB}?ordering=${ordering}`;

    if (pageURL !== undefined) {
      url = pageURL;

      if (process.env.NODE_ENV === "production") {
        url = url.replace(":8000", "");
      }
    } else {
      if (data !== undefined) {
        url = `${url}&experienceskills__skill__name=${data}&status=progress`;
      }
      if (data === "All") {
        url = `${process.env.REACT_APP_CREATE_JOB}?ordering=${ordering}&status=progress`;
      }
    }

    // url = `${url}?ordering=${ordering}`;

    let res = await AxiosGetService(url, true);
    return res.data;
  }
);

export const getJobCompanyDetails = createAsyncThunk(
  "jobCompany/getJobCompanyDetails",
  async (dataPassed, { rejectWithValue }) => {
    try {
      // data is the job ID,
      // isAppliedTalentURL checks to see if the the request is either appliedtalent url or joburl
      let { jobID, isAppliedTalentURL = false } = dataPassed;
      let url = `${process.env.REACT_APP_CREATE_JOB}${jobID}`;
      let res;

      if (isAppliedTalentURL) {
        url = `${process.env.REACT_APP_APPLIED_TALENT}${jobID}`;
        res = await AxiosGetService(url);
      } else {
        res = await AxiosGetService(url, true);
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getSimilarJobs = createAsyncThunk(
  "jobCompany/getSimilarJobs",
  async (jobID) => {
    // data is the job id
    let url = `${process.env.REACT_APP_RELATED_JOB}${jobID}?status=progress`;
    let res = await AxiosGetService(url, true);

    return res.data;
  }
);

export const getTalentsRecommenedForJob = createAsyncThunk(
  "jobCompany/getTalentsRecommenedForJob",
  async (jobID) => {
    // data is the job id
    let url = `${process.env.REACT_APP_COMAPANY_TALENT_RECOMMENED}${jobID}`;
    let res = await AxiosGetService(url);

    return res.data;
  }
);

export const getMySavedProfiles = createAsyncThunk(
  "jobCompany/getMySavedProfiles",
  async (data) => {
    // let url = `${process.env.REACT_APP_APPLIED_TALENT}?status=offered`;
    let url = `${process.env.REACT_APP_MY_SAVED_PROFILES}`;

    if (data !== undefined) {
      let { pageURL } = data;
      if (pageURL !== undefined) {
        url = pageURL;
      }
    }

    let res = await AxiosGetService(url);

    return res.data;
  }
);

export const getCompanyProfileDetails = createAsyncThunk(
  "jobCompany/getCompanyProfileDetails",
  async (companyID) => {
    // console.log({data})
    let url = `${process.env.REACT_APP_COMPANY_PROFILE}${companyID}`;
    // console.log({url})

    let res = await AxiosGetService(url, true);
    return res.data;
  }
);

export const getTalentsWhichHired = createAsyncThunk(
  "jobCompany/getTalentsWhichHired",
  async (data) => {
    let url = `${process.env.REACT_APP_MY_APPLIED_TALENT}?status=offered`;

    if (data !== undefined) {
      let { pageURL } = data;
      if (pageURL !== undefined) {
        url = pageURL;
      }
    }
    // console.log(url);
    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const getTalentsWhichAppliedForJob = createAsyncThunk(
  "jobCompany/getTalentsWhichAppliedForJob",
  async (jobID) => {
    let url = `${process.env.REACT_APP_TALENT_WHICH_APPLIED_JOB}?company_job_id=${jobID}`;
    // console.log(url);
    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const getTalentsAppliedForJob_For_Updates = createAsyncThunk(
  "jobCompany/getTalentsAppliedForJob_For_Updates",
  async (jobID) => {
    let url = `${process.env.REACT_APP_MY_APPLIED_TALENT}`;
    // console.log(url);
    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const getAppliedTalent = createAsyncThunk(
  "jobCompany/getAppliedTalent",
  async (data) => {
    let url = `${process.env.REACT_APP_JOB_APPLIED_BY_TALENT}`;

    if (data !== undefined) {
      let { pageURL } = data;
      if (pageURL !== undefined) {
        url = pageURL;
      }
    }

    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const deleteCompanyJob = createAsyncThunk(
  "jobCompany/deleteCompanyJob",
  async (jobID) => {
    let url = `${process.env.REACT_APP_CREATE_JOB}${jobID}`;
    let res = await AxiosDeleteService(url);
    return res.data;
  }
);

export const rejectApplication = createAsyncThunk(
  "jobCompany/rejectApplication",
  async ({ data }, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_COMPANY_REJECT_TALENT}`;
      // console.log(data, 'in reject', url)
      let res = await AxiosPostService(url, data);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const PostjobExperienceSkills = createAsyncThunk(
  "jobCompany/PostjobExperienceSkills",
  async (dataPassed, { rejectWithValue }) => {
    let { data } = dataPassed;
    let _data = ExtractFieldsFromFormData(data);

    try {
      let url = `${process.env.REACT_APP_EXPERIENCE_SKILL}`;
      let res = await AxiosPostService(url, JsonToformData(_data));

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const PostCompanyJob = createAsyncThunk(
  "jobCompany/PostCompanyJob",
  async (dataPassed, { rejectWithValue }) => {
    let { data, isEdit } = dataPassed;
    try {
      let url = `${process.env.REACT_APP_CREATE_JOB}`;
      let res = null;
      if (isEdit) {
        let { id } = dataPassed;
        url = `${url}${id}/`;
        res = await AxiosPutService(url, data);
      } else {
        res = await AxiosPostService(url, data);
      }

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const PostOfferJobNotification = createAsyncThunk(
  "jobCompany/PostOfferJobNotification",
  async (dataPassed, { rejectWithValue }) => {
    // return res.data;
    let { data } = dataPassed;

    try {
      let url = `${process.env.REACT_APP_COMPANY_ACCEPTANCE_NOTIFICATION}`;
      let res = await AxiosPostService(url, data);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const GetTalentApplication = createAsyncThunk(
  "jobCompany/GetTalentApplication",
  async ({ data }) => {
    let url = `${process.env.REACT_APP_TALENT_APPLYING_TO_A_JOB}`;
    url = url + data.apply_talent;

    let res = await AxiosGetService(url);

    return res.data;
  }
);

export const GetSchedulingInterview = createAsyncThunk(
  "jobCompany/GetSchedulingInterview",
  async ({ data }) => {
    let url = `${process.env.REACT_APP_COMPANY_SCHEDULE_INTERVIEW_TALENT}`;
    url = url + data.apply_talent + "/" + data.talentId + "/";

    let res = await AxiosGetService(url);

    return res.data;
  }
);

export const PostScheduleInterview = createAsyncThunk(
  "jobCompany/PostScheduleInterview",
  async ({ data }) => {
    let url = `${process.env.REACT_APP_COMPANY_SCHEDULE_INTERVIEW_TALENT}`;
    // console.log(url, data);
    let res = await AxiosPostService(url, data);

    return res.data;
  }
);

export const PutScheduleInterview = createAsyncThunk(
  "jobCompany/PutScheduleInterview",
  async (dataPassed, { rejectWithValue }) => {
    try {
      let { data } = dataPassed;

      let url = `${process.env.REACT_APP_COMPANY_SCHEDULE_INTERVIEW_TALENT}`;
      url = url + data.id + "/";
      let res = await AxiosPutService(url, data);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const PostPaymentTransaction = createAsyncThunk(
  "jobCompany/PostPaymentTransaction",
  async ({ data }, { rejectWithValue }) => {
    try {
      let url = `${process.env.REACT_APP_COMPANY_PAYMENT_OF_TALENT}`;

      // console.log(url, data);
      let res = await AxiosPostService(url, data);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const DeleteSkill = createAsyncThunk(
  "jobCompany/DeleteSkill",
  async ({ id }) => {
    // const res = await AxiosDeleteService(
    //   `${process.env.REACT_APP_EXPERIENCE_SKILL}${id}/`
    // );

    return true;
  }
);

export const talentConfirmJobOffer = createAsyncThunk(
  "jobCompany/talentConfirmJobOffer",
  async (dataPassed, { rejectWithValue }) => {
    let { data } = dataPassed;

    try {
      let url = `${process.env.REACT_APP_TALENT_JOB_ANSWER}`;
      let res = await AxiosPostService(url, data);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const GetMyPaymentForTalent = createAsyncThunk(
  "jobCompany/GetMyPaymentForTalent",
  async (data) => {
    let url = `${process.env.REACT_APP_COMPANY_MY_PAYMENT_OF_TALENT}`;

    let res = await AxiosGetService(url);

    return res.data;
  }
);

export const SaveTalentProfile = createAsyncThunk(
  "jobCompany/SaveTalentProfile",
  async (dataPassed, { rejectWithValue }) => {
    // let { data } = dataPassed;

    try {
      let url = `${process.env.REACT_APP_SAVE_PROFILE}`;
      let res = await AxiosPostService(url, dataPassed);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const DeleteSavedTalentProfile = createAsyncThunk(
  "jobCompany/DeleteSavedTalentProfile",
  async (savedID, { rejectWithValue }) => {
    // let { data } = dataPassed;

    try {
      let url = `${process.env.REACT_APP_SAVE_PROFILE}`;
      let res = await AxiosDeleteService(`${url}${savedID}`);

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

let talentJobAnswer = {
  loading: null,
  data: [],
  error: "",
};

const jobByCompany = {
  loading: null,
  data: [],
  error: "",
};

const rejectApplicationState = {
  loading: null,
  data: [],
  error: "",
};

const talentsWhichAppliedJob = {
  loading: null,
  data: [],
  error: "",
};

const talentsWhichAppliedJob_For_Updates = {
  loading: null,
  data: [],
  error: "",
};

const talentsOfferedJob = {
  loading: null,
  data: [],
  error: "",
};
const similarJobs = {
  loading: null,
  data: [],
  error: "",
};

const allCompanyJobs = {
  loading: null,
  data: [],
  error: "",
};

const jobDetails = {
  loading: true,
  data: [],
  error: "",
};

const companyProfileDetails = {
  loading: null,
  data: [],
  error: "",
};

const companyJobDetails = {};

const deleteCompanyState = {
  loading: null,
  data: [],
  error: "",
};

const companyJobDetail = {
  loading: null,
  data: [],
  error: "",
};

const postJobExpState = {
  loading: null,
  data: [],
  error: "",
};

const postCompanyJobState = {
  loading: null,
  data: [],
  error: "",
};

let scheduleInterviewState = {
  loading: null,
  isValid: false,
  data: [],
  error: "",
};

let talentsRecommendedJob = {
  loading: null,
  data: [],
  error: "",
};

let schedulingInterviewData = {
  message: "",
  date: "",
  start_time: "",
  // meeting_link: "",
  time_zone: "Africa/Lagos",
  time_duration: 30,
  id: null,
};
let offer_message_back_up = `Dear unknown_1,\n
  We are excited to extend an offer of employment for the role of unknown_2 at unknown_3, with an anticipated start date of unknown_4.\n
  The starting salary for this position is unknown_5 per [hour or year]. Payment occurs on a [weekly, biweekly, monthly, etc.] basis, starting on [date of first pay period], and is issued via [check, direct deposit, etc.].\n
  In addition, you will be eligible for the following benefits: [insurance, paid time off, mileage reimbursement, etc.]. More details about these benefits will be addressed by the Human Resources department during your onboarding process. \n
  The expectations of this position are :\n  unknown_6 .\nYou will be reporting to [supervisor name and title], who can be reached at [supervisor phone number or email address].\n
  Your employment with unknown_3 will be dependent on the following contingencies: [background check, drug screening, etc.].\n
  Please confirm your acceptance of the [role title] position, as well as all of the above terms and conditions, by signing this letter and returning it to [contact name] by [date].\n
  Sincerely,\n`;

let offer_message = `Dear unknown_1, \n
We are excited to extend an offer of employment for the role of unknown_2 at unknown_3, with an anticipated start date of unknown_4.\n
The starting salary for this position is unknown_5 per [hour or year]. Payment occurs on a [WEEKLY, BIWEEKLY, MONTLY, etc.] basis, starting on [DATE OF FIRST PAY PERIOD], and is issued via [CHECK, DIRECT DEPOSIT, ETC.].\n
In addition, you will be eligible for the following benefits: [insurance, paid time off, mileage reimbursement, etc.]. More details about these benefits will be addressed by the Human Resources department during your onboarding process.\n
You will be reporting to [SUPERVIOSR NAME AND TITLE], who can be reached at [SUPERVISOR PHONE NUMBER OR EMAIL ADDRESS].\n
Your employment with unknown_3 will be dependent on the following contingencies: [BACKGROUND CHECK, DRUG SCREENING, etc.].\n
Please confirm your acceptance of the [ROLE TITLE] position, as well as all of the above terms and conditions, by signing this letter and returning it to [CONTACT NAME] by [DATE].\n
Sincerely,\n`;

let reject_message = `Dear unknown_1, \n
We are sorry to inform you that you were not selected for the job: unknown_2, We highly encourage you
to apply for other opportunities.\n
We carefully reviewed a large number of applications; unfortunately, at this time we won’t be able to invite you to the next stage of the hiring process. Though your resume was impressive, we have decided to move forward with a candidate whose qualifications are better suited to this particular role.\n
However, we hope you’ll apply again in the future if you see a job opening more suited to your qualifications.\n
If you have any questions or need additional information, please don't hesitate to contact me by email at [EMAIL_ADDRESS] or phone: [PHONE NUMBER].\n
We wish you much success in your future endeavors.\n
Once again, thank you for your interest in working for our company.
Sincerely,\n

[YOUR FIRST AND LAST NAME]
[YOUR JOB TITLE OR POSITION]
`;

let offerJobData = {
  message: offer_message,
};

let offerJobState = {
  loading: null,
  isValid: false,
  data: [],
  error: "",
};
let rejectAppData = {
  message: reject_message,
};
let rejectAppState = {
  loading: null,
  isValid: false,
  data: [],
  error: "",
};
let talentApplication = null;

let deleteSkillState = {
  loading: null,
  data: [],
  error: "",
};

let myPaymentForTalentState = {
  loading: null,
  data: [],
  error: "",
};

let mySavedProfiles = {
  loading: null,
  data: [],
  error: "",
};

let saveTalentProfileState = {
  loading: null,
  data: [],
  error: "",
};

const jobCompanySlice = createSlice({
  name: "jobCompany",
  initialState: {
    saveTalentProfileState,
    mySavedProfiles,
    jobByCompany,
    allCompanyJobs,
    jobDetails,
    similarJobs,
    companyProfileDetails,
    company_job_array: FORM_INPUTS.company_post_job,
    company_offer_job: FORM_INPUTS.company_offer_job,
    company_reject_application: FORM_INPUTS.company_reject_application,
    company_schedule_interview_form:
      FORM_INPUTS.company_schedule_interview_form,
    search_job_form: FORM_INPUTS.find_job_skill_search,
    job_ordering_form: FORM_INPUTS.job_ordering_form,
    talentsWhichAppliedJob,
    companyJobDetails,
    companyJobDetail,
    showDeleteCompanyModal: null,
    showRejectApplicationModal: null,
    showSheduleInterviewModal: null,
    showSaveTalentModal: null,
    showOfferJobModal: null,
    deleteCompanyState,
    rejectApplicationState,
    jobApplicationObject: {},
    experienceSkills: [],
    postJobExpState,
    postCompanyJobState,
    skill_array: [FORM_INPUTS.EDIT_PROFILE.skill],
    showPublishJobModal: null,
    showPublishJobSuccessModal: null,
    schedulingInterviewData,
    scheduleInterviewState,
    offerJobData,
    offerJobState,
    talentApplication,
    search_job_keywork: undefined,
    showDatePickerModal: null,
    talentsOfferedJob,
    job_ordering: undefined,
    rejectAppState,
    rejectAppData,
    showSubScriptionModal: null,
    talentToBeSubscriibed: null,
    paymentDone: false,
    showEditJobForm: null,
    jobObject: null,
    talentsRecommendedJob,
    showDeleteSkillModal: null,
    showEditSkillModal: null,
    skillObject: {},
    deleteSkillState,
    showPayForTalentModal: null,
    showPaymentGatewaysModal: false,
    talentJobAnswer,
    myPaymentForTalentState,
    showJobOfferedModal: false,
    applyingTalentData: [{ id: "aa" }],
    showTalentApplicationHistory: false,
    talentsWhichAppliedJob_For_Updates,
    loadingAppliedTalent: null,

    showDeleteSavedTalentModal: null,
    savedTalentObject: {},
  },
  reducers: {
    resetJobDetails: (state) => {
      state.jobDetails = {
        loading: true,
        data: [],
        error: "",
      };
    },

    resetTalentsRecommended: (state) => {
      state.talentsRecommendedJob = talentsRecommendedJob;
      state.talentsWhichAppliedJob = talentsWhichAppliedJob;
    },

    handleValidateJobForm: (state) => {
      state.company_job_array[0] = state.company_job_array[0].map((data1) => {
        return {
          ...data1, // make a copy of the bio_data_array before manipulating it
          children: data1.children.map((d2) => {
            let value = d2.value;
            let isRequired = d2.isRequired;

            // console.log(typeof(value))

            value =
              typeof d2.value === "string" &&
              isRequired &&
              value.toString().replace(/\s+/g, " ");

            return {
              ...d2, // make a copy of the children
              // change the hasError property if isReuired is true and value is empty
              hasError:
                (typeof d2.value === "string" && isRequired && value === "") ||
                value === " "
                  ? true
                  : false,
              errorMessage:
                (typeof d2.value === "string" && isRequired && value === "") ||
                value === " "
                  ? "This field is required"
                  : "",
            };
          }),
        };
      });
    },

    handleTextInputCheckEmptyValueFn: (state, action) => {
      //handle on change of textInput

      // console.log(action.payload)
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is job_data
        case "job_data":
          // console.log(action.payload)
          let jobValue =
            state.company_job_array[RowKey]["children"][ChildKey].value;
          let jobIsRequired =
            state.company_job_array[RowKey]["children"][ChildKey].isRequired;
          // console.log({jobValue})
          if (typeof jobValue === "string") {
            jobValue = jobValue.replace(/\s+/g, " ");
          }

          if (
            (jobIsRequired && jobValue === " ") ||
            (jobIsRequired && jobValue === "")
          ) {
            state.company_job_array[RowKey]["children"][
              ChildKey
            ].hasError = true;
            state.company_job_array[RowKey]["children"][ChildKey].errorMessage =
              "This field is required";
          } else {
            state.company_job_array[RowKey]["children"][
              ChildKey
            ].hasError = false;
            state.company_job_array[RowKey]["children"][ChildKey].errorMessage =
              "";
          }

          return state;
      }
    },

    toggleShowJobOfferedModal: (state, action) => {
      if (action !== undefined) {
        state.showJobOfferedModal = action.payload;
      } else {
        state.showJobOfferedModal = !state.showJobOfferedModal;
      }
    },

    deleteSavedProfileFromState: (state, action) => {
      state.mySavedProfiles.data.results =
        state.mySavedProfiles.data.results.filter((res) => {
          return res.id !== action.payload;
        });
    },

    resetJobForm: (state) => {
      state.company_job_array = FORM_INPUTS.company_post_job;
      state.experienceSkills = [];
    },

    toggleShowPayForTalent: (state) => {
      state.showPayForTalentModal = !state.showPayForTalentModal;
    },

    toggleDeleteSkill: (state, action) => {
      state.showDeleteSkillModal = !state.showDeleteSkillModal;

      if (action.payload !== undefined) {
        state.skillObject = JSON.parse(action.payload);
      } else {
        state.skillObject = {};
      }
    },

    toggleDeleteSavedTalent: (state, action) => {
      state.showDeleteSavedTalentModal = !state.showDeleteSavedTalentModal;

      if (action.payload !== undefined) {
        state.savedTalentObject = JSON.parse(action.payload);
      } else {
        state.savedTalentObject = {};
      }
    },

    toggleEditSkill: (state, action) => {
      state.showEditSkillModal = !state.showEditSkillModal;

      if (action.payload !== undefined) {
        state.skillObject = JSON.parse(action.payload);
      } else {
        state.skillObject = {};
        state.skill_array = [FORM_INPUTS.EDIT_PROFILE.skill];
      }
    },

    toggleEditFormJob: (state, action) => {
      // state.showEditJobForm = !state.showEditJobForm;

      if (action.payload !== undefined) {
        state.jobObject = JSON.parse(action.payload);
        state.company_job_array = FORM_INPUTS.company_post_job;
        state.showEditJobForm = true;
      } else {
        state.jobObject = null;
        state.company_job_array = FORM_INPUTS.company_post_job;
        state.showEditJobForm = false;
      }
    },

    preloadSkillData: (state, action) => {
      //preload the biodata with data from the talent
      // state.postEducationState.success = null;

      let { payload: Data } = action;
      // console.log(Data)
      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];

        // preload the value of the children in the state of the bio_data_array
        state.skill_array[0] = state.skill_array[0].map((data1) => {
          return {
            ...data1,
            children: data1.children.map((d2) => {
              return {
                ...d2,
                value:
                  d2.name === `${KeyName}`
                    ? Value !== "null" && Value !== null
                      ? Value
                      : d2["value"]
                    : d2["value"],
              };
            }),
          };
        });
      });
    },
    preloadJobData: (state, action) => {
      //preload the biodata with data from the talent

      let { payload: Data } = action;
      let { experienceskills } = Data;

      state.experienceSkills = experienceskills;
      // console.log(talentData)
      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];
        let ValueOfTypeVariable = "";
        let ValueOnSiteVariable = false;

        Value = Value === null ? "" : Value;
        // let ValueOnSiteVariable = "";

        // preload the value of the children in the state of the company_job_array
        state.company_job_array = state.company_job_array.map((data1) => {
          let index_of_desired_job_type = data1["children"].findIndex(
            (x) => x.name === "type"
          );

          let index_of_job_location = data1["children"].findIndex(
            (x) => x.name === "job_location"
          );

          let index_of_on_site = data1["children"].findIndex(
            (x) => x.name === "on_site"
          );

          if (index_of_desired_job_type >= 0) {
            ValueOfTypeVariable =
              data1.children[index_of_desired_job_type].value;
          }

          if (data1.name === "give_work_authorization") {
            // data1.hidden = false
          }

          // Work on this once database is rectified
          if (index_of_on_site >= 0) {
            // console.log(data1.children[index_of_on_site]);

            if (
              data1.children[index_of_on_site].value === "false" ||
              data1.children[index_of_on_site].value === false
            ) {
              ValueOnSiteVariable = false;
            } else if (
              data1.children[index_of_on_site].value === "true" ||
              data1.children[index_of_on_site].value === true
            ) {
              ValueOnSiteVariable = true;
            } else {
              ValueOnSiteVariable = data1.children[index_of_on_site].value;
            }
          }
          // console.log({ValueOnSiteVariable})

          return {
            ...data1,
            hidden:
              data1.name === "give_work_authorization" && !ValueOnSiteVariable,
            children: data1.children.map((d2) => {
              return {
                ...d2,
                hidden:
                  ValueOfTypeVariable === "contract" && d2.name === "duration"
                    ? false
                    : ValueOnSiteVariable &&
                      d2.name === "give_work_authorization"
                    ? false
                    : ValueOnSiteVariable && d2.name === "location"
                    ? false
                    : d2.hidden,
                isRequired:
                  ValueOfTypeVariable === "contract" && d2.name === "duration"
                    ? true
                    : d2["isRequired"],
                value:
                  d2.name === `${KeyName}`
                    ? Value !== "null" && Value !== null
                      ? Value === null
                        ? ""
                        : Value
                      : d2["value"]
                    : ValueOnSiteVariable && d2.name === "job_location"
                    ? "on site"
                    : !ValueOnSiteVariable && d2.name === "job_location"
                    ? "remote"
                    : (d2.name === "on_site") === "false"
                    ? "null"
                    : d2["value"],
              };
            }),
          };
        });
      });
    },
    toggleShowCompanyDeleteModal: (state, action) => {
      state.showDeleteCompanyModal = !state.showDeleteCompanyModal;

      if (state.showDeleteCompanyModal === true) {
        state.companyJobDetails = action.payload;
      } else {
        state.companyJobDetails = {};
      }
    },

    toggleShowTalentApplicationHistoryModal: (state, action) => {
      state.showTalentApplicationHistory = action.payload;
    },

    toggleShowPublishJobModalModal: (state, action) => {
      state.showPublishJobModal = !state.showPublishJobModal;
    },

    toggleShowPublishJobSuccessModalModal: (state, action) => {
      state.showPublishJobModal = false;
      state.showPublishJobSuccessModal = !state.showPublishJobSuccessModal;
    },

    togglePaymentGatewaysModal: (state, action) => {
      if (action !== undefined) {
        state.showPaymentGatewaysModal = true;
        state.talentToBeSubscriibed = action.payload;
      } else {
        state.showPaymentGatewaysModal = !state.showPaymentGatewaysModal;
      }
      state.paymentDone = false;
    },

    togglePayPalModal: (state, action) => {
      // console.log(action.payload, 'in the state')
      state.paymentDone = false;
      state.showSubScriptionModal = !state.showSubScriptionModal;
    },

    toggleShowRejectApplicationModal: (state, action) => {
      // console.log({ action }, 'action in reject toogle');
      state.showRejectApplicationModal = !state.showRejectApplicationModal;

      if (action.payload !== undefined) {
        state.jobApplicationObject = action.payload;
      } else {
        state.jobApplicationObject = {};
      }
    },

    toggleShowScheduleInterviewModal: (state, action) => {
      state.showSheduleInterviewModal = !state.showSheduleInterviewModal;
      // console.log( action.payload, 'action in schedule toogle');

      if (state.showSheduleInterviewModal === true) {
        // console.log('in action payload', action.payload)
        // if(action.payload){
        //   console.log('in action payload')
        // }
        state.jobApplicationObject = action.payload;
      } else {
        state.jobApplicationObject = {};
      }
    },

    toggleShowSaveModal: (state, action) => {
      state.showSaveTalentModal = !state.showSaveTalentModal;
      // console.log( action.payload, 'action in schedule toogle');

      if (state.showSaveTalentModal === true) {
        state.jobApplicationObject = action.payload;
      } else {
        state.jobApplicationObject = {};
      }
    },
    toggleShowOfferJobModal: (state, action) => {
      state.showOfferJobModal = !state.showOfferJobModal;
      // console.log(action)
      if (action.payload !== undefined) {
        state.jobApplicationObject = action.payload;
      } else {
        state.jobApplicationObject = {};
      }
    },
    handleOnChangeTextInput: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "job_data":
          // console.log(action.payload)
          state.company_job_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
        case "skill":
          // console.log(action.payload)
          state.skill_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleRadioChange: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "job_data":
          // console.log(action.payload)
          state.company_job_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleOnSelectInput: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      //handle on change of textInput
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "job_data":
          // console.log(action.payload)
          state.company_job_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;

          let index_of_desired_job_type = state.company_job_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "type");

          let index_of_duration = state.company_job_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "duration");

          // Change the month hidden property to false (Meaning it will be visible) and the is Required to true for validation
          state.company_job_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;

          // <0 means that the index was not found, >=0 means that the index was found
          if (index_of_desired_job_type >= 0) {
            if (
              state.company_job_array[RowKey]["children"][
                index_of_desired_job_type
              ].value === "contract"
            ) {
              state.company_job_array[RowKey]["children"][
                index_of_duration
              ].hidden = false;
              state.company_job_array[RowKey]["children"][
                index_of_duration
              ].isRequired = true;
            } else {
              state.company_job_array[RowKey]["children"][
                index_of_duration
              ].hidden = true;
              state.company_job_array[RowKey]["children"][
                index_of_duration
              ].isRequired = false;
              state.company_job_array[RowKey]["children"][
                index_of_duration
              ].value = "";
              state.company_job_array[RowKey]["children"][
                index_of_duration
              ].hasError = false;
            }
          }

          // handle job location onsite change

          let index_of_on_job_location = state.company_job_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "job_location");

          let index_of_on_site = state.company_job_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "on_site");

          let index_of_enter_location = state.company_job_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "location");

          let index_of_work_auth_row = state.company_job_array.findIndex(
            (x) => x.name === "give_work_authorization"
          );

          // let index_of_work_auth_false = state.company_job_array.findIndex((x) => x.name === "give_work_authorization");

          let index_of_work_auth_true_false = state.company_job_array[
            index_of_work_auth_row
          ]["children"].findIndex((x) => x.name === "give_work_authorization");
          // let index_of_work_auth_false = state.company_job_array[index_of_work_auth_row]["children"].findIndex((x) => x.label === "No");

          // console.log(state.company_job_array[index_of_work_auth_row])
          // <0 means that the index was not found, >=0 means that the index was found
          if (index_of_on_job_location >= 0) {
            // let index_of_work_auth_true_false = state.company_job_array[index_of_work_auth_row].findIndex((x) => x.name === "give_work_authorization");

            if (
              state.company_job_array[RowKey]["children"][
                index_of_on_job_location
              ].value === "on site"
            ) {
              state.company_job_array[RowKey]["children"][
                index_of_enter_location
              ].hidden = false;

              state.company_job_array[RowKey]["children"][
                index_of_enter_location
              ].isRequired = true;

              state.company_job_array[RowKey]["children"][
                index_of_on_site
              ].value = true;

              state.company_job_array[index_of_work_auth_row].hidden = false;

              state.company_job_array[index_of_work_auth_row]["children"][
                index_of_work_auth_true_false
              ].hidden = false;

              // state.company_job_array[index_of_work_auth_row]["children"][
              //   index_of_work_auth_false
              // ].hidden = false;
            } else {
              state.company_job_array[RowKey]["children"][
                index_of_enter_location
              ].hidden = true;
              state.company_job_array[RowKey]["children"][
                index_of_enter_location
              ].isRequired = false;
              state.company_job_array[RowKey]["children"][
                index_of_enter_location
              ].value = "";
              state.company_job_array[RowKey]["children"][
                index_of_enter_location
              ].hasError = false;

              // state.company_job_array[RowKey]["children"][
              //   index_of_on_site
              // ].value = false;

              state.company_job_array[index_of_work_auth_row].hidden = true;

              state.company_job_array[index_of_work_auth_row]["children"][
                index_of_work_auth_true_false
              ].hidden = true;
              // state.company_job_array[index_of_work_auth_row]["children"][
              //   index_of_work_auth_true
              // ].hidden = true;

              // state.company_job_array[index_of_work_auth_row]["children"][
              //   index_of_work_auth_false
              // ].hidden = true;

              // state.company_job_array["children"][
              //   index_of_work_auth_row
              // ].hidden = true;

              // state.company_job_array[index_of_work_auth_row]["children"][
              //   index_of_work_auth_true_false
              // ].hidden = true;
            }
          }

          return state;

        case "skill":
          // console.log(action.payload)
          state.skill_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;

        case "find_job_select_search":
          // console.log(action.payload)
          state.search_job_keywork = valueToUpdate;
          state.search_job_form[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
        case "job_sort_by_search":
          // console.log(action.payload)
          state.job_ordering = valueToUpdate;
          state.job_ordering_form[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },
    handleOnChangeFileInput: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      state.company_job_array[RowKey]["children"][ChildKey].value =
        valueToUpdate;
    },
    handleOnSelectScheduleInterview: (state, action) => {
      const { RowKey, ChildKey, valueToUpdate } = action.payload;
      // console.log(valueToUpdate)
      state.company_schedule_interview_form[RowKey]["children"][
        ChildKey
      ].value = valueToUpdate;
      let name =
        state.company_schedule_interview_form[RowKey]["children"][ChildKey]
          .name;
      state.schedulingInterviewData[name] = valueToUpdate;
      const errors = validate(state.schedulingInterviewData, schema);
      // // console.log(errors, state.schedulingInterviewData)
      state.scheduleInterviewState.isValid = errors ? false : true;
    },
    handleScheduleInterviewChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state
      let { name, value } = payload.payload;
      state.schedulingInterviewData[name] = value;

      const errors = validate(state.schedulingInterviewData, schema);
      // console.log(errors, state.schedulingInterviewData)
      state.scheduleInterviewState.isValid = errors ? false : true;

      return state;
    },
    handleRejectLetterChange: (state, payload) => {
      let { name, value } = payload.payload;
      state.rejectAppData[name] = value;
      const errors = validate(state.rejectAppData, schema_2);
      state.rejectAppState.isValid = errors ? false : true;
      return state;
    },
    handleOfferLetterChange: (state, payload) => {
      // Update the state according to the payload from the input field usually will receive the key and the value that
      // corresponds to the initial state
      let { name, value } = payload.payload;
      state.offerJobData[name] = value;

      const errors = validate(state.offerJobData, schema_2);
      // console.log(errors, state.schedulingInterviewData)
      state.offerJobState.isValid = errors ? false : true;

      return state;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(handleValidateStartEndDates.pending, (state) => {});

    builder.addCase(handleValidateStartEndDates.fulfilled, (state, action) => {
      state.company_job_array = state.company_job_array.map((data1) => {
        return {
          ...data1, // make a copy of the bio_data_array before manipulating it
          children: data1.children.map((d2) => {
            return {
              ...d2, // make a copy of the children
              // change the hasError property if isReuired is true and value is empty

              hasDateError:
                d2.name === "expiration_date" || d2.name === "start_date"
                  ? CheckEndDateLessThanStart2(
                      JSON.stringify(data1),
                      "expiration_date",
                      "start_date"
                    )
                    ? true
                    : false
                  : d2.hasDateError,
              dateErrorMessage:
                d2.name === "expiration_date" || d2.name === "start_date"
                  ? CheckEndDateLessThanStart2(
                      JSON.stringify(data1),
                      "expiration_date",
                      "start_date"
                    )
                    ? "The start date cannot be before the closing date"
                    : ""
                  : false,
            };
          }),
        };
      });
    });

    builder.addCase(
      handleValidateStartEndDates.rejected,
      (state, action) => {}
    );

    builder.addCase(handleValidateMinMaxSalary.fulfilled, (state, action) => {
      let msg = "Minimum salary should be less than maximum salary";
      state.company_job_array = state.company_job_array.map((data1) => {
        return {
          ...data1, // make a copy of the bio_data_array before manipulating it
          children: data1.children.map((d2) => {
            return {
              ...d2, // make a copy of the children
              // change the hasError property if isReuired is true and value is empty

              hasMinMaxError:
                d2.name === "min_salary"
                  ? CheckMinMaxSalaryError(
                      JSON.stringify(data1),
                      "min_salary",
                      "max_salary"
                    )
                    ? true
                    : false
                  : d2.name === "max_salary"
                  ? CheckMinMaxSalaryError(
                      JSON.stringify(data1),
                      "min_salary",
                      "max_salary"
                    )
                    ? true
                    : false
                  : d2.hasMinMaxError,

              errorMessage:
                d2.name === "min_salary"
                  ? CheckMinMaxSalaryError(
                      JSON.stringify(data1),
                      "min_salary",
                      "max_salary"
                    )
                    ? msg
                    : d2.errorMessage === msg
                    ? ""
                    : d2.errorMessage
                  : d2.name === "max_salary"
                  ? CheckMinMaxSalaryError(
                      JSON.stringify(data1),
                      "min_salary",
                      "max_salary"
                    )
                    ? msg
                    : d2.errorMessage === msg
                    ? ""
                    : d2.errorMessage
                  : d2.errorMessage,
            };
          }),
        };
      });
    });

    // clear state when uer logs out
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.jobByCompany = jobByCompany;
      state.allCompanyJobs = allCompanyJobs;
      state.jobDetails = jobDetails;
      state.similarJobs = similarJobs;
      state.companyProfileDetails = companyProfileDetails;
      state.talentsWhichAppliedJob = talentsWhichAppliedJob;
      state.talentsOfferedJob = talentsOfferedJob;
      state.companyJobDetails = companyJobDetails;
      state.companyJobDetail = companyJobDetail;
      state.postJobExpState = postJobExpState;
      state.postCompanyJobState = postCompanyJobState;
      state.schedulingInterviewData = schedulingInterviewData;
      state.scheduleInterviewState = scheduleInterviewState;
      state.offerJobData = offerJobData;
      state.offerJobState = offerJobState;
      state.talentApplication = talentApplication;
      state.talentsOfferedJob = talentsOfferedJob;
      state.rejectAppState = rejectAppState;
      state.rejectAppData = rejectAppData;
      state.experienceSkills = [];
      state.talentsWhichAppliedJob_For_Updates =
        talentsWhichAppliedJob_For_Updates;
      state.mySavedProfiles = mySavedProfiles;
    });

    builder.addCase(getJobByCompany.pending, (state, action) => {
      state.jobByCompany.loading = true;
    });
    builder.addCase(getJobByCompany.fulfilled, (state, action) => {
      state.jobByCompany.loading = false;
      state.jobByCompany.data = action.payload;
      state.jobByCompany.error = "";
    });

    builder.addCase(getJobByCompany.rejected, (state, action) => {
      state.jobByCompany.loading = false;
      state.jobByCompany.data = [];
    });

    builder.addCase(getAllJobCompany.pending, (state, action) => {
      state.allCompanyJobs.loading = true;

      if (state.allCompanyJobs.data.length === 0) {
        state.allCompanyJobs.data = [];
      }
    });
    builder.addCase(getAllJobCompany.fulfilled, (state, action) => {
      state.allCompanyJobs.loading = false;

      state.allCompanyJobs.data = action.payload;
    });

    builder.addCase(getAllJobCompany.rejected, (state, action) => {
      state.allCompanyJobs.loading = false;
      state.allCompanyJobs.data = [];
    });

    builder.addCase(getJobCompanyDetails.pending, (state, action) => {
      state.jobDetails.loading = true;
    });
    builder.addCase(getJobCompanyDetails.fulfilled, (state, action) => {
      state.jobDetails.loading = false;
      state.jobDetails.data = action.payload;
      state.jobDetails.error = "";
    });

    builder.addCase(getJobCompanyDetails.rejected, (state, action) => {
      state.jobDetails.loading = false;
      state.jobDetails.data = [];
    });

    builder.addCase(getCompanyProfileDetails.pending, (state, action) => {
      state.companyProfileDetails.loading = true;
    });
    builder.addCase(getCompanyProfileDetails.fulfilled, (state, action) => {
      state.companyProfileDetails.loading = false;
      state.companyProfileDetails.data = action.payload;
      state.companyProfileDetails.error = "";
    });

    builder.addCase(getCompanyProfileDetails.rejected, (state, action) => {
      state.companyProfileDetails.loading = false;
      state.companyProfileDetails.data = [];
    });

    builder.addCase(getSimilarJobs.pending, (state, action) => {
      state.similarJobs.loading = true;
    });
    builder.addCase(getSimilarJobs.fulfilled, (state, action) => {
      state.similarJobs.loading = false;
      state.similarJobs.data = action.payload;
      state.similarJobs.error = "";
    });

    builder.addCase(getSimilarJobs.rejected, (state, action) => {
      state.similarJobs.loading = false;
      state.similarJobs.data = [];
    });

    builder.addCase(getTalentsRecommenedForJob.pending, (state, action) => {
      state.talentsRecommendedJob.loading = true;
    });
    builder.addCase(getTalentsRecommenedForJob.fulfilled, (state, action) => {
      state.talentsRecommendedJob.loading = false;
      state.talentsRecommendedJob.data = action.payload;
      state.talentsRecommendedJob.error = "";
    });

    builder.addCase(getTalentsRecommenedForJob.rejected, (state, action) => {
      state.talentsRecommendedJob.loading = false;
      state.talentsRecommendedJob.data = [];
    });

    builder.addCase(getTalentsWhichAppliedForJob.pending, (state, action) => {
      state.talentsWhichAppliedJob.data = [];
      state.talentsWhichAppliedJob.loading = true;
    });
    builder.addCase(getTalentsWhichAppliedForJob.fulfilled, (state, action) => {
      state.talentsWhichAppliedJob.loading = false;
      state.talentsWhichAppliedJob.data = action.payload;

      state.talentsWhichAppliedJob.error = "";
    });

    builder.addCase(getTalentsWhichAppliedForJob.rejected, (state, action) => {
      state.talentsWhichAppliedJob.loading = false;
      state.talentsWhichAppliedJob.data = [];
    });

    // get applied talents for updates

    builder.addCase(
      getTalentsAppliedForJob_For_Updates.pending,
      (state, action) => {
        state.talentsWhichAppliedJob_For_Updates.data = [];
        state.talentsWhichAppliedJob_For_Updates.loading = true;
      }
    );
    builder.addCase(
      getTalentsAppliedForJob_For_Updates.fulfilled,
      (state, action) => {
        state.talentsWhichAppliedJob_For_Updates.loading = false;
        state.talentsWhichAppliedJob_For_Updates.data = action.payload;

        state.talentsWhichAppliedJob_For_Updates.error = "";
      }
    );

    builder.addCase(
      getTalentsAppliedForJob_For_Updates.rejected,
      (state, action) => {
        state.talentsWhichAppliedJob_For_Updates.loading = false;
        state.talentsWhichAppliedJob_For_Updates.data = [];
      }
    );
    // End

    builder.addCase(getTalentsWhichHired.pending, (state, action) => {
      state.talentsOfferedJob.loading = true;
    });
    builder.addCase(getTalentsWhichHired.fulfilled, (state, action) => {
      state.talentsOfferedJob.loading = false;
      state.talentsOfferedJob.data = action.payload;
      state.talentsOfferedJob.error = "";
    });

    builder.addCase(getTalentsWhichHired.rejected, (state, action) => {
      state.talentsOfferedJob.loading = false;
      state.talentsOfferedJob.data = [];
    });

    builder.addCase(getAppliedTalent.pending, (state, action) => {
      state.talentsWhichAppliedJob.loading = true;
    });
    builder.addCase(getAppliedTalent.fulfilled, (state, action) => {
      state.talentsWhichAppliedJob.loading = false;
      state.talentsWhichAppliedJob.data = action.payload;
      state.talentsWhichAppliedJob.error = "";
    });

    builder.addCase(getAppliedTalent.rejected, (state, action) => {
      state.talentsWhichAppliedJob.loading = false;
      state.talentsWhichAppliedJob.data = [];
    });

    builder.addCase(deleteCompanyJob.pending, (state, action) => {
      state.deleteCompanyState.loading = true;
    });
    builder.addCase(PostPaymentTransaction.fulfilled, (state, action) => {
      // console.log(action, 'for post transaction')
      var jobIndex = state.jobByCompany.data.results.findIndex(
        (item, i) => item.id == action.payload.id
      );
      state.paymentDone = true;
      toast.success(`Payment Done`, { autoClose: 2000 });
      if (jobIndex) {
        state.jobByCompany.data.results[jobIndex] = action.payload;
      }
      // console.log(state.jobByCompany)
    });

    builder.addCase(deleteCompanyJob.fulfilled, (state, action) => {
      state.deleteCompanyState.loading = false;
      state.deleteCompanyState.data = action.payload;
      state.deleteCompanyState.error = "";

      state.jobByCompany.data.results = state.jobByCompany.data.results.filter(
        (res) => {
          return res.id !== parseInt(action.meta.arg);
        }
      );

      state.showDeleteCompanyModal = false;
    });

    builder.addCase(deleteCompanyJob.rejected, (state, action) => {
      state.deleteCompanyState.loading = false;
      state.deleteCompanyState.data = [];
    });

    builder.addCase(rejectApplication.pending, (state, action) => {
      state.rejectApplicationState.loading = true;
      state.rejectApplicationState.data = [];
    });

    builder.addCase(rejectApplication.fulfilled, (state, action) => {
      state.rejectApplicationState.loading = false;
      state.rejectApplicationState.data = [];
    });

    builder.addCase(rejectApplication.rejected, (state, action) => {
      state.rejectApplicationState.loading = false;
      state.rejectApplicationState.data = [];
    });

    builder.addCase(PostjobExperienceSkills.pending, (state, action) => {
      state.postJobExpState.loading = true;
      state.postJobExpState.data = [];
    });

    builder.addCase(PostjobExperienceSkills.fulfilled, (state, action) => {
      state.skill_array = [];

      state.skill_array = [FORM_INPUTS.EDIT_PROFILE.skill];

      state.postJobExpState.loading = false;
      state.postJobExpState.data = action.payload;
      if (!state.experienceSkills.includes(action.payload)) {
        state.experienceSkills = [...state.experienceSkills, action.payload];
        toast.info(`Experience added`, { autoClose: 1000 });
      } else {
        toast.info(`Experience already exists`, { autoClose: 2000 });
      }
    });

    builder.addCase(PostjobExperienceSkills.rejected, (state, action) => {
      state.postJobExpState.loading = false;
      state.postJobExpState.data = [];

      let { payload } = action;

      // let payload_one = payload[0]

      let msg = "";
      // console.log(payload)

      Object.keys(payload).forEach(function (key, index) {
        // ddata[key] *= 2;
        // console.log(ddata)
        msg += `${key} (${payload[key]}) `;
      });

      // toast.error(msg);
      toast.error("Kindly make sure you selected a skill");

      // console.log(action.payload)
    });

    builder.addCase(PostCompanyJob.pending, (state, action) => {
      state.postCompanyJobState.loading = false;
      state.postCompanyJobState.data = [];
    });

    builder.addCase(PostCompanyJob.fulfilled, (state, action) => {
      state.postCompanyJobState.loading = false;
      state.postCompanyJobState.data = action.payload;
      state.jobByCompany.data.results = [
        ...state.jobByCompany.data.results,
        action.payload,
      ];

      state.company_job_array = FORM_INPUTS.company_post_job;
    });

    builder.addCase(PostCompanyJob.rejected, (state, action) => {
      let { payload } = action;

      let msg = "";

      Object.keys(payload).forEach(function (key, index) {
        msg += `${key} (${payload[key]}) `;
      });

      toast.error(msg);

      state.postCompanyJobState.loading = false;
      state.postCompanyJobState.data = [];
    });

    // post schedule interviews
    builder.addCase(PostScheduleInterview.pending, (state, action) => {
      state.scheduleInterviewState.loading = true;
      state.scheduleInterviewState.isValid = false;
    });
    builder.addCase(PostScheduleInterview.rejected, (state, action) => {
      state.scheduleInterviewState.loading = false;
      state.scheduleInterviewState.isValid = true;
    });
    builder.addCase(PostScheduleInterview.fulfilled, (state, action) => {
      state.scheduleInterviewState.loading = false;
      state.scheduleInterviewState.isValid = true;

      if (action.payload) {
        state.schedulingInterviewData.id = action.payload.id;
      } else {
        state.applyingTalentData.id = null;
      }
      state.showSheduleInterviewModal = !state.showSheduleInterviewModal;
      // toast.info(`An interview message has been send`, { autoClose: 2000 });
    });

    builder.addCase(PutScheduleInterview.fulfilled, (state, action) => {
      // toast.info(`An interview message has been send`, { autoClose: 2000 });
    });

    builder.addCase(GetSchedulingInterview.pending, (state, action) => {
      state.scheduleInterviewState.loading = false;
      state.schedulingInterviewData = schedulingInterviewData;
      state.scheduleInterviewState.isValid = false;
    });

    builder.addCase(GetSchedulingInterview.fulfilled, (state, action) => {
      state.scheduleInterviewState.loading = false;
      if (action.payload) {
        // console.log(action.payload)
        state.schedulingInterviewData = action.payload;
        state.scheduleInterviewState.isValid = true;
      } else {
        // console.log('her is nothing', action.payload)
        state.schedulingInterviewData = schedulingInterviewData;
        state.scheduleInterviewState.isValid = false;
      }
    });

    builder.addCase(GetTalentApplication.pending, (state, action) => {
      state.loadingAppliedTalent = true;
    });

    builder.addCase(GetTalentApplication.rejected, (state, action) => {
      state.loadingAppliedTalent = false;
    });

    builder.addCase(GetTalentApplication.fulfilled, (state, action) => {
      state.loadingAppliedTalent = false;

      state.applyingTalentData = action.payload;
      // state.applyingTalentData = action.payload.id

      if (action.payload) {
        // console.log(action.payload)
        // let message = state.offerJobData.message
        // rejectAppData

        if (action.payload.hasOwnProperty("data")) {
          state.applyingTalentData.id = action.payload.data.id;
        }

        state.offerJobState.isValid = true;
        let applied_talent = action.payload;
        if (applied_talent.offer_letter) {
          state.offerJobData.message = applied_talent.offer_letter;
        } else {
          // console.log('offer message not save')
          state.applyingTalentData = action.payload;

          if (applied_talent.hasOwnProperty("talent")) {
            state.offerJobData.message = state.offerJobData.message.replace(
              "unknown_1",
              `${applied_talent.talent.first_name}`
            );
          }
          if (applied_talent.job) {
            if (applied_talent.job.title) {
              state.offerJobData.message = state.offerJobData.message.replace(
                "unknown_2",
                applied_talent.job.title.name
              );
            }
            if (applied_talent.job.company) {
              state.offerJobData.message = state.offerJobData.message.replace(
                "unknown_3",
                applied_talent.job.company.name
              );
            }
            state.offerJobData.message = state.offerJobData.message.replace(
              "unknown_4",
              applied_talent.job.start_date
            );
            state.offerJobData.message = state.offerJobData.message.replace(
              "unknown_5",
              applied_talent.job.salary
            );

            state.offerJobData.message = state.offerJobData.message.replace(
              "unknown_6",
              applied_talent.job.description
            );
          }
        }

        state.rejectAppState.isValid = true;
        // console.log(state.rejectAppState);
        if (applied_talent.reject_letter) {
          state.rejectAppData.message = applied_talent.reject_letter;
        } else {
          if (applied_talent.talent) {
            state.rejectAppData.message = state.rejectAppData.message.replace(
              "unknown_1",
              applied_talent.talent.first_name
            );
          }
          if (applied_talent.job) {
            if (applied_talent.job.title) {
              state.rejectAppData.message = state.rejectAppData.message.replace(
                "unknown_2",
                applied_talent.job.title.name
              );
            }
          }
        }
      } else {
        // console.log("her is nothing", action.payload);
      }
      state.offerJobData.message = state.offerJobData.message.replaceAll(
        /<\/?[^>]+(>|$)/gi,
        ""
      );
      state.rejectAppData.message = state.rejectAppData.message.replaceAll(
        /<\/?[^>]+(>|$)/gi,
        ""
      );
    });

    builder.addCase(PostOfferJobNotification.pending, (state, action) => {
      state.offerJobState.isValid = false;
      state.offerJobState.loading = true;
    });

    builder.addCase(PostOfferJobNotification.fulfilled, (state, action) => {
      state.offerJobState.isValid = true;
      state.offerJobState.loading = false;
      state.offerJobState.data = action.payload;

      // toast.info(`Application offer has been sent`, { autoClose: 2000 });
    });

    builder.addCase(PostOfferJobNotification.rejected, (state, action) => {
      state.offerJobState.loading = false;

      let { payload } = action;
      let msg = "";
      Object.keys(payload).forEach(function (key, index) {
        msg += `${key} (${payload[key]}) `;
      });

      toast.error(msg);
    });

    builder.addCase(DeleteSkill.pending, (state) => {
      state.deleteSkillState.loading = true;
      state.deleteSkillState.error = "";
    });

    builder.addCase(DeleteSkill.fulfilled, (state, action) => {
      state.deleteSkillState.loading = false;
      state.deleteSkillState.data = action.payload;
      state.deleteSkillState.error = "";

      // state.showDeleteSkillModal = false;
      state.skillObject = {};
      state.experienceSkills = state.experienceSkills.filter((res) => {
        return res.id !== parseInt(action.meta.arg.id);
      });
      return state;
    });

    builder.addCase(DeleteSkill.rejected, (state, action) => {
      state.deleteSkillState.loading = false;
      state.deleteSkillState.data = [];
    });

    // talent job answer

    builder.addCase(talentConfirmJobOffer.pending, (state) => {
      state.talentJobAnswer.loading = true;
      state.talentJobAnswer.error = "";
    });
    builder.addCase(talentConfirmJobOffer.fulfilled, (state, action) => {
      state.talentJobAnswer.loading = false;
      state.talentJobAnswer.data = action.payload;
      state.talentJobAnswer.error = "";
      state.jobDetails.status = action.meta.arg.data;
      // console.log(action)
    });
    builder.addCase(talentConfirmJobOffer.rejected, (state, action) => {
      state.talentJobAnswer.loading = false;
      state.talentJobAnswer.data = {};
    });

    // Get payment for talent

    builder.addCase(GetMyPaymentForTalent.pending, (state) => {
      state.myPaymentForTalentState.loading = true;
      state.myPaymentForTalentState.error = "";
    });
    builder.addCase(GetMyPaymentForTalent.fulfilled, (state, action) => {
      state.myPaymentForTalentState.loading = false;
      state.myPaymentForTalentState.data = action.payload;
      state.myPaymentForTalentState.error = "";
      // console.log(action)
    });
    builder.addCase(GetMyPaymentForTalent.rejected, (state, action) => {
      state.myPaymentForTalentState.loading = false;
      state.myPaymentForTalentState.data = [];
    });

    // get saved profiles

    builder.addCase(getMySavedProfiles.pending, (state) => {
      state.mySavedProfiles.loading = true;
      state.mySavedProfiles.error = "";
    });
    builder.addCase(getMySavedProfiles.fulfilled, (state, action) => {
      state.mySavedProfiles.loading = false;
      state.mySavedProfiles.data = action.payload;
      state.mySavedProfiles.error = "";
      // console.log(action)
    });
    builder.addCase(getMySavedProfiles.rejected, (state, action) => {
      state.mySavedProfiles.loading = false;
      state.mySavedProfiles.data = [];
    });

    // save talent profile

    builder.addCase(SaveTalentProfile.pending, (state) => {
      state.saveTalentProfileState.loading = true;
      state.saveTalentProfileState.error = "";
    });
    builder.addCase(SaveTalentProfile.fulfilled, (state, action) => {
      state.saveTalentProfileState.loading = false;
      state.saveTalentProfileState.data = action.payload;
      state.saveTalentProfileState.error = "";
      // console.log(action)
    });
    builder.addCase(SaveTalentProfile.rejected, (state, action) => {
      state.saveTalentProfileState.loading = false;
      state.saveTalentProfileState.data = [];
    });


    // delete saved profile

    builder.addCase(DeleteSavedTalentProfile.pending, (state) => {
     
    });
    builder.addCase(DeleteSavedTalentProfile.fulfilled, (state, action) => {
      
  
    });
    builder.addCase(DeleteSavedTalentProfile.rejected, (state, action) => {
      
    });

  },
});

export const {
  resetTalentsRecommended,
  resetJobDetails,
  toggleShowCompanyDeleteModal,
  toggleShowRejectApplicationModal,
  toggleShowScheduleInterviewModal,
  toggleShowOfferJobModal,
  handleOnChangeTextInput,
  handleRadioChange,
  handleOnSelectInput,
  toggleShowPublishJobModalModal,
  toggleShowPublishJobSuccessModalModal,
  handleOnChangeFileInput,
  handleScheduleInterviewChange,
  handleOnSelectScheduleInterview,
  handleOfferLetterChange,
  handleRejectLetterChange,
  togglePayPalModal,
  toggleEditFormJob,
  preloadJobData,
  toggleDeleteSkill,
  resetJobForm,
  toggleShowPayForTalent,
  togglePaymentGatewaysModal,
  toggleShowJobOfferedModal,
  handleValidateJobForm,
  handleTextInputCheckEmptyValueFn,
  toggleEditSkill,
  preloadSkillData,
  toggleShowTalentApplicationHistoryModal,
  toggleShowSaveModal,
  toggleDeleteSavedTalent,
  deleteSavedProfileFromState
} = jobCompanySlice.actions;

export default jobCompanySlice.reducer;
