"use client";
import axios from "axios";
import React, { useState } from "react";
export default function GetDetails() {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [isEntered, setIsEntered] = useState(false);
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await axios.post("/api/details", { username, email });
    setIsEntered(true);
    console.log(res);
  }
  return !isEntered ? (
    <>
      <h2>enter your details</h2>
      <form onSubmit={handleSubmit}>
        Enter username
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        Enter email
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </>
  ) : (
    <>
      <h2>welcome {username}</h2>
    </>
  );
}
