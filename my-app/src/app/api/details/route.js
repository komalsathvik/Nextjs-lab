import { connectDB } from "@/app/lib/connectMongodb";
import Details from "@/app/models/Details";
export async function POST(request) {
  await connectDB();
  const data = await request.json();
  let newUser = new Details({
    username: data.username,
    email: data.email,
  });
  newUser.save();
  return Response.json({ message: "success" }, { status: 201 });
}
