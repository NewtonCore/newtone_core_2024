import React from "react";
import { FormatDate } from "../../../constants/utils";
import { TrashCan } from "akar-icons";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";

function TalentCardHeader({
  classStyle,
  country,
  position,
  status,
  created_at,
  isRecommended = false,
  score,
  talent_f_name,
  score_description,
  isSavedProfile,
  toggleDeleteTalent,
  data,
}) {
  return (
    <div className={classStyle.card_header}>
      <div className="d-flex flex-row mb-3 justify-content-between">
        <div>
          <div>
            <h6 className="fw-semibold">{talent_f_name}</h6>
          </div>
          <div className="fw-light">{position}</div>
          {!isRecommended && !isSavedProfile && (
            <div className="fw-light">
              Date Applied: {FormatDate(created_at)}
            </div>
          )}
        </div>
        <div>
          {isSavedProfile && (
            <SecondaryButton
            style={{backgroundColor:"transparent",color:"white",padding:0}}
            
              onClick={() => toggleDeleteTalent(JSON.stringify(data))}
              size="small"
            >
              <TrashCan />
            </SecondaryButton>
          )}
          {/* <div class="badge bg-secondary text-wrap">{status}</div> */}
          {status === undefined ? (
            ``
          ) : (
            <div className="badge bg-light text-wrap text-secondary"></div>
          )}

          {/* {
            isRecommended &&

            <div>
              <p>
                Score description
              </p>
              {score_description.hasOwnProperty('skill') &&
              <>Skill: {score_description.skill} %<br></br> </>
              }
               {score_description.hasOwnProperty('similary_check') &&
              <>Similarity check: {score_description.similary_check} %<br></br> </>
              }
              
              {score_description.hasOwnProperty('tech-skill') &&
              <>Teck skill: {score_description["tech-skill"]} %<br></br> </>
              }
              {score_description.hasOwnProperty('tech-skill') &&
              <>Teck skill: {score_description["tech-skill"]} %<br></br> </>
              }
            </div>
          } */}
        </div>
      </div>
    </div>
  );
}

export default TalentCardHeader;
