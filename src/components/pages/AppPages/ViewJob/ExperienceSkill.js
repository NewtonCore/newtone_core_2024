import React from "react";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";

function ExperienceSkill({ experienceskills }) {
  return (
    <div>
      <SecondaryBackground>
        <div className="pt-4 pb-4">
          <h6 className="mt-4 mb-4 fw-bold">Experience skills</h6>
          {Array.isArray(experienceskills) && (
            <>
              {experienceskills.length === 0 && (
                <>
                  <div class="alert alert-warning" role="alert">
                    No skills
                  </div>
                </>
              )}

              {experienceskills.map((skillData) => {
                return (
                  <AppRow key={skillData.id}>
                    <AppCol
                      size="6"
                      md_size={7}
                      lg_size={8}
                      sm_size={6}
                      xs_size={6}
                    >
                      {skillData.skill.name !== undefined &&
                        `${skillData.skill.name} ${
                          skillData.level !== null &&
                          skillData.level !== "" &&
                          skillData.level !== undefined
                            ? `(${skillData.level})`
                            : ""
                        }`}
                    </AppCol>
                    <AppCol
                      size="6"
                      md_size={5}
                      lg_size={4}
                      sm_size={6}
                      xs_size={6}
                    >
                      {skillData.yearExperience}{" "}
                      {skillData.yearExperience === 1 ? "Year" : "Years"}
                    </AppCol>
                  </AppRow>
                );
              })}
            </>
          )}
        </div>
      </SecondaryBackground>
    </div>
  );
}

export default ExperienceSkill;
