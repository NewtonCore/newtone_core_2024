import React from "react";

function AppContainer({ style, className, children }) {
  return (
    <div style={style} className={`container-lg ${className}`}>
      {children}
    </div>
  );
}

export default AppContainer;
