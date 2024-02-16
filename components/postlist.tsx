"use client";

import Link from "next/link";
import { useState } from "react";
import type { Post } from "@/types";
import Image from "next/image";
import { deletePost } from "@/actions";
import AddPost from "@/app/add-post/page";
import DeleteForm from "./deleteForm";

type PostListProps = {
  postlist: Post[];
};

export function PostList({ postlist }: PostListProps) {
  const [draggedPost, setDraggedPost] = useState<Post | null>(null);
  const [dropPost, setDropPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>(postlist);

  const handleDragStart = (post: Post) => {
    setDraggedPost(post);
  };

  const handleDragOver = (
    event: React.DragEvent<HTMLAnchorElement>,
    post: Post
  ) => {
    event.preventDefault();
    if (draggedPost?.id !== post.id) {
      setDropPost(post);
    }
  };

  const handleDrop = () => {
    if (!draggedPost || !dropPost) return;

    if (draggedPost.id !== dropPost.id) {
      const updatedPosts = [...posts];
      const draggedIndex = updatedPosts.findIndex(
        (post) => post.id === draggedPost.id
      );
      const dropTargetIndex = updatedPosts.findIndex(
        (post) => post.id === dropPost.id
      );

      const removedPost = updatedPosts.splice(draggedIndex, 1)[0];

      updatedPosts.splice(dropTargetIndex, 0, removedPost);

      setPosts(updatedPosts);
    }

    setDraggedPost(null);
    setDropPost(null);
  };

  return (
    <>
    <div className="grid grid-cols-1 gap-5" onDrop={handleDrop}>
      {posts.map((post: Post) => (
        <div className="flex gap-5 relative" key={post.id}>
          <Link
            draggable
            onDragStart={() => handleDragStart(post)}
            onDragOver={(e) => handleDragOver(e, post)}
            className={`border rounded-md min-h-[5rem] md:text-xl flex items-center justify-center text-center bg-gray-300 px-12 md:px-16 w-full`}
            href={`/posts/${post.id}`}
          >
            {post.title}
          </Link>
          {/* <DeleteForm id={post.id} /> */}
        </div>
      ))}
    </div>
    </>
  );
}
