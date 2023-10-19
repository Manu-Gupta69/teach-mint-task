import React from "react";
import "./PostCard.scss";

const PostCard = ({ title, content }) => {
  return (
    <div className="post-card-parent">
      <h3>{title}</h3>
      <p>{`${content.slice(0, Math.min(40, content.length))}...`}</p>
    </div>
  );
};

export default PostCard;
