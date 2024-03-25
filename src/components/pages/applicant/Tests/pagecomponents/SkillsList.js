import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import SkillsTileTest from "../../../../organisms/SkillsTile/SkillsTileTest";

function SkillsList({ skills, testID,size=3 }) {
  return (
    <div>
      <AppRow>
        {skills.map((skill, index) => {
          return (
            <AppCol
              key={skill.id === undefined ? index : skill.id}
              size={size}
              sm_size={6}
              md_size={4}
              xs_size={6}
              lg_size={4}
            >
              <SkillsTileTest
                testID={testID}
                skillID={skill.id}
                image={skill.picture}
                text={skill.name}
              ></SkillsTileTest>
            </AppCol>
          );
        })}
      </AppRow>
    </div>
  );
}

export default SkillsList;