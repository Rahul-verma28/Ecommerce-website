import { NextResponse, NextRequest } from "next/server";
import User from "@/lib/models/users";
import { connectToDB } from "@/lib/mongoDB";

connectToDB();

export async function GET(request: NextRequest) {
  try {
    // Extract email from query params
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const user = await User.findOne({ email }).select("-password"); // Exclude password

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
