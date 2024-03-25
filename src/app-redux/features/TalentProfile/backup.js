import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FORM_INPUTS } from "../../../constants/FormInputs";
import { ExtractFieldsFromFormData } from "../../../constants/utils";

const initialState = {
  x: 0,
  education_array: [FORM_INPUTS.EDIT_PROFILE.education], // initialize  array
  work_experience_array: [FORM_INPUTS.EDIT_PROFILE.work],
  skill_array: [FORM_INPUTS.EDIT_PROFILE.skill],
  projects_array: [FORM_INPUTS.EDIT_PROFILE.projects],
  links_array: FORM_INPUTS.EDIT_PROFILE.links,
  bio_data_array: FORM_INPUTS.EDIT_PROFILE.biodata,
};

let bio_data = ExtractFieldsFromFormData(initialState.bio_data_array);

const editProfileSlice = createSlice({
  name: "editProfileSlice",
  initialState,
  reducers: {
    test: (state) => {
      state.x = 1;
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
      const {DataKey,RowKey,ChildKey,valueToUpdate}=action.payload
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          // console.log(action.payload)
          state.bio_data_array[RowKey]["children"][ChildKey].value = valueToUpdate
          return state
          // return {
          //   ...state, // make a copy of the state

          //   bio_data_array: state.bio_data_array.map((data1) => {
          //     return {
          //       ...data1, // make a copy of the bio_data_array before manipulating it
          //       children: data1.children.map((d2) => {
          //         return {
          //           ...d2, // make a copy of the children
          //           // change the value key in the data if d2.name equals action.payload.keyname then update it with the value from the payload
          //           value:
          //             d2.name === action.payload.KeyName
          //               ? action.payload.valueToUpdate
          //               : d2["value"],
          //         };
          //       }),
          //     };
          //   }),
          // };

        case "skill":
          state.bio_data_array[DataKey][RowKey]["children"][ChildKey].value = valueToUpdate
          return state
          // return {
          //   ...state, // make a copy of the state

          //   skill_array: state.skill_array.map((data1) => {
          //     return {
          //       ...data1, // make a copy of the bio_data_array before manipulating it
          //       children: data1.children.map((d2) => {
          //         return {
          //           ...d2, // make a copy of the children
          //           // change the value key in the data if d2.name equals action.payload.keyname then update it with the value from the payload
          //           value:
          //             d2.name === action.payload.KeyName
          //               ? action.payload.valueToUpdate
          //               : d2["value"],
          //         };
          //       }),
          //     };
          //   }),
          // };

        case "education_data":
          state.bio_data_array[DataKey][RowKey]["children"][ChildKey].value = valueToUpdate
          return state

          // return {
          //   ...state,
          //   education_array: state.education_array.map((d1, index) => {
          //     return index === action.payload.KeyIndex
          //       ? d1.map((d2) => {
          //           return {
          //             ...d2,
          //             children: d2.children.map((d22) => {
          //               return {
          //                 ...d22,
          //                 value:
          //                   d22.name === action.payload.KeyName
          //                     ? action.payload.valueToUpdate
          //                     : d22["value"],
          //               };
          //             }),
          //           };
          //         })
          //       : d1;
          //   }),
          // };

        case "work_experience":
          return {
            ...state,
            work_experience_array: state.work_experience_array.map(
              (d1, index) => {
                return index === action.payload.KeyIndex
                  ? d1.map((d2) => {
                      return {
                        ...d2,
                        children: d2.children.map((d22) => {
                          return {
                            ...d22,
                            value:
                              d22.name === action.payload.KeyName
                                ? action.payload.valueToUpdate
                                : d22["value"],
                          };
                        }),
                      };
                    })
                  : d1;
              }
            ),
          };

        case "skill":
          return {
            ...state,
            skill_array: state.skill_array.map((d1, index) => {
              return index === action.payload.KeyIndex
                ? d1.map((d2) => {
                    return {
                      ...d2,
                      children: d2.children.map((d22) => {
                        return {
                          ...d22,
                          value:
                            d22.name === action.payload.KeyName
                              ? action.payload.valueToUpdate
                              : d22["value"],
                        };
                      }),
                    };
                  })
                : d1;
            }),
          };
      }
    },

    handleOnSelectInput: (state, action) => {
      //handle on change of textInput
      switch (action.payload.state) {
        // case when the payload sent is biodata
        case "biodata":
          return {
            ...state, // make a copy of the state

            bio_data_array: state.bio_data_array.map((data1) => {
              return {
                ...data1, // make a copy of the bio_data_array before manipulating it
                children: data1.children.map((d2) => {
                  return {
                    ...d2, // make a copy of the children
                    // change the value key in the data if d2.name equals action.payload.keyname then update it with the value from the payload
                    value:
                      d2.name === action.payload.KeyName
                        ? action.payload.valueToUpdate
                        : d2["value"],
                  };
                }),
              };
            }),
          };
      }
    },
  },
  extraReducers: (builder) => {},
});

export const {
  handleOnChangeTextInput,
  handleOnSelectInput,
  handleAddEducation,
  handleAddSkill,
  handleAddWorkExperience,
  handleAddProjects,
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
