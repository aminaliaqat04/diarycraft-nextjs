import { PostList } from "@/components/postlist";
import { Suspense } from "react";
import Loading from "./loading";
import Link from "next/link";
import { fetchPosts, filterPosts } from "@/actions";
import Search from "@/components/search";

type PostsProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Posts() {
// export default async function Posts({searchParams} : PostsProps) {
  // const title = searchParams.title
  // console.log(title)
  // const postlist = searchParams.title ? await filterPosts(title as string) : await fetchPosts()
  return (
    <div className="flex min-h-screen flex-col items-center py-10 px-5 lg:p-24 relative">
      <Link
        href={"/add-post"}
        className="absolute right-5 top-5 bg-white text-gray-500 rounded-md border px-5 py-1"
      >
        New
      </Link>
      <div className="absolute top-5 left-5 lg:left-auto lg:w-3/5">
        <Search />
      </div>
      <p className="font-bold text-2xl lg:text-4xl my-10">All Posts</p>
      <Suspense fallback={<Loading />}>
        <PostList />
        {/* <PostList postlist={postlist} /> */}
      </Suspense>
    </div>
  );
}
