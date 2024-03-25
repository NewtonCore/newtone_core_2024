import React from "react";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppImageCard from "../../../../organisms/AppBlogCard/AppBlogCard";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppRow from "../../../../organisms/AppRow/AppRow";

function OurTeam() {
  return (
    <div>
      <center>
        <h4>Our Team</h4>

        {/* <p>Lorem Ipsum</p> */}
      </center>
      <AppRow className="gx-5">
        {DUMMY_DATA.ourTeam.map((data) => {
          return (
            <AppCol size={3} lg_size={3} md_size={6} sm_size={6} xs_size={6}>
              <AppImageCard
                image={data.image}
                Body={
                  <center>
                    <span className="text-muted">{data.message}</span>
                    <h6>{data.name}</h6>

                    <span className="text-muted">{data.linkedId}</span>
                  </center>
                }
              ></AppImageCard>
            </AppCol>
          );
        })}
      </AppRow>
    </div>
  );
}

export default OurTeam;
