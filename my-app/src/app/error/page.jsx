import React from "react";
export default function generateError() {
  function getRandomInt() {
    return Math.round(2 * Math.random());
  }
  const randomNum = getRandomInt();
  if (randomNum == 1) {
    throw new Error("random error");
  }
  return (
    <>
      <h2>error handling</h2>
    </>
  );
}
