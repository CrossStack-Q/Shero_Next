"use client"

import Board from "@/components/Board";
import Header from "@/components/Header";
import './globals.css'
import { ThemeProvider } from "next-themes"

import { signIn, signOut, useSession } from "next-auth/react";
import CollectionId from "@/components/CollectionId";


export default function Home() {


   const { data: session } = useSession();

  return (
    <ThemeProvider attribute="class">
    <main className="md:h-[100vh] overflow-hidden" >

      
       <div>
      {session?.user?.name ? (
        <>
        {/* Header */}
      <Header />
       
       {/* Board */}
       
       <Board/>
       <CollectionId/>
        </>
      ) : (
        <>
        

              <button onClick={() => signIn()} className="bg-purple-600 m-4 px-4 py-2 text-lg rounded-xl text-white font-bold tracking-widest ">
              Login
            </button>
              

        </>
      )}
    </div>
    </main>
    </ThemeProvider>
  )
}
