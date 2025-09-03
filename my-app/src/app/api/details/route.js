export async function POST(request) {
  const data = await request.json();
  console.log(data.username);
  return new Response({ message: "success" }, { status: 201 });
}
