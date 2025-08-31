import React from "react";
function CommentId({ params }) {
  const { comment } = params;
  return (
    <>
      <h2>comment with id {comment}</h2>
    </>
  );
}

export default CommentId;
