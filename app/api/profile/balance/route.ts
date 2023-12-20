import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
    try {
        const {email} = await request.json()
        //const email = UserEmail.UserEmail
        const user = await prisma.user.findFirst({
          where: { email: email.userEmail },
          select: { UserBalance: true }, // Select only "balance" field
        });
        
        if (!user) {
          return Response.json({ message:"user not found" }) 
        }
    
        return Response.json({ balance: user.UserBalance });
      } catch (error) {
        console.error(error);
        return Response.json({ balance:"0" })
      }
}