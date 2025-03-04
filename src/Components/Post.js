import React from "react";
import Like from "./Button/Like";
import CommentButton from "./Button/Comment";
import ShareButton from "./Button/Share";
import Avatar from "./Element/Avatar";

function Post({ post, toggleCommentInput, handleShareClick, handleLike }) {
  const { createdAt, content, id } = post;

  return (
    <article
      key={id}
      className="hover:bg-gray-800 transition duration-350 ease-in-out"
    >
      <Avatar
        name="Miyuzaki San"
        username="san_miyuzaki"
        profileImage="https://i.pinimg.com/736x/fa/d5/e7/fad5e79954583ad50ccb3f16ee64f66d.jpg"
        createdAt={createdAt}
      />

      <div className="pl-16 ml-1 mr-5">
        <p className="text-sm w-auto font-normal text-white flex-shrink break-words whitespace-pre-wrap">
          {content}
        </p>
        <div className="flex-shrink pr-6 pt-3">
          <div className="flex items-center py-4 gap-20">
            <CommentButton
              post={post}
              toggleCommentInput={toggleCommentInput}
            />
            <Like post={post} handleLike={handleLike} />
            <ShareButton onShareClick={handleShareClick} />
          </div>
        </div>
      </div>
      <hr className="border-gray-800"></hr>
    </article>
  );
}

export default Post;
