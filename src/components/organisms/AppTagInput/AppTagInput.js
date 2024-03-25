import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AppRow from "../AppRow/AppRow";
import "./AppTagInput.css";

function AppTagInput({ handleReturnData = undefined, label, inputId }) {
  const [tags, setTags] = useState([]);
  const [errorMsg, setErrMsg] = useState("");

  const removeTag = (tag) => {
    let index = tags.indexOf(tag);
    // console.log({ index });

    let mytags = index > -1 && tags.splice(index, 1);

    // console.log(mytags);

    setTags([...tags], mytags);
  };

  const handleOnDeleteWhenEmpty = (e) => {
    setErrMsg("");

    if (e.key === "Backspace") {
      if (tags.length !== 0 && e.target.value === "") {
        let mytags = tags.splice(-1); // delete the last element from the array
        setTags([...tags], mytags);
      }
    }
  };

  const addTag = (e) => {
    //    check if is backspace
    // handleOnDeleteWhenEmpty(e)

    const { value } = e.target;

    // console.log(e.key)

    if (e.key === "Enter") {
      let tag = value.replace(/\s+/g, " "); //remove unwanted spaces from tags
      if (tag.length > 0 && !tags.includes(tag) && tags !== "") {
        tag.split(",").map((tag) => {
          // myTags.push(tag)

          setTags(
            // Replace the state
            [
              // with a new array
              ...tags, // that contains all the old items
              tag, // and one new item at the end
            ]
          );
        });
        setErrMsg("");

        e.target.value = "";
      } else {
        if (!tag.length > 0) {
          setErrMsg("Input should be atleast one character long ");
        } else if (tags.includes(tag)) {
          setErrMsg(`Item "${tag}" already exists`);
        }
      }
      //   console.log(tag);
    }
  };

  useEffect(() => {
    if (handleReturnData && tags.length !== 0) {
      return () => handleReturnData(tags);
    }
  }, [tags]);

  return (
    <AppRow id="apptag_div" className="app_text_field">
      <AppRow>
        <span className="label">{label}</span>
      </AppRow>
      <div id="wrapper">
        <div id="content">
          <ul>
            {tags.map((tag) => {
              return (
                <li onClick={() => removeTag(tag)}>
                  {tag} <span style={{ color: "red" }}>x</span>
                </li>
              );
            })}
            <input
              onKeyDown={(e) => handleOnDeleteWhenEmpty(e)}
              onKeyUp={(e) => addTag(e)}
            ></input>
          </ul>
        </div>
      </div>
      <span className="text-muted">{errorMsg}</span>
    </AppRow>
  );
}

export default AppTagInput;
