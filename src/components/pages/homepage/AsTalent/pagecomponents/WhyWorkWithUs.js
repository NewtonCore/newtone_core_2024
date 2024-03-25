import React from "react";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import Fade from "react-reveal/Fade";

const AppCol = React.lazy(() =>
  import("../../../../organisms/AppCol/AppCol")
);
const AppRow = React.lazy(() =>
  import("../../../../organisms/AppRow/AppRow")
);

const PrimaryCard = React.lazy(() =>
  import("../../../../organisms/PrimaryCard/PrimaryCard")
);
const AppSVG = React.lazy(() =>
  import("../../../../organisms/AppSVG/AppSVG")
);

// const TestStepTwo = React.lazy(() =>
//   import("../components/pages/applicant/Tests/TestStepTwo")
// );
function WhyWorkWithUs() {
  return (
    <div>
      <AppRow id="jobs_div" className="">
        <Fade bottom>
          <h1
            className="display-3 text-center mb-5 mt-4"
            style={{ fontSize: 50, fontWeight: 600 }}
          >
            Why you should work with us:
          </h1>
        </Fade>

        <AppCol size="12" md_size="12" sm_size={12}>
          <AppRow>
            {DUMMY_DATA.whyWorkWithUs.map((job) => {
              return (
                  <AppCol
                  key={job.id}
                    md_size="4"
                    size="4"
                    lg_size="4"
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

export default WhyWorkWithUs;
