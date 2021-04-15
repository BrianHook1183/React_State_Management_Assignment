import React from "react";

function Post({ postIndex, postType, postContent, deletePost }) {
  if (postType === "Text") {
    return (
      <div className="post" key={postIndex}>
        <p>{postContent}</p>
        <button name="delete" onClick={() => deletePost(postIndex)}>
          Delete
        </button>
      </div>
    );
  }
  if (postType === "Image") {
    return (
      <div className="post" key={postIndex}>
        <img src={postContent} alt="" />
        <br />
        <button name="delete" onClick={() => deletePost(postIndex)}>
          Delete
        </button>
      </div>
    );
  }
  return null;
}

export default Post;
