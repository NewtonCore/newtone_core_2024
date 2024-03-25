import React from "react";
import { DUMMY_DATA } from "../../../../../constants/dummyData/dummyData";
import AppImageCard from "../../../../organisms/AppBlogCard/AppBlogCard";
import AppCol from "../../../../organisms/AppCol/AppCol";
import AppContainer from "../../../../organisms/AppContainer/AppContainer";
import AppRow from "../../../../organisms/AppRow/AppRow";

function Blog() {
  return (
    <div>
        
      <>
        <AppRow className="gx-4">
          {DUMMY_DATA.blogContent.map((blog) => {
            return (
              <AppCol id="blog-card" size={3} sm_size="6" lg_size={3} md_size={6} xs_size={6}>
                <AppImageCard
                imageId="blog-image"
                  Body={
                    <>
                      <h5 style={{fontSize:14}}>{blog.title}</h5>

                      <span style={{fontSize:10}} className="text-muted">{blog.date}</span>
                    </>
                  }
                  image={blog.image}
                ></AppImageCard>
              </AppCol>
            );
          })}
        </AppRow>
      </>
    </div>
  );
}

export default Blog;
