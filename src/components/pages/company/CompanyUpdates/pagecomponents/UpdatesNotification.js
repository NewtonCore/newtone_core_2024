import React from "react";
import {
  FormatDate,
  dateDiff,
  returnTimeDifference,
} from "../../../../../constants/utils";
import { Link } from "react-router-dom";
import { COMPANY_ROUTE, HOME_ROUTES } from "../../../../../routes/RouteLinks";
import { USER_IMAGE } from "../../../../../constants/AppImages";

function UpdatesNotification({ update, showImage = true }) {
  let talent_f_name = update.talent_f_name;
  let talent_id = update.talent_id;
  let talent_photo = update.talent_photo;

  let job_name = update.job_title;
  let job_id = update.job_id;
  let status = update.status;

  let apply_date = update.apply_date;
  let talent_job_title = update.talent_job_title;

  let talent_job_title_message =
    talent_job_title !== null && talent_job_title !== undefined
      ? `(${talent_job_title}) `
      : " ";

  return (
    <div className="alert alert-light border">
      {showImage && (
        <>
          <picture>
            <img
              height="50"
              width="50"
              src={
                talent_photo !== null && talent_photo !== undefined
                  ? talent_photo
                  : USER_IMAGE
              }
              class="img-fluid img-thumbnail mb-2"
              alt="newton"
            />
          </picture>
          <br></br>
        </>
      )}
      {
        talent_f_name !== undefined && talent_f_name !== null ?
        <Link
        style={{ textDecoration: "none" }}
        to={`${
          status === "pending"
            ? `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewTalent}${talent_id}?referJob=${job_id}&application=${update.uid}`
            : `/${COMPANY_ROUTE.index}${COMPANY_ROUTE.viewTalent}${talent_id}`
        }`}
      >
        {talent_f_name}
      </Link>
        :"**Talent deleted***"
      }
      
      {talent_job_title_message}applied for{" "}
      <Link
        style={{ textDecoration: "none" }}
        to={`/${HOME_ROUTES.viewJob}${job_id}`}
      >
        {job_name}
      </Link>{" "}
      job on {FormatDate(apply_date)}{" "}
      {/* {returnTimeDifference(dateDiff(new Date(), apply_date))} */}
      <br></br>
      <span className="badge  text-bg-light">{status}</span>
      <div className="mt-2">
        <span className="text-muted">
          {returnTimeDifference(
            dateDiff(new Date(), FormatDate(apply_date)),
            ""
          )}
        </span>
      </div>
    </div>
  );
}

export default UpdatesNotification;
