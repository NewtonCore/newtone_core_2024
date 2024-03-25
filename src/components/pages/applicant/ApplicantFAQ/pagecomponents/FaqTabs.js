import React from "react";
import { Accordion, Tab, Tabs } from "react-bootstrap";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import classStyles from "./Styles.module.css";
const RecruiterTab = () => {
  return (
    <>
      <Accordion className={classStyles.accordion} defaultActiveKey={0}>
        {DUMMY_DATA.FAQS[0].company.map((res, index) => {
          return (
            <>
              <Accordion.Item
                className={classStyles.accordionItem}
                eventKey={index}
              >
                <Accordion.Header className={classStyles.accordionHeader}>
                  <p class="fw-normal">
                    {" "}
                    {index + 1}. {res.title}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mt-3 fw-light">{res.content}</p>
                  {res.list_one !== undefined && (
                    <>
                      {res.list_one.map((list, list_index) => {
                        return (
                          <p>
                            {list_index+1}. {list}
                          </p>
                        );
                      })}
                    </>
                  )}
                  <p className="mt-3 fw-light text-danger">
                    {res.other_content}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
};

const TalentTab = () => {
  return (
    <>
      <Accordion className={classStyles.accordion} defaultActiveKey={0}>
        {DUMMY_DATA.FAQS[1].hires.map((res, index) => {
          return (
            <>
              <Accordion.Item
                className={classStyles.accordionItem}
                eventKey={index}
              >
                <Accordion.Header className={classStyles.accordionHeader}>
                  <p class="fw-normal">
                    {index + 1}. {res.title}
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  <p className="mt-3 fw-light">{res.content}</p>
                  {res.list_one !== undefined && (
                    <>
                      {res.list_one.map((list, list_index) => {
                        return (
                          <p>
                            {list_index+1}. {list}
                          </p>
                        );
                      })}
                    </>
                  )}

                  {res.content_two !== undefined && <p>{res.content_two}</p>}
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      </Accordion>
    </>
  );
};

function FaqTabs() {
  const tabs = [
    {
      id: 1,
      component: <TalentTab></TalentTab>,
      title: "I'm a Talent",
    },
    {
      id: 2,
      component: <RecruiterTab></RecruiterTab>,
      title: "I'm a recruiter",
    },
  ];
  return (
    <div>
      <Tabs
        defaultActiveKey={tabs[0]["id"]}
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        {tabs.map((tab) => {
          return (
            <Tab
              tabClassName="tab"
              key={tab.id}
              style={{ backgroundColor: "transparent" }}
              eventKey={tab.id}
              title={tab.title}
            >
              <>{tab.component}</>
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
}

export default FaqTabs;
