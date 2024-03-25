import React from "react";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import PrimaryCard from "../../../../organisms/PrimaryCard/PrimaryCard";
import Fade from "react-reveal/Fade";

function JobsDiv() {
  return (
    <div>
      <AppRow id="jobs_div" className="">
        <Fade bottom>
          <h1
            className="display-3 text-center mb-5 mt-4"
            style={{ fontSize: 50, fontWeight: 600 }}
          >
            We have jobs well suited for you:
          </h1>
        </Fade>

        <AppCol size="12" md_size="12" sm_size={12}>
          <AppRow>
            {DUMMY_DATA.jobdDesc.map((job,index) => {
              return (
                  <AppCol
                    key={`${job.id}${index}`}
                    md_size="3"
                    size="3"
                    lg_size="3"
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
                          <p className="fs-6 text-center fw-light">{job.desc}</p>
                        </center>
                      </PrimaryCard>
                    </Fade>
                  </AppCol>
              );
            })}
          </AppRow>
        </AppCol>
      </AppRow>
    </div>
  );
}

export default JobsDiv;
