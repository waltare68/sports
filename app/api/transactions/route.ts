import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
    try {
        const {email} = await request.json()
        //const email = UserEmail.UserEmail
        const transactions = await prisma.onlineTransaction.findMany({
            where: {
              email: email,
            },
          });
      
          //res.status(200).json(transactions);
        
        if (!transactions) {
          return Response.json({ message:"No transactions to display" }) 
        }
    
        return Response.json({  transactions });
      } catch (error) {
        return Response.json({ message:error })
      } finally {
        await prisma.$disconnect();
      
      }
}