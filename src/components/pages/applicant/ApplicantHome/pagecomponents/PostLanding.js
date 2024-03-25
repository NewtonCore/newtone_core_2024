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
            Newton’s all-in-one AI-powered job platform
          </h2>
        </Fade>

        <Fade bottom>
          <p className="fs-6 text-center mt-4">
            Our AI-centric platform matches you quickly to the companies that
            need your skills.
            <br></br>
            Recruit the best software developers at Newton. We are here to
            manage your team needs.
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
