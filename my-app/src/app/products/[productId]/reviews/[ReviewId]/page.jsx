import React from "react";
import { notFound } from "next/navigation";
function ReviewId({ params }) {
  const { productId, ReviewId } = params;
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
