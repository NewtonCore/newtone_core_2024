import React from "react";

function HomePageFooterSocialIcon({ name = "", link = "", icon }) {
  return (
    <li>
      <a target="_blank" href={link} aria-label={`Link to newton ${name}`} rel="noreferrer">{icon}</a>
    </li>
  );
}

export default HomePageFooterSocialIcon;
