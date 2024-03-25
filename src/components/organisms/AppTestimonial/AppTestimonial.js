import React from "react";
import PrimaryContainer from "../PrimaryContainer/PrimaryContainer";
import classStyle from "./AppTestimonial.module.css";
function AppTestimonial({
  image = {},
  testimonial = "",
  user = "",
  position = "",
}) {
  return (
    <div className={classStyle.container_testimonial}>
     <PrimaryContainer className="secondary">
     <div className={classStyle.flex_image_div}>
        <div className={classStyle.image_div}>aaa</div>
      </div>

      <div>
        <div>
          <p>{testimonial}</p>
          {user}
          <br></br>
          {position}
        </div>
      </div>
     </PrimaryContainer>
    </div>
  );
}

export default AppTestimonial;
