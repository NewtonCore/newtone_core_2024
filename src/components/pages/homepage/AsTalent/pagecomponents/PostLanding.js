import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppJumbotron from "../../../../organisms/AppJumbotron/AppJumbotron";
import AppRow from "../../../../organisms/AppRow/AppRow";
import Fade from "react-reveal/Fade";
import GetStartedBtnHomePages from "../../../../organisms/GetStartedBtnHomePages/GetStartedBtnHomePages";
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
          Build software from the comfort of your home
        </h2>
      </Fade>

      <Fade bottom>
        <p className="fs-6 text-center mt-4">
          Join our network of developers working remotely from various cities
          globally and with full benefits and compensations. We help you land
          your dream job irrespective of where you are on the globe. We look out
          for your benefits and help you find work with vetted companies.
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
          <>
          <LeftComponent styles={styles}></LeftComponent>

          </>
        </div>
      </>
    </>
  );
}

export default PostLanding;
