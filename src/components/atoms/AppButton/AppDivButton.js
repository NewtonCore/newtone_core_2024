import React from "react";
import { PRIMARY_COLOR } from "../../../constants/AppColors";
import styles from "./AppButton.module.css";

function AppDivButton({
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
  const appClassName = "btn";

  const onClickFn = () => {
    // alert("Click!");

    if(onClick !== undefined){
        onClick()

    }
  };

  const onKeyDown = (event) => {
    event.preventDefault();
    if (event.key === "Enter" || event.key === " ") {
      onClickFn();
    }
  };

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

  let ButtonClass = `${disabled && `button--disabled`} ${appClassName} ${
    styles.btn
  }  ${className} ${
    size === "small" ? styles.app_button_small : styles.app_button_div
  }`;

  return (
    <button
      onClick={onClickFn}
    //   role="button"
    //   tabIndex={disabled ? "-1" : "0"}
    //   onKeyDown={onKeyDown}
      //   className={`button ${disabled ? "button--disabled" : ""}`}
    //   aria-disabled={disabled}
      style={Buttonstyles}
      type={type}
      className={ButtonClass}
    >
      {children}
    </button>
  );
}

export default AppDivButton;
