import React from "react";
import { commentsData } from "@/app/data";

export async function GET(request, { params }) {
  const { id } = params;
  const data = commentsData.find((comment) => comment.id === parseInt(id));
  if (!data) {
    return Response.json({ message: "not found" }, { status: 404 });
  }
  return Response.json(data, { status: 201 });
}

export async function PATCH(request, { params }) {
  const { id } = params;
  const { comment } = await request.json();
  const findIdx = commentsData.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  commentsData[findIdx].text = comment;
  return Response.json(commentsData, { status: 201 });
}
export async function DELETE(request, { params }) {
  const { id } = params;
  const findIdx = commentsData.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  const deletedComment = commentsData[findIdx];
  commentsData.splice(findIdx, 1);

  return Response.json(deletedComment, { status: 201 });
}
