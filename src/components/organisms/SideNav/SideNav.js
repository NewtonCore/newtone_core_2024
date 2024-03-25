import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NAVLINKS } from "../../../constants/navlinks";
import "./SideNav.css";

function SideNav({ handleClose, closeSideNav, componentPassedToDisplay=undefined }) {
  const appData = useSelector((state) => state.appData);
  const { showSideNav } = appData;

  useEffect(() => {
    // prevent the whole page from scrolling when side nav is open
    if (!showSideNav) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [showSideNav]);
  return (
    <>
      {showSideNav && (
        <div onClick={handleClose} id="parent_side_nav">
          <div id={componentPassedToDisplay !== undefined?"sideNavWhite":"sideNav"} className={showSideNav && "sideNavHidden"}>
            {/* <>SideNav {JSON.stringify(appData.sideNavWidth)}</> */}

            {componentPassedToDisplay !== undefined ? (
              <div style={{padding:10}}>
              {componentPassedToDisplay}
              </div>
            ) : (
              <ul>
                {NAVLINKS.home_page_links.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link onClick={() => closeSideNav()} to={link.link}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default SideNav;
