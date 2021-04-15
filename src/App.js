import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const deletePost = (indexToDelete) => {
    setPosts((posts) => posts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <PostCreate posts={posts} setPosts={setPosts} />
      <PostList posts={posts} handlePostDelete={deletePost} />
    </div>
  );
}

export default App;
