import React from "react";
async function ProductDetails({ params }) {
  const { productId } = await params;
  return (
    <>
      <h1>Details about product {productId}</h1>
    </>
  );
}

export default ProductDetails;
