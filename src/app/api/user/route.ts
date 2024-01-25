import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "@/app/action/getCurrentUser";

export const PUT = async (req: NextRequest) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { name } = body;

    if (!name) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const updateUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name: String(name),
      },
    });

    if (!updateUser) {
      return new NextResponse("Internal Server Error", { status: 500 });
    }

    return new NextResponse("success update user", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
