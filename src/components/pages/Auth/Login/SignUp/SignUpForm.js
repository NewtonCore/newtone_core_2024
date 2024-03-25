import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppTextField from "../../../../organisms/AppTextField/AppTextField";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import { AUTH_FORM_FIELDS } from "../form_fields";

// import "./Login.css";
function SignUpForm({
  handleTalentSignUpFormChange,
  defaultSignUpData,
  passwordIsVisible,
  toggleRevealPassword,
  formInputs,
}) {
  return (
    <div>
      {/* {JSON.stringify(formInputs)} */}

      {Array.isArray(formInputs) &&
        formInputs.map((field) => {
          return (
            <AppRow key={field.id}>
              <>
                {field.children.map((field_child, index_2) => {
                  return (
                    <AppCol key={index_2} sm_size="12" lg_size="12">
                      <FormInputRenderer
                        handleChange={
                          field_child.type === "text-input"
                            ? handleTalentSignUpFormChange
                            : field_child.type === "select"
                            ? {}
                            : {}
                        }
                        type={field_child.type}
                        metaData={{
                          toggleRevealPassword: toggleRevealPassword,
                          passwordIsVisible: passwordIsVisible,
                          value: defaultSignUpData[field_child.name],
                          // handleChange:handleLoginFormChange,
                          className: "loginInputs",
                          inputId: field.id,
                          name: field_child.name,
                          type: field_child.input_type,
                          label: field_child.label,
                          isRequired: field_child.isRequired,
                          pattern:field_child.pattern,
                          title:field_child.title
                        }}
                      ></FormInputRenderer>
                    </AppCol>
                  );
                })}
              </>
            </AppRow>
          );
        })}
    </div>
  );
}

export default SignUpForm;
