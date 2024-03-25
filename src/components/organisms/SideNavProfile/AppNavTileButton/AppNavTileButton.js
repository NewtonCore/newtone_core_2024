import React from "react";
import { JOB_TEST } from "../../../../constants/AppImages";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppImage from "../../AppImage/AppImage";
import "./AppNavTileButton.css";

function AppNavTileButton({ image = undefined, title = "", link = "#" }) {
  return (
    <div href={link} id="app_nav_tile_btn">
      <AppButton
      size="small"
      isLink={true} linkPath={link}>
        {/* <span id="image_div">
        <AppImage
          image={image === undefined ? JOB_TEST : image}
          alt="tile_image"
          id=""
        ></AppImage>

      </span> */}
        <span>{title}</span>
      </AppButton>
    </div>
  );
}

export default AppNavTileButton;
