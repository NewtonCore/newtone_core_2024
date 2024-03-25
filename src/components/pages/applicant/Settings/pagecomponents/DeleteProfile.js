import React from "react";
import { FORM_INPUTS } from "../../../../../constants/FormInputs";
import { generateUniqueID } from "../../../../../constants/utils";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import WhiteBgDiv from "../../../../organisms/WhiteBgDiv/WhiteBgDiv";

function DeleteProfile() {
  return (
    <div>
      <AppRow>
        <WhiteBgDiv>
          <AppRow>
            <>Are you sure! You want to delete your profile.</>
            <br></br>

            <>This can't be undone!</>
            <br></br>
            <br></br>

            <AppCol>
              {FORM_INPUTS.DELETE_PROFILE_FIELDS.map((field) => {
                return (
                  <FormInputRenderer
                    key={generateUniqueID()}
                    type="text-input"
                    metaData={{
                      label: field.label,
                      inputId: "settings_input_fields",
                    }}
                  />
                );
              })}
            </AppCol>
            <AppCol style={{ padding: 0 }}>
              <AppButton size="small" label="Delete Profile"></AppButton>
            </AppCol>
          </AppRow>
        </WhiteBgDiv>
      </AppRow>
    </div>
  );
}

export default DeleteProfile;
