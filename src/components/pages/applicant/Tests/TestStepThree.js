import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  AddSkillToResult,
  ExtractFieldsFromFormData,
  FormatDate,
  JsonToformData,
  removeNumberBeginingOfText,
} from "../../../../constants/utils";
import { setOfflineLocalStorage } from "../../../../constants/OfflineStorage";
import AppBreadcrumb from "../../../organisms/AppBreadcrumb/AppBreadcrumb";
import AppBreadcrumbItem from "../../../organisms/AppBreadcrumb/AppBreadcrumbItem";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {
  GRAY_COLOR_ONE,
  SECONDARY_LIGHT_COLOR,
} from "../../../../constants/AppColors";
import NextPreviousButton from "../../../organisms/NextPreviousButton/NextPreviousButton";
import {
  getQuestions,
  loadQuestionSolution,
  PostMyAnswers,
  resetQuestion,
  selectAnswer,
  TalentReportQuestion,
  toggleFinishTest,
  toggleHasStartedTest,
  toggleIsRecording,
  toggleNextQuestion,
  togglePreviousQuestion,
  toggleShowRecordingModal,
  toggleStartedTestModal,
  toggleTabHasChanged,
  toggleTestTerminated,
  toggleTimer,
  togglOpenReportModal,
  updateCurrentQuestionID,
} from "../../../../app-redux/features/Questions/questionsSlice";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import { useEffect } from "react";
import AppImage from "../../../organisms/AppImage/AppImage";
import ProposedSolutions from "./ProposedSolutions";
import TestOutCome from "./TestOutCome";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import RecordCondirmModal from "../../../organisms/RecordConfirmModal/RecordCondirmModal";
import { DUMMY_DATA } from "../../../../constants/dummyData/dummyData";
import { getSkillByID } from "../../../../app-redux/features/Skill/skillSlice";
import TestTerminatedModal from "../../../organisms/TestTerminated/TestTerminated";
import { TALENT_ROUTE } from "../../../../routes/RouteLinks";
import AppTimer from "../../../organisms/AppTimer/AppTimer";
import ConfirmationModal from "../../../organisms/ConfirmationModal/ConfirmationModal";
import { useRef } from "react";
import AppButton from "../../../atoms/AppButton/AppButton";
import { Globe } from "akar-icons";
import { TEST_GORILLA_IMAGE } from "../../../../constants/AppImages";
import AppLink from "../../../organisms/AppLink/AppLink";
import ReportQuestionModal from "./pagecomponents/ReportQuestionModal";
import { toast } from "react-toastify";

function TestStepThree() {
  const navigate = useNavigate();
  // get the testID and skillID from the location params
  let { testID, skillID } = useParams();
  let [TestValidated, SetTestValidated] = useState(undefined);
  const effectskillID = useRef(false);

  let dispatch = useDispatch();
  const skillData = useSelector((state) => state.skill);
  const authData = useSelector((state) => state.auth);
  let { loginUserState } = authData;
  let { data: loginUserData } = loginUserState;

  const questionData = useSelector((state) => state.questions);
  const { skillsState, skillByIDState } = skillData;
  const { data: skills } = skillsState;
  const { data: skillByIDData } = skillByIDState;
  let TalentProfile = useSelector((state) => state.TalentProfile);

  const { talentState } = TalentProfile;
  const { data: talentStateData } = talentState;
  let test_validation = talentStateData.hasOwnProperty("test_validation")
    ? talentStateData.test_validation
    : [];
  // console.log(talentState)
  // End of getting data from redux store

  // Check if skillByIDData has data, if yes, set focusedSkill as skillByIDData
  let focusedSkill = skillByIDData.hasOwnProperty("id") && skillByIDData;

  const {
    questionsState,
    currentQuestion,
    currentQuestionID,
    postMyAnswersState,
    showRecordingModal,
    isRecording,
    testTerminated,
    showConfirmFinishTest,
    hasStartedTest,
    startTestModal,
    app_timer,
    questionsAnswered,
    showReportQuestionModal,
    report_form,
  } = questionData;
  let { data: questions } = questionsState;

  useEffect(() => {
    if (skillID !== undefined) {
      if (!effectskillID.current) {
        //Get Skill details by ID
        dispatch(getSkillByID({ id: parseInt(skillID) }));

        //get questions based on the skill_id
        dispatch(getQuestions({ skill_id: skillID }));
      }
    }
    return () => {
      effectskillID.current = true;
    };
  }, [skillID]);

  useEffect(() => {
    // console.log(allquestions)
    if (questions.length !== 0) {
      //adding skill details to the questions
      let allquestions =
        questions.length !== 0 ? AddSkillToResult(questions) : [];
      if (Array.isArray(allquestions)) {
        dispatch(loadQuestionSolution(allquestions));
      }
    }
  }, [questions]);

  useEffect(() => {
    //reset the question in focus when one leaves the page
    return () => {
      dispatch(resetQuestion());
      dispatch(toggleHasStartedTest(null));
      dispatch(toggleFinishTest(null));
    };
  }, []);

  const handleSelectQuestion = (question_id, solution_id, solIndex) => {
    dispatch(
      selectAnswer({ q: question_id, s: solution_id, solutionIndex: solIndex })
    );
  };

  const { question_solution_answer } = questionData;

  const handlePostMyAnswers = () => {
    dispatch(
      PostMyAnswers({
        skill: focusedSkill.id,
        quest_solutions: question_solution_answer,
      })
    )
      .unwrap()
      .then((res) => {
        // dispatch(toggleTimer("00:00:00"))
        setOfflineLocalStorage("recent_test", {
          skill: focusedSkill,
          res: res,
          testID: testID,
        });
        navigate(`/${TALENT_ROUTE.index}${TALENT_ROUTE.recenttest}`);
      });
  };

  useEffect(() => {
    if (showQuestions) {
      if (app_timer === "00:00:00") {
        handlePostMyAnswers();
      }
    }
  }, [app_timer]);

  useEffect(() => {
    if (Array.isArray(questions) && questions !== undefined) {
      // console.log(questions[currentQuestion])

      if (questions[currentQuestion] !== undefined) {
        dispatch(updateCurrentQuestionID(questions[currentQuestion].id));
      } else {
        // console.log("zzzz")
      }
    } else {
      // console.log("zzzz")
    }
  }, [questions, question_solution_answer, currentQuestion]);

  let links = [
    {
      name: "Test",
      to: "/talent/tests",
      active: false,
    },
    {
      name: testID,
      to: `/talent/tests/${testID}`,
      active: false,
    },

    {
      name: focusedSkill !== undefined ? focusedSkill.name : "",
      to: "/",
      active: true,
    },
  ];

  let focusedTest = DUMMY_DATA.tests[0].children.filter((t) => {
    return t.name === testID;
  })[0];

  let [showQuestions, SetShowQuestions] = useState(null);

  useEffect(() => {
    if (isRecording) {
      // console.log("recoding!");
      dispatch(toggleHasStartedTest(true));
    }
  }, [isRecording]);

  useEffect(() => {
    // handle when to show questions to the user
    if (focusedTest.recording !== undefined) {
      if (focusedTest.recording && isRecording) {
        SetShowQuestions(true);
      } else {
        SetShowQuestions(false);
      }

      // if (!focusedTest.recording) {
      //   SetShowQuestions(true);
      // }

      if (hasStartedTest) {
        SetShowQuestions(true);
      }
    }
  }, [focusedTest, isRecording, hasStartedTest]);

  const hideRecordModal = () => {
    navigate("/talent/tests");
    dispatch(toggleShowRecordingModal());
  };

  const handleCloseTerminate = () => {
    navigate("/talent/tests");
    dispatch(toggleTestTerminated());
  };

  const handleCloseReportQuestion = (val) => {
    dispatch(togglOpenReportModal(val));
  };

  const handleReportQuestion = () => {
    let comment = ExtractFieldsFromFormData(report_form);

    // console.log({comment})

    let dataToSend = {
      question:
        questions[currentQuestion].id !== undefined
          ? questions[currentQuestion].id
          : "",
      comment: comment.message,
    };

    dataToSend = JsonToformData(dataToSend);

    dispatch(TalentReportQuestion({ data: dataToSend }))
      .unwrap()
      .then((res) => {
        toast.success("Question has been reported");
        handleCloseReportQuestion(false);
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useEffect(() => {
    // console.log({ focusedTest });

    if (focusedTest.recording !== undefined) {
      dispatch(toggleShowRecordingModal(focusedTest.recording));

      if (!focusedTest.recording) {
        dispatch(toggleStartedTestModal(true));
      }
    } else {
    }
  }, [focusedTest]);

  useEffect(() => {
    let testFinished = null;
    const handleVisibilityChange = () => {
      if (document.hidden && !testFinished) {
        //return this after trouble shooting

        if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "development") {
          dispatch(toggleTestTerminated(true))
          // handlePostMyAnswers();
          dispatch(toggleTabHasChanged())
        }

        // Handle the visibility change event here
      } else {
      }
    };

    if (focusedTest.recording && isRecording && !testFinished) {
      // console.log("added event");

      document.addEventListener("visibilitychange", handleVisibilityChange);
    }
    if (postMyAnswersState.success) {
      setTimeout(() => {
        testFinished = true;
      }, 1000);

      document.removeEventListener("visibilitychange", handleVisibilityChange);
    }

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isRecording, postMyAnswersState]);

  useEffect(() => {
    let test_validated = {};

    test_validated = test_validation.filter((res) => {
      return parseInt(res.skill__id) === parseInt(skillID);
    });

    // console.log(test_validated)

    if (test_validated.length !== 0) {
      SetTestValidated(test_validated[0]);
    }else{
      SetTestValidated({count:0});

    }
  }, [test_validation, skillID]);

  return (
    <>

    {
      !talentState.loading &&

      <TalentLayout pageTitle="Tests" pageHeaderRight={undefined}>
      <ReportQuestionModal
        reportFn={() => handleReportQuestion()}
        dispatch={dispatch}
        formData={report_form}
        show={showReportQuestionModal}
        onHide={() => handleCloseReportQuestion(false)}
      ></ReportQuestionModal>
      <TestTerminatedModal
        onHide={handleCloseTerminate}
        show={testTerminated}
      />

      {/* {DUMMY_DATA.tests[0].children[2].name} */}
      <ConfirmationModal
        loading={postMyAnswersState.loading}
        isDanger={false}
        show={showConfirmFinishTest}
        message="Confirmation"
        message2="Are you sure you want to finish this test?"
        onHide={() => {
          dispatch(toggleFinishTest(null));
        }}
        actionButtonFn={() => {
          handlePostMyAnswers();
        }}
        confirmText="Yes, Finish"
        cancelText="Cancel"
      ></ConfirmationModal>

      {questions.length !== 0 && (
        <>
          {TestValidated !== undefined ? (
            TestValidated.count > 2 || TestValidated.count === 3 ? (
              <ConfirmationModal
                // message2={``}
                isDanger={false}
                show={true}
                message={`Test attempt limit`}
                onHide={() => {
                  navigate(-1);
                }}
                actionButtonFn={() => {
                  navigate("/talent/tests");
                }}
                confirmText="Back to Tests"
                showCancelButton={false}
                // cancelText="Cancel"
              >
                <div className="alert alert-warning">
                You have already reached the maximum test limit {
                    focusedSkill.hasOwnProperty("name")
                      ? `for ${focusedSkill.name}`
                      : ""
                  }. Kindly try again after 3 months.
                <p className="text-muted">
                  Last test attempt was on {FormatDate(TestValidated["last-trial"])} and status was {TestValidated.status}.
                </p>
                </div>
              </ConfirmationModal>
            ) : (
              <>
                <ConfirmationModal
                  message2={`This test has a total of ${questions.length} questions and will take  (${focusedTest.duration}mins)`}
                  isDanger={false}
                  show={startTestModal}
                  message={`${testID}`}
                  onHide={() => {
                    navigate(-1);
                  }}
                  actionButtonFn={() => {
                    dispatch(toggleStartedTestModal());
                    dispatch(toggleHasStartedTest(true));
                  }}
                  confirmText="Start"
                  cancelText="Cancel"
                ></ConfirmationModal>

                <RecordCondirmModal
                  message2={`This ${
                    focusedSkill.hasOwnProperty("name")
                      ? `${focusedSkill.name}`
                      : ""
                  } test  has a total of ${
                    questions.length
                  } questions and will take  (${focusedTest.duration}mins)`}
                  skill={focusedSkill}
                  message={`${testID} ${
                    focusedSkill.hasOwnProperty("name")
                      ? `- ${focusedSkill.name}`
                      : ""
                  }`}
                  show={showRecordingModal}
                  startRecording={() => {
                    dispatch(toggleIsRecording());
                    // dispatch(toggleHasStartedTest(true));
                  }}
                  onHide={() => hideRecordModal()}
                />
              </>
            )
          ) : (
            ""
          )}
        </>
      )}

      {/* {JSON.stringify(questions[0].skill_picture)} */}
      <AppBreadcrumb>
        {links.map((link, index) => {
          return (
            <AppBreadcrumbItem
              key={index}
              active={link.active}
              label={link.name}
              to={link.to}
            ></AppBreadcrumbItem>
          );
        })}
      </AppBreadcrumb>

      {/* {testID} */}

      {postMyAnswersState.data.length === 0 ? ( // show only when user is not posting data to the backend
        <WhiteBgDiv loading={skillByIDState.loading}>
          <AppRow>
            <AppCol size={12}>
              {questions.length !== 0 ? (
                <>
                  <div className="float-start">
                    <h5>Can you solve this?</h5>
                    {/* Current question is the question which the user is currently solving and this is an index is 0 || 1 || 2*/}
                    {currentQuestion + 1}/{questions.length}
                    {/* Show jump to questions in  select option */}
                    {questionsAnswered.length > 0 && (
                      <>
                        <span
                          className="text-muted"
                          style={{ marginLeft: 20 }}
                        >
                          Skip to question
                        </span>
                        <select
                          style={{ marginLeft: 5 }}
                          onChange={(e) =>
                            dispatch(
                              toggleNextQuestion(parseInt(e.target.value))
                            )
                          }
                        >
                          <option selected value="default" disabled>
                            Select a question
                          </option>
                          {questionsAnswered.map((qa, index) => {
                            return (
                              <option key={index} value={qa}>
                                Q: {qa}
                              </option>
                            );
                          })}
                        </select>
                      </>
                    )}
                  </div>

                  <div className="float-end">
                    {focusedSkill.hasOwnProperty("name") && (
                      <>
                        <AppImage
                          style={{ height: 20, borderRadius: 10 }}
                          image={
                            focusedSkill !== undefined
                              ? focusedSkill.picture
                              : ""
                          }
                        ></AppImage>{" "}
                        {focusedSkill.name}
                      </>
                    )}

                    {hasStartedTest && (
                      <AppTimer
                        redux_timer={app_timer}
                        timeDuration={focusedTest.duration}
                      />
                    )}
                  </div>
                </>
              ) : (
                <>
                  {/* {JSON.stringify(focusedSkill)} */}
                  {!skillByIDState.loading ? (
                    <>
                      {/* {focusedSkill.hasOwnProperty("gorilla_link")} */}
                      <EmptyData
                        component3={
                          <p>
                            {`No tests  ${
                              focusedSkill.hasOwnProperty("name")
                                ? `for ${focusedSkill.name}`
                                : "---"
                            }`}
                          </p>
                        }
                        component2={
                          focusedSkill.gorilla_link !== null ? (
                            <div className="mb-5">
                              <br></br>
                              <AppImage
                                className="animate__animated animate__pulse mb-3"
                                style={{ height: 100 }}
                                image={TEST_GORILLA_IMAGE}
                              />

                              <p>
                                {/* {`No tests  ${
                                  focusedSkill.hasOwnProperty("name")
                                    ? `for ${focusedSkill.name}`
                                    : "---"
                                }`} */}
                                You'd be taking the test on the external site,
                                TestGorilla.
                              </p>

                              <>
                                <div className="alert alert-info">
                                  Be notified that by clicking the 'Redirect
                                  me' button below will send you to the
                                  TestGorilla website.
                                  <br></br>
                                  Make sure to register using your email,{" "}
                                  {loginUserData.email}
                                </div>
                                <AppButton
                                  size="small"
                                  isLink={true}
                                  isExternalLink={true}
                                  linkPath={focusedSkill.gorilla_link}
                                >
                                  <Globe /> Redirect me
                                </AppButton>
                              </>
                              {/* <a className="" href={focusedSkill.gorilla_link} target="_blank">Redirect me</a> */}
                            </div>
                          ) : undefined
                        }
                        hasAction
                        actionLabel={`Back to ${testID}`}
                        linkPath={`/talent/tests/${testID}`}
                        image={`${
                          focusedSkill.hasOwnProperty("picture") &&
                          `${focusedSkill.picture}`
                        }`}
                        title={`No tests  ${
                          focusedSkill.hasOwnProperty("name")
                            ? `for ${focusedSkill.name}`
                            : "---"
                        }`}
                      ></EmptyData>
                    </>
                  ) : (
                    <h6 className="text-center mt-5">
                      Please wait. Loading Skill ...
                    </h6>
                  )}
                </>
              )}
            </AppCol>
          </AppRow>

          {questions.length !== 0 &&
            questions !== null &&
            questions !== undefined && (
              <>
                <SecondaryBackground>
                  {showQuestions && (
                    <CodeEditor
                      readOnly
                      unselectable="on"
                      className="unselectable"
                      disabled
                      value={
                        Array.isArray(questions) &&
                        removeNumberBeginingOfText(
                          questions[currentQuestion].question
                        )
                      }
                      language={
                        focusedSkill.hasOwnProperty("name") &&
                        focusedSkill.name
                      }
                      placeholder="..."
                      padding={20}
                      style={{
                        fontSize: 15,
                        backgroundColor: SECONDARY_LIGHT_COLOR,
                        color: GRAY_COLOR_ONE,
                        fontFamily:
                          "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
                      }}
                    />
                  )}
                </SecondaryBackground>

                {/* Display solutions */}
                {questions !== false &&
                  !showRecordingModal &&
                  showQuestions &&
                  Array.isArray(question_solution_answer) !== 0 && (
                    <>
                      {/* Show Report question */}

                      <AppLink
                        to="#"
                        onClick={() => handleCloseReportQuestion(true)}
                      >
                        Report Question
                      </AppLink>
                      <ProposedSolutions
                        handleSelectQuestion={handleSelectQuestion}
                        questions={questions}
                        currentQuestion={currentQuestion}
                        question_solution_answer={question_solution_answer}
                      />
                    </>
                  )}
                {/* End of solutions */}

                {showQuestions && (
                  <NextPreviousButton
                    isLoading={postMyAnswersState.loading}
                    handleFinish={() => dispatch(toggleFinishTest(true))}
                    nextDisabled={
                      Array.isArray(question_solution_answer) &&
                      question_solution_answer !== undefined &&
                      currentQuestionID !== "default"
                        ? question_solution_answer.filter((q) => {
                            return q.id === parseInt(currentQuestionID);
                          })[0].selectedAnswer !== ""
                          ? false
                          : true
                        : null
                    }
                    finishDisabled={
                      Array.isArray(question_solution_answer) &&
                      question_solution_answer !== undefined &&
                      currentQuestionID !== "default"
                        ? question_solution_answer.filter((q) => {
                            return q.id === parseInt(currentQuestionID);
                          })[0].selectedAnswer === ""
                          ? true
                          : false
                        : null
                    }
                    currentQuestion={currentQuestion}
                    count={questions.length}
                    handleNext={() => dispatch(toggleNextQuestion())}
                    handlePrevious={() => dispatch(togglePreviousQuestion())}
                  />
                )}
              </>
            )}
        </WhiteBgDiv>
      ) : (
        <TestOutCome
          test_outcome={postMyAnswersState.data}
          path={`/talent/tests/${testID}`}
          skillDetails={focusedSkill}
        ></TestOutCome>
      )}
    </TalentLayout>
    }
     
    </>
  );
}

export default TestStepThree;
