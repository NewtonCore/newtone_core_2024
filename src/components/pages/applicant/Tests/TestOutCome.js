import React from "react";
import { PARTYING_FACE_SVG, SAD_FACE_SVG } from "../../../../constants/AppSvg";
import AppButton from "../../../atoms/AppButton/AppButton";
import AppImage from "../../../organisms/AppImage/AppImage";
import "./TestStepTwo.css";
function TestOutCome({ test_outcome, skillDetails, path }) {
  return (
    <div className="test_outcome">
      {/* Outcome- {JSON.stringify(test_outcome)} */}
      {test_outcome.pass_test ? (
        <AppImage
          style={{ height: 100, borderRadius: 10 }}
          image={PARTYING_FACE_SVG}
        ></AppImage>
      ) : (
        <AppImage
          style={{ height: 100, borderRadius: 10 }}
          image={SAD_FACE_SVG}
        ></AppImage>
      )}
      <br></br>
      <h5>
        {test_outcome.pass_test ? "Test Passed Successfully" : "Test Failed!"}
      </h5>
      <hr></hr>
      <p>You have completed your test assessment on given stack</p>
      <div>
        <AppImage
          style={{ height: 20, borderRadius: 10 }}
          image={skillDetails !== undefined ? skillDetails.picture : ""}
        ></AppImage>{" "}
        {skillDetails.name}
      </div>
      <br></br>
      {/* SCORE - {test_outcome.percent} % */}
      <h5>{test_outcome.pass_test ? "Passed" : "Failed!"}</h5>
      <AppButton size="small" isLink linkPath={path}>
        RETURN TO HOME
      </AppButton>
    </div>
  );
}

export default TestOutCome;
