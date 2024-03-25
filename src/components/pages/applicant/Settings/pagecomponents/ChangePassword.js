import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  changePassword,
  handleOnChangeTextInput,
  handleValidateFields,
  toggleShowPassword,
} from "../../../../../app-redux/features/Auth/authSlice";
import { FORM_INPUTS } from "../../../../../constants/FormInputs";
import {
  checkPropertiesIsEmpty,
  ExtractFieldsFromFormData,
  generateUniqueID,
} from "../../../../../constants/utils";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import FormInputRenderer from "../../../../organisms/FormRenderer/FormInputRenderer";
import WhiteBgDiv from "../../../../organisms/WhiteBgDiv/WhiteBgDiv";

function ChangePassForm() {
  const authData = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  let { changePasswordForm ,passwordIsVisible} = authData;

  let handleTextChange = (e, meta) => {
    let { value, name } = e.target;

    const {  RowKey, ChildKey } = meta;

    dispatch(
      handleOnChangeTextInput({
        state: "change_password",
        valueToUpdate: value,
        KeyName: name,
        RowKey: RowKey,
        ChildKey,
      })
    );
  };

  const toggleRevealPassword = () => {
    dispatch(toggleShowPassword());
  };

  let handleOnBlur = (e, meta) => {};

  let changePasswordFunc = () => {
    dispatch(handleValidateFields({ state: "change_password" }));

    //extract the fields only that are required

    let change_password_object = ExtractFieldsFromFormData(
      changePasswordForm,
      true
    );

    console.log({change_password_object})
    //
    let check_if_empty = checkPropertiesIsEmpty(change_password_object);

    if (check_if_empty) {
      toast.warning("Kindly fill in the required fields");
      return 0;
    }

    dispatch(changePassword({ data: changePasswordForm })).unwrap()
    .then(res=>{
      toast.success("Password has been changed")
      
    }).catch(err=>{
      toast.error(err)
    })
  };
  return (
    <div className="change_pass">
      <>
        {Array.isArray(changePasswordForm) &&
          changePasswordForm.map((form, form_index) => {
            return (
              <AppRow className="gx-3" key={form.id}>
                {form.children.map((child, child_index) => {
                  if (child.hidden !== true) {
                    return (
                      <AppCol size={12 / form.colums} key={child.id}>
                        {/* {JSON.stringify(child)} */}
                        <FormInputRenderer
                          onBlurValidation={
                            child.type === "text-input" ||
                            child.type === "text-area" || child.type === "password"
                              ? handleOnBlur
                              : {}
                          }
                          handleChange={
                            child.type === "text-input" ||
                            child.type === "text-area" || child.type === "password"
                              ? handleTextChange
                              : {}
                          }
                          type={child.type}
                          metaData={{
                            toggleRevealPassword:toggleRevealPassword,
                            passwordIsVisible:passwordIsVisible,
                            meta: { RowKey: form_index, ChildKey: child_index },
                            label: child.label,
                            value: child.value,
                            name: child.name,
                            input_type: child.input_type,
                            // className: child.hasError && classStyle.red_input,
                            // inputId: "settings_input_fields",
                            data: child.data,
                            type: child.input_type,
                            isRequired: child.isRequired,
                            maxlength: child.maxlength,
                            errorMessage:
                              child.type === "text-input" ||
                              (child.type === "text-area" &&
                                child.errorMessage),
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

        {/* {changePasswordForm.map((field) => {
              return (
                <FormInputRenderer
                  handleChange={handleTextChange}
                  key={generateUniqueID()}
                  type="text-input"
                  metaData={{
                    meta: { RowKey: form_index, ChildKey: child_index },
                    label: field.label,
                    inputId: "settings_input_fields",
                  }}
                />
              );
            })} */}
        <AppCol style={{ padding: 0 }}>
          <AppButton
            onClick={() => changePasswordFunc()}
            size="small"
            label="Save Password"
          ></AppButton>
        </AppCol>
      </>
    </div>
  );
}

export default ChangePassForm;
