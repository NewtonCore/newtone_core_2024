import React, { useState } from "react";
import AppCol from "../AppCol/AppCol";
import AppRow from "../AppRow/AppRow";
import { SkillsTile3 } from "../SkillsTile/SkillsTile";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";
import { Collapse } from "react-bootstrap";
import TalentCardJobInfo from "./TalentCardJobInfo";

function TalentCardBody({
  classStyle,
  location,
  years_experience,
  skills,
  score_description,
  isRecommended,
  score = 0,
  showSaveProfile,
  jobDetails,
  isSavedProfile,
}) {
  const [open, setOpen] = useState(false);
  // console.log({skills})
  return (
    <div className={classStyle.card_body}>
      {/* <ScoreDescription score_description={score_description} isRecommended={isRecommended} score={score} /> */}
      <p className="fw-bold">Talent information</p>
      Location: {location}
      <div>Years of experience: {years_experience} Years</div>
      <hr></hr>
      {/* {JSON.stringify(skills)} */}
      <AppRow>
        {Array.isArray(skills) && (
          <>
            {skills.length > 0 ? (
              <>
                <p className="fw-semibold">Tech Stack used</p>

                {skills.length > 3 ? (
                  skills.slice(0, 3).map((skill, index) => {
                    return (
                      <AppCol
                        key={skill.id !== undefined ? skill.id : index}
                        size="4"
                        sm_size={4}
                        lg_size={4}
                        xs_size={6}
                      >
                        <SkillsTile3
                          experience_level={
                            skill.skill !== undefined ? skill.skill.level : "-"
                          }
                          image={
                            skill.skill !== undefined
                              ? skill.skill.picture
                              : "-"
                          }
                          text={
                            skill.skill !== undefined ? skill.skill.name : "-"
                          }
                        ></SkillsTile3>
                      </AppCol>
                    );
                  })
                ) : (
                  <>
                    {skills.map((skill, index) => {
                      return (
                        <AppCol
                          key={skill.id !== undefined ? skill.id : index}
                          size="4"
                          sm_size={4}
                          lg_size={4}
                          xs_size={6}
                        >
                          <SkillsTile3
                            experience_level={
                              skill.skill !== undefined
                                ? skill.skill.level
                                : "-"
                            }
                            image={
                              skill.skill !== undefined
                                ? skill.skill.picture
                                : "-"
                            }
                            text={
                              skill.skill !== undefined ? skill.skill.name : "-"
                            }
                          ></SkillsTile3>
                        </AppCol>
                      );
                    })}
                  </>
                )}

                {skills.length > 3 && (
                  <div className="p-2">
                    <Collapse in={open}>
                      <div id="example-collapse-text">
                        <AppRow>
                          {skills
                            .slice(3, skills.length)
                            .map((skill, index) => {
                              return (
                                <AppCol
                                  key={
                                    skill.id !== undefined ? skill.id : index
                                  }
                                  size="4"
                                  sm_size={4}
                                  lg_size={4}
                                  xs_size={6}
                                >
                                  <SkillsTile3
                                    experience_level={
                                      skill.skill !== undefined
                                        ? skill.skill.level
                                        : "-"
                                    }
                                    image={
                                      skill.skill !== undefined
                                        ? skill.skill.picture
                                        : ""
                                    }
                                    text={
                                      skill.skill !== undefined
                                        ? skill.skill.name
                                        : "-"
                                    }
                                  ></SkillsTile3>
                                </AppCol>
                              );
                            })}
                        </AppRow>
                      </div>
                    </Collapse>

                    <SecondaryButton
                      className="w-100"
                      onClick={() => setOpen(!open)}
                    >
                      {open ? (
                        "Hide"
                      ) : (
                        <>
                          Show other {skills.length - 3}{" "}
                          {skills.length - 3 === 1 ? "skill" : "skills"}
                        </>
                      )}
                    </SecondaryButton>
                  </div>
                )}
              </>
            ) : (
              <p className="fw-semibold text-center">No Tech Stack used</p>
            )}
          </>
        )}

        {isSavedProfile && (
          <TalentCardJobInfo job={jobDetails}></TalentCardJobInfo>
        )}
      </AppRow>
    </div>
  );
}

export default TalentCardBody;
