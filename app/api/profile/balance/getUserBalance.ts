import prisma from "@/app/lib/prisma";

export default async function getUserBalance(email: string) {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
      select: { UserBalance: true },
    });

    if (!user) {
      return { balance: 0, message: "User not found" };
    }

    return { balance: user.UserBalance, message: "Success" };
  } catch (error) {
    console.error(error);
    return { balance: 0, message: "Error fetching balance" };
  }
}