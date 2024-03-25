import React, { useEffect, useState } from "react";

function CloseOtherTabsButton() {
  const [isTabVisible, setIsTabVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabVisible(!document.hidden);
      if (document.hidden) {
        console.log("User switched to another window or minimized the browser");
        // Handle the visibility change event here
      } else {
        console.log("User switched back to the current window");
        // Handle the visibility change event here
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div>
      {isTabVisible ? (
        <p>This tab is currently visible.</p>
      ) : (
        <p>This tab is currently hidden.</p>
      )}
    </div>
  );
}

export default CloseOtherTabsButton;
