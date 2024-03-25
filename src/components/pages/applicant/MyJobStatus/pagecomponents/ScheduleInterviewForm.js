import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";

function ScheduleInterviewForm(
  { form_data, 
    // applyingTalentData, 
    onChangeForm,
    data,
    onSelectForm
  }) {
  
  var today = new Date().toISOString().split('T')[0]

  // console.log(applyingTalentData, 'out state')
  return (
    <div>
      {Array.isArray(form_data) &&
        form_data.map((input_row, input_row_index) => {
          return (
            <AppRow className="gx-0" key={input_row.id}>
              {input_row.children.map((child_input, child_index) => {
                if (child_input.hidden !== true) {
                  return (
                    <AppCol size={12 / input_row.colums} key={child_input.id} marginBotton={2}>
                      <FormInputRenderer
                        handleChange={
                          child_input.type === "text-input" ||
                          child_input.type === "text-area"  || child_input.type === "mui-date" 
                            ? onChangeForm
                            : child_input.type === "select" ? onSelectForm : ()=>{}
                        }
                        type={child_input.type}
                        metaData={{
                          meta: {
                            RowKey: input_row_index,
                            ChildKey: child_index,
                            input_name:child_input.name
                          },
                          showMonthYearPicker:child_input.type ==="year-month-date" && false,
                          label: child_input.label,
                          value : data[child_input.name],
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

export default ScheduleInterviewForm;
