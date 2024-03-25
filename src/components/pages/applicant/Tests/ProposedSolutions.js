import React from "react";
import {
  GRAY_COLOR_ONE,
  PRIMARY_COLOR_LIGHT,
  SECONDARY_LIGHT_COLOR,
} from "../../../../constants/AppColors";
import { getSolutionAnswered } from "../../../../constants/utils";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppDivButton from "../../../atoms/AppButton/AppDivButton";
import styles from "./Style.module.css"
function ProposedSolutions({
  questions,
  currentQuestion,
  question_solution_answer,
  handleSelectQuestion,
}) {
  return (
    <div>
      {/* {JSON.stringify(question_solution_answer)} */}
      <center>
        {/* Check if the length of the solutions is not 0, Only display solutions if there are any */}
        {Array.isArray(questions[currentQuestion]["proposal_solutions"]) &&
          questions[currentQuestion]["proposal_solutions"].length !== 0 && (
            <>
              <h5>Select an answer</h5>
              <hr></hr>
              <AppRow className="">
                {Array.isArray(
                  questions[currentQuestion]["proposal_solutions"]
                ) &&
                  questions[currentQuestion]["proposal_solutions"].map(
                    (ans, index) => {
                      return (
                        <AppCol key={index} size={3} sm_size={4} xs_size={12} md_size={6} lg_size={6}>
                          <AppDivButton
                            onClick={() =>
                              handleSelectQuestion(
                                questions[currentQuestion].id,
                                ans.id,
                                index
                              )
                            }
                            style={{
                              backgroundColor: getSolutionAnswered(
                                question_solution_answer,
                                ans.id
                              )
                                ? PRIMARY_COLOR_LIGHT
                                : SECONDARY_LIGHT_COLOR,
                              color: GRAY_COLOR_ONE,
                              width: "100%",
                              height: "auto",
                            }}
                            size="small"
                            className={`p-3 ${styles.button_option}`}
                          >
                            <>
                              <div>{ans.text} </div>
                            </>
                          </AppDivButton>
                        </AppCol>
                      );
                    }
                  )}
              </AppRow>
            </>
          )}
      </center>
    </div>
  );
}

export default ProposedSolutions;
