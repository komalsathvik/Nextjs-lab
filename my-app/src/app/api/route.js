export async function GET(request) {
  const header = new Headers(request.headers);
  console.log(header.get("Authorization"));
  return new Response("<h1>data is fetched</h1>", {
    headers: {
      "content-type": "text/html",
    },
  });
}
