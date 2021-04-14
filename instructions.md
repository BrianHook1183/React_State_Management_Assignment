# React State Management: Assignment

Build an app where the user can make text and image posts. This will resemble tumblr or twitter, but with a single user.

A user can type in the text of a text post. For an image post, they should put the URL of an image.

The user should be able to add a new post, edit a post, and delete a post.

![Example Layout](React_State_Management_Assignment_1/example-layout.gif)

This project has starter code you can use for the application. You will, of course, need to add handlers and other logic to make this code work.


# Specific Instructions

Find the TODO comments in the code and create the necessary functionality. Below is a list of specific items you will need to complete for this checkpoint.



*   Create at least one additional component that is used by the PostList component.
*   A text post displays the text of the post.
*   An image post display the image, not the URL.
*   It does not need to match the appearance of the example image, but should have a reasonable layout.
*   Feel free to add handlers and other attributes to starter code as needed.
*   &lt;form name="create"> should have:
    *   a name="create" attribute
    *   one child &lt;button> with a type="submit" attribute
    *   one child &lt;select> with a name="type" attribute
    *   one child &lt;textarea> or &lt;input> (not both at the same time) with a name="content" attribute
*   Post should have:
    *   className="post"
    *   a Delete button: &lt;button name="delete">Delete&lt;/button>


# Success Criteria



*   Functionality:
    *   User can make a text post
    *   User can make an image post
    *   User can delete posts
    *   Some CSS is used to make the appearance reasonable
*   React Code Organization:
    *   Uses multiple components that play well together
    *   Post data is contained in the state, which is "lifted up"
*   General Code Organization:
    *   Minimal code duplication