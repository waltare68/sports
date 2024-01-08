import { sendMail } from "@/app/services/mailservice";

export async function POST(request: Request) {
    try {
        
        const { Email, Subject, Message }= await request.json()

        await sendMail(
            Subject,
            Email,
            Message
          );
          return Response.json({message:"success"  });
    } catch (error) {
        return Response.json({message:error  });
    }


}
