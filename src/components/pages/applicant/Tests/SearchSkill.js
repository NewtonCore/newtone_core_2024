import React from "react";
import { useDispatch } from "react-redux";
import AppCol from "../../../organisms/AppCol/AppCol";
import AppRow from "../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../organisms/FormRenderer/FormInputRenderer";

function SearchSkill({ data, handleSearch = {},handleTextInputFn={} }) {
  const dispatch = useDispatch();

  let handleTextChange = (e, meta) => {
    let { value, name } = e.target;
    const {  RowKey, ChildKey } = meta;
    

    handleSearch(value)
    dispatch(
      handleTextInputFn({
        state: "search",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  return (
    <div>
      {/* {JSON.stringify(handleTextInputFn)} */}
      {Array.isArray(data) &&
        data.map((field, form_index) => {
          return (
            <AppRow className="gx-5" key={field.id}>
              {field.children.map((field_child, child_index) => {
                if (field_child.hidden !== true) {
                  return (
                    <AppCol size={12 / field.colums} key={field_child.id}>
                      {/* {JSON.stringify(field_child)} */}
                      <FormInputRenderer
                        handleChange={
                          field_child.type === "text-input"
                            ? handleTextChange
                            : {}
                        }
                        type={field_child.type}
                        metaData={{
                          meta: { RowKey: form_index, ChildKey: child_index },
                          label: field_child.label,
                          value: field_child.value,
                          name: field_child.name,
                          input_type: field_child.input_type,

                          inputId: "settings_input_fields",
                          data: field_child.data,
                          type: field_child.input_type,
                          isRequired: field_child.isRequired,
                          maxlength: field_child.maxlength,
                          disabled: field_child.disabled,
                          min: field_child.min,
                          errorMessage: field_child.errorMessage,
                          placeholder: field_child.placeholder,
                        }}
                      ></FormInputRenderer>
                    </AppCol>

                    // </div>
                  );
                }
              })}
            </AppRow>
          );
        })}
    </div>
  );
}

export default SearchSkill;
