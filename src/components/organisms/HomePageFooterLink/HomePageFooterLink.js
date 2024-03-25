import React from "react";
import { Link } from "react-router-dom";

function HomePageFooterLink({ name = "", link = "" }) {
  return (
    <li className="fw-light">
      <Link to={link}>{name}</Link>
    </li>
  );
}

export default HomePageFooterLink;
