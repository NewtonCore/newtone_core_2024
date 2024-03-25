import React from "react";
import { SERVICES_SVG } from "../../../../../constants/AppSvg";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import Fade from "react-reveal/Fade";
import styles from "../ApplicantHome.module.css"
const RightComponent = ({ heading, text }) => {
  // var w = window.innerWidth;

  return (
    <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
      <Fade top>
        <h5 className={`display-6  mt-4 ${styles.postlanding_heading}`}>{heading}</h5>
      </Fade>

      <Fade bottom>
        <p className="fw-regular">{text}</p>
      </Fade>
    </AppCol>
  );
};

const LeftComponent = ({ image = SERVICES_SVG }) => {
  return (
    <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
      <AppSVG data={image} />
    </AppCol>
  );
};

function MiniLandingPage({
  image,
  heading,
  text,
  direction = "ltr",
  children,
}) {
  return (
    <>
      <AppRow id="box-main2">
        {direction === "ltr" ? (
          <>
            <LeftComponent image={image}></LeftComponent>

            {children !== undefined ? (
              <>
                <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
                  <Fade top>{children}</Fade>
                </AppCol>
              </>
            ) : (
              <RightComponent text={text} heading={heading}></RightComponent>
            )}
          </>
        ) : (
          <>
            {children !== undefined ? (
             <>
             <AppCol md_size="6" size="6" lg_size="6" sm_size="6">
               <Fade top>{children}</Fade>
             </AppCol>
           </>
            ) : (
              <RightComponent text={text} heading={heading}></RightComponent>
            )}

            <LeftComponent image={image}></LeftComponent>
          </>
        )}
      </AppRow>
    </>
  );
}

export default MiniLandingPage;
