import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { COLORED_LOGO_SVG } from "../../../../constants/AppSvg";
import { NAVLINKS } from "../../../../constants/navlinks";
import { FormatDate } from "../../../../constants/utils";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppContainerFluid from "../../../organisms/AppContainerFluid/AppContainerFluid";
import AppImage from "../../../organisms/AppImage/AppImage";
import AppNavBar from "../../../organisms/AppNavBar/AppNavBar";
import AppRow from "../../../organisms/AppRow/AppRow";
import JobTiles from "../../../organisms/JobTiles/JobTiles";
import SecondaryBackground from "../../../organisms/SecondaryBackground/SecondaryBackground";
import HomePageFoooter from "../../../templates/HomePageFoooter/HomePageFoooter";
import FindJobDropDownForm from "./FindJobDropDownForm";
import {
  getAllJobCompany,
  handleOnSelectInput,
} from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { useEffect } from "react";
import { LinearProgress } from "@mui/material";
import AppPreFooter from "../../../templates/AppPreFooter/AppPreFooter";
import PaginationNextPrevious from "../../../organisms/PaginationNextPrevious/PaginationNextPrevious";
import AppMobileNav from "../../../organisms/AppMobileNav/AppMobileNav";
function ApplicantFindJob() {
  const jobData = useSelector((state) => state.jobCompany);
  const dispatch = useDispatch();

  const effectRun = useRef(false);


  const { search_job_form, search_job_keywork } = jobData;
  const { allCompanyJobs } = jobData;
  const { data: allJobsData } = allCompanyJobs;
  const { results: allJobsDataResults, links: allJobsLinks } = allJobsData;

  const { next, previous } =
    allJobsLinks !== undefined ? allJobsLinks : { next: null, previous: null };
  // console.log(allJobsDataResults)

  useEffect(() => {
    if (search_job_keywork !== undefined) {
      dispatch(getAllJobCompany({ data: search_job_keywork }));
    }
  }, [search_job_keywork]);

  useEffect(() => {

    !effectRun.current && dispatch(getAllJobCompany({data:"All"}));

      return () => {
        effectRun.current = true;
       
      };
    
  }, []);
  return (
    <div>
      <AppMobileNav />

      <AppNavBar
        rightLinks={NAVLINKS.dashboard_talent_right_links}
        leftLinks={NAVLINKS.dashboard_talent_links}
      />
      <SecondaryBackground style={{ paddingTop: 100, paddingLeft: 0 }}>
        <>
          <AppRow style={{ paddingLeft: 0 }}>
            <AppCol
              className="pt-5"
              size={8}
              md_size={8}
              lg_size={8}
              xs_size={12}
            >
              <h4>Find Jobs</h4>
              <p>Derive joy by building that software to transform lives</p>
            </AppCol>
            <AppCol size={4} md_size={4} lg_size={4} xs_size={12} xl_size={4}>
              {/* aa {JSON.stringify(search_job_form)} */}
              <FindJobDropDownForm
                handleSelectFn={handleOnSelectInput}
                data={search_job_form}
              />
            </AppCol>
          </AppRow>
        </>
      </SecondaryBackground>

      <AppContainerFluid style={{ marginTop: 50 }}>
        <AppRow className="gx-3">
        {allCompanyJobs.loading && <LinearProgress />}

          {Array.isArray(allJobsDataResults) && (
            <>
              <h6 className="mb-4">
                {search_job_keywork !== "All"
                  ? search_job_keywork !== undefined && (
                      <>
                        {allJobsDataResults.length}{" "}
                        {allJobsDataResults.length > 1 ? "results" : "result"}{" "}
                        found for "{search_job_keywork}"
                      </>
                    )
                  : `Showing ${allJobsDataResults.length} jobs`}
              </h6>

              {allJobsDataResults !== undefined && (
                <>

                  {allJobsDataResults.map((job) => {
                    return (
                      <AppCol
                        key={job.id}
                        size={4}
                        md_size={6}
                        lg_size={6}
                        sm_size={12}
                      >
                        <JobTiles
                          companyName={job.company !== null && job.company.name}
                          currency={job.currency}
                          jobID={job.id}
                          companyLogo={job.company !== null && job.company.logo}
                          title={
                            job.title !== undefined
                              ? job.title !== null
                                ? job.title.name
                                : "*No job title*"
                              : "*No job title*"
                          }
                          date={FormatDate(job.created_at)}
                          location={job.company !== null && job.company.country}
                          min_salary={
                            job.min_salary !== "" ? job.min_salary : undefined
                          }
                          max_salary={
                            job.max_salary !== "" ? job.max_salary : undefined
                          }
                          timeline={job.mode}
                        ></JobTiles>
                      </AppCol>
                    );
                  })}
                </>
              )}
            </>
          )}
        </AppRow>

        <PaginationNextPrevious
          previous={previous}
          next={next}
          previousFn={() =>
            dispatch(
              getAllJobCompany({
                data: search_job_keywork,
                pageURL: previous !== undefined && previous,
              })
            )
          }
          nextFn={() =>
            dispatch(
              getAllJobCompany({
                data: search_job_keywork,
                pageURL: next !== undefined && next,
              })
            )
          }
        />
      </AppContainerFluid>
      {/* </AppContainerFluid> */}

      <AppPreFooter />
      <HomePageFoooter />
    </div>
  );
}

export default ApplicantFindJob;
