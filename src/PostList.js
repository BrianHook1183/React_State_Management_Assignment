import React from "react";
import Post from "./Post";

function PostList({ posts, handlePostDelete }) {
  const postList = posts.map((post, index) => {
    const postType = post.type;
    const postContent = post.content;
    return (
      <Post
        postIndex={index}
        postContent={postContent}
        deletePost={handlePostDelete}
        postType={postType}
      />
    );
  });

  return <div className="post-list">{postList}</div>;
}

export default PostList;
