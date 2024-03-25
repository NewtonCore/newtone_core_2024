import React from "react";
import "./TalentCard.css";
import { HOME_ROUTES } from "../../../routes/RouteLinks";
import AppLink from "../AppLink/AppLink";

function TalentCardJobInfo({ job }) {
  return (
    <div>
     
      {job !== null && (
        <>
         <p className="fw-semibold">Job details</p>
         <p>{job.title.name}</p>
          <div
            className="job_description_div mb-2 fw-light"
            dangerouslySetInnerHTML={{ __html: `${job.description}` }}
          ></div>
          <AppLink to={`${HOME_ROUTES.index}${HOME_ROUTES.viewJob}${job.id}`}>
            View Job
          </AppLink>
        </>
      )}
    </div>
  );
}

export default TalentCardJobInfo;
