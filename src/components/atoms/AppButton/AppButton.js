import React from "react";
import { Link, NavLink } from "react-router-dom";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
// import "./AppButton.css";
import styles from "./AppButton.module.css";

const appClassName = "btn text-break";

function AppButton({
  label = "",
  className = "",
  size = "",
  color = "teal",
  onClick,
  style,
  loading = null,
  children = undefined,
  isLink = null,
  linkPath = "#",
  backgroundColor,
  disabled = null,
  type,
  loadingText = undefined,
  isExternalLink,
}) {
  let Buttonstyles = {
    backgroundColor: backgroundColor !== undefined ? backgroundColor : color,
    color:
      color === "white"
        ? PRIMARY_COLOR
        : color === "transparent"
        ? "#333333"
        : "white",
    ...style,
  };

  let ButtonClass = `${appClassName} ${styles.btn}  ${className} ${
    size === "small" ? styles.app_button_small : styles.app_button
  }`;

  let ButtonChildren =
    children !== undefined ? (
      <>
        {loading
          ? loadingText !== undefined
            ? loadingText
            : "Please wait..."
          : children}

        {/* {loadingText !== undefined ?loadingText :children } */}
      </>
    ) : (
      <>
        {loading ? (
          loadingText !== undefined ? (
            loadingText
          ) : (
            "Please wait..."
          )
        ) : (
          <>{label === undefined ? "Default Button" : label}</>
        )}
      </>
    );

  return (
    <>
      {isLink ? (
        <>
          {isExternalLink ? (
            <a rel="noreferrer" href={linkPath} target="_blank">
              <button
                disabled={loading || disabled}
                onClick={onClick}
                style={Buttonstyles}
                type={type}
                className={ButtonClass}
              >
                {ButtonChildren}
              </button>
            </a>
          ) : (
            <NavLink to={linkPath}>
              <button
                disabled={loading || disabled}
                onClick={onClick}
                style={Buttonstyles}
                type={type}
                className={ButtonClass}
              >
                {ButtonChildren}
              </button>
            </NavLink>
          )}
        </>
      ) : (
        <button
          type={type}
          disabled={loading || disabled}
          onClick={onClick}
          style={Buttonstyles}
          className={ButtonClass}
        >
          {ButtonChildren}
        </button>
      )}
    </>
  );
}

export default AppButton;
