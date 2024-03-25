import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleOnChangeTextInput } from "../../../../app-redux/features/Skill/skillSlice";
import { TALENT_ROUTE } from "../../../../routes/RouteLinks";
import AppBreadcrumb from "../../../organisms/AppBreadcrumb/AppBreadcrumb";
import AppBreadcrumbItem from "../../../organisms/AppBreadcrumb/AppBreadcrumbItem";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import SkillsList from "./pagecomponents/SkillsList";
import StepTwoAllStacks from "./StepTwoAllStacks";
import "./TestStepTwo.css";
import { useEffect } from "react";
import { useState } from "react";
function TestStepTwo() {
  const [isMobile, SetIsMobile] = useState(false);

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  let { talentSkills } = TalentProfileData;
  let { data: talentSkillsData } = talentSkills;
  let { results: skillsResults } = talentSkillsData;

  if (skillsResults !== undefined) {
    skillsResults  = skillsResults.filter((sr)=>{
      return sr.skill !==null
    })
    
    skillsResults = skillsResults.map((skill) => {
      return {
        ...skill,
        skill_code: skill.skill.code,
        name: skill.skill.name,
        picture: skill.skill.picture,
        type: skill.skill.type,
        id: skill.skill.id,
      };
    });
  }

  let { testID } = useParams();
  const skillData = useSelector((state) => state.skill);

  const { skillFilter, talent_search_skill_form } = skillData;

  let links = [
    {
      name: "Test",
      to: "/talent/tests",
      active: false,
    },
    {
      name: testID,
      to: "/",
      active: true,
    },
  ];

  const tabs = [
    {
      id: 1,
      component: (
        <SkillsList
          testID={testID}
          skills={Array.isArray(skillsResults) && skillsResults.slice(0, 4)}
        />
      ),
      title:
        Array.isArray(skillsResults) &&
        skillsResults !== undefined &&
        skillsResults.length > 3
          ? skillsResults.slice(0, 4).map((skill, index) => {
              return (
                <span key={index}>{`${skill.name} ${
                  index + 1 !== skillsResults.slice(0, 4).length ? "+ " : ""
                }`}</span>
              );
            })
          : skillsResults !== undefined &&
            skillsResults.map((skill, index) => {
              return (
                <span key={index}>{`${skill.name} ${
                  index + 1 !== skillsResults.length ? "+ " : ""
                }`}</span>
              );
            }),
    },
    {
      id: 2,
      component: (
        <StepTwoAllStacks
          handleTextInputFn={handleOnChangeTextInput}
          skill_search_form={talent_search_skill_form}
          filter={skillFilter}
          testID={testID}
          skills={skillsResults}
        />
      ),
      title: "View all tech stacks",
    },
  ];

  const isMobileDev = () => {
    const regex =
      /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
  };

  useEffect(() => {
    // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobileDev()) {
      SetIsMobile(true);
      /* your code here */
    }
  }, []);

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
        <WhiteBgDiv loading={talentSkills.loading}>
          {testID}

          <br></br>
          <br></br>
          {isMobile ? (
            <>
              <div className="alert alert-info">
                This module requires you to use a laptop device or a desktop and
                not a mobile phone
              </div>
            </>
          ) : (
            <>
              {skillsResults.length === 0 ? (
                <>
                  <EmptyData
                    actionLabel="Update profile"
                    linkPath={
                      "/" + TALENT_ROUTE.index + TALENT_ROUTE.editProfile
                    }
                    navigation="#"
                    hasAction={true}
                    title="No skills to show"
                    message="Update your profile and add which skills you are profecient in."
                  />
                  {/* <p>Skills are empty for now, kindly update profile</p> */}
                </>
              ) : (
                <>
                  <Tabs
                    defaultActiveKey={tabs[0]["id"]}
                    id="fill-tab-example"
                    className="mb-3"
                    fill
                  >
                    {tabs.map((tab) => {
                      return (
                        <Tab
                          tabClassName="tab"
                          key={tab.id}
                          style={{ backgroundColor: "transparent" }}
                          eventKey={tab.id}
                          title={tab.title}
                        >
                          <>{tab.component}</>
                        </Tab>
                      );
                    })}
                  </Tabs>
                </>
              )}
            </>
          )}
        </WhiteBgDiv>
      </TalentLayout>
    </div>
  );
}

export default TestStepTwo;
