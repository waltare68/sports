import prisma from "@/app/lib/prisma";
import NextAuth, { Account, AuthOptions, Profile, Session, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { JWT } from "next-auth/jwt";

export const authOptions:AuthOptions = {
    providers:[
        CredentialsProvider({
            name:'credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                    placeholder: 'your@email.com'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            authorize:async (credentials) =>{

                console.log(credentials)
                if(!credentials){
                    return null;
                }
                
                
                const{ email,password} = credentials;
                

                const user = await prisma.user.findUnique({
                    where: {
                        email,
                    },
                });
                
                
                if(!user){
                    console.log("user not found");
                    return null;
                }

                const userPassword = user.hashedPassword
                const isValidPassword = bcrypt.compareSync(password, userPassword);
                
                if (!isValidPassword){ 
                    return null;
                }
                
                return user;
            }
        })
    ],
    pages: {
        signIn: '../../',
    },
    secret:process.env.NEXTAUTH_SECRET,
    jwt: {
        async encode({secret, token}) {
            if(!token) {
                throw new Error('No token to encode');
            }
            return jwt.sign(token, secret);
        },
        async decode({secret, token}) {
            if(!token) {
                throw new Error('No token to decode');
            }
            const decodedToken = jwt.verify(token, secret);
            if(typeof decodedToken === 'string') {
                return JSON.parse(decodedToken);
            } else {
                return decodedToken;
            }
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        async session(params: {session: Session; token: JWT; user: User}) {
            if(params.session.user) {
                params.session.user.email = params.token.email;
            }

            return params.session;
        },
        async jwt(params: {
            token: JWT;
            user?: User | undefined;
            account?: Account | null | undefined;
            profile?: Profile | undefined;
            isNewUser?: boolean | undefined;
        }) {
            if(params.user) {
                params.token.email = params.user.email;
            }

            return params.token;
        }
    }
}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

