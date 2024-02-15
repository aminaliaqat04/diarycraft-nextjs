import type { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import prisma from "@/db";
import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";

type SinglePostProps = {
  params: {
    id: string;
  };
};

export default async function SinglePost({ params }: SinglePostProps) {
  const isValidObjectId = ObjectId.isValid(params.id);

  if (!isValidObjectId) {
    return notFound();
  }

  const post: Post | null = await prisma.post.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!post?.title) {
    return notFound();
  }
  // const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  // const data: Post = await response.json();

  return (
    <div className="w-[90%] md:w-2/3 mx-auto flex flex-col justify-between gap-10">
      <div className="my-10">
        <Link href="/posts" className="flex gap-3">
          <Image
            src="/back-arrow.svg"
            alt="Back Arrow"
            width={20}
            height={20}
          />
          All Posts
        </Link>
      </div>
      <div className="flex flex-col text-center space-y-20 justify-center mb-10">
        <h1 className="font-bold text-3xl md:text-4xl">{post?.title}</h1>
        <p className="text-xl md:text-2xl">{post?.body}</p>
        <div className="flex gap-10 text-gray-400 w-full justify-center">
          <span>Tags:</span>
          <div className="flex gap-5">{post?.tags.join(", ")}</div>
        </div>
      </div>
    </div>
  );
}
