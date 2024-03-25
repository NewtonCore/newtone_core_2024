import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppliedTalent } from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { PutTalentsInArray_FromJob } from "../../../../constants/utils";
import { HOME_ROUTES, TALENT_ROUTE } from "../../../../routes/RouteLinks";
import EmptyData from "../../../organisms/EmptyData/EmptyData";
import PaginationNextPrevious from "../../../organisms/PaginationNextPrevious/PaginationNextPrevious";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import MyJobsTable from "./pagecomponents/MyJobsTable";

function MyJobStatus() {
  const dispatch = useDispatch();

  const effectAppliedTalent = useRef(false);

  const jobCompanyData = useSelector((state) => state.jobCompany);
  const { talentsWhichAppliedJob, jobDetails } = jobCompanyData;
  let { results: talentsWhichAppliedJobResults, links: allJobsLinks } =
    talentsWhichAppliedJob.data;

  const { next, previous } =
    allJobsLinks !== undefined ? allJobsLinks : { next: null, previous: null };
  const [talentsApplied, setTalentsApplied] = useState([]);

  const TalentProfileData = useSelector((state) => state.TalentProfile);
  const authData = useSelector((state) => state.auth);
  let { talentState: talentSliceData } = TalentProfileData;
  let { data: talentDataResult } = talentSliceData;

  // console.log({talentsWhichAppliedJobResults})
  useEffect(() => {

    if (!effectAppliedTalent.current) {
      dispatch(getAppliedTalent());
    }
    return () => {
      effectAppliedTalent.current = true;
    };
  }, []);

  useEffect(() => {
    if (talentsWhichAppliedJobResults !== undefined) {
      setTalentsApplied(
        PutTalentsInArray_FromJob(talentsWhichAppliedJobResults)
      );
    }
  }, [talentsWhichAppliedJobResults]);
  // console.log(talentsApplied.talents)

  return (
    <div>
      <TalentLayout pageTitle="My Job Status" pageHeaderRight={undefined}>
        {/* aa  {JSON.stringify(talentDataResult)} */}
        <WhiteBgDiv loading={talentsWhichAppliedJob.loading}>
          {!talentDataResult.hasOwnProperty("id") && (
            <EmptyData
              actionLabel="Update profile"
              linkPath={"/" + TALENT_ROUTE.index + TALENT_ROUTE.editProfile}
              navigation="#"
              hasAction={true}
              title="Your profile is not updated"
              message="Click on update button below"
            />
          )}

          {talentsApplied.talents === undefined ? (
            <>
              {talentsWhichAppliedJob.length === 0 && (
                <EmptyData
                  actionLabel="Find a Job"
                  linkPath={"/" + HOME_ROUTES.findjob}
                  navigation="#"
                  hasAction={true}
                  title="No Job Applications Available"
                  message="You have not applied for any job yet, Click on Find a Job button below"
                />
              )}
            </>
          ) : (
            <>
              {talentsWhichAppliedJobResults !== undefined && (
                <>
                  {talentsWhichAppliedJobResults.length === 0 ? (
                    <EmptyData
                      actionLabel="Find a Job"
                      linkPath={"/"+HOME_ROUTES.findjob}
                      navigation="#"
                      hasAction={true}
                      title="No Job Applications Available"
                      message="You have not applied for any job yet, Click on Find a Job button below"
                    />
                  ) : (
                    <>
                      <MyJobsTable data={talentsApplied.talents} />
                      <PaginationNextPrevious
                        previous={previous}
                        next={next}
                        previousFn={() =>
                          dispatch(
                            getAppliedTalent({
                              pageURL: previous !== undefined && previous,
                            })
                          )
                        }
                        nextFn={() =>
                          dispatch(
                            getAppliedTalent({
                              pageURL: next !== undefined && next,
                            })
                          )
                        }
                      />
                    </>
                  )}
                </>
              )}
            </>
          )}
        </WhiteBgDiv>
      </TalentLayout>
    </div>
  );
}

export default MyJobStatus;
