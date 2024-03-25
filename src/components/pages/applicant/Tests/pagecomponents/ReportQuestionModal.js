// import { LinearProgress } from "@mui/material";
// import React from "react";
import { LinearProgress } from "@mui/material";
import { Modal } from "react-bootstrap";
import AppButton from "../../../../atoms/AppButton/AppButton";
import { PRIMARY_COLOR } from "../../../../../constants/AppColors";
import ReportQuestForm from "./ReportQuestForm";
import { handleOnChangeTextInput_Question_Slice } from "../../../../../app-redux/features/Questions/questionsSlice";
// import { PRIMARY_COLOR } from "../../../constants/AppColors";
// import AppButton from "../../atoms/AppButton/AppButton";

function ReportQuestionModal({
  onHide,
  loading,
  show,
  formData,
  dispatch,
  reportFn,
}) {
  const handleFormChange = (e, meta) => {
    // console.log(e.target.value)
    // console.log(e.target.name)

    let { value, name } = e.target;
    const { RowKey, ChildKey } = meta;

    dispatch(
      handleOnChangeTextInput_Question_Slice({
        state: "report_question",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  return (
    <div>
      <Modal
        scrollable
        contentClassName=""
        show={show}
        onHide={onHide}
        centered
        size="lg"
      >
        {loading && <LinearProgress />}
        <Modal.Header closeButton>
          <span className="ms-auto">Report Question</span>
        </Modal.Header>

        <Modal.Body>
          <ReportQuestForm
            onChangeForm={handleFormChange}
            data={formData}
          ></ReportQuestForm>

          <AppButton
            size="small"
            loading={loading}
            backgroundColor={PRIMARY_COLOR}
            onClick={() => reportFn()}
            label="Submit"
            className="w-100"
          ></AppButton>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ReportQuestionModal;
