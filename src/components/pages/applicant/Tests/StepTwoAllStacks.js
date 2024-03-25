import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSkillFilter } from "../../../../app-redux/features/Skill/skillSlice";
import {
  BLACK_COLOR,
  PRIMARY_COLOR,
  SECONDARY_LIGHT_COLOR,
  WHITE_COLOR,
} from "../../../../constants/AppColors";
import { DUMMY_DATA } from "../../../../constants/dummyData/dummyData";
import { SearchFilterFunc } from "../../../../constants/utils";
import SecondaryButton from "../../../atoms/AppButton/SecondaryButton";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import SkillsList from "./pagecomponents/SkillsList";
import SearchSkill from "./SearchSkill";

function StepTwoAllStacks({
  testID,
  skills,
  filter,
  skill_search_form,
  handleTextInputFn,
}) {
  let dispatch = useDispatch();
  let [q_search, SetQSearch] = useState("");

  let [final_skills, SetFinalSkill] = useState(skills);

  let handleSearch = (search) => {
    SetQSearch(search);
    final_skills = SearchFilterFunc(search, skills);
    // console.log(search)
    // console.log(final_skills)
  };

  useEffect(() => {
    SetFinalSkill(skills);
    q_search = q_search.replace(/\s+/g, " ");

    if (q_search !== "") {
      // console.log(q_search.length)
      SetFinalSkill(SearchFilterFunc(q_search, final_skills));
    } else {
      SetFinalSkill(skills);
    }
  }, [q_search]);

  useEffect(() => {
    if (filter !== "all") {
      SetFinalSkill(
        skills.filter((skill) => {
          return skill.type === filter;
        })
      );
    } else {
      SetFinalSkill(skills);
    }
  }, [filter]);

  //   final_skills =
  //     filter !== "all"
  //       ? final_skills.filter((skill) => {
  //           return skill.type === filter;
  //         })
  //       : final_skills;

  return (
    <div>
      <div className="mb-3">
        {DUMMY_DATA.SKILL_TYPES.map((type, index) => {
          return (
            <>
              <SecondaryButton
                key={index}
                onClick={() => dispatch(toggleSkillFilter(type))}
                style={{
                  marginRight: 10,
                  color: filter === type ? WHITE_COLOR : BLACK_COLOR,
                }}
                backgroundColor={
                  filter === type ? PRIMARY_COLOR : SECONDARY_LIGHT_COLOR
                }
                color="black"
              >
                {type}
              </SecondaryButton>
            </>
          );
        })}

        <SearchSkill
          handleTextInputFn={handleTextInputFn}
          handleSearch={handleSearch}
          data={skill_search_form}
        />
      </div>
      <SkillsList size={3} testID={testID} skills={final_skills} />

      {final_skills.length === 0 && (
        <>
          <EmptyData
            message="Try another skill type or search"
            title={`No skills found`}
          ></EmptyData>
        </>
      )}
    </div>
  );
}

export default StepTwoAllStacks;
