import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
    try {
        const { transref, amount, channel,userEmail }= await request.json()
        
        const transaction = await prisma.onlineTransaction.create({
            data: {
              transRef:transref,
              amount:parseFloat(amount),
              channel,
              balanceUpdated:0,
              email:userEmail
            },
          });
          const user = await prisma.user.update({
            where: { email: userEmail }, 
            data: {
              UserBalance: {
                increment: parseFloat(amount), 
              },
            },
          });

        return Response.json({message:"success"  });
      } catch (error) {
        console.error(error);
        return Response.json({message:"failed to save"+ error  })
      }
}