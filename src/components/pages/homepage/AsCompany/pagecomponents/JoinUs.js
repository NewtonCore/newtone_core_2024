import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import AppContainerFluid from "../../../../organisms/AppContainerFluid/AppContainerFluid";

const LeftComponent = ({ styles }) => {
  return (
    <div
      className={styles.postlanding}
    
    >
      <AppContainerFluid>
      <Fade top>
        <h2
          className={`display-4 fw-bolder animate__animated animate__fadeIn text-center ${styles.postlanding_heading}`}
        >
          Join Us in Shaping the Future
        </h2>
      </Fade>

      <Fade bottom>
        <p className="fs-6 text-center mt-4">
          Whether you are a startup with audacious dreams or an established
          enterprise seeking to stay ahead of the curve, Newton International is
          your partner in unlocking the potential of exceptional software
          development.
          <br></br>
          Join us on this exciting journey as we bridge the gap between talent
          and innovation, transforming industries and shaping the future of
          technology.
        </p>
        <p>
          <a href="#homepage_footer">Contact us</a> to explore how we can empower
          your company with exceptional software developers. Let's embark on a
          future of innovation together.
        </p>
      </Fade>
      </AppContainerFluid>
      
    </div>
  );
};

function JoinUs({ styles, getStartedFn }) {
  return (
    <>
      <>
        <div className={styles.box_main}>
          <LeftComponent styles={styles}></LeftComponent>
        </div>
      </>
    </>
  );
}

export default JoinUs;
