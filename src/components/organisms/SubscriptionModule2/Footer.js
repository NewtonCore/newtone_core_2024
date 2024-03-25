import React from "react";
import AppButton from "../../atoms/AppButton/AppButton";

function Footer({ handleClick }) {
  return (
    <div>
      <AppButton onClick={() => handleClick()} label="Pay now"></AppButton>
    </div>
  );
}

export default Footer;
