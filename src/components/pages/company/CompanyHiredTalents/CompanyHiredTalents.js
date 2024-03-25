import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getMySavedProfiles, getTalentsWhichHired } from "../../../../app-redux/features/jobCompany/jobCompanySlice";
import { PutTalentsInArray_FromJob } from "../../../../constants/utils";
// import AppPayPal from "../../../organisms/AppPayPal/AppPayPal";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import CompanyDebit from "./pagecomponents/CompanyDebit";
import HiredTalents from "./pagecomponents/HiredTalents";
import SavedTalents from "./pagecomponents/SavedTalents";

function CompanyHiredTalents() {
  const dispatch = useDispatch();

  const jobCompany = useSelector((state) => state.jobCompany);
  const { talentsOfferedJob ,mySavedProfiles} = jobCompany;
  
  const { data: talentsOfferedJobData } = talentsOfferedJob;
  const { data: mySavedProfilesData } = mySavedProfiles;


  const { results: talentsOfferedJobResults, links: nxtPrevLinks } =
    talentsOfferedJobData;
  
    const { results: mySavedProfilesResults, links: nxtPrevLinks_SavedProfiles } =
    mySavedProfilesData;

  const [talentsApplied, setTalentsApplied] = useState([]);

  const { next, previous } =
    nxtPrevLinks !== undefined ? nxtPrevLinks : { next: null, previous: null };
  
    const { next_saved_profile, previous_saved_profile } =
    nxtPrevLinks_SavedProfiles !== undefined ? nxtPrevLinks_SavedProfiles : { next: null, previous: null };

  useEffect(() => {
    if (talentsOfferedJobResults !== undefined) {
      setTalentsApplied(PutTalentsInArray_FromJob(talentsOfferedJobResults));
    }
  }, [talentsOfferedJobResults]);

  useEffect(()=>{
    dispatch(getMySavedProfiles())
  },[])
// console.log({talentsApplied})
  const tabs = [
    {
      id: 1,
      component: (
        <HiredTalents
          previousFn={() =>
            dispatch(
              getTalentsWhichHired({
                pageURL: previous !== undefined && previous,
              })
            )
          }
          nextFn={() =>
            dispatch(
              getTalentsWhichHired({
                pageURL: previous !== undefined && previous,
              })
            )
          }
          next={next}
          previous={previous}
          data={talentsApplied.talents}
        ></HiredTalents>
      ),
      title: "List of Hired Talents",
    },
    {
      id: 2,
      component: (
        <SavedTalents
          previousFn={() =>
            dispatch(
              getMySavedProfiles({
                pageURL: previous_saved_profile !== undefined && previous_saved_profile,
              })
            )
          }
          nextFn={() =>
            dispatch(
              getMySavedProfiles({
                pageURL: next_saved_profile !== undefined && next_saved_profile,
              })
            )
          }
          next={next_saved_profile}
          previous={previous_saved_profile}
          data={mySavedProfilesResults}
        ></SavedTalents>
      ),
      title: "List of Saved Talents",
    },
    {
      id: 3,
      component: <CompanyDebit></CompanyDebit>,
      title: "Company Debit Information",
    },
  ];
  return (
    <div>
      <CompanyLayout pageTitle="Talents" pageHeaderRight={undefined}>
        <Tabs
          defaultActiveKey={tabs[0]["id"]}
          id="fill-tab-example"
          className="mb-3"
          justify
          
        >
          {tabs.map((tab, index) => {
            return (
              <Tab
                key={index}
                style={{ backgroundColor: "transparent",padding:0 }}
                eventKey={tab.id}
                title={tab.title}
              >
                <WhiteBgDiv>{tab.component}</WhiteBgDiv>
              </Tab>
            );
          })}
        </Tabs>
        {/* <AppPayPal/> */}
      </CompanyLayout>
    </div>
  );
}

export default CompanyHiredTalents;
