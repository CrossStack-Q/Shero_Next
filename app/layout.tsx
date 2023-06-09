"use client"

import Modal from '@/components/Modal'
import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes"
import { signIn, signOut, useSession, SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <SessionProvider session={session}>
    <html lang="en">
      <body className={inter.className}>

        {children}
        <Modal />
      </body>
    </html>
    </SessionProvider>
  )
}
