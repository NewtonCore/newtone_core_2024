import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PRIMARY_COLOR, SECONDARY_LIGHT_COLOR } from "../../../constants/AppColors";
// import "./AppButton.css";
import styles from "./AppButton.module.css";

const appClassName = "btn";

function SecondaryButton({
  label = "",
  className = "",
  size = "",
  color =SECONDARY_LIGHT_COLOR,
  onClick,
  style,
  loading = null,
  children = undefined,
  isLink = null,
  linkPath = "#",
  backgroundColor
}) {
  let Buttonstyles = {
    backgroundColor: backgroundColor!== undefined? backgroundColor:color,
    color:
      color === "white"
        ? PRIMARY_COLOR
        : color === "transparent"
        ? "#333333"
        : PRIMARY_COLOR,
    ...style,
  };

  let ButtonClass = `${appClassName} ${styles.btn}  ${className} ${
    size === "small" ? styles.app_button_small : styles.app_button_secondary
  }`;

  let ButtonChildren =
    children !== undefined ? (
      children
    ) : (
      <>
        {loading ? (
          "Please wait..."
        ) : (
          <>{label === undefined ? "Default Button" : label}</>
        )}
      </>
    );

  return (
    <>
      {isLink ? (
        <>
          <a href={linkPath}>
            <button
              disabled={loading}
              onClick={onClick}
              style={Buttonstyles}
              type="button"
              className={ButtonClass}
            >
              {ButtonChildren}
            </button>
          </a>
        </>
      ) : (
        <button
          disabled={loading}
          onClick={onClick}
          style={Buttonstyles}
          type="button"
          className={ButtonClass}
        >
          {ButtonChildren}
        </button>
      )}
    </>
  );
}

export default SecondaryButton;
