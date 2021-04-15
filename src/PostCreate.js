import React, { useState } from "react";

function PostCreate({ handleAddPost }) {
  const [type, setType] = useState("Text");
  const [content, setContent] = useState("");

  const handleContentChange = (event) => setContent(event.target.value);

  const handleSetType = (event) => {
    const selectedValue = event.target.value;
    setType(selectedValue);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // construct object out of submitted form
    const newPost = {
      type: type,
      content: content,
    };

    //update state
    handleAddPost(newPost);

    // rest form
    setContent("");
    setType("Text");
  };

  return (
    <form name="create" id="create" onSubmit={(event) => submitHandler(event)}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select
            id="type"
            name="type"
            required={true}
            onChange={(event) => handleSetType(event)}
          >
            <option>Text</option>
            <option>Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea
              id="content"
              name="content"
              required={true}
              rows={3}
              onChange={handleContentChange}
              value={content}
            />
          ) : (
            <input
              id="content"
              name="content"
              type="url"
              required={true}
              onChange={handleContentChange}
              value={content}
            />
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
}

export default PostCreate;
