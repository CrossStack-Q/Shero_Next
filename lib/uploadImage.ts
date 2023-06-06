import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "647b7c344f2d13ea6d69", 
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;