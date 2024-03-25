import React from "react";
import { useLocation } from "react-router-dom";
import { WHITE_COLOR } from "../../../constants/AppColors";
import AppButton from "../../atoms/AppButton/AppButton";
import AppImage from "../AppImage/AppImage";
import classStyle from "./SkillTile.module.css";

function SkillsTileTest({ image = {}, text = "", skillID, testID }) {

  return (
    <a
      href={`/talent/tests/${testID}/${skillID}`}
      className={classStyle.skill_tile}
    >
      <div className={classStyle.image_div}>
        <div className={classStyle.image}>
          <center>
            <AppImage image={image}></AppImage>
          </center>
        </div>
      </div>
      <center>
        <div className={classStyle.myText}>
          <>{text}</>
        </div>
      </center>
      <br></br>
      <AppButton
        backgroundColor={WHITE_COLOR}
        color="transparent"
        size="small"
        label="Start"
      />
    </a>
  );
}

export default SkillsTileTest;
