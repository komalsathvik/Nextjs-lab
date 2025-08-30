"use client";
import { useRouter } from "next/navigation";
import React, { startTransition } from "react";
export default function Error({ error, reset }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <>
      <h1>handling error</h1>
      <h2>error might be {error.message}</h2>
      <button onClick={reload}>Try again</button>
    </>
  );
}
