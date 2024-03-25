import React from "react";
import AppImage from "../AppImage/AppImage";

import AppSVG from "../AppSVG/AppSVG";
import "./SkillsTile.css";

function SkillsTile({ image = {}, text = "" }) {
  return (
    <div className="" id="skill_tile">
      <div id="image_div" className="">
        {/* {image} */}
        <div id="image">
            {/* aa */}
            {/* <AppImage image={image}></AppImage> */}
            <AppSVG data={image}></AppSVG>
        </div>
      </div>
      <center>
        <span>{text}</span>
      </center>
    </div>
  );
}

export function SkillsTile2({ image = {}, text = "" }) {
  return (
    <div className="" id="skill_tile2">
      <div id="image_div" className="">
        {/* {image} */}
        <div id="image">
          <center>
            {/* aa */}
            {/* <AppImage image={image}></AppImage> */}
            <AppSVG style={{height:60,width:60}} data={image}></AppSVG>
          </center>
        </div>
      </div>
      <center>
        <span>{text}</span>
      </center>

      
    </div>
  );
}

export function SkillsTile3({ image = {}, text = "",experience_level }) {
  return (
    <div className="shadow-sm p-3 bg-body rounded" id="skill_tile3">
      <div id="" className="">
        {/* {image} */}
        <div id="image" className="pb-3">
          <center>
            {/* aa */}
            {/* <AppImage image={image}></AppImage> */}
            <AppImage style={{ height: 40 }} image={image}></AppImage>
          </center>
        </div>
      </div>
      <center>
        <span className="text-muted myText">{text}</span>
      </center>

      {
        experience_level !== undefined &&

        <center>
        <span className="text-muted" style={{fontSize:"85%"}}>{experience_level}</span>
      </center>
      }
    </div>
  );
}

export default SkillsTile;
