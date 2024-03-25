import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
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
            Build stronger teams faster with the right talents.
          </h2>
        </Fade>

        <Fade bottom>
          <p className="fs-6">
            At Newton, our AI-centric platform helps you get software developers
            with skills well suited for your company and purpose. Whether
            remotely or on-site, you can trust our recruitment service to
            deliver you the best talents.
          </p>

          <p className="fs-6">
            We consider everything that you may need from a talent and source
            developers with AI-driven matches, tests, and live interviews to
            ensure specific matching, suited for your requests.
          </p>
        </Fade>
      </AppContainerFluid>
    </div>
  );
};

function PostLanding({ styles, getStartedFn }) {
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

export default PostLanding;
