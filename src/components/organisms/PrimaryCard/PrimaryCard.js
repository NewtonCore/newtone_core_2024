import React from "react";
import "./PrimaryCard.css";

function PrimaryCard({ children, style,color,className }) {
  return (
    <div className={className} style={{ ...style }} id={color === "primary"?"PrimaryCard": "SecondaryCard"}>
      {children}
    </div>
  );
}

export default PrimaryCard;
