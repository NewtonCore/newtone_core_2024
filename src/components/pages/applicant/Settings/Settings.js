import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import WhiteBgDiv from "../../../organisms/WhiteBgDiv/WhiteBgDiv";
import TalentLayout from "../../../templates/TalentLayout/TalentLayout";
import ChangePassForm from "./pagecomponents/ChangePassword";
import DeleteProfile from "./pagecomponents/DeleteProfile";
import "./Settings.css"

const tabs = [
  {
    id: 1,
    component: <ChangePassForm />,
    title: "Change Password",
  },
  // {
  //   id: 2,
  //   component: <p>Still progressing...</p>,
  //   title: "Payment Information",
  // },
  {
    id: 3,
    component: <DeleteProfile />,
    title: "Delete Profile",
  },
];

function Settings() {
  return (
    <div>
      <TalentLayout pageTitle="Settings" pageHeaderRight={undefined}>
        <Tabs
          defaultActiveKey={tabs[0]["id"]}
          id="fill-tab-example"
          className="mb-3"
          justify
        >
          {tabs.map((tab,index) => {
            return (
              <Tab
              key={index}
                style={{ backgroundColor: "transparent" }}
                eventKey={tab.id}
                title={tab.title}
              >
                <WhiteBgDiv>{tab.component}</WhiteBgDiv>
              </Tab>
            );
          })}
        </Tabs>
      </TalentLayout>
    </div>
  );
}

export default Settings;
