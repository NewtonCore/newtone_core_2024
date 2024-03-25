import React from "react";
import { DARK_PRIMARY } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";
import AppCol from "../AppCol/AppCol";
import AppRow from "../AppRow/AppRow";

function NextPreviousButton({
  currentQuestion,
  count,
  handleNext = {},
  handlePrevious = {},
  nextDisabled,
  finishDisabled,
  handleFinish,
  isLoading,
}) {
  return (
    <AppRow>
      <AppCol>
      {/* state.currentQuestion */}
        {currentQuestion !== 0 && (
          <div className="float-start">
            <AppButton
              loading={isLoading}
              style={{ backgroundColor: DARK_PRIMARY }}
              size="small"
              onClick={handlePrevious}
              label="Previous"
            ></AppButton>

           
          </div>
        )}

        {/* {currentQuestion}
      {count} */}

        {/* {JSON.stringify(nextDisabled)} */}

        <div className="float-end">
          {currentQuestion + 1 !== count ? (
            <AppButton
              loading={isLoading}
              // disabled={nextDisabled}
              size="small"
              onClick={handleNext}
              label="Next"
            ></AppButton>
          ) : (
            <AppButton
              loading={isLoading}
              onClick={handleFinish}
              // disabled={finishDisabled}
              size="small"
              label="Finish"
            ></AppButton>
          )}
        </div>
      </AppCol>
    </AppRow>
  );
}

export default NextPreviousButton;
