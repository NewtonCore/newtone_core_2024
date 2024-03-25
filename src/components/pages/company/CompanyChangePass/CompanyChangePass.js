import React from "react";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import CompanyLayout from "../../../templates/CompanyLayout/CompanyLayout";
import ChangePassForm from "../../applicant/Settings/pagecomponents/ChangePassword";
import CompanyChangePassForm from "./CompanyChangePassForm";

function CompanyChangePass() {
  return (
    <>
      <CompanyLayout pageTitle="Change Password">
        {/* <CompanyChangePassForm /> */}
       <WhiteBgDiv>
       <ChangePassForm />
       </WhiteBgDiv>
      </CompanyLayout>
    </>
  );
}

export default CompanyChangePass;
