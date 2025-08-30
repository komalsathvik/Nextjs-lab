import React from "react";
import { notFound } from "next/navigation";
async function ReviewId({ params }) {
  const { productId, ReviewId } = await params;
  if (parseInt(ReviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        Review {ReviewId} for Product {productId}
      </h1>
    </>
  );
}

export default ReviewId;
