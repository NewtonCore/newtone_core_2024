import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";

function ApplyJobForm(
  { data, 
    applyingTalentData, 
    onChangeForm 
  }) {
  
  // console.log(applyingTalentData, 'out state')
  return (
    <div>
      {Array.isArray(data) &&
        data.map((input_row, input_row_index) => {
          return (
            <AppRow className="gx-5" key={input_row.id}>
              {input_row.children.map((child_input, child_index) => {
                if (child_input.hidden !== true) {
                  return (
                    <AppCol size={12 / input_row.colums} key={child_input.id}>
                      <FormInputRenderer
                        handleChange={
                          child_input.type === "text-input" ||
                          child_input.type === "text-area"
                            ? onChangeForm
                            : ()=>console.log()
                        }
                        type={child_input.type}
                        metaData={{
                          meta: {
                            RowKey: input_row_index,
                            ChildKey: child_index,
                          },
                          showMonthYearPicker:child_input.type ==="year-month-date" && false,
                          label: child_input.label,
                          value : applyingTalentData[child_input.name],
                          // value: child_input.value,
                          name: child_input.name,
                          input_type: child_input.input_type,
                          inputId: "settings_input_fields",
                          data: child_input.data,
                          type: child_input.input_type,
                        }}
                      ></FormInputRenderer>
                    </AppCol>
                  );
                }
              })}
            </AppRow>
          );
        })}
    </div>
  );
}

export default ApplyJobForm;
