import React from "react";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import UpdatesDoc from "./pagecomponents/UpdatesDoc";

function Updates() {
  return (
    <div>
      <TalentLayout pageTitle="Updates" pageHeaderRight={undefined}>
        <WhiteBgDiv>
          <UpdatesDoc />
        </WhiteBgDiv>
      </TalentLayout>
    </div>
  );
}

export default Updates;
