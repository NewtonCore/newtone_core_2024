import React from "react";
import { Link } from "react-router-dom";
import './AppBlogCard.css'

function AppImageCard({ image = {},link="/view-blog", imageId = "", Body }) {
  return (
    <div id="blog_card">
      <Link to={link}>
      <div className="card border-0" style={{}}>
        <div id="blog-image-div">
          <img
            id={imageId}
            src={image}
            className="card-img-top"
            alt="card-image"
          />
        </div>
        <div className="card-body px-0">{Body}</div>
      </div>
    </Link>
    </div>
  );
}

export default AppImageCard;
