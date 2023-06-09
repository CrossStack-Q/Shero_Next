"use client"

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import { client, databases, ID } from "@/appwrite"; // Import the necessary objects from appwrite.ts


import fetch from 'cross-fetch';

const createCollection = async () => {


    const { data: session } = useSession();
    console.log(session);
  
    const userId = session?.user?.email; // Example user ID
  
    // Create a collection ID by appending a prefix or suffix to the user ID
    // const collectionId = `users_${userId}`;
  

  const url = `https://cloud.appwrite.io/v1/databases/${process.env.NEXT_PUBLIC_DATABASE_ID}/${userId}`;


  console.log(userId);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Appwrite-Project': 'createCollection',
        'X-Appwrite-Key': '32825bf6a4d7146704888e52a233a5e78b3d58769949d242e79ffeb451d346bd4024bf9094c7c06351325ad73d12075755405a24b96eb42d82e6ddace54942a30cb9e15c5e3ad89c83a5d1ffc86be6b4eff3935538b1997e345b9da1afa003706ae928853aab8bdaa726a26184a34dd564eda3b2e58238aeae186de8ee691232',
      },
      body: JSON.stringify({ name: 'SheroDatabase' }), 
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Collection created:', data);
    } else {
      console.error('Failed to create collection:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating collection:', error);
  }
};



function CollectionId() {

    createCollection();
    
    
  
    return <div>CollectionId</div>;
  }
  
  export default CollectionId;
  