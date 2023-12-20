import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
   try{
     const data= await request.json()
        if (!data.email || typeof data.email !== 'string') {
            return Response.json({ message: "Invalid email parameter" })
        }
        const email = data.email
        const userBets = await prisma.userBets.findMany({
                where: {
                    email,
                },
                include: {
                    games: true,
                },
            });


        return Response.json(userBets);
     } catch (error) {
        return Response.json({ error: error })
    }
    finally {
        await prisma.$disconnect();
    }
}