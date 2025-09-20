"use client";
import { useRouter } from "next/navigation";
export default function OrderRedirect() {
  const router = useRouter();
  function handleClick() {
    router.push("/");
  }
  return (
    <>
      <h1>place your order</h1>
      <h2>on clicking place you will be redirected to home page</h2>
      <button onClick={handleClick}>Place</button>
    </>
  );
}
