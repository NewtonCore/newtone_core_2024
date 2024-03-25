import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  AxiosGetService,
  AxiosPostService,
  AxiosPutService,
} from "../../../constants/AxiosServices";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import {
  checkStringIsBinary,
  ExtractFieldsFromFormData,
  JsonToformData,
  validateURL,
} from "../../../constants/utils";
import { logOutUser } from "../Auth/authSlice";

export const getSkills = createAsyncThunk(
  "editCompanyProfileSlice/AxiosGetServiceHeader",
  async (data) => {
    let { url, token } = data;
    let res = await AxiosGetService(url, token);
    // console.log(res.data);
    return res.data;
  }
);

export const getCompanyProfile = createAsyncThunk(
  "editCompanyProfileSlice/getCompanyProfile",
  async (data) => {
    let url = `${process.env.REACT_APP_MY_COMPANY_PROFILE}`;
    let res = await AxiosGetService(url);
    return res.data;
  }
);

export const handleValidateUrl = createAsyncThunk(
  "editCompanyProfileSlice/handleValidateUrl",
  async (data) => {
    return data;
  }
);

export const EditCompanyProfile = createAsyncThunk(
  "editCompanyProfileSlice/EditCompanyProfile",
  async (dataPassed, { rejectWithValue }) => {
    let { data, hasProfile, companyID } = dataPassed;
    let bio_data = ExtractFieldsFromFormData(data);

    // check to see if logo is string  and delete that fromn the object
    if (typeof bio_data.logo === "string") {
      delete bio_data.logo;
    }

    try {
      let res = !hasProfile
        ? await AxiosPostService(
            `${process.env.REACT_APP_COMPANY_PROFILE}`,
            JsonToformData(bio_data)
          )
        : await AxiosPutService(
            `${process.env.REACT_APP_COMPANY_PROFILE}${companyID}/`,
            JsonToformData(bio_data)
          );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }

    // console.log(res)
  }
);

let editProfileState = {
  loading: null,
  data: [],
  error: "",
};

const companyProfile = {
  loading: null,
  data: [],
  error: "",
};

const editCompanyProfileSlice = createSlice({
  name: "editCompanyProfileSlice",
  initialState: {
    company_profile_array: FORM_INPUTS.company_profile_form, // initialize  array
    editProfileState,
    testImage: "",
    companyProfile,
  },
  reducers: {
    toggleLoginForm: (state) => {},
    preloadCompanyData: (state, action) => {
      //preload the biodata with data from the companyData

      let { payload: companyData } = action;
      const keys = Object.keys(companyData);

      keys.forEach((key) => {
        // console.log(key)

        // extract the key and value from the object
        let KeyName = `${key}`;
        let Value = `${companyData[key]}`;

        // preload the value of the children in the state of the company_job_array
        state.company_profile_array = state.company_profile_array.map(
          (data1) => {
            return {
              ...data1,
              children: data1.children.map((d2) => {
                return {
                  ...d2,
                  value:
                    d2.name === `${KeyName}`
                      ? Value !== "null"
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

    handleTextInputCheckEmptyValueFn: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        // case when the payload sent is biodata

        case "biodata":
          // console.log(action.payload)

          let bioDataValue =
            state.company_profile_array[RowKey]["children"][ChildKey].value;
          let bioDataisRequired =
            state.company_profile_array[RowKey]["children"][ChildKey]
              .isRequired;

          bioDataValue = bioDataValue.replace(/\s+/g, " ");

          if (
            (bioDataisRequired && bioDataValue === " ") ||
            (bioDataisRequired && bioDataValue === "")
          ) {
            state.company_profile_array[RowKey]["children"][
              ChildKey
            ].hasError = true;
            state.company_profile_array[RowKey]["children"][
              ChildKey
            ].errorMessage = "This field is required";
          } else {
            state.company_profile_array[RowKey]["children"][
              ChildKey
            ].hasError = false;
            state.company_profile_array[RowKey]["children"][
              ChildKey
            ].errorMessage = "";
          }

          return state;
      }
    },
    handleOnChangeTextInputCompany: (state, action) => {
      //handle on change of textInput
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          // console.log(action.payload)
          state.company_profile_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleOnSelectInput: (state, action) => {
      const { DataKey, RowKey, ChildKey, valueToUpdate } = action.payload;

      //handle on change of textInput
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          state.company_profile_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleOnChangeFileInputCompany: (state, action) => {
      //handle on change of textInput
      // console.log(action.payload)
      state.testImage = action.payload;

      const { RowKey, ChildKey, valueToUpdate } = action.payload;
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          // console.log(action.payload)
          state.company_profile_array[RowKey]["children"][ChildKey].value =
            valueToUpdate;
          return state;
      }
    },

    handleResetInputsCompany: (state) => {
      // console.log("reset");
      return {
        ...state, // make a copy of the state

        company_profile_array: state.company_profile_array.map((data1) => {
          return {
            ...data1, // make a copy of the bio_data_array before manipulating it
            children: data1.children.map((d2) => {
              return {
                ...d2, // make a copy of the children
                // change the value key in the data if d2.name equals action.payload.keyname then update it with the value from the payload
                value: "",
              };
            }),
          };
        }),
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(EditCompanyProfile.pending, (state) => {
      state.editProfileState.loading = true;
    });

    builder.addCase(EditCompanyProfile.fulfilled, (state, action) => {
      state.editProfileState.loading = false;
      state.editProfileState.data = action.payload;
      state.companyProfile.data = action.payload;
      state.editProfileState.error = "";
      // state.company_profile_array = FORM_INPUTS.company_profile_form;

      toast.success(`Success editing profile`, {
        autoClose: 6000,
      });
    });

    builder.addCase(EditCompanyProfile.rejected, (state, action) => {
      state.editProfileState.error = action.error.message;
      state.editProfileState.loading = false;
      let { payload } = action;

      // let payload_one = payload[0]

      let msg = "";
      // console.log(payload)

      Object.keys(payload).forEach(function (key, index) {
        // ddata[key] *= 2;
        // console.log(ddata)
        msg += `${key} (${payload[key]}) `;
      });

      toast.error(msg);

      // toast.error(`${action.error.message}`, { autoClose: 6000 });
    });

    builder.addCase(getCompanyProfile.pending, (state, action) => {
      state.companyProfile.loading = true;
    });
    builder.addCase(getCompanyProfile.fulfilled, (state, action) => {
      state.companyProfile.loading = false;
      state.companyProfile.data = action.payload;
      state.companyProfile.error = "";
    });

    builder.addCase(getCompanyProfile.rejected, (state, action) => {
      state.companyProfile.loading = false;
      state.companyProfile.data = [];
    });

    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.companyProfile = companyProfile;
      state.editProfileState = editProfileState;
    });

    builder.addCase(handleValidateUrl.fulfilled, (state, action) => {
      // eslint-disable-next-line default-case
      switch (action.payload.state) {
        case "biodata":
          state.company_profile_array = state.company_profile_array.map((data1) => {
            return {
              ...data1, // make a copy of the projects_array before manipulating it
              children: data1.children.map((d2) => {
                return {
                  ...d2, // make a copy of the children
                  // change the hasURLError property if isReuired is true and value is empty

                  hasURLError:
                    d2.input_type === "url" && d2.value !== ""
                      ? !validateURL(d2.value)
                        ? true
                        : false
                      : d2.hasURLError,
                  URLErrorMessage:
                    d2.input_type === "url" && d2.value !== ""
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
  },
});

export const {
  handleOnChangeTextInputCompany,
  handleResetInputsCompany,
  handleOnChangeFileInputCompany,
  preloadCompanyData,
  handleOnSelectInput,
  handleTextInputCheckEmptyValueFn,
} = editCompanyProfileSlice.actions;

export default editCompanyProfileSlice.reducer;
