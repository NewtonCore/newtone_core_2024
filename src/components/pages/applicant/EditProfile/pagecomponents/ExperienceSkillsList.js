import { CircleCheck } from "akar-icons";
import React from "react";
import AppActionButtons from "../../../../organisms/AppActionButtons/AppActionButtons";

function ExperienceSkillsList({
  data,
  recentlyUpdated,
  showActionButtons = true,
  showDivider = true,
  handleDelete,
  toggleEdit
}) {
  return (
    <div>
      <div className="flex_parent mt-4">
        <div className="flex_children flex_child1">
          <h6 className="text-start">
            {data.skill.name !== undefined && data.skill.name}
          </h6>
        </div>
        <div className="flex_children flex_child2">
          <span className="text-muted">{data.yearExperience} Years</span>
        </div>

        <div className="flex_children flex_child3">
          <span className="text-muted">{data.level}</span>
        </div>

        <div className="flex_children flex_child4">
          {showActionButtons && (
            <div className="flex-fill bd-highlight">
              <div className="float-end">
                <AppActionButtons
                  showDelete
                  hanldeDeleteButton={() => handleDelete(data)}
                  handleEditButton={() => {toggleEdit(data)}}
                  // showEdit={true}
                ></AppActionButtons>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* <div className="d-flex bd-highlight">
        <div className="p-2 flex-fill bd-highlight">
          <h6 className="text-start">
            {data.skill.name !== undefined && data.skill.name}
          </h6>
        </div>
        <div className="p-2 flex-fill bd-highlight text-center">
          <span className="text-muted">
            {data.yearExperience} Years
          </span>
        </div>
        <div className="p-2 flex-fill bd-highlight  text-end">
          <span className="text-muted">{data.level}</span>
        </div>

        <div className="p-2 flex-fill bd-highlight">
          {showActionButtons && (
            <div className="p-2 flex-fill bd-highlight">
              <div className="float-end">
                <AppActionButtons
                  showDelete
                  hanldeDeleteButton={() => handleDelete(data)}
                  handleEditButton={() => {}}
                  showEdit={false}
                ></AppActionButtons>
              </div>
            </div>
          )}
        </div>
      </div> */}

      {showDivider ? <hr></hr> : <div className="mt-3"></div>}
    </div>
  );
}

export default ExperienceSkillsList;
