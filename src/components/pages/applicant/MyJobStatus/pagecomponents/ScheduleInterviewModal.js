// import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import AppButton from "../../../atoms/AppButton/AppButton";
import AppButton from "../../../../atoms/AppButton/AppButton";
import {
  toggleShowScheduleInterviewModal,
  handleScheduleInterviewChange,
  PostScheduleInterview,
  PutScheduleInterview,
  // GetSchedulingInterview,
  handleOnSelectScheduleInterview,
} from "../../../../../app-redux/features/jobCompany/jobCompanySlice";
import {
  toggleApplyJobModal,
  handleApplyingTalentChange,
} from "../../../../../app-redux/features/TalentSlice/talentSlice";
import ScheduleInterviewForm from "./ScheduleInterviewForm";
import { JsonToformData } from "../../../../../constants/utils";
import "./Modal.css";
import { toast } from "react-toastify";

function ApplyModal({ jobId, jobApplicationObject }) {
  //   const appData = useSelector((state) => state.appData);
  const jobCompany = useSelector((state) => state.jobCompany);
  const {
    showSheduleInterviewModal,
    company_schedule_interview_form,
    schedulingInterviewData,
    scheduleInterviewState,
  } = jobCompany;
  const dispatch = useDispatch();

  const handleApplyingTalentFormChange = (e,meta) => {
    // alert('changed')
    // console.log(meta)

    let value = "";
    let name = "";

    if (e.target !== undefined) {
      value = e.target.value;
      name = e.target.name;
    } else {
      value = e;
      name=meta.input_name
    }

    // let { value, name } = e.target;
    dispatch(handleScheduleInterviewChange({ name: name, value: value }));
  };

  let handleSelectChange = (value, meta) => {
    const { DataKey, RowKey, ChildKey } = meta;
    let name =
      company_schedule_interview_form[RowKey]["children"][ChildKey].name;
    console.log(name, JSON.parse(value));
    let new_val = value.replace(/\\/g, "");
    // console.log(new_val)
    // dispatch(handleScheduleInterviewChange({ name: name, value: new_val }));
    // console.log(DataKey, RowKey, ChildKey)
    // console.log(company_schedule_interview_form[RowKey]["children"][ChildKey])
    dispatch(
      handleOnSelectScheduleInterview({
        valueToUpdate: JSON.parse(value),
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  const handleScheduleInterview = (e) => {
    e.preventDefault();
    // console.log(jobApplicationObject, 'in button')
    let new_talent_data = { ...schedulingInterviewData, job: parseInt(jobId) };
    if (jobApplicationObject) {
      new_talent_data = {
        ...new_talent_data,
        talentId: jobApplicationObject.talentId,
        apply_talent: jobApplicationObject.id,
      };
    }
    // console.log("update an application", new_talent_data);
    if (new_talent_data.id) {
      dispatch(PutScheduleInterview({ data: new_talent_data }))
        .unwrap()
        .then((res) => {
          toast.success("The interview details has been sent");
          // dispatch(toggleShowScheduleInterviewModal())
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      dispatch(PostScheduleInterview({ data: new_talent_data }))
        .unwrap()
        .then((res) => {
          toast.success("The interview details has been sent");
          // dispatch(toggleShowScheduleInterviewModal())
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };
  // console.log(schedulingInterviewData)
  return (
    <div>
      <Modal
        scrollable
        // contentClassName="apply-modal"
        show={showSheduleInterviewModal}
        onHide={() => dispatch(toggleShowScheduleInterviewModal())}
        centered
      >
        <Modal.Header closeButton>
          <span className="ms-auto">Schedule Interview</span>
        </Modal.Header>
        <Modal.Body>
          {/* Schedule Interview */}

          <ScheduleInterviewForm
            form_data={company_schedule_interview_form}
            data={schedulingInterviewData}
            onChangeForm={handleApplyingTalentFormChange}
            onSelectForm={handleSelectChange}
          />

          <AppButton
            loading={scheduleInterviewState.loading}
            disabled={!scheduleInterviewState.isValid}
            onClick={handleScheduleInterview}
            className="w-100"
            label={"Schedule Meeting"}
          ></AppButton>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ApplyModal;
