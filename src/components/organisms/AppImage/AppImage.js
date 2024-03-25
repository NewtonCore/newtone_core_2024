import React from "react";

function AppImage({ image, style, id ,className,...props}) {
  // console.log(typeof(image))
  return (
   <>
   {/* {image} */}
    <img
    //   id={id}
      className={className}
      draggable="false"
      style={{ height: "100%", width: "auto", ...style,...props }}
      src={image}
    ></img>

  
   </>
  );
}

export default AppImage;
