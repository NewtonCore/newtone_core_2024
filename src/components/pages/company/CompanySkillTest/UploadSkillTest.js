import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import AppButton from "../../../atoms/AppButton/AppButton";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import {  uploadTestQuestion } from "../../../../app-redux/features/Skill/skillSlice";
import { toast } from "react-toastify";
import {
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../../constants/utils";
import SkillQuestionForm from "./SkillQuestionForm";

function UploadSkillTest() {
  const skill = useSelector((state) => state.skill);
  const { staff_upload_questions } = skill;
  const dispatch = useDispatch();

  const handleUpload = () => {
    let data = ExtractFieldsFromFormData(staff_upload_questions);
    data = JsonToformData(data);

    dispatch(uploadTestQuestion(data))
      .unwrap()
      .then((res) => {
        toast.success("Done!");
      })
      .catch((err) => {
        // console.log(err)
        if (err.status === 500) {
          toast.error("There is an error uploading your tests");
        } else {
          toast.error(err.data);
        }
        // toast.error(err)
      });
  };

  return (
    <CompanyLayout pageTitle="Upload Questiions">
      <WhiteBgDiv>
        <SkillQuestionForm data={staff_upload_questions} />
        <AppButton onClick={() => handleUpload()} size="small">
          Submit
        </AppButton>
      </WhiteBgDiv>
    </CompanyLayout>
  );
}

export default UploadSkillTest;
