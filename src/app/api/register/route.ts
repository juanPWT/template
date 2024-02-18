import bcrypt from "bcrypt";

import prisma from "@/app/libs/prismaDb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse("Missing info", { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
        image: `${process.env.IMAGE_URL}user/person.png`,
      },
    });

    return NextResponse.json(user);
  } catch (err) {
    console.log(err, "REGISTERED");
    return new NextResponse("invalid server", { status: 500 });
  }
}
