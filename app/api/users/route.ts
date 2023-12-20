import prisma from "@/app/lib/prisma";

export async function GET(request: Request) {
    try {
        const users = await prisma.user.findMany({
            select: {
              email: true,
              firstName: true,
              lastName: true,
              UserBalance: true,
            },
          });
    
        return Response.json({ users });
      } catch (error) {
        console.error(error);
        return Response.json({ })
      }
}