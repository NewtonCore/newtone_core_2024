import React from "react";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import UpdatesDoc from "./pagecomponents/UpdatesDoc";
import { useSelector } from "react-redux";
import UpdatesNotification from "./pagecomponents/UpdatesNotification";
import { formatAppliedTalentsFor_Updates } from "../../../../constants/utils";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import EmptyData from "../../../organisms/EmptyData/EmptyData";

function CompanyUpdates() {
  const jobCompanyData = useSelector((state) => state.jobCompany);
  const { talentsWhichAppliedJob_For_Updates: updatesData } = jobCompanyData;

  const updatesDataRes = updatesData.data.hasOwnProperty("results")
    ? updatesData.data.results
    : [];

  let updates = formatAppliedTalentsFor_Updates(updatesDataRes);
  // console.log({ updatesDataRes });

  return (
    <div>
      <CompanyLayout pageTitle="Updates" pageHeaderRight={undefined}>
        <WhiteBgDiv>
          {/* <UpdatesDoc /> */}

          {
            updates.length === 0 
            &&
            <EmptyData title="You have no updates"></EmptyData>
          }

          <AppRow>
            {updates.map((data) => {
              return (
                <AppCol
                  size={6}
                  md_size={6}
                  sm_size={12}
                  xs_size={12}
                  xl_size={6}
                >
                  <UpdatesNotification update={data}></UpdatesNotification>
                </AppCol>
              );
            })}
          </AppRow>
        </WhiteBgDiv>
      </CompanyLayout>
    </div>
  );
}

export default CompanyUpdates;
