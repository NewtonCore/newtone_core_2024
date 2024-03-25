import React, { useRef } from "react";

import AppRow from "../AppRow/AppRow";
import classStyles from "./AppTextArea.module.css";
import { useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function AppCkEditor({
  label = "",
  inputId,
  handleChange = {},
  value,
  showLabel = true,
  name = "",
  style,
  meta,
  isRequired,
  onBlurValidation,
  errorMessage,
}) {

  // console.log(errorMessage)
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleTextChange = (content) => {
    let e = {
      target: {
        name: name,
        value: content,
      },
    };
    handleChange(e, meta);
  };

  const handleBlur = () => {
    let e = {
      target: {
        name: name,
      },
    };
    onBlurValidation(e, meta);
  };

  return (
    <>
      <AppRow id={inputId} 
          className={`input_div ${errorMessage !== undefined && errorMessage !== "" && errorMessage !== false && classStyles.error_div}`}
      
      // className=""
      >
        {showLabel && (
          <div 
          
          className="label_div"
          >
            <span className="label">
              {label} {isRequired && "*"}
            </span>
          </div>
        )}
        <CKEditor
        

          // onBlur={
          //   onBlurValidation !== undefined
          //     ? (e) => onBlurValidation(e, meta)
          //     : () => {}
          // }
          style={{ borderRadius: 0 }}
          //   onInit={(evt, editor) => (editorRef.current = editor)}
          data={value}
          editor={ClassicEditor}
          //   onReady={(editor) => {
          //     // You can store the "editor" and use when it is needed.
          //     console.log("Editor is ready to use!", editor);
          //   }}
          onChange={(event, editor) => {
            const data = editor.getData();
            handleTextChange(data);
          }}
          onBlur={(event, editor) => {
            handleBlur();
          }}
          //   onFocus={(event, editor) => {
          //     console.log("Focus.", editor);
          //   }}
        />
      </AppRow>

      <div className={classStyles.error_message}>{errorMessage}</div>
    </>
  );
}

export default AppCkEditor;
