import React from "react";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";

function LinksForm({ sectionName, data, dispatch, handleTextInputFn }) {
  let handleTextChange = (e, meta) => {
    // console.log(e.target.value)
    let { value, name } = e.target;
    let { RowKey, ChildKey } = meta;
    dispatch(
      handleTextInputFn({
        state: "links",
        valueToUpdate: e.target.value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  return (
    <div>
      <h4>{sectionName}</h4>
      {/* {JSON.stringify(sectionName)} */}
      {Array.isArray(data) &&
        data.map((education, index_1) => {
          return (
            <span key={index_1}>
              {Array.isArray(data) &&
                data.map((bio_1) => {
                  return (
                    <AppRow className="gx-5" key={bio_1.id}>
                      {bio_1.children.map((bio_2,child_index) => {
                        return (
                          <AppCol size={12 / bio_1.colums} key={bio_2.id}>
                            <FormInputRenderer
                            handleChange={
                              bio_2.type === "text-input"
                                ? handleTextChange
                                : bio_2.type === "select"
                                ? {}
                                : {}
                            }
                              type={bio_2.type}
                              metaData={{
                                meta: {
                                  RowKey: index_1,
                                  ChildKey: child_index,
                                },
                                label: bio_2.label,
                                value: bio_2.value,
                                name: bio_2.name,
                                input_type: bio_2.input_type,
                                inputId: "settings_input_fields",
                                data: bio_2.data,
                                type: bio_2.input_type,
                                // handleChange: handleTextChange,
                              }}
                            ></FormInputRenderer>
                          </AppCol>

                          // </div>
                        );
                      })}
                    </AppRow>
                  );
                })}
            </span>
          );
        })}
    </div>
  );
}

export default LinksForm;
