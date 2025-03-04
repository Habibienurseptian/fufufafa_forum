import React, { useLayoutEffect, useRef, useState } from "react";
import Comment from "./CommentView";
import CommentInput from "./Element/CommentInput";
import PostInput from "./Element/PostInput";
import Post from "./Post";
import Header from "./Header";

function Main() {
  const textbox = useRef(null);
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState("");
  const [showCommentInput, setShowCommentInput] = useState({});
  const [showMoreComments, setShowMoreComments] = useState({});

  function handleLike(postId) {
    setPosts((prevPosts) =>
      (prevPosts || []).map((post) =>
        post && post.id === postId
          ? {
              ...post,
              likes: post.likedByUser ? post.likes - 1 : post.likes + 1,
              likedByUser: !post.likedByUser,
            }
          : post
      )
    );
  }

  const handleShareClick = () => {
    alert(`Post has been shared!`);
  };

  function adjustHeight() {
    if (textbox.current) {
      textbox.current.style.height = "inherit";
      textbox.current.style.height = `${textbox.current.scrollHeight}px`;
    }
  }

  useLayoutEffect(() => {
    adjustHeight();
  }, [postContent]);

  function handleInputChange(e, setState) {
    setState(e.target.value);
    adjustHeight();
  }

  function handleChange(e) {
    handleInputChange(e, setPostContent);
  }


  function handlePost() {
    if (postContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        createdAt: new Date(),
        content: postContent,
        likes: 0,
        komen: 0,
        comments: [],
      };
      console.log(newPost);
      setPosts((prevPosts) => [newPost, ...prevPosts]);
      setPostContent("");
    }
  }

  function toggleCommentInput(postId) {
    setShowCommentInput((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  }

  function handleAddComment(postId, comment) {
    if (comment.trim()) {
      const createdAt = new Date();
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? {
                ...post,
                komen: post.komen + 1,
                comments: [...post.comments, { comment, createdAt }],
              }
            : post
        )
      );
    }
  }

  function toggleShowMoreComments(postId) {
    setShowMoreComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  }

  return (
    <div>
      <Header title="Home" iconLink="#" />
      <PostInput
        postContent={postContent}
        handleChange={handleChange}
        handlePost={handlePost}
      />
      <ul className="list-none">
        {posts.map((post) => (
          <li>
            <Post
              key={post.id}
              post={post}
              handleLike={handleLike}
              toggleCommentInput={toggleCommentInput}
              handleShareClick={handleShareClick}
            />
            {showCommentInput[post.id] && (
              <CommentInput
                showCommentInput={showCommentInput}
                post={post}
                handleAddComment={handleAddComment}
              />
            )}
            ;
            <div>
              {post.comments
                .slice(0, showMoreComments[post.id] ? post.comments.length : 2)
                .map((comment, index) => (
                  <Comment key={index} comment={comment} index={index} />
                ))}
            </div>
            {post.comments.length > 2 && (
              <div
                className="flex justify-center border-gray-800 border cursor-pointer rounded-full py-2 text-white m-2 hover:bg-blue-500"
                onClick={() => toggleShowMoreComments(post.id)}
              >
                {showMoreComments[post.id] ? "Show Less" : "Show More"}
              </div>
            )}
            <hr className="border-gray-800 border-4"></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Main;
