import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/libs/prismaDb";
import getCurrentUser from "@/app/action/getCurrentUser";
import { writeFile } from "fs/promises";

export const PUT = async (req: NextRequest) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const formData = await req.formData();

    const image: File = formData.get("image") as File;

    if (!image) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const updateImageUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        image: `${process.env.IMAGE_URL}user/${image.name}`,
      },
    });

    if (!updateImageUser) {
      return new NextResponse("Internal server error", { status: 500 });
    }

    //save image
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `public/image/user/${image.name}`;
    await writeFile(path, buffer);

    return new NextResponse("Success update image", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
};
