import prisma from '@/app/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

interface ResponseInitWithBody extends ResponseInit {
    body: string | Blob | ArrayBuffer | FormData;
  }

export async function POST(req:Request,res:Response){
    const body = await req.json()
    
    const userEmail = body.email

    try {
        const user = await prisma.user.findUnique({
          where: {
            email:userEmail
          },
        });
  
            const responseInitSuccessBody: ResponseInitWithBody = {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(user),
              };
        
          return new Response(JSON.stringify(user))
      } catch (error) {
        return new Response(JSON.stringify(error))
      }

}
