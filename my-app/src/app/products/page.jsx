import React from "react";
async function Products() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentional delay");
    }, 2000);
  });
  return (
    <>
      <h1>Products page </h1>
    </>
  );
}

export default Products;
