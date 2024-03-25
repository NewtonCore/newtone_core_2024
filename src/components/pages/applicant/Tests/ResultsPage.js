import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOfflineData } from "../../../../constants/OfflineStorage";
import AppBreadcrumb from "../../../organisms/AppBreadcrumb/AppBreadcrumb";
import AppBreadcrumbItem from "../../../organisms/AppBreadcrumb/AppBreadcrumbItem";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";

import TestOutCome from "./TestOutCome";
import "./TestStepTwo.css";
function ResultsPage() {
  let { testID } = useParams();
  const skillData = useSelector((state) => state.skill);
  const questionData = useSelector((state) => state.questions);

  const {
    recordBlog
  } = questionData;

  const [Recent_Test_Outcome, Set_Recent_Test_Outcome] = useState(undefined);

  const { skillsState } = skillData;
  const { data: skills } = skillsState;
  const { results: skillsResults } = skills;

  useEffect(() => {
    getOfflineData("recent_test").then((res) => Set_Recent_Test_Outcome(res));

    // let file = blobToFile(recordBlog)
    // console.log({recordBlog})
  }, []);
//   console.log(Recent_Test_Outcome);
  let links = [
    {
      name: "Test",
      to: "/talent/tests",
      active: false,
    },
    {
      name: Recent_Test_Outcome !== undefined && Recent_Test_Outcome.testID,
      to: `/talent/tests/${Recent_Test_Outcome !== undefined && Recent_Test_Outcome.testID}`,
      active: false,
    },

    {
    name: Recent_Test_Outcome !== undefined && Recent_Test_Outcome.skill.name,
    //   name: "",
      to: "/",
      active: true,
    },
  ];
  // console.log(skillsResults)

  return (
    <div>
      <TalentLayout pageTitle="Tests" pageHeaderRight={undefined}>
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
        <WhiteBgDiv>
          {/* {testID} */}
          <br></br>


          {Recent_Test_Outcome !== undefined ? (
            <>
              <TestOutCome
                test_outcome={Recent_Test_Outcome.res}
                path={`/talent/tests/${Recent_Test_Outcome.testID}`}
                skillDetails={Recent_Test_Outcome.skill}
              ></TestOutCome>
            </>
          ) : (
            <>
              <EmptyData
                title="No Recent Test"
                message="You have not done any tests recently"
              ></EmptyData>
            </>
          )}
        </WhiteBgDiv>
      </TalentLayout>
    </div>
  );
}

export default ResultsPage;
