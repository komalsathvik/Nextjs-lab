import React from "react";
function DocsPage({ params }) {
  const { slug } = params;
  if (slug && slug.length === 2) {
    return (
      <>
        <h1>
          viewing docs for feature {slug[0]} and concept {[slug[1]]}
        </h1>
      </>
    );
  } else if (slug && slug.length == 1) {
    return (
      <>
        <h1>viewing docs for features of concept {[slug[0]]}</h1>
      </>
    );
  } else {
    return (
      <>
        <h1>viewing docs</h1>
      </>
    );
  }
}

export default DocsPage;
