import React from "react";
import AppCol from "../AppCol/AppCol";
import AppContainer from "../AppContainer/AppContainer";
import AppRow from "../AppRow/AppRow";
import "./DashboardCard.css";
import { Link } from "react-router-dom";

function DashboardCard({ image = {}, count = {}, name = "",route="#" }) {
  return (
    <AppContainer className="p-0">
      <Link id="dashboard_card_link" to={route}>
      <div id="dashboard_card">
        <AppCol
          id="image_div_container"
          size={6}
          md_size={6}
          lg_size={6}
          sm_size={6}
          xs_size={6}
        >
          <div id="image_div">{image}</div>
        </AppCol>

        <AppCol size={6}
        id="content_div_container"
        >
          <span id="count" className="fw-bold">{count}</span>
          <br></br>

          <span id="name">{name}</span>
        </AppCol>
      </div>
      </Link>
    </AppContainer>
  );
}

export default DashboardCard;
