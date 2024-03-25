import React, { useEffect } from "react";
import { useState } from "react";
import { USER_IMAGE } from "../../../constants/AppImages";
import AppImage from "../AppImage/AppImage";
import classStyle from "./AppFilePicker.module.css";

function AppFilePicker({ handleChange, meta, userImage }) {
  const [image, setImage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (userImage !== undefined && userImage !== null) {
      setImage(userImage);
    }
  }, [userImage]);
  //   let imageUrl = URL.createObjectURL(image);

  //   let imageUrl = URL.createObjectURL(image);

  const handleInputChange = (event) => {
    // console.log(event.target.files);

    if (
      event.target.files[0].type !== "image/jpeg" &&
      event.target.files[0].type !== "image/png"
    ) {
      setErrorMsg("Image should be png or jpeg");
      setImage("");
      setFileName("");

      return 0;
    } else {
      handleChange(event, meta, event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
      setFileName(event.target.files[0].name);
      setErrorMsg("");
    }
    // handleChange()
  };
  return (
    <>
      <div className={classStyle.container}>
        <>
          {image !== "" ? (
            <AppImage
              style={{ width: 100, height: 100 }}
              image={image === "" ? USER_IMAGE : image}
            />
          ) : userImage !== undefined ? (
            <AppImage
              style={{ width: 100, height: 100 }}
              image={userImage !== null ? userImage : USER_IMAGE}
            />
          ) : (
            <>
              <AppImage
                style={{ width: 100, height: 100 }}
                image={USER_IMAGE}
              />
            </>
          )}

          {/* <AppImage
            style={{ width: 100, height: 100 }}
            image={image === "" ? USER_IMAGE : image}
          /> */}
          <br></br>
        </>

        <label className={classStyle.custom_file_upload}>
          <input onChange={(e) => handleInputChange(e)} type="file" />
          Browse
        </label>
      </div>
      {errorMsg}
      <span className="text-muted">{fileName}</span>
      <br></br>
    </>
  );
}

export default AppFilePicker;
