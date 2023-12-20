import { authOptions } from "../api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth/next"
import prisma from "./prisma";

export async function serverAuth(){
const session = await getServerSession(authOptions)
if (!session?.user?.email){
    throw new Error("not signed in");

}
const currentUser = await prisma.user.findUnique({
    where:{
        email:session.user.email,
    },
})

if(!currentUser){
    throw new Error("not Signed in");
}
return {currentUser}

}