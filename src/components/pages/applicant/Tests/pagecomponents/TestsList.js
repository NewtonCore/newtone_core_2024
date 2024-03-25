import React from "react";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import { generateUniqueID } from "../../../../../constants/utils";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";
import TestTile from "../../../../organisms/TestTile/TestTile";

function TestsList() {
  return (
    <div>
      {DUMMY_DATA.tests.map((test) => {
        return (
          <span key={generateUniqueID()}>
            <h6>{test.label}</h6>

            <AppRow>
              {test.children.map((child) => {
                return (
                  <AppCol
                    key={generateUniqueID()}
                    size="4"
                    md_size={6}
                    sm_size={12}
                    lg_size={4}
                  >
                    <TestTile
                      icon={child.icon}
                      label={child.name}
                      percentageComplete={child.percentage}
                      hasStarted={child.isStarted}
                      recording={child.recording}
                      duration={child.duration}
                    ></TestTile>
                  </AppCol>
                );
              })}
            </AppRow>
          </span>
        );
      })}
    </div>
  );
}

export default TestsList;
