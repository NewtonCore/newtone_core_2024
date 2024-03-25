import { CircleCheck } from "akar-icons";
import React from "react";
import { MONTHS } from "../../../../../constants/utils";
import AppActionButtons from "../../../../organisms/AppActionButtons/AppActionButtons";

function TalentProjectsList({
  project,
  data,
  handleEdit = {},
  skillsResults,
  recentlyUpdated,
  showDivider = true,
  showActionButtons = true,
  handleDelete,
}) {
  let endDate = `${
    MONTHS[data.end_month - 1] !== undefined ? MONTHS[data.end_month - 1] : ""
  } ${data.end_year !== null ? data.end_year : ""}`;

  let startDate = `${MONTHS[data.start_month - 1]} ${data.start_year}`;

  return (
    <div>
      {/* {JSON.stringify(data.skills)} */}

      <div className="d-flex bd-highlight">
        <div className="flex-md-fill bd-highlight">
          <div>
            <h6>
              {data.title}, {data.project_role}
            </h6>
            <span className="text-muted">
              {startDate} {endDate !== " " ? ` -${endDate}` : ""}
            </span>
            {data.id === parseInt(recentlyUpdated) && (
              <span style={{ marginLeft: 10, color: "orange" }}>
                <CircleCheck /> recently updated
              </span>
            )}
            <br></br>
            {data.skills.length > 0 &&
              data.skills.map((value) => {
                return (
                  <span
                    key={value.id}
                    className="badge-primary p-2 badge bg-light text-dark m-1"
                  >
                    {value.name}
                  </span>
                );
              })}

            {data.description !== null && (
              <span className="mt-3 fw-light">
                <div
                  dangerouslySetInnerHTML={{ __html: `${data.description}` }}
                ></div>
              </span>
            )}

            {data.url !== "" && (
              <span>
                {" "}
                View Completed Project: <a href={`${data.url}`}>{data.url}</a>
              </span>
            )}
          </div>
        </div>

        {showActionButtons && (
          <div className="p-2 flex-fill bd-highlight">
            <div className="float-end">
              <AppActionButtons
                showDelete
                hanldeDeleteButton={() => handleDelete(data)}
                handleEditButton={() => handleEdit(data)}
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

export default TalentProjectsList;
