import bcrypt from "bcrypt";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const requestBody = await req.json();
    const { email, name, password } = requestBody;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (e) {
    console.error("[REGISTER]", e);
    return new NextResponse("Internal Error", {
      status: 500,
    });
  }
}
