import React from "react";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import TalentCompanyOverView from "../../../organisms/TalentCompanyOverView/TalentCompanyOverView";
import { DUMMY_DATA } from "../../../../constants/dummyData/dummyData";

function JobOverview({ job_overview }) {
  return (
    <div>
      <SecondaryBackground>
        <div className="pt-4 pb-4">
          <h6 className="mt-4 fw-bold">Job overview</h6>

          {DUMMY_DATA.job_overview.map((talent, index) => {
            return (
              <TalentCompanyOverView
                data={job_overview[index]}
                key={talent.id}
                label={talent.label}
              ></TalentCompanyOverView>
            );
          })}
        </div>
      </SecondaryBackground>
    </div>
  );
}

export default JobOverview;
