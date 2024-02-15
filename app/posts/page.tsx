import { PostList } from "@/components/postlist";
import { Suspense } from "react";
import Loading from "./loading";
import prisma from "@/db";
import Link from "next/link";

export default async function Posts() {
  const postlist = await prisma.post.findMany({
    orderBy: {
      updatedAt: "desc",
    },
  });
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-5 lg:p-24 relative">
      <Link
        href={"/add-post"}
        className="absolute right-5 top-5 bg-white text-gray-500 rounded-md border px-5 py-1"
      >
        New
      </Link>
      <p className="font-bold text-2xl lg:text-4xl mb-10">All Posts</p>
      <Suspense fallback={<Loading />}>
        <PostList postlist={postlist} />
      </Suspense>
    </div>
  );
}
