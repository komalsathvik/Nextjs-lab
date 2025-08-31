import React from "react";
import { commentsData } from "@/app/data";
export async function GET() {
  console.log(commentsData);
  return Response.json(commentsData);
}
export async function POST(request) {
  const { comment } = await request.json();
  const newComment = {
    id: commentsData.length + 1,
    text: comment,
  };
  commentsData.push(newComment);
  return Response.json(commentsData, { status: 201 });
}
