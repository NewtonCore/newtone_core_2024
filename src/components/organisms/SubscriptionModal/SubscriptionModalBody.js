import React from "react";
import AppContainerFluid from "../AppContainerFluid/AppContainerFluid";

function SubscriptionModalBody({job}) {
  return (
    <AppContainerFluid>
      <center>
        <span className="text-muted">
          This is a one time fee the enables you to view talents on job posts
          made and perform some actions such as schedule meeting, save profile
          and many more.
        </span>
        {/* <h5 style={{margin: 4}}>Job Title : </h5> */}
        {/* <span>{job && job.title ? job.title.name : null} </span> */}

      </center>
    </AppContainerFluid>
  );
}

export default SubscriptionModalBody;
