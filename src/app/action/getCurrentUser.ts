import prisma from "@/app/libs/prismaDb";
import getSession from "./getSession";

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session) return null;

    const currentUser = await prisma.user.findUnique({
      where: {
        email: String(session.user?.email),
      },
    });

    if (!currentUser) return null;

    return currentUser;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCurrentUser;
