import React from "react";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";
import "./Login.css";

function LoginForm({
  handleLoginFormChange,
  defaultLoginData,
  passwordIsVisible,
  toggleRevealPassword,
  formInputs
}) {
  return (
    <div>
      {Array.isArray(formInputs) && formInputs.map((field) => {
        return (
          <AppRow key={field.id}>
            <>
              {field.children.map((field_child, index_2) => {
                return (
                  <AppCol key={index_2} sm_size="12" lg_size="12">
                    
                    <FormInputRenderer
                    handleChange={
                      field_child.type === "text-input"
                        ? handleLoginFormChange
                        : field_child.type === "select"
                        ? {}
                        : {}
                    }
                    type={field_child.type}
                    metaData={
                      {
                        toggleRevealPassword:toggleRevealPassword,
                        passwordIsVisible:passwordIsVisible,
                        value:defaultLoginData[field_child.name],
                        // handleChange:handleLoginFormChange,
                        className:"loginInputs",
                        inputId:field_child.id,
                        name:field_child.name,
                        type:field_child.input_type,
                        label:field_child.label ,
                        isRequired:field_child.isRequired,
                        pattern:field_child.pattern,
                        title:field_child.title
                      }
                    }
                    >

                    </FormInputRenderer>
                    
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

export default LoginForm;
