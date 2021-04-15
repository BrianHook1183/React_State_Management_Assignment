import React from "react";

function Post({ contents }) {
  console.log('Post rendered');
  return (
    <p>{contents}</p>
  );
}

export default Post;