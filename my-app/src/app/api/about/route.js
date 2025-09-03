export function GET(request) {
  const theme = request.cookies.get("theme");
  console.log(theme.value);
  return Response.json(
    { name: "sathvik", route: "about" },
    {
      status: 201,
      headers: {
        "set-cookie": "theme=dark",
      },
    }
  );
}
