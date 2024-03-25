import React from "react";
import Carousel from "react-multi-carousel";
import { useSelector } from "react-redux";
import { SECONDARY_LIGHT_COLOR } from "../../../../../constants/AppColors";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppButton from "../../../../atoms/AppButton/AppButton";
import AppRow from "../../../../organisms/AppRow/AppRow";
import { SkillsTile2 } from "../../../../organisms/SkillsTile/SkillsTile";
import "react-multi-carousel/lib/styles.css";
import { HOME_ROUTES } from "../../../../../routes/RouteLinks";

function SkillsDiv() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <h1 className="display-3 fw-bolder mb-4 mt-4" style={{ fontSize: 35 }}>
        Based on your skills
      </h1>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        centerMode={true}
      >
        {DUMMY_DATA.skills.slice(0, 12).map((skill, index) => {
          return (
            <SkillsTile2
              key={`${skill}${index}`}
              image={skill.image}
              text={skill.name}
            ></SkillsTile2>
          );
        })}
      </Carousel>
      <AppRow id="skills_div" className="gap-2">
        {/* {JSON.stringify(data)} */}

        {Array.isArray(DUMMY_DATA.skills) && (
          <>
            <center>
              <AppButton
                style={{
                  backgroundColor: SECONDARY_LIGHT_COLOR,
                  color: "black",
                }}
                isLink
                linkPath={`${HOME_ROUTES.index}${HOME_ROUTES.listOfSkills}`}
              >
                + See More
              </AppButton>
            </center>
          </>
        )}
      </AppRow>
    </div>
  );
}

export default SkillsDiv;
