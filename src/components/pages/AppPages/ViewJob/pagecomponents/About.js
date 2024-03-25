import React from "react";
import "./About.css"

function About({ about }) {
  return (
    <div className="About">
      <h5 className="mt-4">Job Overview</h5>
      <span className="mt-3 fw-light">
        <div dangerouslySetInnerHTML={{ __html: `${about}` }}></div>
      </span>
    </div>
  );
}

export default About;
