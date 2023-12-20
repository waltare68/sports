import { PrismaClient  } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
type BetData = {
    email: string;
    betAmount: number;
    possiblePayout: number;
    totalOdds: number;
    betType: string;
    games: GameData[];
  };
  
  type GameData = {
    parent_virtual_id: string;
    hometeam: string;
    awayteam: string;
    pick: string;
  };
export async function POST(request: Request) {
    try {

        const data: BetData = await request.json()
        
        
        
        const user = await prisma.user.findUnique({
            where: {
            email: data.email,
            },
            select: {
                UserBalance: true,
            },
        });

      if (!user) {
        return Response.json({ message:"user not found" }) 
      }
      if (user && user.UserBalance >= data.betAmount) {
        
        const updatedBalance = user.UserBalance - data.betAmount;

        // Update the UserBalance in the database
        await prisma.user.update({
            where: { email: data.email }, // Assuming 'id' is the primary key of the user
            data: { UserBalance: updatedBalance },
        });
        const bet = await prisma.userBets.create({
          data: {
            email: data.email,
            betAmount: parseFloat((data.betAmount).toString()),
            possiblePayout: parseFloat((data.possiblePayout).toString()),
            totalOdds: parseFloat((data.totalOdds).toString()),
            betType: data.betType,
            games: {
              create: data.games.map((game: GameData) => ({
                parentVirtualId: game.parent_virtual_id,
                homeTeam: game.hometeam,
                awayTeam: game.awayteam,
                pick: game.pick,
              })),
            }, 
          },
        });
         
        return Response.json({ message:"bets placed Successfully" }) 
      } else {
        return Response.json({ error: 'Insufficient balance' }) ;
        
      }

      



    } catch (error) {
        return Response.json('Error'+error );
    }
    
  }