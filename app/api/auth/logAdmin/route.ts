import prisma from "@/app/lib/prisma";

export async function POST(request: Request) {
    try {
        const { AdminEmail, AdminPassword }= await request.json()
        
        if (AdminEmail == "vikanibet@pid.io" && AdminPassword == "=qo8ZesU({Bg8:]"){
            return Response.json({message:"success"});
        }
        else{
            return Response.json({message:"Access Denied"});
        }
        
        

        
      } catch (error) {
        console.error(error);
        return Response.json({message:"failed to save"+ error  })
      }
}