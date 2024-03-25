import React from "react";

function About({ about, heading = undefined }) {
  return (
    <div>
      <h5 className="mt-4 fw-bold">
        {heading === undefined ? "About me" : heading}
      </h5>
      {about !== undefined && (
        <>
          <span className="mt-3 fw-light">
            <div dangerouslySetInnerHTML={{ __html: `${about}` }}></div>
          </span>
        </>
      )}

      {/* {about} */}
    </div>
  );
}

export default About;
