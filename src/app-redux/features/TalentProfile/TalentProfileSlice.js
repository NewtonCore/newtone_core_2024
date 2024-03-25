import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  AxiosDeleteService,
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
} from "../../../constants/AxiosServices";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import {
  CheckEndDateLessThanStart,
  ExtractFieldsFromFormData,
  JsonToformData,
  validatePhone,
  validateURL,
} from "../../../constants/utils";
import { toast } from "react-toastify";
import { getUserFromToken, logOutUser } from "../Auth/authSlice";
import { type } from "@testing-library/user-event/dist/type";
import { setOfflineLocalStorage } from "../../../constants/OfflineStorage";
let postTalentState = {
  loading: null,
  error: "",
};

let postEducationState = {
  loading: null,
  data: [],
  error: "",
  success: false,
};

let PostWorkExperienceState = {
  loading: null,
  data: [],
  error: "",
  success: false,
};

let PostProjectsState = {
  loading: null,
  data: [],
  error: "",
  success: false,
};

let PostSkillState = {
  loading: null,
  data: [],
  error: "",
  success: false,
};

let talentEducation = {
  loading: null,
  data: [],
  error: "",
};

let talentWorkExperience = {
  loading: null,
  data: [],
  error: "",
};

let talentProjects = {
  loading: null,
  data: [],
  error: "",
};

let talentSkills = {
  loading: null,
  data: { results: [] },
  error: "",
};

let talentState = {
  loading: null,
  data: {},
  error: "",
};

let deleteEducationState = {
  loading: null,
  data: [],
  error: "",
};

let deleteProjectState = {
  loading: null,
  data: [],
  error: "",
};

let deleteSkillState = {
  loading: null,
  data: [],
  error: "",
};

let deleteWorkState = {
  loading: null,
  data: [],
  error: "",
};

let talentDetails = {
  loading: null,
  data: {},
  error: "",
};

let JobAvailabilityState = {
  loading: null,
  data: [],
  error: "",
};

const initialState = {
  uni_search_form: FORM_INPUTS.talent_search_skill,
  availability_form: FORM_INPUTS.availability_form,
  manual_uni_form: FORM_INPUTS.talent_manual_university,
  x: 0,
  education_array: [], // initialize  array
  work_experience_array: [],
  skill_array: [],
  projects_array: [],
  links_array: "",
  bio_data_array: "",
  postTalentState,
  postEducationState,
  PostWorkExperienceState,
  PostProjectsState,
  talentState,
  talentEducation,
  talentWorkExperience,
  talentProjects,
  bioDataHasError: null,
  showEditEducationModal: null,
  showDeleteEducationModal: null,
  showDeleteSkillModal: null,
  showEditWorkModal: null,
  showEditProjectModal: null,
  showDeleteProjectModal: null,
  showDeleteWorkModal: null,
  showEditSkillModal: null,
  showManualUniversityModal: null,
  educationObject: {},
  workObject: {},
  projectsObject: {},
  skillObject: {},
  PostSkillState,
  talentSkills,
  deleteEducationState,
  deleteProjectState,
  deleteSkillState,
  deleteWorkState,
  talentDetails,
  JobAvailabilityState,
};

export const jobAvailabilityFn = createAsyncThunk(
  "TalentProfileSlice/jobAvailabilityFn",
  async (data, { rejectWithValue }) => {
    let { dataPassed, isEdit } = data;
    let url = `${process.env.REACT_APP_TALENT_AVAILABILITY}`;

    const res = isEdit
      ? await AxiosPutService(url, dataPassed)
      : await AxiosPostService(url, dataPassed);

    try {
      // console.log(process.env.REACT_APP_UPLOAD_TEST_GORILLA_API)
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const getTalent = createAsyncThunk(
  "TalentProfileSlice/getTalent",
  async (data) => {
    let url = `${process.env.REACT_APP_MY_TALENT_PROFILE}`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const getTalentDetails = createAsyncThunk(
  "TalentProfileSlice/getTalentDetails",
  async ({ talentID }) => {
    let url = `${process.env.REACT_APP_TALENT_DETAIL}${talentID}/`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const getEducation = createAsyncThunk(
  "TalentProfileSlice/getEducation",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_MY_EDUCATION}`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const getTalentSkills = createAsyncThunk(
  "TalentProfileSlice/getTalentSkills",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_USER_SKILL}`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const getTalentWorkExperiences = createAsyncThunk(
  "TalentProfileSlice/getTalentWorkExperiences",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_MY_WORK_EXPERIENCE}`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const getTalentProjects = createAsyncThunk(
  "TalentProfileSlice/getTalentProjects",
  async (data) => {
    let url = `${process.env.REACT_APP_TALENT_MY_PROJECT}`;
    let res = await AxiosGetService(url);
    // console.log(res.data);
    return res.data;
  }
);

export const PostTalent = createAsyncThunk(
  "TalentProfileSlice/postTalent",
  async ({ data, hasProfile = false, talentID = null }) => {
    // Check if talent has a profile, if not then POST talent to backend
    // if talent has a profile, Update the current profile with the ID

    // Extract only the fields required for posting of data
    let bio_data = data;

    let res = !hasProfile
      ? await AxiosPostService(`${process.env.REACT_APP_TALENT}`, bio_data)
      : await AxiosPutService(
          `${process.env.REACT_APP_TALENT}${talentID}/`,
          bio_data
        );

    // console.log(res)
    return res.data;
  }
);

export const PostEducation = createAsyncThunk(
  "TalentProfileSlice/postEducation",
  async ({ data, isEdit, id }) => {
    // console.log(initialState)

    let _data = ExtractFieldsFromFormData(data[0]);
    const res = isEdit
      ? await AxiosPutService(
          `${process.env.REACT_APP_TALENT_EDUCATION}${id}/`,
          JsonToformData(_data)
        )
      : await AxiosPostService(
          `${process.env.REACT_APP_TALENT_EDUCATION}`,
          JsonToformData(_data)
        );

    return res.data;
  }
);

export const PostWorkExperience = createAsyncThunk(
  "TalentProfileSlice/PostWorkExperience",
  async ({ data, isEdit, id }) => {
    // console.log(data)

    let _data_to_send = data[0];

    let _data = ExtractFieldsFromFormData(_data_to_send);

    const res = isEdit
      ? await AxiosPutService(
          `${process.env.REACT_APP_TALENT_WORK_EXPERIENCE}${id}/`,
          JsonToformData(_data)
        )
      : await AxiosPostService(
          `${process.env.REACT_APP_TALENT_WORK_EXPERIENCE}`,
          JsonToformData(_data)
        );

    return res.data;
  }
);

export const handleValidateStartEndDates = createAsyncThunk(
  "TalentProfileSlice/handleValidateStartEndDates",
  async (data) => {
    return data;
  }
);

export const handleValidateUrl = createAsyncThunk(
  "TalentProfileSlice/handleValidateUrl",
  async (data) => {
    return data;
  }
);

export const handleValidatePhone = createAsyncThunk(
  "TalentProfileSlice/handleValidatePhone",
  async (data) => {
    return data;
  }
);

export const PostTalentProject = createAsyncThunk(
  "TalentProfileSlice/PostTalentProject",
  async ({ data, isEdit, id }) => {
    // console.log(initialState)
    let _data = ExtractFieldsFromFormData(data[0]);

    if (isEdit) {
      if (typeof _data.skills === "string") {
        _data.skills = _data.skills.replaceAll(",", " ");
        _data.skills = _data.skills.split(" ");
      } else {
        // console.log(_data.skills)
        if (_data.skills.length !== 0) {
          if (_data.skills[0].hasOwnProperty("id")) {
            // console.log(Object.keys(_data.skills))

            _data.skills.map((sk) => console.log(sk.id));
            // console.log(typeof(_data.skills))
            _data.skills = _data.skills.map((skill) => skill.id);
          } else {
          }
        }
      }
    }

    //delete skills from the object if it is "" or null

    if (_data.skills === "" || _data.skills === null) {
      delete _data.skills;
    }

    //if we have an array of skills and the first index is "" then delete it from the object

    if (Array.isArray(_data.skills)) {
      if (_data.skills[0] === "") {
        delete _data.skills;
      }
    }
    // console.log(_data.skills)

    // if(_data.skills === ""){
    // }

    const res = isEdit
      ? await AxiosPutService(
          `${process.env.REACT_APP_TALENT_PROJECT}${id}/`,
          JsonToformData(_data)
        )
      : await AxiosPostService(
          `${process.env.REACT_APP_TALENT_PROJECT}`,
          JsonToformData(_data)
        );

    return res.data;
  }
);

export const PostTalentSkill2 = createAsyncThunk(
  "jobCompany/PostTalentSkills",
  async (dataPassed, { rejectWithValue }) => {
    const { data, isEdit, id } = dataPassed;
    let _data = ExtractFieldsFromFormData(data);

    try {
      const res =
        isEdit || id !== undefined
          ? await AxiosPutService(
              `${process.env.REACT_APP_TALENT_USER_SKILL}${id}/`,
              JsonToformData(_data)
            )
          : await AxiosPostService(
              `${process.env.REACT_APP_TALENT_USER_SKILL}`,
              JsonToformData(_data)
            );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const PostTalentSkill = createAsyncThunk(
  "TalentProfileSlice/PostTalentSkill",
  async (dataPassed, { rejectWithValue }) => {
    // console.log({data})
    let { data, isEdit, id } = dataPassed;

    try {
      let _data = ExtractFieldsFromFormData(data[0]);
      const res =
        isEdit || id !== undefined
          ? await AxiosPutService(
              `${process.env.REACT_APP_TALENT_USER_SKILL}${id}/`,
              JsonToformData(_data)
            )
          : await AxiosPostService(
              `${process.env.REACT_APP_TALENT_USER_SKILL}`,
              JsonToformData(_data)
            );

      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const DeleteEducation = createAsyncThunk(
  "TalentProfileSlice/DeleteEducation",
  async ({ id }) => {
    const res = await AxiosDeleteService(
      `${process.env.REACT_APP_TALENT_EDUCATION}${id}/`
    );

    return res.data;
  }
);

export const DeleteProject = createAsyncThunk(
  "TalentProfileSlice/DeleteProject",
  async ({ id }) => {
    const res = await AxiosDeleteService(
      `${process.env.REACT_APP_TALENT_PROJECT}${id}/`
    );

    return res.data;
  }
);

export const DeleteWork = createAsyncThunk(
  "TalentProfileSlice/DeleteWork",
  async ({ id }) => {
    const res = await AxiosDeleteService(
      `${process.env.REACT_APP_TALENT_WORK_EXPERIENCE}${id}/`
    );

    return res.data;
  }
);

export const DeleteSkill = createAsyncThunk(
  "TalentProfileSlice/DeleteSkill",
  async (data, { rejectWithValue }) => {
    let { id } = data;

    try {
      const res = await AxiosDeleteService(
        `${process.env.REACT_APP_TALENT_USER_SKILL}${id}/`
      );
      return true;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

// let bio_data = ExtractFieldsFromFormData(initialState.bio_data_array);

const TalentProfileSlice = createSlice({
  name: "TalentProfileSlice",
  initialState,
  reducers: {
    test: (state) => {
      state.x = 1;
    },

    updateTalentEducation: (state, action) => {
      state.talentState.data.talenteducation_set = [
        ...state.talentState.data.talenteducation_set,
        action.payload,
      ];
    },

    updateTalentProjects: (state, action) => {
      state.talentState.data.talentproject_set = [
        ...state.talentState.data.talentproject_set,
        action.payload,
      ];
    },

    updateTalentWorkExperience: (state, action) => {
      state.talentState.data.workexperience_set = [
        ...state.talentState.data.workexperience_set,
        action.payload,
      ];
    },

    toggleShowManualUniversityForm: (state, action) => {
      state.showManualUniversityModal = action.payload;
    },

    updateAvailability: (state, action) => {
      state.talentState.data.availability = action.payload;
    },
    handleRadioChange: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "availability":
          // console.log(action.payload)
          state.availability_form[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    addTalentDataFromLocalStorage: (state, action) => {
      // console.log(action)
      state.talentState.data = action.payload.talentState;
      // state.talentSkills.data.results = action.payload.talentSkills
    },

    resetTalentDetails: (state) => {
      state.talentDetails = talentDetails;
    },

    toggleEditFormEducation: (state, action) => {
      state.showEditEducationModal = !state.showEditEducationModal;

      if (action.payload !== undefined) {
        state.educationObject = JSON.parse(action.payload);
        state.education_array = [FORM_INPUTS.EDIT_PROFILE.education];
      } else {
        state.education_array = [FORM_INPUTS.EDIT_PROFILE.education];
        state.educationObject = {};
      }
    },

    toggleDeleteEducation: (state, action) => {
      state.showDeleteEducationModal = !state.showDeleteEducationModal;

      if (action.payload !== undefined) {
        state.educationObject = JSON.parse(action.payload);
      } else {
        state.educationObject = {};
      }
    },

    toggleDeletProject: (state, action) => {
      state.showDeleteProjectModal = !state.showDeleteProjectModal;
      if (action.payload !== undefined) {
        state.projectsObject = JSON.parse(action.payload);
      } else {
        state.projectsObject = {};
      }
    },

    toggleDeleteWork: (state, action) => {
      state.showDeleteWorkModal = !state.showDeleteWorkModal;
      if (action.payload !== undefined) {
        state.workObject = JSON.parse(action.payload);
      } else {
        state.workObject = {};
      }
    },

    toggleDeleteSkill: (state, action) => {
      state.showDeleteSkillModal = !state.showDeleteSkillModal;

      if (action.payload !== undefined) {
        state.skillObject = JSON.parse(action.payload);
      } else {
        state.skillObject = {};
      }
    },

    toggleEditworkForm: (state, action) => {
      state.showEditWorkModal = !state.showEditWorkModal;
      state.work_experience_array = [FORM_INPUTS.EDIT_PROFILE.work];

      if (action.payload !== undefined) {
        state.workObject = JSON.parse(action.payload);
      } else {
        state.workObject = {};
      }
    },

    toggleEditSkillForm: (state, action) => {
      state.showEditSkillModal = !state.showEditSkillModal;
      state.skill_array = [FORM_INPUTS.EDIT_PROFILE.skill];

      if (action.payload !== undefined) {
        state.skillObject = JSON.parse(action.payload);
      } else {
        state.skillObject = {};
      }
    },

    toggleEditProjectForm: (state, action) => {
      state.showEditProjectModal = !state.showEditProjectModal;
      state.projects_array = [FORM_INPUTS.EDIT_PROFILE.projects];

      if (action.payload !== undefined) {
        state.projectsObject = JSON.parse(action.payload);
      } else {
        state.projectsObject = {};
      }
    },

    handleTalentPhotoChange: (state, action) => {
      //handle on change of photo
      const { RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          // console.log(action.payload)
          state.bio_data_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    preloadBioData: (state, action) => {
      //preload the biodata with data from the talent

      let { payload: Data } = action;
      // console.log(talentData)
      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];
        let ValueOfTypeVariable = "";

        // preload the value of the children in the state of the bio_data_array
        state.bio_data_array =
          Array.isArray(state.bio_data_array) &&
          state.bio_data_array.map((data1) => {
            let index_of_desired_job_type = data1["children"].findIndex(
              (x) => x.name === "type"
            );

            if (index_of_desired_job_type >= 0) {
              ValueOfTypeVariable =
                data1.children[index_of_desired_job_type].value;
            }

            return {
              ...data1,
              children: data1.children.map((d2) => {
                return {
                  ...d2,
                  hidden:
                    ValueOfTypeVariable === "contract" && d2.name === "period"
                      ? false
                      : d2.hidden,
                  isRequired:
                    ValueOfTypeVariable === "contract" && d2.name === "period"
                      ? true
                      : d2["isRequired"],
                  value:
                    d2.name === `${KeyName}`
                      ? Value !== "null" && Value !== null
                        ? Value
                        : d2["value"]
                      : d2.name === "type" && d2.value === "talent"
                      ? ""
                      : d2["value"],
                };
              }),
            };
          });
      });
    },

    preloadEducationData: (state, action) => {
      //preload the biodata with data from the talent
      state.postEducationState.success = null;

      let { payload: Data } = action;
      // console.log(Data)
      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];
        let ValueOfCurrentlyHere = "";

        // preload the value of the children in the state of the bio_data_array
        state.education_array[0] = state.education_array[0].map((data1) => {
          let index_of_currently_here = data1["children"].findIndex(
            (x) => x.name === "currently_here"
          );

          if (index_of_currently_here >= 0) {
            ValueOfCurrentlyHere =
              data1.children[index_of_currently_here].value;
          }
          return {
            ...data1,
            children: data1.children.map((d2) => {
              return {
                ...d2,
                disabled:
                  d2.name === "end_date"
                    ? ValueOfCurrentlyHere
                    : d2["disabled"],
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

    preloadWorkData: (state, action) => {
      state.PostWorkExperienceState.success = null;
      //preload the biodata with data from the talent

      let { payload: Data } = action;
      // console.log(talentData)
      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];
        let ValueOfCurrentlyWorking = "";

        // preload the value of the children in the state of the bio_data_array
        state.work_experience_array[0] = state.work_experience_array[0].map(
          (data1) => {
            let index_of_still_working = data1["children"].findIndex(
              (x) => x.name === "still_working"
            );

            if (index_of_still_working >= 0) {
              ValueOfCurrentlyWorking =
                data1.children[index_of_still_working].value;
            }
            return {
              ...data1,
              children: data1.children.map((d2) => {
                return {
                  ...d2,
                  disabled:
                    d2.name === "end_date"
                      ? ValueOfCurrentlyWorking
                      : d2["disabled"],
                  value:
                    d2.name === `${KeyName}`
                      ? Value !== "null" && Value !== null
                        ? Value
                        : d2["value"]
                      : d2["value"],
                };
              }),
            };
          }
        );
      });
    },

    preloadAvailabilityData: (state, action) => {
      //preload the availability with data from the talent
      state.postEducationState.success = null;

      let { payload: Data } = action;
      // console.log(Data)
      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];

        // preload the value of the children in the state
        state.availability_form = state.availability_form.map((data1) => {
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

    updateSuccessStateBioData: (state, action) => {
      state.PostProjectsState.success = null;
      state.PostWorkExperienceState.success = null;
      state.postEducationState.success = null;
    },

    preloadProjectData: (state, action) => {
      //preload the biodata with data from the talent
      state.PostProjectsState.success = null;

      let { payload: Data } = action;

      const keys = Object.keys(Data);

      keys.forEach((key) => {
        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = Data[key];
        let ValueOfCurrentlyHere = "";

        // console.log(Value)

        // preload the value of the children in the state of the project data array
        state.projects_array[0] = state.projects_array[0].map((data1) => {
          let index_of_currently_here = data1["children"].findIndex(
            (x) => x.name === "currently_here"
          );

          if (index_of_currently_here >= 0) {
            ValueOfCurrentlyHere =
              data1.children[index_of_currently_here].value;
          }
          return {
            ...data1,
            children: data1.children.map((d2) => {
              return {
                ...d2,
                disabled:
                  d2.name === "end_date"
                    ? ValueOfCurrentlyHere
                    : d2["disabled"],
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

    handleValidateBioData: (state) => {
      state.bio_data_array = state.bio_data_array.map((data1) => {
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

    handleValidateWorkExperience: (state) => {
      state.work_experience_array[0] = state.work_experience_array[0].map(
        (data1) => {
          return {
            ...data1, // make a copy of the bio_data_array before manipulating it
            children: data1.children.map((d2) => {
              return {
                ...d2, // make a copy of the children
                // change the hasError property if isReuired is true and value is empty
                hasError:
                  d2.value === "" && d2.isRequired === true ? true : false,
              };
            }),
          };
        }
      );
    },

    handleValidateSkill: (state) => {
      state.skill_array[0] = state.skill_array[0].map((data1) => {
        return {
          ...data1, // make a copy of the bio_data_array before manipulating it
          children: data1.children.map((d2) => {
            return {
              ...d2, // make a copy of the children
              // change the hasError property if isReuired is true and value is empty
              hasError:
                d2.value === "" && d2.isRequired === true ? true : false,
            };
          }),
        };
      });
    },

    handleValidateEducation: (state) => {
      state.education_array[0] = state.education_array[0].map((data1) => {
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
              // d2.value === ""  && d2.isRequired === true ? true : false

              // hasDateError: d2.name === "start_date" || d2.name === "end_date" ?
              // CheckEndDateLessThanStart(JSON.stringify(data1)) ? true : false : d2.hasDateError,
              // dateErrorMessage: d2.name === "start_date" || d2.name === "end_date" ?
              // CheckEndDateLessThanStart(JSON.stringify(data1)) ? "The end date cannot be less than the start date" : "" : false,
            };
          }),
        };
      });
    },

    handleValidateStartEndDates2: (state) => {
      state.education_array[0] = state.education_array[0].map((data1) => {
        return {
          ...data1, // make a copy of the education_array before manipulating it
          children: data1.children.map((d2) => {
            return {
              ...d2, // make a copy of the children
              // change the hasError property if isReuired is true and value is empty

              hasDateError:
                d2.name === "start_date" || d2.name === "end_date"
                  ? CheckEndDateLessThanStart(JSON.stringify(data1))
                    ? true
                    : false
                  : d2.hasDateError,
              dateErrorMessage:
                d2.name === "start_date" || d2.name === "end_date"
                  ? CheckEndDateLessThanStart(JSON.stringify(data1))
                    ? "The end date cannot be less than the start date"
                    : ""
                  : false,
            };
          }),
        };
      });
    },

    handleValidateProjects: (state) => {
      state.projects_array[0] = state.projects_array[0].map((data1) => {
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

    handleAddEducation: (state) => {
      //will add function to check if the previous form has empty fields
      return {
        ...state,
        education_array: [
          ...state.education_array,
          FORM_INPUTS.EDIT_PROFILE.education,
        ],
      };
    },

    handleAddWorkExperience: (state) => {
      // console.log(bio_data);
      //will add function to check if the previous form has empty fields
      return {
        ...state,
        work_experience_array: [
          ...state.work_experience_array,
          FORM_INPUTS.EDIT_PROFILE.work,
        ],
      };
    },

    handleAddSkill: (state) => {
      //will add function to check if the previous form has empty fields
      return {
        ...state,
        skill_array: [...state.skill_array, FORM_INPUTS.EDIT_PROFILE.skill],
      };
    },

    handleAddProjects: (state) => {
      //will add function to check if the previous form has empty fields
      return {
        ...state,
        projects_array: [
          ...state.projects_array,
          FORM_INPUTS.EDIT_PROFILE.projects,
        ],
      };
    },

    handleOnChangeTextInput: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          // console.log(action.payload)
          state.bio_data_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;

        case "links":
          // console.log(action.payload)
          state.links_array[RowKey]["children"][ChildKey].value = valueToUpdate;
          return state;

        case "skill":
          // console.log(action.payload);

          state.skill_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;

        case "education_data":
          // console.log(action.payload)

          state.education_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;

        case "work_experience":
          state.work_experience_array[DataKey][RowKey]["children"][
            ChildKey
          ].value = valueToUpdate;
          return state;

        case "projects":
          state.projects_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;

        case "search":
          // console.log(action.payload)
          state.uni_search_form[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;

        case "manual_uni":
          // console.log(action.payload)
          state.manual_uni_form[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    saveManualUniversity: (state, action) => {
      // let university_index = ""
      // const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      // let university_index = state.education_array[DataKey][RowKey][
      //   "children"
      // ].findIndex((x) => x.name === "end_date");
    },

    handleTextInputCheckEmptyValueFn: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      switch (action.payload.state) {
        // case when the payload sent is biodata

        case "bio_data":
          // console.log(action.payload)

          let bioDataValue =
            state.bio_data_array[RowKey]["children"][ChildKey].value;
          let bioDataisRequired =
            state.bio_data_array[RowKey]["children"][ChildKey].isRequired;

          bioDataValue = bioDataValue.replace(/\s+/g, " ");

          if (
            (bioDataisRequired && bioDataValue === " ") ||
            (bioDataisRequired && bioDataValue === "")
          ) {
            state.bio_data_array[RowKey]["children"][ChildKey].hasError = true;
            state.bio_data_array[RowKey]["children"][ChildKey].errorMessage =
              "This field is required";
          } else {
            state.bio_data_array[RowKey]["children"][ChildKey].hasError = false;
            state.bio_data_array[RowKey]["children"][ChildKey].errorMessage =
              "";
          }

          return state;

        case "education_data":
          // console.log(action.payload)

          let value =
            state.education_array[DataKey][RowKey]["children"][ChildKey].value;
          let isRequired =
            state.education_array[DataKey][RowKey]["children"][ChildKey]
              .isRequired;

          value = value.replace(/\s+/g, " ");

          if ((isRequired && value === " ") || (isRequired && value === "")) {
            state.education_array[DataKey][RowKey]["children"][
              ChildKey
            ].hasError = true;
            // console.log("field has error")
            state.education_array[DataKey][RowKey]["children"][
              ChildKey
            ].errorMessage = "This field is required";
          } else {
            state.education_array[DataKey][RowKey]["children"][
              ChildKey
            ].hasError = false;
            state.education_array[DataKey][RowKey]["children"][
              ChildKey
            ].errorMessage = "";
          }

          return state;

        case "work_experience":
          // console.log(action.payload)
          let workValue =
            state.work_experience_array[DataKey][RowKey]["children"][ChildKey]
              .value;
          let workIsRequired =
            state.work_experience_array[DataKey][RowKey]["children"][ChildKey]
              .isRequired;

          workValue = workValue.replace(/\s+/g, " ");

          if (
            (workIsRequired && workValue === " ") ||
            (workIsRequired && workValue === "")
          ) {
            state.work_experience_array[DataKey][RowKey]["children"][
              ChildKey
            ].hasError = true;
            state.work_experience_array[DataKey][RowKey]["children"][
              ChildKey
            ].errorMessage = "This field is required";
          } else {
            state.work_experience_array[DataKey][RowKey]["children"][
              ChildKey
            ].hasError = false;
            state.work_experience_array[DataKey][RowKey]["children"][
              ChildKey
            ].errorMessage = "";
          }

          return state;

        case "project_data":
          // console.log(action.payload)
          let projectValue =
            state.projects_array[DataKey][RowKey]["children"][ChildKey].value;
          let projectIsRequired =
            state.projects_array[DataKey][RowKey]["children"][ChildKey]
              .isRequired;

          projectValue = projectValue.replace(/\s+/g, " ");

          if (
            (projectIsRequired && projectValue === " ") ||
            (projectIsRequired && projectValue === "")
          ) {
            state.projects_array[DataKey][RowKey]["children"][
              ChildKey
            ].hasError = true;
            state.projects_array[DataKey][RowKey]["children"][
              ChildKey
            ].errorMessage = "This field is required";
          } else {
            state.projects_array[DataKey][RowKey]["children"][
              ChildKey
            ].hasError = false;
            state.projects_array[DataKey][RowKey]["children"][
              ChildKey
            ].errorMessage = "";
          }

          return state;
      }
    },

    handleOnSelectInput: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      //handle on change of textInput
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          // console.log(action.payload)
          // handle when desired job type is contract
          let index_of_desired_job_type = state.bio_data_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "type");

          let index_of_month = state.bio_data_array[RowKey][
            "children"
          ].findIndex((x) => x.name === "period");

          // Change the month hidden property to false (Meaning it will be visible) and the is Required to true for validation
          state.bio_data_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;

          if (index_of_desired_job_type >= 0) {
            if (
              state.bio_data_array[RowKey]["children"][
                index_of_desired_job_type
              ].value === "contract"
            ) {
              state.bio_data_array[RowKey]["children"][
                index_of_month
              ].hidden = false;
              state.bio_data_array[RowKey]["children"][
                index_of_month
              ].isRequired = true;
              state.bio_data_array[RowKey]["colums"] = 2;
            } else {
              state.bio_data_array[RowKey]["children"][
                index_of_month
              ].hidden = true;
              state.bio_data_array[RowKey]["children"][
                index_of_month
              ].isRequired = false;
              // state.bio_data_array[RowKey]["children"][index_of_month].value =
              //   "";
              state.bio_data_array[RowKey]["children"][
                index_of_month
              ].hasError = false;

              state.bio_data_array[RowKey]["colums"] = 2;
            }
          }

          return state;

        case "skill":
          // console.log(action.payload);
          state.skill_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
        case "education":
          // console.log(action.payload);
          state.education_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleMultiSelect: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      //handle on change of textInput
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "project_data":
          // console.log(action.payload)
          state.projects_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleCheckBoxChange: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      // console.log(action.payload.state);
      let index_of_end_date = state.education_array[DataKey][RowKey][
        "children"
      ].findIndex((x) => x.name === "end_date");
      if (action.payload.state === "education_data") {
        state.education_array[DataKey][RowKey]["children"][ChildKey].value =
          valueToUpdate;
        if (valueToUpdate) {
          state.education_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].value = "";
          state.education_array[DataKey][RowKey]["children"][3].value = "";
          state.education_array[DataKey][RowKey]["children"][2].value = "";
          state.education_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].disabled = true;
          state.education_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].hasDateError = false;
          state.education_array[DataKey][RowKey][
            "children"
          ][4].hasDateError = false;

          state.education_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].dateErrorMessage = "";
          state.education_array[DataKey][RowKey][
            "children"
          ][4].dateErrorMessage = "";
          // dateErrorMessage
        } else {
          state.education_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].disabled = false;
        }
      }

      if (action.payload.state === "work_experience") {
        let index_of_end_date = state.work_experience_array[DataKey][RowKey][
          "children"
        ].findIndex((x) => x.name === "end_date");
        state.work_experience_array[DataKey][RowKey]["children"][
          ChildKey
        ].value = valueToUpdate;
        if (valueToUpdate) {
          state.work_experience_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].value = "";
          state.work_experience_array[DataKey][RowKey]["children"][3].value =
            "";
          state.work_experience_array[DataKey][RowKey]["children"][2].value =
            "";
          state.work_experience_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].disabled = true;
          state.work_experience_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].hasDateError = false;
          state.work_experience_array[DataKey][RowKey][
            "children"
          ][4].hasDateError = false;
          state.work_experience_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].dateErrorMessage = "";
          state.work_experience_array[DataKey][RowKey][
            "children"
          ][4].dateErrorMessage = "";
        } else {
          state.work_experience_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].disabled = false;
        }
      }

      if (action.payload.state === "projects") {
        let index_of_end_date = state.projects_array[DataKey][RowKey][
          "children"
        ].findIndex((x) => x.name === "end_date");
        state.projects_array[DataKey][RowKey]["children"][ChildKey].value =
          valueToUpdate;
        if (valueToUpdate) {
          state.projects_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].value = "";
          state.projects_array[DataKey][RowKey]["children"][3].value = "";
          state.projects_array[DataKey][RowKey]["children"][2].value = "";
          state.projects_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].disabled = true;
          state.projects_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].hasDateError = false;
          state.projects_array[DataKey][RowKey][
            "children"
          ][4].hasDateError = false;
          state.projects_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].dateErrorMessage = "";
          state.projects_array[DataKey][RowKey][
            "children"
          ][4].dateErrorMessage = "";
        } else {
          // console.log(JSON.stringify(state.projects_array[DataKey][RowKey]))
          state.projects_array[DataKey][RowKey]["children"][
            index_of_end_date
          ].disabled = false;
        }
      }
    },

    handleOnDateChange: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      //handle on change of textInput
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "education_data":
          let index_of_start_date_edu = state.education_array[DataKey][RowKey][
            "children"
          ].findIndex((x) => x.name === "start_date");

          let index_of_end_date_edu = state.education_array[DataKey][RowKey][
            "children"
          ].findIndex((x) => x.name === "end_date");

          // console.log(action.payload)
          state.education_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;

          // child key ===4 is the date input
          // child key 1 is the data that will be sent to the backend

          if (ChildKey === index_of_start_date_edu) {
            state.education_array[DataKey][RowKey]["children"][0].value =
              valueToUpdate[0];

            state.education_array[DataKey][RowKey]["children"][1].value =
              valueToUpdate[1];
          }

          if (ChildKey === index_of_end_date_edu) {
            state.education_array[DataKey][RowKey]["children"][2].value =
              valueToUpdate[0];

            state.education_array[DataKey][RowKey]["children"][3].value =
              valueToUpdate[1];
          }

          return state;

        case "project_data":
          let index_of_start_date_project = state.projects_array[DataKey][
            RowKey
          ]["children"].findIndex((x) => x.name === "start_date");

          let index_of_end_date_project = state.projects_array[DataKey][RowKey][
            "children"
          ].findIndex((x) => x.name === "end_date");
          // console.log(action.payload)
          state.projects_array[DataKey][RowKey]["children"][ChildKey].value =
            valueToUpdate;

          if (ChildKey === index_of_start_date_project) {
            state.projects_array[DataKey][RowKey]["children"][0].value =
              valueToUpdate[0];

            state.projects_array[DataKey][RowKey]["children"][1].value =
              valueToUpdate[1];
          }

          if (ChildKey === index_of_end_date_project) {
            state.projects_array[DataKey][RowKey]["children"][2].value =
              valueToUpdate[0];

            state.projects_array[DataKey][RowKey]["children"][3].value =
              valueToUpdate[1];
          }

          return state;

        case "work_experience":
          // console.log(action.payload)

          let index_of_start_date_work = state.work_experience_array[DataKey][
            RowKey
          ]["children"].findIndex((x) => x.name === "start_date");

          let index_of_end_date_work = state.work_experience_array[DataKey][
            RowKey
          ]["children"].findIndex((x) => x.name === "end_date");

          state.work_experience_array[DataKey][RowKey]["children"][
            ChildKey
          ].value = valueToUpdate;

          if (ChildKey === index_of_start_date_work) {
            state.work_experience_array[DataKey][RowKey]["children"][0].value =
              valueToUpdate[0];

            state.work_experience_array[DataKey][RowKey]["children"][1].value =
              valueToUpdate[1];
          }

          if (ChildKey === index_of_end_date_work) {
            state.work_experience_array[DataKey][RowKey]["children"][2].value =
              valueToUpdate[0];

            state.work_experience_array[DataKey][RowKey]["children"][3].value =
              valueToUpdate[1];
          }

          return state;

        case "skill":
          // console.log(action.payload);
          state.skill_array[DataKey][RowKey]["children"][ChildKey].value =
            JSON.stringify(valueToUpdate);
          return state;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PostTalent.pending, (state) => {
      state.postTalentState.loading = true;
      state.postTalentState.success = null;
      state.postTalentState.error = "";
    });
    builder.addCase(PostTalent.fulfilled, (state, action) => {
      state.postTalentState.loading = null;

      let { payload } = action;

      state.talentState.data = payload;

      setOfflineLocalStorage("user_profile", payload);

      state.postTalentState.error = "";
      state.bio_data = FORM_INPUTS.EDIT_PROFILE.biodata;

      if (action.meta.arg.hasProfile === true) {
        toast.info(`Updated Profile`, { autoClose: 3000 });
      } else {
        toast.success(`Success!`, { autoClose: 6000 });
      }
    });
    builder.addCase(PostTalent.rejected, (state, action) => {
      state.postTalentState.loading = null;
      state.postTalentState.data = [];

      // state.postTalentState.error = action.data.error.message;
      // console.log(action);
      if (action.error.code === "ERR_BAD_REQUEST") {
        toast.error(`${action.error.message}`, { autoClose: 6000 });
      }
    });

    builder.addCase(PostEducation.pending, (state) => {
      state.postEducationState.loading = true;
      state.postEducationState.success = null;
      state.postEducationState.error = "";
    });
    builder.addCase(PostEducation.fulfilled, (state, action) => {
      state.postEducationState.loading = false;
      state.postEducationState.data = action.payload;
      state.postEducationState.success = true;

      //
      // console.log(action.meta.arg)

      if (action.meta.arg.isEdit === true) {
        //if is edit, edit the specific data in the state that mateched the id passed
        state.talentState.data.talenteducation_set =
          state.talentState.data.talenteducation_set.map((list) => {
            return parseInt(list.id) === parseInt(action.meta.arg.id)
              ? action.payload
              : list;
          });
      }
      state.educationObject = {};
      state.showEditEducationModal = false;

      state.postEducationState.error = "";
      state.education_array = [FORM_INPUTS.EDIT_PROFILE.education];

      if (action.meta.arg.isEdit === true) {
        toast.success(`Education Updated`, { autoClose: 2000 });
      } else {
        toast.success(`Education Saved`, { autoClose: 6000 });
      }
    });
    builder.addCase(PostEducation.rejected, (state, action) => {
      state.postEducationState.success = false;

      state.postEducationState.loading = null;
      state.postEducationState.data = [];
      // state.postTalentState.error = action.data.error.message;
      // console.log(action);
      if (action.error.code === "ERR_BAD_REQUEST") {
        toast.error(`${action.error.message}`, { autoClose: 6000 });
      }
    });

    builder.addCase(PostWorkExperience.pending, (state) => {
      state.PostWorkExperienceState.loading = true;
      state.PostWorkExperienceState.success = false;
      state.PostWorkExperienceState.error = "";
    });
    builder.addCase(PostWorkExperience.fulfilled, (state, action) => {
      state.PostWorkExperienceState.loading = null;
      state.PostWorkExperienceState.data = action.payload;
      state.PostWorkExperienceState.error = "";
      state.PostWorkExperienceState.success = true;

      if (action.meta.arg.isEdit === true) {
        //if is edit, edit the specific data in the state that mateched the id passed
        state.talentState.data.workexperience_set =
          state.talentState.data.workexperience_set.map((list) => {
            return parseInt(list.id) === parseInt(action.meta.arg.id)
              ? action.payload
              : list;
          });
      }

      state.workObject = {};
      state.showEditWorkModal = false;

      state.work_experience_array = [FORM_INPUTS.EDIT_PROFILE.work];

      toast.success(`Work Experience Posted`, { autoClose: 6000 });
    });
    builder.addCase(PostWorkExperience.rejected, (state, action) => {
      state.PostWorkExperienceState.success = false;

      state.PostWorkExperienceState.loading = null;
      state.PostWorkExperienceState.data = [];
      if (action.error.code === "ERR_BAD_REQUEST") {
        toast.error(`${action.error.message}`, { autoClose: 6000 });
      }
    });

    builder.addCase(PostTalentProject.pending, (state) => {
      state.PostProjectsState.loading = true;
      state.PostProjectsState.success = null;
      state.PostProjectsState.error = "";
    });
    builder.addCase(PostTalentProject.fulfilled, (state, action) => {
      state.PostProjectsState.loading = null;
      state.PostProjectsState.data = action.payload;
      state.PostProjectsState.error = "";

      if (action.meta.arg.isEdit === true) {
        toast.success(`Project updated`, { autoClose: 6000 });
        state.talentState.data.talentproject_set =
          state.talentState.data.talentproject_set.map((list) => {
            return parseInt(list.id) === parseInt(action.meta.arg.id)
              ? action.payload
              : list;
          });
      } else {
        toast.success(`Project Saved`, { autoClose: 6000 });
      }
      state.showEditProjectModal = false;
      state.projectsObject = {};

      state.projects_array = [FORM_INPUTS.EDIT_PROFILE.projects];
    });
    builder.addCase(PostTalentProject.rejected, (state, action) => {
      state.PostProjectsState.loading = null;
      state.PostProjectsState.data = [];
      // state.postTalentState.error = action.data.error.message;
      // console.log(action);
      if (action.error.code === "ERR_BAD_REQUEST") {
        toast.error(`${action.error.message}`, { autoClose: 6000 });
      }
    });

    // Handle post skill

    builder.addCase(PostTalentSkill.pending, (state) => {
      state.PostSkillState.loading = true;
      state.PostSkillState.success = false;
      state.PostSkillState.error = "";
    });
    builder.addCase(PostTalentSkill.fulfilled, (state, action) => {
      state.PostSkillState.success = true;

      state.PostSkillState.loading = null;
      state.PostSkillState.data = action.payload;
      state.PostSkillState.error = "";

      state.skill_array = [];

      state.skill_array = [FORM_INPUTS.EDIT_PROFILE.skill];

      if (action.meta.arg.isEdit === true) {
        toast.success(`Skill updated`, { autoClose: 6000 });
        state.talentSkills.data = state.talentSkills.data.map((list) => {
          return parseInt(list.id) === parseInt(action.meta.arg.id)
            ? action.payload
            : list;
        });
      } else {
        if (state.talentSkills.data.hasOwnProperty("results")) {
          state.talentSkills.data.results = [
            ...state.talentSkills.data.results,
            action.payload,
          ];
        }
        // toast.success(`Skill Saved!`, { autoClose: 1500 });
      }
      state.showEditSkillModal = false;
      state.projectsObject = {};

      state.projects_array = [FORM_INPUTS.EDIT_PROFILE.projects];
    });
    builder.addCase(PostTalentSkill.rejected, (state, action) => {
      state.PostSkillState.success = false;

      state.PostProjectsState.loading = null;
      state.PostProjectsState.data = [];
      // state.postTalentState.error = action.data.error.message;
      // console.log(action);
      if (action.error.code === "ERR_BAD_REQUEST") {
        toast.error(`${action.error.message}`, { autoClose: 6000 });
      }
    });

    // End handle post skill

    builder.addCase(getUserFromToken.fulfilled, (state, action) => {
      state.education_array = [FORM_INPUTS.EDIT_PROFILE.education]; // initialize  array
      state.work_experience_array = [FORM_INPUTS.EDIT_PROFILE.work];
      state.skill_array = [FORM_INPUTS.EDIT_PROFILE.skill];
      state.projects_array = [FORM_INPUTS.EDIT_PROFILE.projects];
      state.links_array = FORM_INPUTS.EDIT_PROFILE.links;
      state.bio_data_array = FORM_INPUTS.EDIT_PROFILE.biodata;
    });

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.education_array = []; // initialize  array
      state.work_experience_array = [];
      state.skill_array = [];
      state.projects_array = [];
      state.links_array = "";
      state.bio_data_array = "";
      state.talentWorkExperience = talentWorkExperience;
      state.talentProjects = talentProjects;
      state.talentEducation = talentEducation;
      state.talentState = talentState;
    });

    builder.addCase(getTalent.pending, (state) => {
      state.talentState.loading = true;
      state.talentState.error = "";
    });

    builder.addCase(getTalent.fulfilled, (state, action) => {
      state.talentState.loading = false;

      state.talentState.data = action.payload;
      state.talentSkills.data.results = action.payload.user_skills;
      state.talentState.error = "";
    });

    builder.addCase(getTalent.rejected, (state, action) => {
      state.talentState.loading = false;
      state.talentState.data = {};
    });

    builder.addCase(getTalentDetails.pending, (state) => {
      state.talentDetails.loading = true;
      state.talentDetails.error = "";
    });

    builder.addCase(getTalentDetails.fulfilled, (state, action) => {
      state.talentDetails.loading = false;
      state.talentDetails.data = action.payload;
      state.talentDetails.error = "";
    });

    builder.addCase(getTalentDetails.rejected, (state, action) => {
      state.talentDetails.loading = false;
      state.talentDetails.data = [];
      state.registerUserState.error = action.error.message;
    });

    builder.addCase(getEducation.pending, (state) => {
      state.talentEducation.loading = true;
      state.talentEducation.error = "";
    });

    builder.addCase(getEducation.fulfilled, (state, action) => {
      state.talentEducation.loading = false;
      state.talentEducation.data = action.payload;
      state.talentEducation.error = "";
    });

    builder.addCase(getEducation.rejected, (state, action) => {
      state.talentEducation.loading = false;
      state.talentEducation.data = [];
    });

    builder.addCase(getTalentWorkExperiences.pending, (state) => {
      state.talentWorkExperience.loading = true;
      state.talentWorkExperience.error = "";
    });

    builder.addCase(getTalentWorkExperiences.fulfilled, (state, action) => {
      state.talentWorkExperience.loading = false;
      state.talentWorkExperience.data = action.payload;
      state.talentWorkExperience.error = "";
    });

    builder.addCase(getTalentWorkExperiences.rejected, (state, action) => {
      state.talentWorkExperience.loading = false;
      state.talentWorkExperience.data = [];
    });

    builder.addCase(getTalentSkills.pending, (state) => {
      state.talentSkills.loading = true;
      state.talentSkills.error = "";
    });

    builder.addCase(getTalentSkills.fulfilled, (state, action) => {
      state.talentSkills.loading = false;
      state.talentSkills.data = action.payload;
      state.talentSkills.error = "";
    });

    builder.addCase(getTalentSkills.rejected, (state, action) => {
      state.talentSkills.loading = false;
      state.talentSkills.data = [];
    });

    builder.addCase(getTalentProjects.pending, (state) => {
      state.talentProjects.loading = true;
      state.talentProjects.error = "";
    });

    builder.addCase(getTalentProjects.fulfilled, (state, action) => {
      state.talentProjects.loading = false;
      state.talentProjects.data = action.payload;
      state.talentProjects.error = "";
    });

    builder.addCase(getTalentProjects.rejected, (state, action) => {
      state.talentProjects.loading = false;
      state.talentProjects.data = [];
    });

    builder.addCase(handleValidateStartEndDates.pending, (state) => {});

    builder.addCase(handleValidateStartEndDates.fulfilled, (state, action) => {
      switch (action.payload.state) {
        case "education":
          state.education_array[0] = state.education_array[0].map((data1) => {
            return {
              ...data1, // make a copy of the bio_data_array before manipulating it
              children: data1.children.map((d2) => {
                return {
                  ...d2, // make a copy of the children
                  // change the hasError property if isReuired is true and value is empty

                  hasDateError:
                    d2.name === "start_date" || d2.name === "end_date"
                      ? CheckEndDateLessThanStart(JSON.stringify(data1))
                        ? true
                        : false
                      : d2.hasDateError,
                  dateErrorMessage:
                    d2.name === "start_date" || d2.name === "end_date"
                      ? CheckEndDateLessThanStart(JSON.stringify(data1))
                        ? "The end date cannot be less than the start date"
                        : ""
                      : false,
                };
              }),
            };
          });
        case "projects":
          state.projects_array[0] = state.projects_array[0].map((data1) => {
            return {
              ...data1, // make a copy of the bio_data_array before manipulating it
              children: data1.children.map((d2) => {
                return {
                  ...d2, // make a copy of the children
                  // change the hasError property if isReuired is true and value is empty

                  hasDateError:
                    d2.name === "start_date" || d2.name === "end_date"
                      ? CheckEndDateLessThanStart(JSON.stringify(data1))
                        ? true
                        : false
                      : d2.hasDateError,
                  dateErrorMessage:
                    d2.name === "start_date" || d2.name === "end_date"
                      ? CheckEndDateLessThanStart(JSON.stringify(data1))
                        ? "The end date cannot be less than the start date"
                        : ""
                      : false,
                };
              }),
            };
          });

        case "work":
          state.work_experience_array[0] = state.work_experience_array[0].map(
            (data1) => {
              return {
                ...data1, // make a copy of the bio_data_array before manipulating it
                children: data1.children.map((d2) => {
                  return {
                    ...d2, // make a copy of the children
                    // change the hasError property if isReuired is true and value is empty

                    hasDateError:
                      d2.name === "start_date" || d2.name === "end_date"
                        ? CheckEndDateLessThanStart(JSON.stringify(data1))
                          ? true
                          : false
                        : d2.hasDateError,
                    dateErrorMessage:
                      d2.name === "start_date" || d2.name === "end_date"
                        ? CheckEndDateLessThanStart(JSON.stringify(data1))
                          ? "The end date cannot be less than the start date"
                          : ""
                        : false,
                  };
                }),
              };
            }
          );
      }
    });

    //validate projects url

    builder.addCase(handleValidateUrl.fulfilled, (state, action) => {
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        case "projects":
          state.projects_array[0] = state.projects_array[0].map((data1) => {
            return {
              ...data1, // make a copy of the projects_array before manipulating it
              children: data1.children.map((d2) => {
                return {
                  ...d2, // make a copy of the children
                  // change the hasURLError property if isReuired is true and value is empty

                  hasURLError:
                    d2.name === "url" && d2.value !== ""
                      ? !validateURL(d2.value)
                        ? true
                        : false
                      : d2.hasURLError,
                  URLErrorMessage:
                    d2.name === "url" && d2.value !== ""
                      ? !validateURL(d2.value)
                        ? "This URL is invalid. Start with https:// or http://"
                        : ""
                      : "",
                };
              }),
            };
          });
        // handleValidateUrl
      }
    });

    builder.addCase(handleValidatePhone.fulfilled, (state, action) => {
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        case "bio_data":
          state.bio_data_array = state.bio_data_array.map((data1) => {
            return {
              ...data1, // make a copy of the projects_array before manipulating it
              children: data1.children.map((d2) => {
                return {
                  ...d2, // make a copy of the children
                  // change the hasURLError property if isReuired is true and value is empty

                  hasPhoneError:
                    d2.name === "phone" && d2.value !== ""
                      ? !validatePhone(d2.value)
                        ? true
                        : false
                      : d2.hasURLError,
                  PhoneErrorMessage:
                    d2.name === "phone" && d2.value !== ""
                      ? !validatePhone(d2.value)
                        ? "Phone number is invalid. Start with country code ex +123"
                        : ""
                      : "",
                };
              }),
            };
          });
        // handleValidateUrl
      }
    });

    // end validate

    builder.addCase(
      handleValidateStartEndDates.rejected,
      (state, action) => {}
    );

    //delete education

    builder.addCase(DeleteEducation.pending, (state) => {
      state.deleteEducationState.loading = true;
      state.deleteEducationState.error = "";
    });

    builder.addCase(DeleteEducation.fulfilled, (state, action) => {
      state.deleteEducationState.loading = false;
      state.deleteEducationState.data = action.payload;
      state.deleteEducationState.error = "";

      state.showDeleteEducationModal = false;
      state.educationObject = {};

      state.talentState.data.talenteducation_set =
        state.talentState.data.talenteducation_set.filter((res) => {
          return res.id !== parseInt(action.meta.arg.id);
        });
    });

    builder.addCase(DeleteEducation.rejected, (state, action) => {
      state.deleteEducationState.loading = false;
      state.deleteEducationState.data = [];
    });
    //end delete education
    // delete project

    builder.addCase(DeleteProject.pending, (state) => {
      state.deleteProjectState.loading = true;
      state.deleteProjectState.error = "";
    });

    builder.addCase(DeleteProject.fulfilled, (state, action) => {
      state.deleteProjectState.loading = false;
      state.deleteProjectState.data = action.payload;
      state.deleteProjectState.error = "";
      state.showDeleteProjectModal = false;

      state.projectsObject = {};

      state.talentState.data.talentproject_set =
        state.talentState.data.talentproject_set.filter((res) => {
          return res.id !== parseInt(action.meta.arg.id);
        });
    });

    builder.addCase(DeleteProject.rejected, (state, action) => {
      state.deleteProjectState.loading = false;
      state.deleteProjectState.data = [];
    });

    // end project delete

    // delete work

    builder.addCase(DeleteWork.pending, (state) => {
      state.deleteWorkState.loading = true;
      state.deleteWorkState.error = "";
    });

    builder.addCase(DeleteWork.fulfilled, (state, action) => {
      state.deleteWorkState.loading = false;
      state.deleteWorkState.data = action.payload;
      state.deleteWorkState.error = "";
      state.showDeleteWorkModal = false;
      state.workObject = {};

      state.talentState.data.workexperience_set =
        state.talentState.data.workexperience_set.filter((res) => {
          return res.id !== parseInt(action.meta.arg.id);
        });
    });

    builder.addCase(DeleteWork.rejected, (state, action) => {
      state.deleteWorkState.loading = false;
      state.deleteWorkState.data = [];
    });

    // end delete work

    // Delete skill

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

      state.talentSkills.data.results = state.talentSkills.data.results.filter(
        (res) => {
          return res.id !== parseInt(action.meta.arg.id);
        }
      );

      return state;
    });

    builder.addCase(DeleteSkill.rejected, (state, action) => {
      state.JobA.loading = false;
      state.deleteSkillState.data = [];
    });

    // handle job availability
    // jobAvailabilityFn

    builder.addCase(jobAvailabilityFn.pending, (state) => {
      state.JobAvailabilityState.loading = true;
      state.JobAvailabilityState.error = "";
    });

    builder.addCase(jobAvailabilityFn.fulfilled, (state, action) => {
      state.JobAvailabilityState.loading = false;
      state.JobAvailabilityState.data = action.payload;
      state.JobAvailabilityState.error = "";
    });

    builder.addCase(jobAvailabilityFn.rejected, (state, action) => {
      state.JobAvailabilityState.loading = false;
      state.JobAvailabilityState.data = [];
    });

    // end
  },
});

export const {
  resetTalentDetails,
  handleOnChangeTextInput,
  handleOnSelectInput,
  handleMultiSelect,
  handleAddEducation,
  handleAddSkill,
  handleAddWorkExperience,
  handleAddProjects,
  handleOnDateChange,
  preloadBioData,
  preloadEducationData,
  handleValidateBioData,
  handleValidateEducation,
  handleValidateWorkExperience,
  handleValidateSkill,
  toggleEditFormEducation,
  toggleDeleteEducation,
  toggleDeleteSkill,
  toggleEditworkForm,
  preloadWorkData,
  preloadProjectData,
  toggleEditProjectForm,
  handleValidateProjects,
  handleTextInputCheckEmptyValueFn,
  toggleDeletProject,
  toggleDeleteWork,
  handleCheckBoxChange,
  handleTalentPhotoChange,
  addTalentDataFromLocalStorage,
  updateSuccessStateBioData,
  handleRadioChange,
  preloadAvailabilityData,
  updateAvailability,
  toggleShowManualUniversityForm,
  updateTalentEducation,
  updateTalentWorkExperience,
  updateTalentProjects,
} = TalentProfileSlice.actions;

export default TalentProfileSlice.reducer;
