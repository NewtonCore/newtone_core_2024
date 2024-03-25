import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import AppButton from "../../../atoms/AppButton/AppButton";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import {
  downloadTestResult,
  resetStaffSkill,
  resetStaffTalents,
  uploadTestQuestion,
} from "../../../../app-redux/features/Skill/skillSlice";
import { toast } from "react-toastify";
import {
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../../constants/utils";
import SkillQuestionForm from "./SkillQuestionForm";
import TalentListForm from "./TalentListForm";
import { getAllTalents } from "../../../../app-redux/features/TalentSlice/talentSlice";
import StaffSelectSkill from "./StaffSelectSkill";

function DownloadSkillResult() {
  const skill = useSelector((state) => state.skill);
  const { staff_talent_list, staff_skill_list } = skill;
  const dispatch = useDispatch();
  const [talentSelected, SetTalentSelected] = useState(undefined);
  const [skillSelected, SetSkillSelected] = useState(undefined);
  const [isLoading, SetIsLoading] = useState(false);

  const downloadTypes = [
    {
      id: 1,
      title: "Talent",
      desc: "Download all skill results for talent",
      type: "talent",
      style: { marginRight: 5 },
    },
    {
      id: 2,
      title: "Skill",
      desc: "Download skill result for all talents",
      type: "skill",
    },
  ];
  const [downloadType, SetDownloadType] = useState(downloadTypes[0]);

  const handleSwitchType = (type) => {
    let typeSelected = JSON.parse(type);
    if (typeSelected.type === "skill") {
      SetSkillSelected(undefined);
      SetTalentSelected(undefined);
      dispatch(resetStaffTalents());
    } else {
      SetTalentSelected(undefined);
      SetSkillSelected(downloadTypes[0]);
      dispatch(resetStaffSkill());
    }

    SetDownloadType(typeSelected);
  };

  const handleDownload = () => {
    SetIsLoading(true);
    let apiUrl = ``;

    if (downloadType.type === "skill") {
      apiUrl = `${process.env.REACT_APP_DOWNLOAD_SKILL}${parseInt(
        skillSelected
      )}/?type=${downloadType.type}`;
    } else if (downloadType.type === "talent") {
      apiUrl = `${process.env.REACT_APP_DOWNLOAD_SKILL}${talentSelected.id}/?type=${downloadType.type}`;
    } else {
      toast.error("Cannot download");
    }

    // Define the URL of the API endpoint that serves the file

    // Perform a GET request to the API endpoint
    fetch(apiUrl)
      .then((response) => {
        // Check if the response status is OK (HTTP status code 200)
        SetIsLoading(false);

        if (!response.ok) {
          throw new Error(
            `HTTP status code ${response.status}: ${response.statusText}`
          );
        }

        // Extract the filename from the response headers (if available)
        const contentDisposition = response.headers.get("content-disposition");
        const filenameMatch =
          contentDisposition && contentDisposition.match(/filename="(.+)"/);
        const suggestedFilename = filenameMatch
          ? filenameMatch[1]
          : `Skill_Result`;

        // Create a blob from the response data
        return response.blob().then((blob) => ({ blob, suggestedFilename }));
      })
      .then(({ blob, suggestedFilename }) => {
        SetIsLoading(true);

        // Create a URL for the blob
        const blobUrl = window.URL.createObjectURL(blob);

        // Create a link element to trigger the download
        const a = document.createElement("a");
        a.href = blobUrl;
        a.download = suggestedFilename;

        // Trigger a click event on the link to start the download
        a.click();

        // Revoke the blob URL to free up resources
        window.URL.revokeObjectURL(blobUrl);
        SetIsLoading(false);
      })
      .catch((error) => {
        SetIsLoading(false);

        toast.error(`'Error downloading the file:', ${error}`);
        // console.error('Error downloading the file:', error.message);
      });
  };
  useEffect(() => {
    dispatch(getAllTalents()).then((res) => {
      // console.log({ res });
    });
  }, []);

  return (
    <CompanyLayout pageTitle="Download Skill Test Results">
      <WhiteBgDiv>
        <p className="fs-5 text">{downloadType.desc} </p>
        {/*         
      <p>
              Download type
            </p> */}
        {downloadTypes.map((type) => {
          return (
            <>
              <button
                size="small"
                className="mb-4 btn btn-default"
                onClick={() => handleSwitchType(JSON.stringify(type))}
                style={{
                  backgroundColor:
                    downloadType.id === type.id ? "#016dd6" : "#efefef",
                  color: downloadType.id === type.id ? "white" : "#016dd6",
                  ...type.style,
                }}
              >
                {type.title}
              </button>
              {/* <p className="text-muted">{type.desc}</p> */}
            </>
          );
        })}
        {downloadType.type === "talent" && (
          <TalentListForm
            SetTalentSelected={SetTalentSelected}
            data={staff_talent_list}
          />
        )}

        {/* downloadType  {JSON.stringify(downloadType)} */}
        {talentSelected !== undefined && (
          <>
            {skillSelected === undefined && downloadType.type === "talent" && (
              <div
                className={`bg-info.bg-gradient border-start ${
                  talentSelected.id === undefined ||
                  talentSelected.id === null
                    ? "border-danger"
                    : "border-info"
                }  border-3  p-2 `}
              >
                {talentSelected.id === undefined ||
                talentSelected.id === null ? (
                  <>
                  Talent does not have a profile
                  <p className="text-muted">
                    Downloading may result into a 'not found' error!
                  </p>
                  </>
                ) : (
                  <>
                    <h6>
                      Full name: {talentSelected.first_name}{" "}
                      {talentSelected.last_name}
                    </h6>
                    <h6>Email: {talentSelected.email}</h6>
                    <h6>Talent ID: {talentSelected.id}</h6>
                  </>
                )}
              </div>
            )}
          </>
        )}
        {/* sss {JSON.stringify(skillSelected)} */}

        {downloadType.type === "skill" && (
          <>
            <SkillQuestionForm
              data={staff_skill_list}
              SetSkillSelected={SetSkillSelected}
            />
          </>
        )}
        <br></br>
        <AppButton
          disabled={
            talentSelected === undefined && skillSelected === undefined
              ? true
              : false
          }
          onClick={isLoading ? {} : () => handleDownload()}
          size="small"
        >
          {isLoading ? "Please wait..." : "Download result"}
          {/* {talentSelected === undefined
            ? "Select talent"
            : `Download result for ${talentSelected.first_name}`} */}
        </AppButton>
      </WhiteBgDiv>
    </CompanyLayout>
  );
}

export default DownloadSkillResult;
