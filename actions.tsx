"use server";

import prisma from "@/db";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { notFound, redirect } from "next/navigation";
import { Post } from "./types";

export const fetchPosts = async () => {
  const posts : Post[] | null = await prisma.post.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  return posts
}
export const addPost = async (formData: FormData) => {
  const checkedTags: string[] = [];

  for (const entry of formData.entries()) {
    const [name, value] = entry;
    if (name !== "title" && name !== "body" && value === "on") {
      checkedTags.push(name);
    }
  }

  if (checkedTags.length === 0) return false;

  try {
    await prisma.post.create({
      data: {
        title: formData.get("title") as string,
        body: formData.get("body") as string,
        tags: checkedTags as string[],
      },
    });
    // revalidatePath("/posts");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deletePost = async (formData: FormData) => {
  await prisma.post.delete({
    where: {
      id: formData.get("postId") as string,
    },
  });
  // revalidatePath("/posts");
  redirect("/posts")
};

export const fetchPost = async (id: string) => {
  const isValidObjectId = ObjectId.isValid(id);

  if (!isValidObjectId) {
    return notFound();
  }

  const post: Post | null = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  return post
}

export const updatePost = async (formData: FormData, id: string) => {
  const checkedTags: string[] = [];

  for (const entry of formData.entries()) {
    const [name, value] = entry;
    if (name !== "title" && name !== "body" && value === "on") {
      checkedTags.push(name);
    }
  }

  if (checkedTags.length === 0) return false;

  try {
    await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        title: formData.get("title") as string,
        body: formData.get("body") as string,
        tags: checkedTags as string[],
      },
    });
    // revalidatePath("/posts");
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const filterPosts = async (title : string) => {
  const posts : Post[] | null = await prisma.post.findMany({
    where: {
      title: {
        contains: title,
        mode: 'insensitive',
      },
    },
  });
  console.log(posts)
  return posts
}