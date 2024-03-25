import { Calendar, Money } from "akar-icons";
import React from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NEWTON_LOGO } from "../../../constants/AppImages";
import { FormatDate } from "../../../constants/utils";
import { TALENT_ROUTE } from "../../../routes/RouteLinks";
import AppButton from "../../atoms/AppButton/AppButton";
import SecondaryButton from "../../atoms/AppButton/SecondaryButton";
import AppImage from "../AppImage/AppImage";
import classStyles from "./Styles.module.css";

function AcceptJobOfferCard({
  data,
  job_title = "Test title",
  job_location = "Location xyz",
  job_salary = "30,000",
  job_currenct = "USD",

  company_name = "Space X",
  company_logo = "",
  job_mode = "mode",
  job_desc,
  date_posted,
  job_id="2",
  company_id="2"

}) {
  return (
    <div className={`${classStyles.card} shadow-lg`}>
      <div className={classStyles.header}>
        <div className={classStyles.image_div}>
          <AppImage
            className={classStyles.image_div_image}
            image={company_logo}
          ></AppImage>
        </div>
        <div className={classStyles.detail_div}>
          <h5><Link to={`/${TALENT_ROUTE.index}${TALENT_ROUTE.viewJob}${job_id}`}>{job_title}</Link> </h5>
          <span className="text-muted">{job_mode}</span>
        </div>
      </div>

      <div className={classStyles.body}>
        <h6 className="">Company: <Link to={`/${TALENT_ROUTE.index}${TALENT_ROUTE.viewCompany}${company_id}`}>{company_name}</Link> </h6>
        {/* <Location></Location>
        {job_location} */}

        <div className="mt-4 mb-4">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Job Decription</Accordion.Header>
              <Accordion.Body>
                <div dangerouslySetInnerHTML={{ __html: `${job_desc}` }}></div>
                <span className="text-muted">
                  <Calendar style={{ marginRight: 10 }} size={15} /> Date
                  posted: {FormatDate(date_posted)}
                </span>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <h5>
          <Money style={{ marginRight: 10 }} size={15} /> Salary offer:{" "}
          {job_salary}
        </h5>
      </div>

      <div className={classStyles.footer}>
        <AppButton className={`${classStyles.decline}`}>Decline</AppButton>
        <AppButton className={``}>Accept</AppButton>
      </div>
    </div>
  );
}

export default AcceptJobOfferCard;
