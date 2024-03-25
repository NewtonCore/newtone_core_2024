import { Chip } from "@mui/material";
import React from "react";
import { Accordion } from "react-bootstrap";
import { PRIMARY_COLOR, WHITE_COLOR } from "../../../constants/AppColors";

function ScoreDescription({ isRecommended, score, score_description }) {
  let badge_style = {
    backgroundColor: PRIMARY_COLOR,
    color: WHITE_COLOR,
    marginRight: 4,
    marginBottom: 3,
  };
  return (
    <>
      {isRecommended && score !== 0 && (
        <div className="mt-2 mb-3">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Score description</Accordion.Header>
              <Accordion.Body>
                <div>
                  {score_description.hasOwnProperty("skill") && (
                    <span>
                      {/* Skill: {score_description.skill} %<br></br>{" "} */}

                      <Chip
                        style={badge_style}
                        label={`Skill: ${score_description.skill} %`}
                      />
                    </span>
                  )}
                  {score_description.hasOwnProperty("tech-skill") && (
                    <span>
                      <Chip
                        style={badge_style}
                        label={`Tech Skill: ${score_description["tech-skill"]} %`}
                      />
                    </span>
                  )}
                  {score_description.hasOwnProperty("prediction") && (
                    <span>
                      <Chip
                        style={badge_style}
                        label={`ML1: ${score_description["prediction"]} %`}
                      />
                    </span>
                  )}
                  {score_description.hasOwnProperty("similary_check") && (
                    <span>
                      <Chip
                        style={badge_style}
                        label={`ML2: ${score_description["similary_check"]} %`}
                      />
                      <br></br>{" "}
                    </span>
                  )}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      )}
    </>
  );
}

export default ScoreDescription;
