"use client";

import { addPost } from "@/actions";
import tags from "@/seed/tags";
import { redirect } from "next/navigation";

export default function Form() {
  return (
    <>
      <form
        className="flex flex-col border p-5 w-1/2 gap-5"
        action={async (formData) => {
          const response = await addPost(formData);
          response && redirect("/posts")
        }}
      >
        <input
          className="border h-16 p-5"
          type="text"
          placeholder="Title"
          name="title"
          required
        />
        <textarea
          className="border h-56 p-5 overflow-scroll resize-none"
          placeholder="Body"
          name="body"
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
              />
              <span>{tag}</span>
            </label>
          ))}
        </div>
        <button className="bg-black text-gray-200 font-semibold rounded-md p-5">
          Add Post
        </button>
      </form>
    </>
  );
}
