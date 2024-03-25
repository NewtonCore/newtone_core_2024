import React from "react";
import { FormatDate } from "../../../../constants/utils";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppRow from "../../../organisms/AppRow/AppRow";
import JobTiles from "../../../organisms/JobTiles/JobTiles";

function SimilarJobs({ data }) {
  return (
    <>
      {data.length !== 0 && (
        <AppContainerFluid style={{ marginTop: 0 }}>
          <h5 className="">Similar jobs</h5>

          <br></br>
          <AppRow className="gx-3">
            {Array.isArray(data) &&
              data.map((job) => {
                return (
                  <AppCol key={job.id} size={4} md_size={6} lg_size={4}>
                    <JobTiles
                      companyName={job.company !== null && job.company.name}
                      currency={job.currency}
                      jobID={job.id}
                      companyLogo={job.company !== null && job.company.logo}
                      title={
                        job.title !== null ? job.title.name : "*No job title*"
                      }
                      date={FormatDate(job.created_at)}
                      location={job.company !== null && job.company.country}
                      price_amount={job.salary !== "" ? job.salary : undefined}
                      timeline={job.mode}
                    ></JobTiles>
                  </AppCol>
                );
              })}
          </AppRow>
        </AppContainerFluid>
      )}
    </>
  );
}

export default SimilarJobs;
