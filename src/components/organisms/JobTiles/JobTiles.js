import { Briefcase, Calendar, Clock, Location, Money } from "akar-icons";
import React from "react";
import { Link } from "react-router-dom";
import { JOB_TEST } from "../../../constants/AppImages";
import AppCol from "../AppCol/AppCol";
import AppImage from "../AppImage/AppImage";
import AppRow from "../AppRow/AppRow";
import "./JobTiles.css";
import { HOME_ROUTES } from "../../../routes/RouteLinks";
import { dateDiff, returnSalary, returnTimeDifference } from "../../../constants/utils";

function JobTiles({
  image = "",
  title = "",
  date = "",
  location = "",
  min_salary = "",
  max_salary = "",
  timeline = "",
  companyLogo = null,
  jobID,
  currency,
  companyName
}) {
  return (
    <a
      href={`${HOME_ROUTES.index}${HOME_ROUTES.viewJob}${jobID}`}
      id="job_tile"
      className="border border-secondary p-3 rounded-1 pt-4 pb-4"
    >
      <AppRow style={{width:"100%"}}>
        <AppCol className="p-0" id="job_image_div" md_size={3} size={3} lg_size={3} sm_size={3} xs_size={3}>
          <div id="image">
            <AppImage
              // height={50}
              // width={50}
              alt="testimg"
              image={companyLogo === null ? JOB_TEST : companyLogo}
            ></AppImage>
          </div>
        </AppCol>

        <AppCol xs_size={8} sm_size={8} lg_size={8} size={8} md_size={8} olg={1}>
          <div id="title">
            <div id="job_title">
            {title}

            </div>
          <span className="text-muted">
            {returnTimeDifference(dateDiff(new Date(),date))}
          </span>
          </div>

          <span className="d-block">
            <Briefcase size={15} /> {companyName}
          </span>

          <span className="d-block">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Calendar size={15}></Calendar> {date}
            </li>
            <li className="list-inline-item">
              <Location size={15} /> {location}
            </li>
          </ul>
          </span>

         

          {/* <span className="d-block">
            <Money size={15} />
            {currency !== null && currency}{" "}
            {returnSalary(min_salary,max_salary)}
          </span> */}
          {
            timeline !== null && timeline !== undefined && timeline !== ""
            ?
            <span className="d-block">
            <Clock size={15} /> {timeline}
          </span>:
          <span className="d-block">
             <Clock size={15} /> No job timeline
        </span>
          }
         
        </AppCol>
      </AppRow>
    </a>
  );
}

export default JobTiles;
