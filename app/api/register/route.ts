'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';

export const signUp = async (email: string, password: string,firstName:string,lastName:string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        return 'User with that email already exists.';
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    await prisma.user.create({
        data: {
            email,
            hashedPassword,
            firstName,
            lastName
        },
    });

    return "Successfully created new user!";
};