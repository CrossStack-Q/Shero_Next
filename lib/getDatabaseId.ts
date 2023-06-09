import { databases } from "@/appwrite"

export const getDatabaseId = async () => {
  const data = await databases.listDocuments(
    process.env.NEXT_PUBLIC_DATABASE_ID!,
    process.env.NEXT_PUBLIC_TODOS_COLLECTION_ID!,
  )

  const todos1 = data.documents;

  console.log(todos1)


  return todos1;

  


}