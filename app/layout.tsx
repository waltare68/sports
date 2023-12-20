import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './vercells.css'
import './odd.css'
import Providert from './components/providers/Providert'
import  SessionProvider  from './components/providers/SessionProvider'
import { UserProvider } from './api/auth/data/userContext'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( 
    <html lang="en" >
      <link rel="icon" href="/favicon.ico" />
      <body className={inter.className} >
        <Providert >
          {children}
        </Providert>
        </body>
    </html>
  )
}