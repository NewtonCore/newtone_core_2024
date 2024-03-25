import React from "react";
import { Link } from "react-router-dom";

import "./AppNavLink.css";

function AppNavLink({ links = [] }) {
  return (
    <>
      <ul>
        {links.map((link,index) => {
          return (
            <li key={index}>
              {
                link.func !==undefined ?
                <Link onClick={()=>link.func()} to={link.link}>{link.name}</Link>
                :
                <Link to={link.link}>{link.name}</Link>
              }
              
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default AppNavLink;
