import React from "react";
import { DEVELOPER_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";

function AboutLanding() {
  return (
    <AppCol
      md_size={12}
      sm_size={12}
      lg_size={12}
      size={12}
      id="about_container_div"
    >
      <AppCol
        size={12}
        md_size={12}
        sm_size={12}
        lg_size={12}
        id="about_container"
      >
        <AppCol size={12} md_size={12} sm_size={12} lg_size={12} id="about_div">
          <Fade top>
            <h1>We help to scale tech industries</h1>
          </Fade>

          <Fade bottom>
            <p className="p-3">
            Newtoncore has risen to the challenge of this time to provide an unmatched solution to outsourcing talents. We pride ourselves in our AI-driven system and our customer-centric model that optimizes both company and talent needs.
            </p>
          </Fade>

          <AppCol size={12} id="about_svg_div">
            <AppSVG data={DEVELOPER_SVG}></AppSVG>
          </AppCol>
        </AppCol>
      </AppCol>
    </AppCol>
  );
}

export default AboutLanding;
