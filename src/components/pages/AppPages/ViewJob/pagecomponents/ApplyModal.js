import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import AppButton from "../../../atoms/AppButton/AppButton";
import AppButton from "../../../../atoms/AppButton/AppButton";
// import { toggleApplyJobModal } from "../../../app-redux/features/appData/appDataSlice";
// import { toggleApplyJobModal } from "../../../../../app-redux/features/appData/appDataSlice";
import {
  toggleApplyJobModal,
  handleApplyingTalentChange,
  talentApplyingJob,
  updateTalentApplyingJob,
} from "../../../../../app-redux/features/TalentSlice/talentSlice";
import ApplyJobForm from "./ApplyForm";
import { JsonToformData } from "../../../../../constants/utils";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { TALENT_ROUTE } from "../../../../../routes/RouteLinks";

function ApplyModal({ jobId, user, jobTitle }) {
  //   const appData = useSelector((state) => state.appData);
  const talent = useSelector((state) => state.talent);
  const {
    apply_form,
    showApplyJobModal,
    applyingTalentData,
    appliedTalentState,
  } = talent;
  const dispatch = useDispatch();

  const handleApplyingTalentFormChange = (e) => {
    let { value, name } = e.target;
    dispatch(handleApplyingTalentChange({ name: name, value: value }));
  };

  let talent_applying_f_name = user.hasOwnProperty("first_name")
    ? user.first_name !== null
      ? user.first_name
      : ""
    : "";

  let talent_applying_l_name = user.hasOwnProperty("last_name")
    ? user.last_name !== null
      ? user.last_name
      : ""
    : "";

  let talent_applying_full_name =
    talent_applying_f_name !== "" && talent_applying_l_name !== ""
      ? `${talent_applying_f_name} ${talent_applying_l_name}`
      : talent_applying_f_name;

  const handleTalentApplyingToAJob = (e) => {
    e.preventDefault();
    let new_talent_data = { ...applyingTalentData, job: parseInt(jobId) ,hide_for_talent:false};
    // console.log(JsonToformData(new_talent_data), 'beofre json to form')
    // console.log(new_talent_data, new_talent_data.id)
    if (new_talent_data.id) {
      // console.log('update an application', new_talent_data)
      dispatch(updateTalentApplyingJob(JsonToformData(new_talent_data)))
        .unwrap()
        .then((res) => {
          // console.log(res)
          toast.success(
            `You have applied to the ${res.job.title.name} job`,
            6000
          );
          dispatch(toggleApplyJobModal());

          // var today = new Date().toISOString().split('T')[0];
        })
        .catch((err) => {
          toast.error(err);
        });
    } else {
      dispatch(talentApplyingJob(JsonToformData(new_talent_data)))
        .unwrap()
        .then((res) => {
          dispatch(toggleApplyJobModal());

          // console.log(res)
          toast.success(
            `You have applied to the  ${res.job.title.name} job`,
            6000
          );
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  return (
    <div>
      <Modal
        scrollable
        contentClassName="apply-modal"
        show={showApplyJobModal}
        onHide={() => dispatch(toggleApplyJobModal())}
        centered
        size="lg"
      >
        <Modal.Body>
          <h5>
            Send your application for {jobTitle !== undefined && jobTitle} job
          </h5>

          <ApplyJobForm
            data={apply_form}
            applyingTalentData={applyingTalentData}
            onChangeForm={handleApplyingTalentFormChange}
          />


          <p className="text-muted">
            Applying as {""}
            {talent_applying_full_name}, {user.email}
          </p>
          <a
            href={`/${TALENT_ROUTE.index}${TALENT_ROUTE.editProfile}`}
            className="mb-4"
          >
            Edit profile.
          </a>
          {/* <br></br> */}
          <AppButton
            loading={appliedTalentState.loading}
            // onClick={() => loginRegisterUser()}
            disabled={appliedTalentState.loading}
            onClick={handleTalentApplyingToAJob}
            className="w-100 mt-3"
            label={"Send Application"}
          ></AppButton>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ApplyModal;
