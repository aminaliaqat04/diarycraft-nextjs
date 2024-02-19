"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// type SearchProps = {
//     searchAction: (formData: FormData) => void
// }

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    console.log("Current Query", encodedSearchQuery);
    router.push(`/posts?title=${encodedSearchQuery}`)
  };

  return (
    <form
      onSubmit={onSearch}
      className="flex border rounded-md justify-around items-center"
    >
      <input
        type="text"
        name="title"
        required
        className="w-full p-5"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="h-full p-5">
        <Image src={"/search-icon.svg"} alt="Search" width={20} height={20} />
      </button>
    </form>
  );
}
