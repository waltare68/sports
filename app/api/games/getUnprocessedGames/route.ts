import prisma from "@/app/lib/prisma";

export async function GET(request: Request) {
    try {
        const userBetsWithNullStatus = await prisma.userBets.findMany({
          where: {
            Status: null,
          },
          include: {
            games: true, // Include the related games
          },
        });
        return Response.json({ Userbets: userBetsWithNullStatus })
      } catch (error) {
        console.error('Error fetching user bets:', error);
        return Response.json({ error: error })
      }
    
}