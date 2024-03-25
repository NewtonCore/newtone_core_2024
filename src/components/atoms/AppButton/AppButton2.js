import React from "react";
import { Link } from "react-router-dom";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
// import "./AppButton.css";
import styles from "./AppButton.module.css";

const appClassName = "btn";

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
  backgroundColor
}) {
  let styles = {
    backgroundColor: backgroundColor!== undefined? backgroundColor:color,
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
          <Link to={linkPath}>
            <button
              disabled={loading}
              onClick={onClick}
              style={styles}
              type="button"
              className={ButtonClass}
            >
              {ButtonChildren}
            </button>
          </Link>
        </>
      ) : (
        <button
          disabled={loading}
          onClick={onClick}
          style={styles}
          type="button"
          className={ButtonClass}
        >
          {ButtonChildren}
        </button>
      )}
    </>
  );
}

export default AppButton;
