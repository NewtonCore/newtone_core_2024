import React from "react";
import { COMPANY_ROUTE } from "../../../../../routes/RouteLinks";
import EmptyData from "../../../../organisms/EmptyData/EmptyData";
import PaginationNextPrevious from "../../../../organisms/PaginationNextPrevious/PaginationNextPrevious";
import HiredTalentsTable from "./HiredTalentsTable";
import CompanyViewTalents from "../../../applicant/MyJobStatus/CompanyViewTalents";


function SavedTalents({ data,next,previous,nextFn, previousFn }) {
   
  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data !== undefined && (
        <>
          {data.length === 0 ? (
            <>
              <EmptyData
                actionLabel="View Jobs"
                linkPath={"/" + COMPANY_ROUTE.index + COMPANY_ROUTE.my_jobs}
                // navigation="#"
                hasAction={true}
                title="No saved talents"
                message="You do not have any saved talents."
              />
            </>
          ) : (
            <>

            <CompanyViewTalents isSavedProfile={true} talentsData={data} />
             
              <PaginationNextPrevious
                previous={previous}
                next={next}
                previousFn={previousFn}
                nextFn={nextFn}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SavedTalents;
