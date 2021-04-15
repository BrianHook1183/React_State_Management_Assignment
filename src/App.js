import React, { useState } from "react";
import "./App.css";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App() {
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts([ ...posts, newPost])
  };
  const deletePost = (indexToDelete) => {
    setPosts((posts) => posts.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <PostCreate posts={posts} handleAddPost={addPost} />
      <PostList posts={posts} handleDeletePost={deletePost} />
    </div>
  );
}

export default App;
