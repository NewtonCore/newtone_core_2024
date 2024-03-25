import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditCompanyProfile,
  handleOnChangeFileInputCompany,
  handleOnChangeTextInputCompany,
  handleOnSelectInput,
  preloadCompanyData,
} from "../../../../app-redux/features/editCompanyProfile/editCompanyProfileSlice";
import {
  ExtractFieldsFromFormData,
  SpreadCompanyUserDetails,
  checkObjectHasURLerror,
  checkPropertiesIsEmpty,
} from "../../../../constants/utils";
import AppButton from "../../../atoms/AppButton/AppButton";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import CompanyEditProfileForm from "./CompanyEditProfileForm";
import { toast } from "react-toastify";

function CompanyEditProfile() {
  const editCompanyData = useSelector((state) => state.editCompany);
  const authData = useSelector((state) => state.auth);
  let { loginUserState } = authData;
  let { data: userData } = loginUserState;

  const { companyProfile, editProfileState } = editCompanyData;
  const { data: companyProfileData } = companyProfile;
  // const {results:companyProfileResult} = companyProfileData;

  const { company_profile_array } = editCompanyData;
  const dispatch = useDispatch();

  const PostEditCompanyProfile = () => {
    // dispatch(handleValidateUrl({ state: "biodata" }));

    let _object = ExtractFieldsFromFormData(company_profile_array, true);

    let _object2 = ExtractFieldsFromFormData(
      company_profile_array,
      true,
      "hasURLError"
    );
    let checkURLError = checkObjectHasURLerror(_object2, "company_website");
    let checkIfDataEmpty = checkPropertiesIsEmpty(_object);
    // console.log(_object2,checkURLError)

    if (checkURLError) {
      setTimeout(() => {
        toast.warning("The Projects URL is invalid", 1500);
      }, 500);

      return 0;
    }

    if (checkIfDataEmpty) {
      setTimeout(() => {
        toast.warning("Kindly fill in the required fields", 1500);
      }, 500);

      return 0;
    }

    //handle posting the data to the api
    dispatch(
      EditCompanyProfile({
        data: company_profile_array,
        hasProfile: companyProfileData.length !== 0 ? true : false,
        companyID: companyProfileData.id,
      })
    );
  };

  useEffect(() => {
    // Handle preloading the data from the profile of the company to the form
    if (companyProfileData.length !== 0) {
      // companyProfileData.first_name = userData.first_name
      // companyProfileData.last_name = userData.last_name

      dispatch(preloadCompanyData(userData));
      dispatch(
        preloadCompanyData(SpreadCompanyUserDetails(companyProfileData))
      );
    } else {
      dispatch(preloadCompanyData(userData));
    }
  }, [companyProfileData, userData]);

  return (
    <CompanyLayout pageTitle="Edit Profile">
      <div id="edit_profile_div">
        <WhiteBgDiv>
          {/* SS {JSON.stringify(company_profile_array)} */}

          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={
              editProfileState.loading !== null
                ? editProfileState.loading
                : false
            }
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <CompanyEditProfileForm
            profile_logo={
              companyProfileData.logo !== null ? companyProfileData.logo : null
            }
            handleOnSelectInput={handleOnSelectInput}
            dispatch={dispatch}
            handleTextInputFn={handleOnChangeTextInputCompany}
            handleFileChange={handleOnChangeFileInputCompany}
            data={company_profile_array}
          />
          <AppButton
            onClick={() => PostEditCompanyProfile()}
            label="Save Profile"
          ></AppButton>
        </WhiteBgDiv>
      </div>
    </CompanyLayout>
  );
}

export default CompanyEditProfile;
