import React, { useEffect } from 'react';
import { Route } from "react-router-dom";


export const Page = ({ title, ...rest }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <Route {...rest} />;
};