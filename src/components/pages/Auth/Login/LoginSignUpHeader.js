import React from "react";
import { DUMMY_DATA } from "../../../../constants/dummyData/dummyData";
import AppRadio2 from "../../../organisms/AppRadio/AppRadio2";
import { v4 as uuidv4 } from "uuid";

function LoginSignUpHeader({ isLoginForm, checked, handleloginAsTalentCheck }) {
  return (
    <>
      {DUMMY_DATA.loginRoles.map((data, index) => {
        return (
          <div key={index} className="form-check-inline p-1">
            <AppRadio2
              handleCheck={handleloginAsTalentCheck}
              checked={parseInt(checked) === parseInt(data.id) ? true : false}
              radioName={data.radioName}
              value={data.id}
              label={data.name}
              id={uuidv4()}
            ></AppRadio2>
          </div>
        );
      })}
    </>
  );
}

export default LoginSignUpHeader;
