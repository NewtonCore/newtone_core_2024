import { CircleCheck } from "akar-icons";
import React from "react";
import { MONTHS } from "../../../../../constants/utils";
import AppActionButtons from "../../../../organisms/AppActionButtons/AppActionButtons";

function TalentEducationList({
  handleEditEducation,
  handleDeletEducation,
  data,
  recentlyUpdated,
  showActionButtons = true,
  showDivider = true,
}) {
  let endDate = `${
    MONTHS[data.end_month - 1] !== undefined ? MONTHS[data.end_month - 1] : ""
  } ${data.end_year !== null ? data.end_year : ""}`;

  let startDate = `${MONTHS[data.start_month - 1]} ${data.start_year}`;

  return (
    <div>
      <div className="d-flex bd-highlight">
        <div className="flex-md-fill bd-highlight">
          <h6>
            {data.degree}, {data.school}
          </h6>
          <span className="text-muted">
            {startDate} {endDate !== " " ? ` - ${endDate}` : ""}
          </span>
          {data.id === parseInt(recentlyUpdated) && (
            <span style={{ marginLeft: 10, color: "orange" }}>
              <CircleCheck /> recently updated
            </span>
          )}

          {
            data.description !== null &&
            <span className="mt-3 fw-light">
            <div
              dangerouslySetInnerHTML={{ __html: `${data.description}` }}
            ></div>
          </span>
          }

         
        </div>
        {showActionButtons && (
          <div className="p-2 flex-fill bd-highlight">
            <div className="float-end">
              <AppActionButtons
                showDelete
                hanldeDeleteButton={() => handleDeletEducation(data)}
                handleEditButton={() => handleEditEducation(data)}
                showEdit
              ></AppActionButtons>
            </div>
          </div>
        )}
      </div>

      {showDivider ? <hr></hr> : <div className="mt-3"></div>}
    </div>
  );
}

export default TalentEducationList;
