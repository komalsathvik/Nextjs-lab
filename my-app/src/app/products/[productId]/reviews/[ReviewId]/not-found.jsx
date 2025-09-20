"use client";
import React from "react";
import { usePathname } from "next/navigation";
function NotFound() {
  const pathName = usePathname();
  const prodId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <>
      <h1>
        Review {reviewId} for product {prodId} was not found
      </h1>
    </>
  );
}

export default NotFound;
