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
            Join the Newton International Community 
          </h2>
        </Fade>

        <Fade bottom>
          <p className="fs-6 text-center mt-2">

            <br></br>
            Ready to embark on an exciting new chapter? Sign up with Newton International and let's ignite your career together! 
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
