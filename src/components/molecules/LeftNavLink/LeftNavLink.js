import React from "react";
import { useDispatch } from "react-redux";
import {  NavLink } from "react-router-dom";
import { toggleSideNav } from "../../../app-redux/features/appData/appDataSlice";
import classStyle from "./LeftNavLink.module.css";

function LeftNavLink({ image = {}, name = "", link = "", style = {} }) {
  const dispatch = useDispatch();

  return (
    <>
      <NavLink
      onClick={()=> dispatch(toggleSideNav())}
        style={style}
        to={link}
        className={({ isActive }) =>
          !isActive
            ? classStyle.container_link
            : classStyle.container_link_active
        }
      >
        <div className={classStyle.elipse}>{image}</div>

        <div href="#" className={classStyle.link}>
          <span href="#">{name}</span>
        </div>
      </NavLink>
    </>
  );
}

export default LeftNavLink;
