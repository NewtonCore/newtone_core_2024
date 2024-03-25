import React from "react";
import AppRow from "../../../organisms/AppRow/AppRow";
import AppCol from "../../../organisms/AppCol/AppCol";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";

function PasswordResetForm({ form, defaultLoginData, handleTextInputChange }) {
  const handleChange = (e) => {
    handleTextInputChange(e);
  };
  return (
    <div className="p-3">
      {Array.isArray(form) &&
        form.map((field) => {
          return (
            <AppRow key={field.id}>
              <>
                {field.children.map((field_child, index_2) => {
                  return (
                    <AppCol key={index_2} sm_size="12" lg_size="12">
                      <FormInputRenderer
                        handleChange={
                          field_child.type === "text-input"
                            ? handleChange
                            : field_child.type === "select"
                            ? {}
                            : {}
                        }
                        type={field_child.type}
                        metaData={{
                          value: defaultLoginData[field_child.name],
                          className: "loginInputs",
                          inputId: field.id,
                          name: field_child.name,
                          type: field_child.input_type,
                          label: field_child.label,
                          isRequired: field_child.isRequired,
                          pattern: field_child.pattern,
                          title: field_child.title,
                          placeholder: field_child.placeholder,
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

export default PasswordResetForm;
