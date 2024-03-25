import React from "react";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppTextField from "../../../organisms/AppTextField/AppTextField";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import { COMPANY_CHANGE_PASS_FIELDS } from "./fields";

function CompanyChangePassForm() {
  return (
    <div>
      <AppRow>
        <WhiteBgDiv>
          {COMPANY_CHANGE_PASS_FIELDS.map((field) => {
            return <AppTextField label={field.label} />;
          })}
          
          {/* <AppTextField label="Old Password" />
        <AppTextField label="New Password" />
        <AppTextField label="Confirm New Password" /> */}
          <AppCol style={{ padding: 0 }}>
            <AppButton size="small" label="Save Password"></AppButton>
          </AppCol>
        </WhiteBgDiv>
      </AppRow>
    </div>
  );
}

export default CompanyChangePassForm;
