import React from "react";
import Fade from "react-reveal/Fade";
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
            Join Newton International Inc. Today:
          </h2>
        </Fade>

        <Fade bottom>
          <p className="fs-6 text-center mt-4">
            Are you a company looking for top-tier software developers? Or a
            developer seeking exciting opportunities with leading tech
            companies? Look no further than Newton International Inc.. Join us
            now and experience a revolutionary way to hire and be hired!
            <br></br>
            Streamline your hiring process, save time, and discover your perfect
            match. Embrace the future of hiring with Newton International Inc.
            today!
          </p>
        </Fade>
      </AppContainerFluid>
    </div>
  );
};

function JoinNewton({ styles, getStartedFn }) {
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

export default JoinNewton;
