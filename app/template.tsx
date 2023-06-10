"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react';


function template(
    {
        children,
        session,
      }: {
        children: React.ReactNode;
        session: any;
      } 
) {
  return (

    <SessionProvider session={session}>
    <div>
        {children}
    </div>
    </SessionProvider>
  )
}

export default template