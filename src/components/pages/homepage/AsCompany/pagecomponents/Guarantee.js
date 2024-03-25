import React from "react";
import Fade from "react-reveal/Fade";

import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppSVG from "../../../../organisms/AppSVG/AppSVG";
import PrimaryCard from "../../../../organisms/PrimaryCard/PrimaryCard";

function GuaranteeDiv() {
  return (
    <div>
      <AppRow id="jobs_div" className="">
        <Fade bottom>
          <h1
            className="display-3 text-center mb-5 mt-4"
            style={{ fontSize: 50, fontWeight: 600 }}
          >
            Our developers are vetted and up to the task
          </h1>

          <p className="text-center">
            Our AI-centric platform helps you get software developers with
            skills well suited for your company and purpose. Whether remotely or
            on-site, you can trust our recruitment service to deliver you the
            best talent. We guarantee you:
          </p>
        </Fade>

        <AppCol  size="12" md_size="12" sm_size={12}>
          <AppRow>
            {DUMMY_DATA.guaranteeDesc.map((job, index) => {
              return (
                  <AppCol
                    md_size="6"
                    size="3"
                    lg_size="3"
                    sm_size="6"
                    xs_size="6"
                    key={index}
                  >
                <Fade bottom>

                    <PrimaryCard color={job.color}>
                      <div id="image_div" style={{ backgroundColor: "white" }}>
                        <AppSVG data={job.image} />
                      </div>
                      <center>
                        <h6 className="mt-4 mb-4">{job.title}</h6>
                        <p className="fs-6 text-center">{job.desc}</p>
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

export default GuaranteeDiv;
