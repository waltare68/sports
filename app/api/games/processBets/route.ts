import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
    const { userBets } =await request.json();
    console.log(userBets[0].po);
   try {
    for (const updatedUserBet of userBets) {
        const status = ['lost', 'won'].includes(updatedUserBet.Status.toLowerCase())
        ? updatedUserBet.Status.toLowerCase()
        : null;

        // await prisma.userBets.update({
        //     where: { id: updatedUserBet.id },
        //     data: {
        //       Status: updatedUserBet.Status,
        //       games: {
        //         updateMany: updatedUserBet.games.map((updatedGame: { id: any; result: any; }) => ({
        //           where: { id: updatedGame.id },
        //           data: { result: updatedGame.result },
        //         })),
        //       },
        //     },
        //   });

          //award winnings
          if(updatedUserBet.Status =="won"){
            const user = await prisma.user.update({
              where: { email: updatedUserBet.email }, 
              data: {
                UserBalance: {
                  increment: parseFloat(updatedUserBet.possiblePayout), 
                },
              },
            });
          }



    }

    return Response.json({ message:"Saved Successfully" }) 
   } catch (error) {
    return Response.json({ message:"error:"+error }) 
   }

    
}