import React from "react";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import PrimaryCard from "../../../../organisms/PrimaryCard/PrimaryCard";
import Fade from "react-reveal/Fade";

function MissionVision() {
  return (
    <div>
      <AppRow id="jobs_div" className="">
        <Fade bottom>
          <h1
            className="display-3 text-center mb-5 mt-4"
            style={{ fontSize: 50, fontWeight: 600 }}
          >
            What is Newton?
          </h1>
          <p className="text-center">
          Newton is the new thing on the block. We assist companies looking to hire tech talents or build teams by using our AI-powered platform and data-driven technology to get the best fitting for the role.
          </p>
        </Fade>

        <AppCol size="12" md_size="12" sm_size={12}>
          <AppRow>
            {DUMMY_DATA.visionMission.map((job) => {
              return (
                <>
                  <AppCol
                    md_size="6"
                    size="6"
                    lg_size="6"
                    sm_size="6"
                    xs_size="6"
                  >
                    <Fade bottom>
                      <PrimaryCard color={job.color}>
                        <div
                          id="image_div"
                          style={{ backgroundColor: "white" }}
                        >
                          <AppSVG data={job.image} />
                        </div>
                        <center>
                          <h6 className="mt-4 mb-4">{job.title}</h6>
                          <p className="fs-6 text-center">{job.desc}</p>
                        </center>
                      </PrimaryCard>
                    </Fade>
                  </AppCol>
                </>
              );
            })}
          </AppRow>
        </AppCol>
      </AppRow>
    </div>
  );
}

export default MissionVision;
