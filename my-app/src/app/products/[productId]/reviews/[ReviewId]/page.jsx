import React from "react";

function ReviewId({ params }) {
  const { productId, ReviewId } = params;

  return (
    <>
      <h1>
        Review {ReviewId} for Product {productId}
      </h1>
    </>
  );
}

export default ReviewId;
