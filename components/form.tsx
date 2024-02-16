"use client";

import { addPost, updatePost } from "@/actions";
import tags from "@/seed/tags";
import { Post } from "@/types";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Form({data} : {data: Post | null}) {
  const [ defaultData, setDefaultData ] = useState<Post | null>(data)
  return (
    <>
      <form
        className="flex flex-col border p-5 w-1/2 gap-5"
        action={async (formData) => {
          const response = defaultData?.title ? await updatePost(formData, defaultData?.id) : await addPost(formData);
          if (response) {
            defaultData ? redirect(`/posts/${defaultData.id}`) : redirect("/posts")
          }
        }}
      >
        <input
          className="border h-16 p-5"
          type="text"
          placeholder="Title"
          name="title"
          required
          defaultValue={defaultData?.title}
        />
        <textarea
          className="border h-56 p-5 overflow-scroll resize-none"
          placeholder="Body"
          name="body"
          defaultValue={defaultData?.body}
          required
        ></textarea>
        <div className="gap-1 grid grid-cols-5 flex-wrap" id="tags">
          {tags.map((tag, idx) => (
            <label
              className="bg-gray-300 px-2 rounded-md custom-label text-center"
              key={idx.toString()}
            >
              <input
                type="checkbox"
                name={tag.toLowerCase()}
                className="hidden"
                defaultChecked={defaultData?.tags && defaultData?.tags.includes(tag.toLowerCase())}
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
        <button className="bg-black text-gray-200 font-semibold rounded-md p-5">
          {defaultData?.title ? "Update" : "Add Post"}
        </button>
      </form>
    </>
  );
}
