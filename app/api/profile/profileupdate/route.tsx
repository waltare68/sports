import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(req:Request,res:Response){
    const body  =await req.json()
    const updatedUser = await prisma.user.update({
        where: { email: body.email },
        data: {
          firstName: body.firstName,
          lastName:body.lastname,
          phone: body.phone,
          DOB: body.dob,
          Address: body.address,
          AptSuite: body.aptSuite,
          city: body.city,
          country: body.country,
          postalcode:body.postalcode,
          State:body.state,
        },
      });

    return NextResponse.json(body)
}