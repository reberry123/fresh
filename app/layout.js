import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import './globals.css'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Navbar from './Navbar'
import { SessionProvider } from 'next-auth/react'
import { NextAuthProvider } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Logo',
  description: '',
}

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      
      <body className={inter.className}>
        <NextAuthProvider>
          {children}
          <Navbar session={session}></Navbar>
        </NextAuthProvider>
      </body>
    </html>
  )
}
