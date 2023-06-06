"use client"

import Board from "@/components/Board";
import Header from "@/components/Header";
import './globals.css'
import { ThemeProvider } from "next-themes"

export default function Home() {


  return (
    <ThemeProvider attribute="class">
    <main className="h-[100vh] overflow-hidden" >
      {/* Header */}
      <Header />
       
       {/* Board */}
       
       <Board/>
    </main>
    </ThemeProvider>
  )
}
