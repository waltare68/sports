'use server';

import prisma from '@/app/lib/prisma';
import bcrypt from 'bcrypt';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
    const {email, password,firstName,lastName,phoneNumber} = await request.json()
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    });

    if (user) {
        //return 'User with that email already exists.';
        return Response.json({ message:'User with that email already exists.' })
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
    //return "Successfully created new user!";
    //  const data = {
    //     Subject: 'Registration Success',
    //     Email: email,
    //     Message: 'Welcome to the Best Sports Betting Platform',
    //   };
    // const response = await fetch('/api/mails', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   const responseData = await response.json();
    console.log("sending");
      sendWelcomeEmail(email, firstName);

    return Response.json({ message:'Registration Successfull!' })
    //send emails
    


}

const emailTemplateDir = path.resolve(process.cwd(), 'emailtemplates');

const getEmailTemplate = async (templateName: string, dynamicData: { userName: any; }) => {
  try {
    const templatePath = path.join(emailTemplateDir, `${templateName}.html`);
    const templateContent = await fs.readFile(templatePath, 'utf-8');

    // Replace placeholders in the template with dynamic data
    const processedTemplate = templateContent.replace(/{{user_name}}/g, dynamicData.userName);

    return processedTemplate;
  } catch (error) {
    console.error('Error reading email template:', error);
    throw error;
  }
};

const sendWelcomeEmail = async (email: any, userName: any) => {
  try {
    const emailContent = await getEmailTemplate('registration', { userName });

    const data = {
      Subject: 'Registration Success',
      Email: email,
      Message: emailContent,
    };

    const response = await fetch('http://localhost:3000/api/mails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

  } catch (error) {
  }
};