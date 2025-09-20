import React from "react";
import Link from "next/link";
function BlogPost() {
  return (
    <>
      <h1>blog</h1>
      <h2>
        Redirect to About section <Link href="/about">About</Link>
      </h2>
    </>
  );
}

export default BlogPost;
