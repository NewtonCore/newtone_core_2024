import React from "react";
import AppRow from "../../../../organisms/AppRow/AppRow";
import AppCol from "../../../../organisms/AppCol/AppCol";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";

function ReportQuestForm({ data, onChangeForm }) {
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
                          child_input.type === "text-area"
                            ? onChangeForm
                            : () => {}
                        }
                        type={child_input.type}
                        metaData={{
                          meta: {
                            RowKey: input_row_index,
                            ChildKey: child_index,
                          },

                          label: child_input.label,
                          value: child_input.value,
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

export default ReportQuestForm;
