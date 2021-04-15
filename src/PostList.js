import React from "react";
import Post from "./Post";

function PostList({ posts, handleDeletePost }) {
  const postList = posts.map((post, index) => {
    const postType = post.type;
    const postContent = post.content;
    return (
      <Post
        // key is only here to clear console error from react - but postIndex is still necessary because I also can't access key as a prop in the child component.
        key={index}
        postIndex={index}
        postContent={postContent}
        deletePost={handleDeletePost}
        postType={postType}
      />
    );
  });

  return <div className="post-list">{postList}</div>;
}

export default PostList;
