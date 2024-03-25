import React from "react";
import GorillaResultForm from "./GorillaResultForm";
import { useDispatch, useSelector } from "react-redux";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import AppButton from "../../../atoms/AppButton/AppButton";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import { uploadTestGorillaTest } from "../../../../app-redux/features/Skill/skillSlice";
import { toast } from "react-toastify";
import {
  ExtractFieldsFromFormData,
  JsonToformData,
} from "../../../../constants/utils";

function UploadGorillaResult() {
  const skill = useSelector((state) => state.skill);
  const { staff_upload_gorilla_result } = skill;
  const dispatch = useDispatch();

  const handleUpload = () => {
    let data = ExtractFieldsFromFormData(staff_upload_gorilla_result);
    data = JsonToformData(data);

    dispatch(uploadTestGorillaTest(data))
      .unwrap()
      .then((res) => {
        toast.success("Done!");
      })
      .catch((err) => {
        // console.log(err)
        if (err.status === 500) {
          toast.error("There is an error with your file");
        } else {
          toast.error(err.data);
        }
        // toast.error(err)
      });
  };

  return (
    <CompanyLayout pageTitle="Upload TestGorilla Result">
      <WhiteBgDiv>
        <GorillaResultForm data={staff_upload_gorilla_result} />
        <AppButton onClick={() => handleUpload()} size="small">
          Submit
        </AppButton>
      </WhiteBgDiv>
    </CompanyLayout>
  );
}

export default UploadGorillaResult;
