"use server";

import prisma from "@/db"
import { revalidatePath } from "next/cache";

export const addPost = async (formData: FormData) => {
    const checkedTags: string[] = [];

    for (const entry of formData.entries()) {
      const [name, value] = entry;
      if (name !== "title" && name !== "body" && value === "on") {
        checkedTags.push(name);
      }
    }
    
    if (checkedTags.length === 0) return false

    try {
      const response = await prisma.post.create({
        data: {
          title: formData.get("title") as string,
          body: formData.get("body") as string,
          tags: checkedTags as string[],
        },
      });
      revalidatePath("/posts");
      return true
    } catch (error) {
      console.log(error);
      return false
    }
  };
